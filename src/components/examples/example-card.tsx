"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Example } from "@/lib/examples";

const difficultyColors: Record<string, string> = {
  beginner: "bg-accent/10 text-accent border-accent/20",
  intermediate: "bg-blue/10 text-blue border-blue/20",
  advanced: "bg-purple/10 text-purple border-purple/20",
};

export default function ExampleCard({ example }: { example: Example }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden transition-all">
      {/* Header (always visible) */}
      <button
        type="button"
        className="w-full text-left p-6 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-text-primary font-medium text-sm">
              {example.title}
            </p>
            <p className="text-text-muted text-sm mt-2">
              {example.description}
            </p>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-text-muted shrink-0 mt-1 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>

        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span
            className={`text-xs font-mono px-2 py-0.5 rounded border ${
              difficultyColors[example.difficulty]
            }`}
          >
            {example.difficulty}
          </span>
          {example.features.map((feature) => (
            <span
              key={feature}
              className="bg-surface-2 text-text-muted text-xs px-2 py-0.5 rounded font-mono"
            >
              {feature}
            </span>
          ))}
        </div>
      </button>

      {/* Code section (expanded) */}
      {expanded && (
        <div className="border-t border-border">
          <pre className="bg-surface-2 p-5 font-mono text-sm overflow-x-auto text-text-secondary leading-relaxed">
            <code>{example.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
