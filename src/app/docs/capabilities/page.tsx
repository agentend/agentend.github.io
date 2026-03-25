export default function CapabilitiesPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Capabilities</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        A Capability is the fundamental building block of an Agentend application.
        Instead of REST endpoints, you define Capabilities that receive natural
        language intents, dispatch work to typed model workers, and stream
        responses back via the AG-UI protocol.
      </p>

      {/* What is a Capability */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        What is a Capability?
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        A Capability is an intent-driven unit of agent behavior. When a user sends
        a natural language message, the kernel classifies it into an intent and
        dispatches it to the matching Capability. Each Capability declares:
      </p>
      <ul className="space-y-2 text-text-secondary ml-4 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Intents</strong> — the natural language patterns it handles</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Workers</strong> — the model slots it needs (e.g. extract, verify, summarize)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Tools</strong> — functions the agent can call during execution</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><strong className="text-text-primary">Domain context</strong> — system prompt context specific to this capability</span>
        </li>
      </ul>

      {/* The decorator */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">@app.capability()</code> decorator
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Register a Capability with the Agentend kernel using the decorator. The
        kernel uses the <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">intents</code> list
        to route incoming messages, and the <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">workers</code> list
        to provision the right model slots.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`from agentend import Agentend, Capability, tool

app = Agentend()

@app.capability(
    name="invoice_processor",
    intents=["process invoice", "extract invoice data"],
    workers=["extract", "verify", "summarize"],
)
class InvoiceProcessor(Capability):
    \"\"\"Extract, verify, and summarize invoice data.\"\"\"

    @tool
    async def get_vendor_info(self, vendor_id: str) -> dict:
        \"\"\"Look up vendor details from the database.\"\"\"
        return {"vendor_id": vendor_id, "name": "Acme Corp"}

    def get_domain_context(self) -> str:
        return "You are an invoice processing specialist."

app.run()`}</code>
      </pre>

      {/* Workers */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Worker declaration
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">workers</code> list
        declares which fleet slots the Capability needs. Agentend has 6 built-in
        worker slots, each optimized for a different task:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Slot
            </th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">classify</td>
            <td className="py-3 border-b border-border text-text-secondary">Classify incoming intents and route to capabilities</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">extract</td>
            <td className="py-3 border-b border-border text-text-secondary">Extract structured data from unstructured input</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">verify</td>
            <td className="py-3 border-b border-border text-text-secondary">Fact-check and validate outputs</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">summarize</td>
            <td className="py-3 border-b border-border text-text-secondary">Condense content into summaries</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">generate</td>
            <td className="py-3 border-b border-border text-text-secondary">Generate responses, content, or code</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">tool_call</td>
            <td className="py-3 border-b border-border text-text-secondary">Handle tool and function calling</td>
          </tr>
        </tbody>
      </table>
      <p className="text-text-secondary leading-relaxed mb-4">
        Each slot maps to a model configured in <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code>.
        The framework picks the best model for the job based on benchmark data. See
        the <a href="/docs/fleet" className="text-accent underline underline-offset-4 hover:text-cyan">Fleet</a> docs
        for details.
      </p>

      {/* Tools */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">@tool</code> decorator
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Tools are async methods on a Capability class that the agent can invoke
        during execution. Decorate any method with <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">@tool</code> to
        make it available. The method name and docstring are sent to the LLM as
        the tool definition.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`from agentend import Capability, tool

class OrderManager(Capability):

    @tool
    async def lookup_order(self, order_id: str) -> dict:
        \"\"\"Retrieve order details by ID.\"\"\"
        # Your database logic here
        return {"order_id": order_id, "status": "shipped"}

    @tool
    async def cancel_order(self, order_id: str, reason: str) -> dict:
        \"\"\"Cancel an order with a reason.\"\"\"
        return {"order_id": order_id, "cancelled": True}`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        Type hints on tool parameters are used to generate the JSON schema sent to
        the model. Always include a docstring — it becomes the tool description.
      </p>

      {/* Domain context */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Domain context
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Override <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">get_domain_context()</code> to
        inject capability-specific instructions into the system prompt. This context
        is combined with core blocks and memory during prompt assembly.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`class InvoiceProcessor(Capability):

    def get_domain_context(self) -> str:
        return \"\"\"You are an invoice processing specialist.
Always extract: vendor name, invoice number, line items, total amount.
Verify totals against line item sums before responding.\"\"\"`}</code>
      </pre>

      {/* Public API */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Public API
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Agentend exports the following top-level symbols from the <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">agentend</code> package:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Export
            </th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Agentend</td>
            <td className="py-3 border-b border-border text-text-secondary">Main application class (kernel)</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Capability</td>
            <td className="py-3 border-b border-border text-text-secondary">Base class for capabilities</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">tool</td>
            <td className="py-3 border-b border-border text-text-secondary">Decorator to register a method as an agent tool</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Worker</td>
            <td className="py-3 border-b border-border text-text-secondary">Worker instance class</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">WorkerConfig</td>
            <td className="py-3 border-b border-border text-text-secondary">Worker configuration dataclass</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">BenchmarkRegistry</td>
            <td className="py-3 border-b border-border text-text-secondary">Model benchmark data and recommendations</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">Connector</td>
            <td className="py-3 border-b border-border text-text-secondary">Base connector for infrastructure integrations</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">ConnectorConfig</td>
            <td className="py-3 border-b border-border text-text-secondary">Connector configuration</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">ConnectorRegistry</td>
            <td className="py-3 border-b border-border text-text-secondary">Registry for managing connectors</td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-accent font-mono">CapabilityBuilder</td>
            <td className="py-3 border-b border-border text-text-secondary">Chat-to-build capability generator</td>
          </tr>
        </tbody>
      </table>

      {/* CapabilityBuilder */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        CapabilityBuilder
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">CapabilityBuilder</code> provides
        a chat-to-build interface for generating capabilities from natural language
        descriptions. Describe what your agent should do, and the builder generates
        the Capability class, tools, and configuration.
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`from agentend import CapabilityBuilder

builder = CapabilityBuilder()
capability = builder.build(
    "An agent that processes refund requests, "
    "checks order history, and issues refunds"
)`}</code>
      </pre>
    </div>
  );
}
