import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/i18n/I18nProvider'
import en from '@/messages/en.json'
import fr from '@/messages/fr.json'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "CM360 | Conseil en Gestion de Trésorerie d'Entreprise",
  description:
    "CM360 - Solutions sur mesure pour une gestion stratégique de votre trésorerie et une maximisation de votre liquidité.",
  keywords: [
    "CM360",
    "gestion de trésorerie",
    "cash management",
    "treasury management",
    "optimisation trésorerie",
    "liquidité entreprise",
    "conseil trésorerie",
    "Montréal",
    "Montreal",
    "Québec",
    "Canada",
    "gestion financière",
    "corporate cash management",
    "enterprise treasury",
    "trésorerie d'entreprise",
  ],
  authors: [{ name: "CM360" }],
  creator: "CM360",
  publisher: "CM360",
  openGraph: {
    title: "CM360 | Conseil en Gestion de Trésorerie d'Entreprise",
    description:
      "Optimisez la gestion de votre trésorerie d'entreprise avec CM360. Solutions sur mesure pour maximiser votre liquidité.",
    url: "https://www.conseilcm360.com", // Replace with actual URL
    siteName: "CM360",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/HeroSection.jpg",
        width: 1200,
        height: 630,
        alt: "CM360 - Gestion de Trésorerie d'Entreprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CM360 | Conseil en Gestion de Trésorerie d'Entreprise",
    description:
      "Optimisez la gestion de votre trésorerie d'entreprise avec CM360.",
    images: ["/HeroSection.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.conseilcm360.com", // Replace with actual URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/logos/favIcon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CM360",
              "description": "Conseil en Gestion de Trésorerie d'Entreprise - Solutions sur mesure pour une gestion stratégique de votre trésorerie et une maximisation de votre liquidité.",
              "url": "https://www.conseilcm360.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montréal",
                "addressRegion": "QC",
                "addressCountry": "CA"
              },
              "serviceType": "Gestion de Trésorerie, Cash Management, Treasury Management",
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Amérique du Nord"
                },
                {
                  "@type": "Place",
                  "name": "Afrique"
                },
                {
                  "@type": "Place",
                  "name": "Caraïbes"
                },
                {
                  "@type": "Place",
                  "name": "Europe"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <I18nProvider initialLanguage="fr" messages={{ en, fr }}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
