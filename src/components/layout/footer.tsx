import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Architecture", href: "/architecture" },
  { label: "Examples", href: "/examples" },
  { label: "Cloud", href: "/cloud" },
];

const docsLinks = [
  { label: "Quickstart", href: "/docs/quickstart" },
  { label: "Fleet", href: "/docs/fleet" },
  { label: "Memory", href: "/docs/memory" },
  { label: "Events", href: "/docs/events" },
];

const communityLinks = [
  { label: "GitHub", href: "https://github.com/agentend/agentend" },
  { label: "Discussions", href: "https://github.com/agentend/agentend/discussions" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Agentend" width={28} height={28} className="rounded-md" />
          <span className="text-gradient font-bold text-lg tracking-tight">agentend</span>
          <span className="text-text-muted text-sm ml-1">Agent as a Backend</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div>
            <h3 className="text-text-primary text-sm font-medium mb-4">Product</h3>
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted text-sm hover:text-text-secondary block py-1 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h3 className="text-text-primary text-sm font-medium mb-4">Documentation</h3>
            {docsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted text-sm hover:text-text-secondary block py-1 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h3 className="text-text-primary text-sm font-medium mb-4">Community</h3>
            {communityLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-sm hover:text-text-secondary block py-1 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h3 className="text-text-primary text-sm font-medium mb-4">Legal</h3>
            <p className="text-text-muted text-sm">Licensed under AGPL-3.0-or-later</p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Agentend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
