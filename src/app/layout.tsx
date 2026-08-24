import type { Metadata } from 'next'
import './globals.css'
import { AppProviders } from './providers'

export const metadata: Metadata = {
  title: 'SIDPB - Sistema de Informação de Doenças Parasitárias no Brasil',
  description: 'Plataforma científica para monitoramento da distribuição de doenças parasitárias no Brasil',
  generator: 'SIDPB'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
