import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-mono text-accent text-sm tracking-wider mb-4">
          404
        </div>
        <h1 className="font-display italic text-4xl md:text-5xl text-text-primary mb-4">
          Intent not found
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The capability you&apos;re looking for doesn&apos;t exist. Maybe it
          hasn&apos;t been registered yet.
        </p>
        <div className="inline-block bg-surface border border-border rounded-xl px-6 py-4 font-mono text-sm mb-8">
          <span className="text-cyan select-none">$ </span>
          <span className="text-text-muted">
            agentend route &quot;/
            {typeof window !== "undefined"
              ? window.location.pathname.slice(1)
              : "..."}
            &quot;
          </span>
          <div className="text-error mt-2">
            Error: No capability matched this intent
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-gradient-brand text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href="/docs"
            className="border border-border text-text-secondary px-5 py-2.5 rounded-lg text-sm hover:text-text-primary transition-colors"
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
