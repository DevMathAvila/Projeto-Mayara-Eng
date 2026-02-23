'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import Navbar from '@/components/layout/Navbar';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import WhatsAppFloating from '@/components/ui/WhatsAppFloating';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ProjetosPage() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Arquitetura', 'Regularização'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-[#F8F9FA] min-h-screen relative overflow-hidden">
      <Navbar />
      <WhatsAppFloating />

      <div className="absolute inset-0 pointer-events-none z-0">

        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-arq-blue/[0.04] blur-[150px] rounded-full" />
        
        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-arq-orange/[0.05] blur-[130px] rounded-full" />
        
        
        <div className="absolute bottom-[10%] left-[15%] w-[600px] h-[600px] bg-arq-blue/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        <section className="pt-40 pb-10 px-6 max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col gap-3">
              <span className="text-arq-orange font-bold text-[9px] uppercase tracking-[0.5em]">Portfólio</span>
              <h1 className="text-5xl md:text-6xl font-light text-arq-blue tracking-tighter leading-none">
                Nossos <span className="italic font-serif">Projetos</span>
              </h1>
              <p className="text-gray-400 mt-2 max-w-md uppercase text-[8px] tracking-[0.4em] leading-relaxed">
                Soluções técnicas e estéticas em Indaiatuba e região.
              </p>
            </div>
          </Reveal>
        </section>

      
        <section className="px-6 max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 border-b border-arq-blue/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[8px] font-bold uppercase tracking-[0.3em] px-6 py-2 transition-all duration-500 rounded-full border whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-arq-blue text-white border-arq-blue shadow-md scale-105' 
                  : 'text-arq-blue/40 border-transparent hover:text-arq-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

      
        <section className="px-6 max-w-7xl mx-auto pb-24">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>

      
      <footer id="contato" className="bg-arq-blue text-white py-16 px-6 relative rounded-t-[3rem] z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <Reveal>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-light mb-6 italic font-serif">
                  Vamos projetar o <span className="text-arq-orange not-italic font-sans font-bold text-2xl md:text-3xl">amanhã?</span>
                </h3>
                <Link 
                  href="https://wa.me/5519994092433" 
                  target="_blank"
                  className="inline-block bg-white text-arq-blue px-10 py-4 rounded-full font-bold uppercase text-[9px] tracking-[0.4em] shadow-lg hover:bg-arq-orange hover:text-white transition-all duration-500"
                >
                  Solicitar Orçamento
                </Link>
              </div>

              <div className="h-[1px] w-full md:w-[1px] md:h-32 bg-white/10"></div>

              <div className="flex flex-col items-center md:items-end gap-6">
                <div className="text-center md:text-right group">
                  <span className="block text-[8px] uppercase tracking-[0.5em] text-white/30 mb-2 transition-colors group-hover:text-arq-orange">Instagram</span>
                  <a href="https://instagram.com/eng.mayaragaspareto" target="_blank" className="text-lg font-serif italic hover:text-arq-orange transition-all">
                    @eng.mayaragaspareto
                  </a>
                </div>
                <div className="text-[8px] uppercase tracking-[0.5em] text-white/20 text-center md:text-right leading-relaxed">
                  © {new Date().getFullYear()} Mayara Gaspareto <br/>
                  Arquitetura & Engenharia
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}