"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X, MapPin, Ruler, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { projects } from "@/data/projects";
import { waProjectLink } from "@/lib/whatsapp";

export default function ProjetoPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!project) notFound();

  const isReg = project.id === "6";
  const gallery = project.gallery;

  const next = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));
  };
  const prev = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  };

  return (
    <div className="pt-[72px] bg-paper">
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setLightbox(false)} aria-label="Fechar">
              <X size={32} />
            </button>
            <button className="absolute left-4 md:left-8 text-white/80 hover:text-white" onClick={prev} aria-label="Anterior">
              <ChevronLeft size={40} />
            </button>
            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
              <Image src={gallery[index]} alt={project.title} fill className="object-contain" />
            </div>
            <button className="absolute right-4 md:right-8 text-white/80 hover:text-white" onClick={next} aria-label="Próxima">
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cabeçalho */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
        <Link href="/projetos" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-orange transition-colors">
          <ArrowLeft size={16} />
          Voltar aos projetos
        </Link>

        <div className="mt-8 grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-14 items-end">
          <div>
            <span className="inline-block bg-orange/10 text-orange-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              {project.category}
              {project.details?.location ? ` · ${project.details.location}` : ""}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-navy leading-tight">
              {project.title}
            </h1>
          </div>
          <p className="text-ink/75 text-lg leading-relaxed border-l-4 border-orange/40 pl-6">
            {project.description}
          </p>
        </div>

        {/* Especificações reais */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl">
          <Spec icon={MapPin} label="Local" value={project.details.location} />
          <Spec icon={Ruler} label="Área" value={project.details.area} />
          <Spec icon={Calendar} label="Ano" value={project.details.year} />
        </div>
      </section>

      {/* Bloco especial de regularização */}
      {isReg && (
        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="bg-navy text-white rounded-2xl p-8 h-full">
                <p className="eyebrow text-orange mb-4">Atenção ao patrimônio</p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-6">
                  O que acontece sem a regularização
                </h2>
                <ul className="space-y-4">
                  {project.risks.map((r, i) => (
                    <li key={i} className="flex gap-3 text-white/75 leading-relaxed border-b border-white/10 pb-3 last:border-0">
                      <X size={18} className="text-orange shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow text-navy/55 mb-3">Como a Mayara conduz</p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-navy mb-6">
                Do diagnóstico à averbação em cartório
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.steps.map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-ink/5">
                    <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-orange">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Galeria */}
      <section className="max-w-7xl mx-auto px-6 mt-16 pb-8">
        {isReg && (
          <p className="eyebrow text-navy/40 mb-5 text-center">Registros do trabalho</p>
        )}
        <div className="relative group">
          <div
            onClick={() => setLightbox(true)}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white cursor-zoom-in shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full"
              >
                <Image src={gallery[index]} alt={project.title} fill priority className="object-cover" />
              </motion.div>
            </AnimatePresence>

            {gallery.length > 1 && (
              <div className="absolute inset-0 hidden md:flex items-center justify-between px-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prev} className="w-11 h-11 rounded-full bg-white/90 text-navy flex items-center justify-center shadow hover:bg-orange hover:text-white transition-colors" aria-label="Anterior">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={next} className="w-11 h-11 rounded-full bg-white/90 text-navy flex items-center justify-center shadow hover:bg-orange hover:text-white transition-colors" aria-label="Próxima">
                  <ChevronRight size={22} />
                </button>
              </div>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar justify-center">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 transition-all ${
                    index === i ? "ring-2 ring-orange" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="miniatura" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA final específico do projeto */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-center md:text-left leading-tight max-w-xl">
            {isReg ? "Quer regularizar o seu imóvel com segurança?" : "Gostou e quer algo parecido para você?"}
          </h2>
          <a
            href={waProjectLink(project.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-full transition-colors whitespace-nowrap"
          >
            <FaWhatsapp size={19} />
            Falar com a Mayara
          </a>
        </div>
      </section>
    </div>
  );
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-ink/5">
      <Icon size={18} className="text-orange" />
      <span className="block text-xs text-ink/50 font-medium mt-2">{label}</span>
      <span className="block text-sm font-semibold text-navy">{value}</span>
    </div>
  );
}
