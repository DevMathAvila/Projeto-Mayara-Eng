import '@/data/styles/globals.css'; // Ajuste o caminho se necessário
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Mayara Gaspareto | Arquitetura & Engenharia',
    template: '%s | Mayara Gaspareto'
  },
  description: 'Projetos autorais que unem a precisão da engenharia com a sensibilidade da arquitetura. Transformando visões em realidade.',
  keywords: ['Arquitetura', 'Engenharia Civil', 'Design de Interiores', 'Projetos Residenciais'],
  authors: [{ name: 'Mayara Gaspareto' }],
  creator: 'Mayara Gaspareto',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} bg-off-white text-dark-text`}>
        {/* Se você quiser a Navbar em TODAS as páginas automaticamente, 
            você a colocaria aqui em cima do children */}
        {children}
      </body>
    </html>
  );
}