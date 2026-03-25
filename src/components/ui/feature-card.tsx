import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] group">
      <Icon className="w-5 h-5 text-accent mb-4" />
      <h3 className="text-text-primary text-sm font-medium mb-2">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
