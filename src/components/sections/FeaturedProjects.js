import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projetos" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <SectionLabel>Projetos</SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight">
              Casas que saíram do papel.
            </h2>
            <p className="mt-4 text-ink/70 text-lg leading-relaxed">
              Cada projeto aqui teve seu próprio desafio de terreno, custo e aprovação. Dê uma olhada e
              veja se o padrão conversa com o que você tem em mente.
            </p>
          </div>
          <Link
            href="/projetos"
            className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy hover:text-orange transition-colors whitespace-nowrap"
          >
            Ver todos
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-full"
          >
            Ver todos os projetos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
