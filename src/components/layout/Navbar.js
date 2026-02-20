import Link from 'next/link';
// Caso não queira instalar biblioteca de ícones agora, usaremos um SVG clean
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-off-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Lado Esquerdo: Identidade Visual */}
        <Link href="/" className="group flex items-center">
          <h1 className="text-xl font-bold tracking-tighter transition-all">
            <span className="text-arq-blue group-hover:text-arq-orange transition-colors">MAYARA GASPARETO</span>
            <span className="mx-2 text-gray-300 font-light">|</span>
            <span className="text-arq-orange font-bold tracking-widest text-sm uppercase">
              Arq & Eng
            </span>
          </h1>
        </Link>

        {/* Links da Direita + Social */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <Link 
              href="/#portfolio" 
              className="text-gray-500 hover:text-arq-orange transition-colors"
            >
              Portfólio
            </Link>
            <Link 
              href="/#contato" 
              className="text-gray-500 hover:text-arq-orange transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Divisor Vertical Sutil */}
          <div className="h-4 w-[1px] bg-gray-200"></div>

          {/* Link Instagram Clean */}
          <a 
            href="https://instagram.com/mayaragaspareto_arq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-arq-orange transition-all transform hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}