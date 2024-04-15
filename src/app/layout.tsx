import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../ui/globals.css'
import GlobalNav from '@/ui/components/global-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orbital Deck',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-900 text-slate-50`} style={{ background: '#080301', color: '#f37452' }}>
          <GlobalNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
