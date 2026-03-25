const steps = [
  {
    number: "01",
    title: "User sends an intent",
    description:
      "Natural language, not a structured API call. The agent understands what you need.",
  },
  {
    number: "02",
    title: "Kernel classifies & routes",
    description:
      "Small model, <10ms. Picks the right Capability from the registry.",
  },
  {
    number: "03",
    title: "Context Bus hydrates memory",
    description:
      "5 tiers, progressive loading. Only pulls what the task actually needs.",
  },
  {
    number: "04",
    title: "Workers execute, events stream",
    description:
      "Typed workers call models. AG-UI protocol streams results in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-display italic text-3xl md:text-4xl text-center mb-14 text-text-primary">
        How Agent as a Backend Works
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.number} className="relative text-center md:text-left">
            {/* Connecting dashed line between steps on md+ */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-5 left-full w-full h-px border-t border-dashed border-accent/30 z-0" />
            )}

            <p className="font-mono text-accent text-2xl font-bold mb-3 relative">
              {step.number}
            </p>
            <h3 className="text-text-primary text-sm font-medium mb-2">
              {step.title}
            </h3>
            <p className="text-text-muted text-xs leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
