import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // add provider

export const metadata: Metadata = {
  title: "Disha Shirbad - Software Developer",
  description:
    "Entry-level Software Development Engineer skilled in Java, Spring Boot, React.js, and MySQL. Building innovative full-stack applications.",
  generator: "v0.app",
  keywords: ["Software Developer", "Java", "Spring Boot", "React.js", "Full Stack Developer", "Disha Shirbad"],
  authors: [{ name: "Disha Shirbad" }],
  openGraph: {
    title: "Disha Shirbad - Software Developer",
    description: "Entry-level Software Development Engineer skilled in Java, Spring Boot, React.js, and MySQL.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
