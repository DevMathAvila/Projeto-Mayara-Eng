import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Importação adicionada
import '@/data/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  icons: {
    icon: '/images/favicon/logo-brand.png',
    apple: '/images/favicon/logo-brand.png',
  },
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
    'Design de interiores Indaiatuba',
    'Engenharia Indaiatuba',
    'Mayara Engenharia',
    'Gaspareto Engenharia',
    'Mayara Gaspareto Engenharia',
    'Arquiteta indaiatuba'
  ],
  authors: [{ name: 'Mayara Gaspareto' }],
  creator: 'Mayara Gaspareto',
  openGraph: {
    title: 'Mayara Gaspareto | Arquitetura & Engenharia',
    description: 'Projetos autorais e engenharia de precisão em Indaiatuba e região.',
    url: 'https://www.mayaragaspareto.com.br',
    siteName: 'Mayara Gaspareto',
    images: [
      {
        url: 'https://www.mayaragaspareto.com.br/images/aprovacao/approve.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} bg-off-white text-dark-text flex flex-col min-h-screen`}>
        <Navbar /> 
        
        <main className="flex-grow">
          {children}
        </main>

        {/* Ferramentas de monitoramento da Vercel */}
        <Analytics /> 
        <SpeedInsights /> 
      </body>
    </html>
  );
}