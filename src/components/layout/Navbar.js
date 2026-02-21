import Link from 'next/link';

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
        
        {/* Logo / Home */}
        <Link href="/" className="group">
          <h1 className="text-lg md:text-xl font-bold tracking-tighter">
            <span className="text-arq-blue group-hover:text-arq-orange transition-colors">MAYARA GASPARETO</span>
            <span className="hidden md:inline mx-2 text-gray-300 font-light">|</span>
            <span className="block md:inline text-arq-orange font-bold tracking-widest text-[10px] uppercase">
              Arq & Eng
            </span>
          </h1>
        </Link>

        {/* Navegação */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <div className="flex space-x-4 md:space-x-8 text-[10px] font-bold uppercase tracking-widest">
            
            {/* LINK ALTERADO: Agora aponta para a página /projetos */}
            <Link 
              href="/projetos" 
              className="text-gray-500 hover:text-arq-orange transition-colors"
            >
              Projetos
            </Link>

            <Link 
              href="/vistoria" 
              className="text-gray-500 hover:text-arq-orange transition-colors"
            >
              Vistoria
            </Link>

            <Link 
              href="/#sobre" 
              className="hidden md:block text-gray-500 hover:text-arq-orange transition-colors"
            >
              Sobre
            </Link>
          </div>

          <div className="h-4 w-[1px] bg-gray-200 hidden md:block"></div>

          {/* Redes Sociais */}
          <a 
            href="https://instagram.com/eng.mayaragaspareto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-arq-orange transition-all transform hover:scale-110"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}