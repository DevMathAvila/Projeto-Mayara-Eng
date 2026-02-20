'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  
  // Monitora o progresso do scroll especificamente deste card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transforma o scroll em movimento vertical (de -10% a 10%)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link href={`/projeto/${project.id}`} className="block group" ref={ref}>
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Container da Imagem com Overlow Hidden para o Parallax */}
        <div className="relative h-80 w-full overflow-hidden">
          
          {/* A imagem é 20% maior que o container para ter espaço para "correr" */}
          <motion.div style={{ y }} className="relative h-[120%] w-full -top-[10%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Overlay Sofisticado */}
          <div className="absolute inset-0 bg-arq-blue/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
             <span className="text-white border border-white px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
               Ver Detalhes
             </span>
          </div>
        </div>
        
        {/* Conteúdo do Card */}
        <div className="p-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-arq-orange">
            {project.category}
          </span>
          
          <h3 className="mt-2 text-xl font-light text-arq-blue group-hover:text-arq-orange transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="mt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-arq-orange transition-all duration-300">
            Explorar Projeto
            <svg
              className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}