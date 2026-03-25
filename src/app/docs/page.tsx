import Link from "next/link";

const sections = [
  {
    title: "Quickstart",
    description: "Get up and running in 5 minutes",
    href: "/docs/quickstart",
  },
  {
    title: "Capabilities",
    description: "Define what your agent can do",
    href: "/docs/capabilities",
  },
  {
    title: "Fleet",
    description: "Configure your model workers",
    href: "/docs/fleet",
  },
  {
    title: "Memory",
    description: "5-tier context system",
    href: "/docs/memory",
  },
  {
    title: "Events",
    description: "AG-UI protocol streaming",
    href: "/docs/events",
  },
  {
    title: "Security",
    description: "PALADIN injection defense",
    href: "/docs/security",
  },
  {
    title: "Orchestrator",
    description: "Multi-step workflows",
    href: "/docs/orchestrator",
  },
  {
    title: "CLI",
    description: "Command-line reference",
    href: "/docs/cli",
  },
];

export default function DocsPage() {
  return (
    <div>
      <h1 className="font-display italic text-3xl mb-4">Documentation</h1>
      <p className="text-text-secondary leading-relaxed mb-8">
        Everything you need to build agent backends with Agentend.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition">
              <h3 className="text-lg font-medium text-text-primary mb-2">
                {section.title}
              </h3>
              <p className="text-text-secondary text-sm">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
