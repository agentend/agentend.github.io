const stats = [
  ["6", "Worker Slots"],
  ["5", "Memory Tiers"],
  ["13", "Event Types"],
  ["18", "Modules"],
];

export default function StatsBar() {
  return (
    <section className="py-4 px-6">
      <div className="flex items-center justify-center gap-8 md:gap-16">
        {stats.map(([number, label], i) => (
          <div key={label} className="contents">
            {i > 0 && (
              <div className="hidden md:block w-px h-12 bg-border" />
            )}
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-accent">
                {number}
              </p>
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
