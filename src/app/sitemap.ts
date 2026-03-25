import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agentend.ai";

  const routes = [
    "/",
    "/docs",
    "/docs/quickstart",
    "/docs/capabilities",
    "/docs/fleet",
    "/docs/memory",
    "/docs/events",
    "/docs/security",
    "/docs/orchestrator",
    "/docs/cli",
    "/architecture",
    "/examples",
    "/cloud",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/docs") ? 0.8 : 0.7,
  }));
}
