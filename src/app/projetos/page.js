'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjetosPage() {
  const [filter, setFilter] = useState('Todos');

  // Categorias baseadas na sua estratégia de SEO e Organização
  const categories = ['Todos', 'Arquitetura', 'Engenharia', 'Legalização', 'Visualização'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-off-white min-h-screen">
      <Navbar />
      <WhatsAppFloating />

      {/* HEADER DA PÁGINA */}
      <section className="pt-40 pb-12 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-arq-blue tracking-tighter">
                Nossos <span className="italic font-serif text-arq-orange">Projetos</span>
              </h1>
              <p className="text-gray-500 mt-4 max-w-md uppercase text-[10px] tracking-[0.4em]">
                Acervo completo de soluções em arquitetura e engenharia em Indaiatuba e região.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FILTROS NAVEGÁVEIS */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 transition-all duration-300 rounded-full border ${
                filter === cat 
                ? 'bg-arq-blue text-white border-arq-blue shadow-lg' 
                : 'text-gray-400 border-transparent hover:text-arq-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID DE PROJETOS */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {/* Reutilizando seu ProjectCard */}
                <ProjectCard project={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-serif italic">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </section>

      {/* RODAPÉ SIMPLIFICADO */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400">
            © 2026 Mayara Gaspareto • Indaiatuba, SP
          </p>
          <div className="flex gap-8">
             <a href="https://instagram.com/mayaragaspareto_arq" target="_blank" className="text-[9px] font-bold uppercase tracking-widest text-arq-blue hover:text-arq-orange transition-colors">Instagram</a>
             <a href="https://wa.me/5519999999999" target="_blank" className="text-[9px] font-bold uppercase tracking-widest text-arq-blue hover:text-arq-orange transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}