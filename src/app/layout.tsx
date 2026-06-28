import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.qualityprosolutions.com.br";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const servicesCatalog = [
  {
    name: "Consultoria para implantação ISO 9001",
    serviceType: "Consultoria ISO 9001",
  },
  {
    name: "Auditoria Interna",
    serviceType: "Auditoria interna ISO 9001 e SGQ",
  },
  {
    name: "Consultoria de Manutenção",
    serviceType: "Organização de rotinas e controles de manutenção",
  },
  {
    name: "Auditoria de Fornecedor",
    serviceType: "Avaliação e auditoria de fornecedores",
  },
  {
    name: "Consultoria para implantação SGQ",
    serviceType: "Implantação de Sistema de Gestão da Qualidade",
  },
  {
    name: "Projetos de Melhoria Contínua",
    serviceType: "Melhoria contínua e planos de ação",
  },
  {
    name: "Treinamentos",
    serviceType: "Treinamentos em qualidade, ISO 9001 e ferramentas da qualidade",
  },
  {
    name: "Diagnóstico SGQ",
    serviceType: "Diagnóstico de Sistema de Gestão da Qualidade",
  },
  {
    name: "Padronização de Processos",
    serviceType: "Mapeamento, procedimentos, formulários e padrões operacionais",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "QualityPro Solutions | Gestão da Qualidade",
    template: "%s | QualityPro Solutions",
  },
  description:
    "Consultoria em gestão da qualidade, implantação ISO 9001, auditorias, indicadores, padronização de processos e melhoria contínua.",
  icons: {
    icon: [
      {
        url: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon-48.png",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "QualityPro Solutions",
    title: "QualityPro Solutions | Gestão da Qualidade",
    description:
      "Estruturamos processos, indicadores e sistemas de gestão para empresas que querem crescer com controle, clareza e confiança.",
    images: [
      {
        url: "/hero-bg-hq.webp",
        width: 1920,
        height: 1081,
        alt: "QualityPro Solutions - Sistemas de Gestão da Qualidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QualityPro Solutions | Gestão da Qualidade",
    description:
      "Consultoria em gestão da qualidade, ISO 9001, auditorias, indicadores e melhoria contínua.",
    images: ["/hero-bg-hq.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: "QualityPro Solutions",
        url: siteUrl,
        logo: `${siteUrl}/logo-optimized.webp`,
        image: `${siteUrl}/hero-bg-hq.webp`,
        email: "contato@qualityprosolutions.com.br",
        description:
          "Consultoria em gestão da qualidade, implantação ISO 9001, auditorias, indicadores, padronização de processos e melhoria contínua.",
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Atendimento comercial",
          email: "contato@qualityprosolutions.com.br",
          availableLanguage: ["pt-BR"],
          areaServed: "BR",
        },
        serviceType: [
          "Consultoria em Gestão da Qualidade",
          ...servicesCatalog.map((service) => service.name),
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços da QualityPro Solutions",
          itemListElement: servicesCatalog.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              serviceType: service.serviceType,
              provider: {
                "@id": `${siteUrl}/#organization`,
              },
              areaServed: "BR",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "QualityPro Solutions",
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
