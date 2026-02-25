import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import '@/data/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  icons: {
    icon: '/images/favicon/logo-brand.png',
    shortcut: '/images/favicon/logo-brand.png',
    apple: '/images/favicon/logo-brand.png',
  },
  title: {
    default: 'Mayara Gaspareto | Arquitetura & Engenharia em Indaiatuba',
    template: '%s | Mayara Gaspareto'
  },
  description: 'Arquitetura e Engenharia Civil com foco em alto padrão. Projetos autorais, reformas e gestão técnica em Indaiatuba e região. Transforme seu sonho em realidade.',
  keywords: [
    'Mayara Gaspareto', 'Arquitetura em Indaiatuba', 'Engenheiro Civil Indaiatuba',
    'Arquiteto em Itu', 'Projetos Residenciais Salto', 'Condomínios de Luxo Indaiatuba',
    'Aprovação de projetos prefeitura Indaiatuba', 'Reforma residencial alto padrão',
    'Design de interiores Indaiatuba', 'Engenharia Indaiatuba'
  ],
  authors: [{ name: 'Mayara Gaspareto' }],
  creator: 'Mayara Gaspareto',
  openGraph: {
    title: 'Mayara Gaspareto | Arquitetura & Engenharia',
    description: 'Projetos de alto padrão e engenharia de precisão em Indaiatuba e região.',
    url: 'https://www.mayaragaspareto.com.br',
    siteName: 'Mayara Gaspareto',
    images: [{ url: 'https://www.mayaragaspareto.com.br/images/aprovacao/approve.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  // Schema detalhado para SEO LOCAL (ajuda a aparecer no mapa e buscas da região)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.mayaragaspareto.com.br/#website",
        "url": "https://www.mayaragaspareto.com.br",
        "name": "Mayara Gaspareto",
        "publisher": { "@id": "https://www.mayaragaspareto.com.br/#organization" }
      },
      {
        "@type": "ArchitecturalService", // Define que é um serviço de arquitetura
        "@id": "https://www.mayaragaspareto.com.br/#service",
        "name": "Mayara Gaspareto | Arquitetura & Engenharia",
        "serviceType": "Arquitetura e Engenharia Civil",
        "areaServed": ["Indaiatuba", "Itu", "Salto"], // Cidades que o Google dará prioridade
        "description": "Especialista em projetos residenciais de alto padrão e aprovações técnicas.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.mayaragaspareto.com.br/#organization",
          "name": "Mayara Gaspareto",
          "image": "https://www.mayaragaspareto.com.br/images/favicon/logo-brand.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Indaiatuba",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        }
      }
    ]
  };

  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-off-white text-dark-text flex flex-col min-h-screen`}>
        <Navbar /> 
        <main className="flex-grow">
          {children}
        </main>
        <Analytics /> 
        <SpeedInsights /> 
      </body>
    </html>
  );
}