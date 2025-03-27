import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

// Use Inter font from Google Fonts instead of the missing Switzer font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Clave - Your AI-Powered co-store operator",
  description:
    "Turn raw franchise data into real-time, actionable insights with Clave's AI-powered platform for QSR operations.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

