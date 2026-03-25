import { Server, ArrowUpCircle, BarChart3, Rocket } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Managed Infrastructure",
    description:
      "PostgreSQL, Redis, model routing \u2014 all provisioned and managed for you.",
  },
  {
    icon: ArrowUpCircle,
    title: "Auto-Scaling",
    description:
      "Scale workers independently based on intent volume and model demand.",
  },
  {
    icon: BarChart3,
    title: "Team Dashboard",
    description:
      "Shared capabilities, usage analytics, cost tracking across your team.",
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description:
      "Git push to live agent backend. Zero infrastructure configuration.",
  },
];

export default function CloudFeatures() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden opacity-80"
          >
            <span className="absolute top-0 right-0 bg-surface-2 text-text-muted text-xs font-mono px-2.5 py-1 rounded-bl-lg">
              Coming Soon
            </span>
            <Icon className="text-text-muted w-6 h-6 mb-4" />
            <p className="text-text-secondary font-medium text-sm mb-2">
              {feature.title}
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
