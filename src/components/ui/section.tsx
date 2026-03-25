interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  glow?: boolean;
}

export default function Section({ children, className = "", id, glow }: SectionProps) {
  return (
    <section className={`relative py-24 px-6 ${className}`} {...(id ? { id } : {})}>
      {glow && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      )}
      <div className="max-w-6xl mx-auto relative">{children}</div>
    </section>
  );
}
