import Link from "next/link";
import { Github } from "lucide-react";

export default function InstallCta() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-display italic text-3xl md:text-4xl text-center mb-4 text-text-primary">
        Start building in minutes
      </h2>
      <p className="text-text-secondary text-center mb-10">
        Production-ready agent backends. Not another wrapper.
      </p>

      {/* Terminal block */}
      <div className="max-w-xl mx-auto rounded-xl border border-border bg-surface-2 overflow-hidden mb-10">
        {/* Top bar */}
        <div className="h-8 flex items-center px-4 bg-[#111] border-b border-border gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* Content */}
        <div className="p-5 font-mono text-sm space-y-1">
          <div>
            <span className="text-cyan select-none">$ </span>
            <span className="text-text-primary">pip install agentend[all]</span>
          </div>
          <div>
            <span className="text-cyan select-none">$ </span>
            <span className="text-text-primary">
              agentend init myapp &amp;&amp; cd myapp &amp;&amp; agentend serve
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Read the Docs
        </Link>
        <a
          href="https://github.com/agentend/agentend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border text-text-secondary px-6 py-3 rounded-lg text-sm hover:text-text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>
    </section>
  );
}
