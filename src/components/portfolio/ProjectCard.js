'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link href={`/projeto/${project.id}`} className="block group" ref={ref}>
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Container da Imagem */}
        <div className="relative h-80 w-full overflow-hidden">
          <motion.div style={{ y }} className="relative h-[120%] w-full -top-[10%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Overlay com Localização */}
          <div className="absolute inset-0 bg-arq-blue/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col items-center justify-center">
             <span className="text-white text-[9px] uppercase tracking-[0.4em] mb-3 opacity-80">{project.details.location}</span>
             <span className="text-white border border-white px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                Ver Detalhes
             </span>
          </div>
        </div>
        
        {/* Conteúdo do Card */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-arq-orange">
              {project.category}
            </span>
            <span className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">
              {project.details.location}
            </span>
          </div>
          
          <h3 className="text-xl font-light text-arq-blue group-hover:text-arq-orange transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="mt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-arq-orange transition-all duration-300">
            Explorar Projeto
            <svg className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}