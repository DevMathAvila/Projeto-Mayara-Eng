import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Lado Esquerdo: Estilo Original Recuperado e Clicável */}
        <Link href="/" className="group flex items-center">
          <h1 className="text-xl font-bold tracking-tighter transition-all">
            {/* Cor Azul no Nome (arq-blue ou slate-900) */}
            <span className="text-[#001F3F]">MAYARA GASPARETO</span>
            
            {/* Divisor e Cargo em Laranja (arq-orange ou orange-600) */}
            <span className="mx-2 text-gray-300 font-light">|</span>
            <span className="text-[#D35400] font-light tracking-widest text-sm">
              ARQ & ENG
            </span>
          </h1>
        </Link>

        {/* Links da Direita com redirecionamento para a Home */}
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
          <Link 
            href="/#portfolio" 
            className="text-slate-600 hover:text-[#D35400] transition-colors"
          >
            Portfólio
          </Link>
          <Link 
            href="/#contato" 
            className="text-slate-600 hover:text-[#D35400] transition-colors"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}