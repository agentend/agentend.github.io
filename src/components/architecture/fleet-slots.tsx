const slots = [
  {
    name: "classify",
    model: "claude-haiku-4-5",
    latency: "180ms p50",
    budget: "gemini-2.0-flash",
    local: "qwen2.5-7b",
    description: "Intent classification, fast and cheap",
  },
  {
    name: "extract",
    model: "claude-sonnet-4-6",
    latency: "600ms p50",
    budget: "gemini-2.5-flash",
    local: "qwen2.5-72b",
    description: "Structured data extraction, JSON output",
  },
  {
    name: "verify",
    model: "claude-opus-4-6",
    latency: "2000ms p50",
    budget: "gemini-2.5-flash",
    local: "llama-4-maverick",
    description: "Fact checking, validation, highest reasoning",
  },
  {
    name: "summarize",
    model: "claude-sonnet-4-6",
    latency: "600ms p50",
    budget: "gemini-2.0-flash",
    local: "phi-4-14b",
    description: "Content summarization, condensation",
  },
  {
    name: "generate",
    model: "claude-opus-4-6",
    latency: "2000ms p50",
    budget: "gemini-2.5-flash",
    local: "qwen2.5-coder-32b",
    description: "Long-form text and code generation",
  },
  {
    name: "tool_call",
    model: "claude-sonnet-4-6",
    latency: "600ms p50",
    budget: "gemini-2.5-flash",
    local: "llama-4-maverick",
    description: "Tool selection and execution, 97.2% success rate",
  },
];

export default function FleetSlots() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {slots.map((slot) => (
        <div
          key={slot.name}
          className="bg-surface border border-border rounded-xl p-5"
        >
          <p className="font-mono text-accent text-sm font-medium mb-2">
            {slot.name}
          </p>
          <p className="text-text-primary text-sm mb-1">{slot.model}</p>
          <p className="text-text-muted text-xs mb-3">{slot.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-text-muted text-xs font-mono bg-surface-2 px-2 py-0.5 rounded">
              {slot.latency}
            </span>
            <span className="text-text-muted text-xs font-mono bg-surface-2 px-2 py-0.5 rounded">
              budget: {slot.budget}
            </span>
            <span className="text-text-muted text-xs font-mono bg-surface-2 px-2 py-0.5 rounded">
              local: {slot.local}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
