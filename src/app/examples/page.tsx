"use client";

import { examples } from "@/lib/examples";
import ExampleCard from "@/components/examples/example-card";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="font-display italic text-4xl md:text-5xl text-text-primary mb-4">
          Examples
        </h1>
        <p className="text-text-secondary text-lg mb-12 max-w-lg mx-auto">
          Real capabilities you can build with Agentend
        </p>
      </section>

      {/* Example cards */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-4">
        {examples.map((example) => (
          <ExampleCard key={example.id} example={example} />
        ))}
      </section>
    </main>
  );
}
