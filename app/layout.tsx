import type { Metadata } from 'next'
import './globals.css'
import { UserInputProvider } from '@/context/InputUserContext'

export const metadata: Metadata = {
  title: 'Startplexity',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <UserInputProvider>
          {children}
        </UserInputProvider>
      </body>
    </html>
  )
}
