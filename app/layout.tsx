import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './theme.css'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Apps That Scale: 0 to $10K+',
  description: 'Master the art of creating profitable B2C applications with our proven framework. Join thousands of successful entrepreneurs who\'ve turned their ideas into revenue-generating machines.',
  keywords: 'B2C app development, mobile app, revenue, entrepreneurship, app monetization, apps that scale',
  authors: [{ name: 'Apps That Scale Team' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-website-id="dfid_k4IKMzmqEAL5mh2E5xVhv"
          data-domain="appsthatscale.com"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 