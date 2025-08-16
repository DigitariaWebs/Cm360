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
  title: "CM360 | Conseil en Gestion de Trésorerie d&apos;Entreprise",
  description:
    "CM360 - Solutions sur mesure pour une gestion stratégique de votre trésorerie et une maximisation de votre liquidité.",
  icons: {
    icon: "/logos/favIcon.png",
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
      </head>
      <body>
        <I18nProvider initialLanguage="fr" messages={{ en, fr }}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
