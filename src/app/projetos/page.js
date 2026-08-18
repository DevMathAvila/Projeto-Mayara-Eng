"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProjetosPage() {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-[72px] bg-paper min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-8">
        <SectionLabel>Portfólio</SectionLabel>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-navy leading-tight">
          Projetos em Indaiatuba e região
        </h1>
        <p className="mt-4 text-ink/70 text-lg max-w-2xl leading-relaxed">
          Residências autorais e trabalhos técnicos de regularização. Cada um resolveu um problema
          diferente de terreno, orçamento ou documentação.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-6">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
                filter === cat
                  ? "bg-navy text-white"
                  : "text-ink/55 hover:text-orange"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
