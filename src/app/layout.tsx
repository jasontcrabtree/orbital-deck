import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../ui/globals.css'
import GlobalNav from '@/ui/components/global-nav'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orbital Deck',
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html>
        <body className={`${inter.className} custom-bg`}>
          <GlobalNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
