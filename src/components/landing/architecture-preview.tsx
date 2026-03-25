import Link from "next/link";
import { ArrowRight } from "lucide-react";

const nodes = ["Intent", "Kernel", "Memory", "Workers", "AG-UI", "Frontend"];

export default function ArchitecturePreview() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-display italic text-3xl md:text-4xl text-center mb-10 text-text-primary">
        Architecture
      </h2>

      {/* Pipeline visualization */}
      <div className="flex items-center justify-center flex-wrap gap-2 md:gap-0 mb-8 max-w-4xl mx-auto">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <span className="font-mono text-sm text-accent px-3 py-1.5 bg-surface rounded-lg border border-accent/20">
              {node}
            </span>
            {i < nodes.length - 1 && (
              <span className="text-cyan text-lg mx-1 hidden md:inline">
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Link */}
      <div className="text-center">
        <Link
          href="/architecture"
          className="text-accent hover:underline text-sm inline-flex items-center gap-1"
        >
          See the full architecture
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
