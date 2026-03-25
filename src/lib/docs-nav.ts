export interface DocsNavItem {
  label: string;
  path: string;
}

export interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

export const docsNav: DocsNavSection[] = [
  {
    title: "Getting Started",
    items: [{ label: "Quickstart", path: "/docs/quickstart" }],
  },
  {
    title: "Core Concepts",
    items: [
      { label: "Capabilities", path: "/docs/capabilities" },
      { label: "Fleet", path: "/docs/fleet" },
      { label: "Memory", path: "/docs/memory" },
      { label: "Events", path: "/docs/events" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { label: "Security", path: "/docs/security" },
      { label: "Orchestrator", path: "/docs/orchestrator" },
    ],
  },
  {
    title: "Reference",
    items: [{ label: "CLI", path: "/docs/cli" }],
  },
];
