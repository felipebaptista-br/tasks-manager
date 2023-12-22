import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  Container,
  Header
} from '@/components'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Managment',
  description: 'Conheça agora a Task Managment! Uma aplicação para gerenciar quaisquer tarefas de forma gratuita.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}><Header /><Container>{children}</Container></body>
    </html>
  )
}
