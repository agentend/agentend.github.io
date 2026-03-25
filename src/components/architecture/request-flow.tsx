const steps = [
  {
    number: 1,
    title: "Frontend",
    description: "User sends a natural language intent",
  },
  {
    number: 2,
    title: "Auth & Security",
    description: "JWT validation, PALADIN injection defense",
  },
  {
    number: 3,
    title: "Intent Router",
    description: "Kernel classifies intent via small model (<10ms)",
  },
  {
    number: 4,
    title: "Capability Registry",
    description: "Dispatches to the matching registered Capability",
  },
  {
    number: 5,
    title: "Context Bus",
    description: "Progressive memory hydration across 5 tiers",
  },
  {
    number: 6,
    title: "Worker Fleet",
    description: "Typed workers execute with LiteLLM backend",
  },
  {
    number: 7,
    title: "AG-UI Event Stream",
    description: "13 event types streamed via SSE to frontend",
  },
  {
    number: 8,
    title: "Mem0 Consolidation",
    description: "Async fact extraction: ADD / UPDATE / DELETE / NOOP",
  },
];

export default function RequestFlow() {
  return (
    <div className="max-w-md mx-auto">
      {steps.map((step, i) => (
        <div key={step.number} className="relative">
          {/* Connecting line between cards */}
          {i < steps.length - 1 && (
            <div className="absolute left-1/2 -translate-x-px bottom-0 translate-y-full w-px h-8 bg-cyan/30" />
          )}

          {/* Spacer for the line */}
          {i > 0 && <div className="h-8" />}

          {/* Step card */}
          <div className="bg-surface border border-border rounded-xl p-5 relative flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-cyan/10 text-cyan font-mono text-sm flex items-center justify-center shrink-0">
              {step.number}
            </div>
            <div>
              <p className="text-text-primary text-sm font-medium">
                {step.title}
              </p>
              <p className="text-text-muted text-xs mt-1">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
