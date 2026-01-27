import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dive Movement Conf\'26 | Juventude DIVE',
  description: 'Conferência da Juventude DIVE - PIB Vida com Deus. Até que todos mergulhem mais fundo.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
