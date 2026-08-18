import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export default function sitemap() {
  const baseUrl = site.url;
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/projetos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/vistoria`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projeto/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes].map((r) => ({ ...r, lastModified: now }));
}
