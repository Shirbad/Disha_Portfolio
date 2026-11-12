import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // add provider

export const metadata: Metadata = {
  title: "Disha Shirbad | Java Developer | Spring Boot, REST APIs, React.js",
  description:
    "Java Developer skilled in Java, Spring Boot, REST APIs, PostgreSQL, Kafka and React.js. Built a banking microservices backend and live websites. Open to Software Engineer roles.",
  generator: "v0.app",
  keywords: ["Java Developer", "Spring Boot", "Hibernate", "REST APIs", "MySQL", "React.js", "Software Engineer", "Disha Shirbad"],
  authors: [{ name: "Disha Shirbad" }],
  openGraph: {
    title: "Disha Shirbad | Java Developer | Spring Boot, REST APIs, React.js",
    description:
      "Java Developer skilled in Java, Spring Boot, REST APIs, PostgreSQL, Kafka and React.js. Built a banking microservices backend and live websites. Open to Software Engineer roles.",
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
