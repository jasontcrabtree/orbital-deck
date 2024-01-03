import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

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
        <body className={`${inter.className} tw-bg-slate-100`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
