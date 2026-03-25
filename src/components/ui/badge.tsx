interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan";
}

const variantClasses = {
  default: "bg-surface-2 text-text-secondary",
  accent: "bg-accent-dim/30 text-accent",
  cyan: "bg-cyan/10 text-cyan",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
