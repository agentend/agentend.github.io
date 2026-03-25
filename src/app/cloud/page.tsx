import CloudFeatures from "@/components/cloud/cloud-features";
import WaitlistForm from "@/components/cloud/waitlist-form";
import Link from "next/link";

export const metadata = {
  title: "Cloud - Agentend",
  description:
    "Agentend Cloud: Agent as a Backend, without the infrastructure. Managed hosting coming soon.",
};

export default function CloudPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center relative">
        {/* Glow blob */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-gradient-subtle opacity-40" />

        <div className="relative">
          <span className="bg-accent/10 text-accent text-xs font-mono px-3 py-1 rounded-full mb-6 inline-block">
            Coming Soon
          </span>
          <h1 className="font-display italic text-4xl md:text-5xl text-text-primary mb-4">
            Agentend Cloud
          </h1>
          <p className="text-text-secondary text-lg mb-12 max-w-lg mx-auto">
            Agent as a Backend, without the infrastructure.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6">
        <CloudFeatures />
      </section>

      {/* Waitlist */}
      <section className="mt-16 px-6">
        <WaitlistForm />
      </section>

      {/* Self-host CTA */}
      <section className="mt-16 pb-24 text-center px-6">
        <p className="text-text-muted text-sm mb-4">Or self-host today</p>
        <div className="max-w-md mx-auto bg-surface border border-border rounded-xl p-5 font-mono text-sm text-text-secondary">
          <span className="text-text-muted select-none">$ </span>
          <span className="text-cyan">docker compose up</span>
        </div>
        <Link
          href="/docs/quickstart"
          className="inline-block mt-4 text-accent text-sm hover:underline underline-offset-4 transition"
        >
          Read the quickstart guide &rarr;
        </Link>
      </section>
    </main>
  );
}
