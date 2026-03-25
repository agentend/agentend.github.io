const traditionalItems = [
  "Routes & Endpoints",
  "Controllers",
  "Request Serializers",
  "Auth Middleware",
  "API Versioning",
  "Response Formatting",
];

const agentItems = ["Capabilities", "Workers", "Memory", "Events"];

export default function ParadigmShift() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-display italic text-3xl md:text-4xl text-center mb-4 text-text-primary">
        The Paradigm Shift
      </h2>
      <p className="text-text-secondary text-center mb-12">
        What if you didn&apos;t need any of this?
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Traditional Backend */}
        <div className="bg-surface border border-border rounded-xl p-8">
          <p className="text-text-muted text-sm font-mono uppercase tracking-wider mb-6">
            Traditional Backend
          </p>
          <div className="flex flex-col gap-3">
            {traditionalItems.map((item) => (
              <div
                key={item}
                className="py-2 px-4 rounded-lg bg-surface-2 text-text-muted text-sm line-through"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Agent as a Backend */}
        <div className="bg-surface border border-accent/20 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[80px] rounded-full" />
          <p className="text-accent text-sm font-mono uppercase tracking-wider mb-6 relative">
            Agent as a Backend
          </p>
          <div className="flex flex-col gap-3 relative">
            {agentItems.map((item) => (
              <div
                key={item}
                className="py-2 px-4 rounded-lg border border-accent/20 bg-accent/5 text-accent text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-text-secondary text-center italic mt-10 text-sm">
        All that complexity collapses into intent-driven capabilities.
      </p>
    </section>
  );
}
