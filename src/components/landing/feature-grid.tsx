import {
  Cpu,
  Brain,
  Radio,
  GitBranch,
  Network,
  Shield,
  Database,
  Wallet,
  Puzzle,
  Activity,
  HardDrive,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Fleet",
    description: "6 typed worker slots with benchmark-backed model defaults",
  },
  {
    icon: Brain,
    title: "Memory",
    description: "5-tier context bus with progressive hydration",
  },
  {
    icon: Radio,
    title: "Events",
    description: "AG-UI protocol — 13 event types streamed via SSE",
  },
  {
    icon: GitBranch,
    title: "Orchestrator",
    description: "DAG workflows with parallel steps and HITL interrupts",
  },
  {
    icon: Network,
    title: "Protocols",
    description: "AG-UI + MCP + A2A — the protocol triangle",
  },
  {
    icon: Shield,
    title: "Security",
    description: "PALADIN 5-layer injection defense, built in",
  },
  {
    icon: Database,
    title: "Cache",
    description: "Dual-layer semantic cache — hash + vector similarity",
  },
  {
    icon: Wallet,
    title: "Budgets",
    description: "Per-tenant token budget enforcement with hard limits",
  },
  {
    icon: Puzzle,
    title: "Plugins",
    description: "8 hook points, YAML manifests, pip-installable",
  },
  {
    icon: Activity,
    title: "Observability",
    description: "OpenTelemetry traces + metrics on all critical paths",
  },
  {
    icon: HardDrive,
    title: "Persistence",
    description: "SQLAlchemy 2.0 async with multi-tenant RLS",
  },
  {
    icon: MessageSquare,
    title: "Builder",
    description: "Chat-to-build: create capabilities without code",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-display italic text-3xl md:text-4xl text-center mb-3 text-text-primary">
        Everything you need. Nothing you don&apos;t.
      </h2>
      <p className="text-text-secondary text-center mb-12">
        18 modules, zero boilerplate.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]"
            >
              <Icon className="w-5 h-5 text-accent mb-4" />
              <h3 className="text-text-primary text-sm font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
