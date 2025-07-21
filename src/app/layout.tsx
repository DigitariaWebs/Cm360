import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stratégie Trésorerie | Conseil en Gestion de Trésorerie d\'Entreprise',
  description: 'Solutions sur mesure pour une gestion stratégique de votre trésorerie et une maximisation de votre liquidité.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
