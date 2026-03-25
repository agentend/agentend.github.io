const tiers = [
  {
    name: "Working",
    backend: "Python dict",
    latency: "<1ms",
    useCase: "Current request context",
  },
  {
    name: "Session",
    backend: "Redis",
    latency: "1-5ms",
    useCase: "Conversation history within session",
  },
  {
    name: "Semantic",
    backend: "pgvector",
    latency: "5-50ms",
    useCase: "Long-term facts, similar queries",
  },
  {
    name: "Core Blocks",
    backend: "System prompt",
    latency: "0ms",
    useCase: "Agent identity, pinned knowledge",
  },
  {
    name: "Consolidation",
    backend: "Mem0",
    latency: "async",
    useCase: "Fact extraction after request",
  },
];

export default function MemoryTiers() {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      {tiers.map((tier, i) => (
        <div
          key={tier.name}
          className={`flex items-center gap-4 py-4 px-5 ${
            i < tiers.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <span className="text-accent font-mono text-sm w-32 shrink-0">
            {tier.name}
          </span>
          <span className="text-text-secondary text-sm w-32 shrink-0">
            {tier.backend}
          </span>
          <span className="text-text-muted text-xs font-mono w-20 shrink-0">
            {tier.latency}
          </span>
          <span className="text-text-muted text-sm flex-1">
            {tier.useCase}
          </span>
        </div>
      ))}
    </div>
  );
}
