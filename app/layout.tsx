import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Sanctuary Bloom - Ruang Aman untuk Bertumbuh",
  description:
    "Temukan ketenangan dalam perjalanan pertumbuhan dirimu melalui video meditasi, quotes inspiratif, dan pertanyaan refleksi diri.",
  keywords: "meditasi, self-care, refleksi diri, mental health, quotes inspiratif, pertumbuhan diri",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
