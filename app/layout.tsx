import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans, Montserrat as FontHeading } from 'next/font/google';
import {cn} from '@/lib/utils';
import { MainNav } from '@/components/main-nav';
import { homeConfig } from '@/config/home';

const fontSans = FontSans({
  subsets: ['latin'],
  variable:"--font-sans"
})

const fontHeading = FontHeading({
  subsets: ['latin'],
  variable:"--font-heading"
})

export const metadata: Metadata = {
  title: 'NFTRizz',
  description: 'Solana NFT Marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}>
        {/* Outer flex div */}
      <div className='flex flex-col min-h-screen'>
      {/* Header div */}
      {/* continue from here */}
      <header className='container bg-slate-300 h-14 sticky top-0'>
        <div className='flex justify-between items-center py-4'>
          <MainNav items={homeConfig.mainNav}/>
          <nav>
            Login
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      </div>
      </body>
    </html>
  )
}
