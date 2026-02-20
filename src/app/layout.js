import '@/data/styles/globals.css'; // Ajuste o caminho se necessário
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mayara Gaspareto | Arq & Eng',
  description: 'Portfólio de Arquitetura, Engenharia e Design de Interiores',
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