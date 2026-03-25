import RequestFlow from "@/components/architecture/request-flow";
import MemoryTiers from "@/components/architecture/memory-tiers";
import ProtocolTriangle from "@/components/architecture/protocol-triangle";
import FleetSlots from "@/components/architecture/fleet-slots";

export const metadata = {
  title: "Architecture - Agentend",
  description:
    "How Agent as a Backend processes every request. Request flow, memory tiers, protocol triangle, and fleet worker slots.",
};

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="font-display italic text-4xl md:text-5xl text-text-primary mb-4">
          Architecture
        </h1>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          How Agent as a Backend processes every request
        </p>
      </section>

      {/* Request Flow */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="font-display italic text-2xl mb-8 text-center text-text-primary">
          Request Flow
        </h2>
        <RequestFlow />
      </section>

      {/* Memory Tiers */}
      <section className="max-w-4xl mx-auto py-16 px-6 border-t border-border">
        <h2 className="font-display italic text-2xl mb-8 text-center text-text-primary">
          Memory Tiers
        </h2>
        <MemoryTiers />
      </section>

      {/* Protocol Triangle */}
      <section className="max-w-4xl mx-auto py-16 px-6 border-t border-border">
        <h2 className="font-display italic text-2xl mb-8 text-center text-text-primary">
          Protocol Triangle
        </h2>
        <ProtocolTriangle />
      </section>

      {/* Fleet Worker Slots */}
      <section className="max-w-4xl mx-auto py-16 px-6 border-t border-border">
        <h2 className="font-display italic text-2xl mb-8 text-center text-text-primary">
          Fleet Worker Slots
        </h2>
        <FleetSlots />
      </section>
    </main>
  );
}
