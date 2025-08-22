import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Wanjiru Kanyi Law Advocates - Professional Legal Services in Kenya",
  description:
    "Expert legal services in land law, succession, data protection, Computer Misuse and Cyber Crime Matters. Serving communities across Kenya with professional legal consultations and advocacy.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",           // standard browsers
    shortcut: "/favicon.ico",       // fallback
    apple: "/apple-touch-icon.png", // optional, for iOS
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
