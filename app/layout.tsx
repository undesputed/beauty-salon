import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Tutor Beauty Salon and Spa | Ubay, Bohol",
    template: "%s | Tutor Beauty Salon and Spa",
  },
  description: "Premium beauty services including hair, nails, and brows at Tutor Beauty Salon and Spa in Ubay, Bohol.",
  keywords: [
    "beauty salon",
    "spa",
    "hair salon",
    "nail salon",
    "Ubay",
    "Bohol",
    "microblading",
    "manicure",
    "pedicure",
  ],
  authors: [{ name: "Tutor Beauty Salon" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tutorbeautysalon.com",
    title: "Tutor Beauty Salon and Spa | Ubay, Bohol",
    description:
      "Premium beauty services including hair, nails, and brows at Tutor Beauty Salon and Spa in Ubay, Bohol.",
    siteName: "Tutor Beauty Salon and Spa",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tutor Beauty Salon and Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutor Beauty Salon and Spa | Ubay, Bohol",
    description:
      "Premium beauty services including hair, nails, and brows at Tutor Beauty Salon and Spa in Ubay, Bohol.",
    images: ["/images/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
