import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projeto/${project.id}`} className="group block">
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-navy/85 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between text-[12px] text-ink/50 font-medium">
            <span>{project.details.location}</span>
            <span>{project.details.year}</span>
          </div>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-navy group-hover:text-orange transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-ink/65 leading-relaxed line-clamp-2">{project.summary}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-orange">
            Ver projeto
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
