"use client";

import { useState } from "react";

const tabs = [
  { label: "capability.py" },
  { label: "fleet.yaml" },
  { label: "terminal" },
];

const pythonCode = `from agentend import Agentend, Capability, tool

app = Agentend()

@app.capability("invoice_processing")
class InvoiceProcessor(Capability):
    """Extract, verify, and summarize invoices."""
    workers = ["extract", "verify", "summarize"]

    def get_domain_context(self, ctx):
        return "You process business invoices. Be precise with amounts."

    @tool
    def save_invoice(self, data: dict) -> str:
        db.invoices.insert(data)
        return f"Invoice {data['id']} saved"

if __name__ == "__main__":
    app.serve()`;

const yamlCode = `fleet:
  workers:
    extract:
      model: claude-sonnet-4-6
      fallback: gemini-2.5-flash
    verify:
      model: claude-opus-4-6
      temperature: 0.1
    summarize:
      model: gemini-2.5-flash

  routing:
    engine: routellm
    strategy: cost_aware`;

const terminalLines = [
  { type: "command", text: "pip install agentend[all]" },
  { type: "command", text: "agentend init myapp" },
  { type: "command", text: "cd myapp && agentend serve" },
  { type: "blank", text: "" },
  { type: "success", text: "Server running on http://localhost:8000" },
  { type: "success", text: "AG-UI streaming on /stream/{session_id}" },
  { type: "success", text: "Intent endpoint on POST /intent" },
];

function TerminalContent() {
  return (
    <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
      <code>
        {terminalLines.map((line, i) => {
          if (line.type === "blank") {
            return <div key={i}>&nbsp;</div>;
          }
          if (line.type === "command") {
            return (
              <div key={i}>
                <span className="text-cyan select-none">$ </span>
                <span className="text-text-primary">{line.text}</span>
              </div>
            );
          }
          if (line.type === "success") {
            return (
              <div key={i}>
                <span className="text-green select-none">&#10003; </span>
                <span className="text-text-primary">{line.text}</span>
              </div>
            );
          }
          return null;
        })}
      </code>
    </pre>
  );
}

export default function CodeShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6">
      <h2 className="font-display italic text-3xl md:text-4xl text-center mb-4 text-text-primary">
        This is all you write
      </h2>
      <p className="text-text-secondary text-center mb-10">
        No routes. No controllers. Just capabilities.
      </p>

      {/* Tab bar */}
      <div className="flex border-b border-border mb-0 max-w-3xl mx-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-4 py-3 text-sm font-mono transition-colors ${
              active === i
                ? "text-accent border-b-2 border-accent"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code container */}
      <div className="max-w-3xl mx-auto rounded-b-xl bg-surface-2 border border-t-0 border-border overflow-hidden">
        {active === 0 && (
          <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
            <code className="text-text-secondary">{pythonCode}</code>
          </pre>
        )}
        {active === 1 && (
          <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
            <code className="text-text-secondary">{yamlCode}</code>
          </pre>
        )}
        {active === 2 && <TerminalContent />}
      </div>
    </section>
  );
}
