import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
});

export const metadata: Metadata = {
  title: 'Dive Movement Conf\'26 | Juventude DIVE',
  description: 'Conferência da Juventude DIVE - PIB Vida com Deus. Até que todos mergulhem mais fundo.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.ico' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  )
}
