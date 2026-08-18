import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/data/styles/globals.css";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";
import TrackClicks from "@/components/analytics/TrackClicks";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";

// GA4 só é carregado quando o Measurement ID (G-XXXX) estiver definido no
// ambiente (NEXT_PUBLIC_GA_ID). Sem o ID, nada é carregado.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: "/images/favicon/logo-brand.png",
    shortcut: "/images/favicon/logo-brand.png",
    apple: "/images/favicon/logo-brand.png",
  },
  title: {
    default: "Mayara Gaspareto | Arquitetura e Engenharia em Indaiatuba",
    template: "%s | Mayara Gaspareto",
  },
  description:
    "Arquiteta e engenheira civil em Indaiatuba. Projetos de casas para construtores, com arquitetura que vende e engenharia que segura a obra, além de regularização e vistoria técnica em Indaiatuba, Salto, Itu e Campinas.",
  keywords: [
    "Mayara Gaspareto",
    "arquitetura em Indaiatuba",
    "engenheira civil Indaiatuba",
    "projeto residencial Indaiatuba",
    "regularização de imóvel Indaiatuba",
    "vistoria técnica Indaiatuba",
    "aprovação de projeto prefeitura Indaiatuba",
    "arquiteta em Salto",
    "arquiteta em Itu",
  ],
  authors: [{ name: "Mayara Gaspareto" }],
  creator: "Mayara Gaspareto",
  openGraph: {
    title: "Mayara Gaspareto | Arquitetura e Engenharia",
    description:
      "Projetos residenciais, regularização de imóveis e vistoria técnica em Indaiatuba e região.",
    url: site.url,
    siteName: "Mayara Gaspareto",
    images: [
      {
        url: "/images/piemonte/Projeto6.jpeg",
        width: 1200,
        height: 630,
        alt: "Projeto residencial de Mayara Gaspareto",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Mayara Gaspareto",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "ArchitecturalService",
        "@id": `${site.url}/#service`,
        name: "Mayara Gaspareto | Arquitetura e Engenharia",
        serviceType: "Arquitetura e Engenharia Civil",
        areaServed: ["Indaiatuba", "Salto", "Itu", "Campinas"],
        description:
          "Projetos residenciais de alto padrão, regularização de imóveis e vistoria técnica.",
        provider: {
          "@type": "LocalBusiness",
          "@id": `${site.url}/#organization`,
          name: "Mayara Gaspareto",
          image: `${site.url}/images/favicon/logo-brand.png`,
          telephone: site.whatsapp.e164Display,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Indaiatuba",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        },
      },
    ],
  };

  return (
    <html lang="pt-br" className={`${bricolage.variable} ${plex.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <TrackClicks />
        <Analytics />
        <SpeedInsights />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
