import '@/data/styles/globals.css';// OU use: import '../data/styles/global.css'; (Se ele ainda estiver lá na data)

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mayara Arq | Arquitetura e Interiores',
  description: 'Portfólio de Arquitetura e Design de Interiores',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main className="min-h-screen bg-[#FDFCFB]">
          {children}
        </main>
      </body>
    </html>
  );
}