import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang="en" className="overflow-x-clip">  {/* clip is better than hidden */}
  <body className="overflow-x-clip">
    {children}
     <Analytics />
  </body>
</html>

  )
}
