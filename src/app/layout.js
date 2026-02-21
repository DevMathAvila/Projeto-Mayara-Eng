import '@/data/styles/globals.css';
import { Inter } from 'next/font/google';

// No Next.js, removemos o ".js" do final do import
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Mayara Gaspareto | Arquitetura & Engenharia em Indaiatuba',
    template: '%s | Mayara Gaspareto'
  },
  description: 'Projetos autorais e engenharia de precisão em Indaiatuba, Itu e Salto. Especialista em residências de alto padrão, reformas e aprovações técnicas.',
  keywords: [
    'Mayara Gaspareto',
    'Arquitetura em Indaiatuba',
    'Engenheiro Civil Indaiatuba',
    'Arquiteto em Itu',
    'Projetos Residenciais Salto',
    'Condomínios de Luxo Indaiatuba',
    'Aprovação de projetos prefeitura Indaiatuba',
    'Reforma residencial alto padrão',
    'Design de interiores Indaiatuba'
  ],
  authors: [{ name: 'Mayara Gaspareto' }],
  creator: 'Mayara Gaspareto',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} bg-off-white text-dark-text flex flex-col min-h-screen`}>
        {/* Navbar fixa em todas as páginas */}
        <Navbar /> 
        
        <main className="flex-grow">
          {children}
        </main>

        {/* Sem Footer por enquanto, o flex-grow garante que o layout não quebre */}
      </body>
    </html>
  );
}