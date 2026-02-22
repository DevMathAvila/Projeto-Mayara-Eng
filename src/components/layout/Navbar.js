'use client';
import Link from 'next/link';
import Image from 'next/image';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm shadow-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Home */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Favicon na Navbar */}
          <div className="relative w-8 h-8 md:w-9 md:h-9 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-md">
            <Image 
              src="/images/favicon/logo-brand.png" 
              alt="Mayara Gaspareto" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          
          <h1 className="flex flex-col md:flex-row md:items-center">
            <span className="text-arq-blue font-bold tracking-tighter text-sm md:text-base group-hover:text-arq-orange transition-colors duration-300">
              MAYARA GASPARETO
            </span>
            <span className="hidden md:inline mx-3 text-arq-blue/10 font-thin text-xl">|</span>
            <span className="text-arq-orange font-bold tracking-[0.25em] text-[9px] md:text-[10px] uppercase">
              Arq & Eng
            </span>
          </h1>
        </Link>

        {/* Navegação - Apenas o essencial */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <div className="flex space-x-6 md:space-x-10 text-[10px] font-bold uppercase tracking-widest">
            
            <Link 
              href="/projetos" 
              className="text-arq-blue/60 hover:text-arq-orange transition-all duration-300 hover:-translate-y-0.5"
            >
              Projetos
            </Link>

            <Link 
              href="/vistoria" 
              className="text-arq-blue/60 hover:text-arq-orange transition-all duration-300 hover:-translate-y-0.5"
            >
              Vistoria
            </Link>

            <Link 
              href="/#sobre" 
              className="hidden md:block text-arq-blue/60 hover:text-arq-orange transition-all duration-300 hover:-translate-y-0.5"
            >
              Sobre
            </Link>
          </div>

          <div className="h-5 w-[1px] bg-arq-blue/10 hidden md:block"></div>

          {/* Redes Sociais */}
          <a 
            href="https://instagram.com/eng.mayaragaspareto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-arq-blue/40 hover:text-arq-orange transition-all transform hover:scale-110"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}