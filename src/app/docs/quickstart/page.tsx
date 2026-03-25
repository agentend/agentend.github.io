export default function QuickstartPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-8">Quickstart</h1>
      <p className="text-text-secondary leading-relaxed mb-4">
        Get a working agent backend running in under 5 minutes. Agentend scaffolds
        the project, configures your fleet of model workers, and serves an AG-UI
        compatible streaming endpoint out of the box.
      </p>

      {/* Step 1 */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        1. Install Agentend
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Install the framework with all optional dependencies (Redis, pgvector,
        OpenTelemetry, Celery):
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`pip install agentend[all]`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        Or install the minimal core:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`pip install agentend`}</code>
      </pre>

      {/* Step 2 */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        2. Scaffold a project
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">init</code> command
        creates a project directory with an entry point, fleet config, Dockerfile,
        and dependency file:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend init myapp
cd myapp`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        This generates:
      </p>
      <ul className="space-y-2 text-text-secondary ml-4 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">app.py</code> — Application entry point</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code> — Fleet and memory configuration</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">Dockerfile</code> — Container definition</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">requirements.txt</code> — Python dependencies</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span><code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">.env.example</code> — Environment variable template</span>
        </li>
      </ul>

      {/* Step 3 */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        3. Write a Capability
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        A Capability is the core abstraction in Agentend. It declares what intents
        the agent handles, which worker models it needs, and what tools are available.
        Open <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">app.py</code> and
        define your first capability:
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

      {/* Step 4 */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        4. Configure the fleet
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        The <code className="font-mono text-accent bg-surface-2 px-1.5 py-0.5 rounded text-sm">fleet.yaml</code> file
        configures worker slots, memory tiers, and infrastructure. A minimal config:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`fleet:
  name: myapp
  description: "My first agent fleet"

  workers:
    classify:
      model: gpt-4o-mini
      timeout: 30
    extract:
      model: claude-sonnet-4-6
      timeout: 60
    verify:
      model: claude-opus-4-6
      timeout: 45
    summarize:
      model: claude-sonnet-4-6
      timeout: 60
    generate:
      model: claude-opus-4-6
      timeout: 120
    tool_call:
      model: claude-sonnet-4-6
      timeout: 90

memory:
  session:
    enabled: true
    type: redis
    ttl: 3600
  semantic:
    enabled: true
    type: pgvector`}</code>
      </pre>

      {/* Step 5 */}
      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        5. Serve
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Start the server with auto-reload for development:
      </p>
      <pre className="bg-surface-2 border border-border rounded-xl p-5 font-mono text-sm overflow-x-auto mb-6">
        <code>{`agentend serve --reload`}</code>
      </pre>
      <p className="text-text-secondary leading-relaxed mb-4">
        Your agent backend is now running. The following endpoints are available:
      </p>
      <table className="w-full text-sm mb-6">
        <thead>
          <tr>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Method
            </th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Endpoint
            </th>
            <th className="text-left text-text-muted font-mono text-xs uppercase tracking-wider pb-3 border-b border-border">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary font-mono">POST</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">/intent</td>
            <td className="py-3 border-b border-border text-text-secondary">
              Submit a natural language intent for processing
            </td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary font-mono">GET</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">{`/stream/{session_id}`}</td>
            <td className="py-3 border-b border-border text-text-secondary">
              SSE stream of AG-UI events for a session
            </td>
          </tr>
          <tr>
            <td className="py-3 border-b border-border text-text-secondary font-mono">GET</td>
            <td className="py-3 border-b border-border text-text-secondary font-mono">/health</td>
            <td className="py-3 border-b border-border text-text-secondary">
              Health check endpoint
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-medium text-text-primary mt-12 mb-4">
        Next steps
      </h2>
      <ul className="space-y-2 text-text-secondary ml-4">
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span>Learn about <a href="/docs/capabilities" className="text-accent underline underline-offset-4 hover:text-cyan">Capabilities</a> in depth</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span>Configure your <a href="/docs/fleet" className="text-accent underline underline-offset-4 hover:text-cyan">Fleet</a> with benchmark-optimized models</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span>Set up the <a href="/docs/memory" className="text-accent underline underline-offset-4 hover:text-cyan">Memory</a> system for contextual conversations</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-text-muted select-none">&bull;</span>
          <span>Connect your frontend with <a href="/docs/events" className="text-accent underline underline-offset-4 hover:text-cyan">AG-UI Events</a></span>
        </li>
      </ul>
    </div>
  );
}
