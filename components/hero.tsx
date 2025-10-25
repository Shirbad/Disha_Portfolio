"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const fullTitle = "Disha Shirbad "
  const [typed, setTyped] = useState("")
  const [i, setI] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (i >= fullTitle.length) return
    const t = setTimeout(() => {
      setTyped((prev) => prev + fullTitle.charAt(i))
      setI((prev) => prev + 1)
    }, 60) // typing speed
    return () => clearTimeout(t)
  }, [i])

  return (
    <section className="min-h-[80vh] pt-20 md:pt-24 pb-10 flex items-center">
      <div className="w-full mx-auto max-w-6xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column - Main Content */}
        <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="space-y-4">
            {/* Intro Pill */}
            

            {/* Typed Title with Caret */}
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-pretty text-balance">
              {typed}
              <span className="caret" aria-hidden="true" />
            </h1>

            <h2 className="text-lg lg:text-xl text-muted-foreground font-medium">Software Development Engineer</h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build accessible, pixel-perfect digital experiences for the web, specializing in full-stack applications
              with Java, Spring Boot, and React.js.
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Nagpur, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:shirbaddisha@gmail.com"
                className="underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-primary"
              >
                shirbaddisha@gmail.com
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild className="group">
              <a href="/Disha_Shirbad_Resume.pdf" download aria-label="Download resume (PDF)">
                Download Resume
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:shirbaddisha@gmail.com" aria-label="Send email to Disha">
                Email Me
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Shirbad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className={`relative flex items-center justify-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="absolute -z-10 inset-0 pointer-events-none animate-slow-spin">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full ring-1 ring-border/40 w-64 h-64" />
              <div className="rounded-full ring-1 ring-border/30 w-96 h-96" />
              <div className="rounded-full ring-1 ring-border/20 w-[28rem] h-[28rem]" />
            </div>
          </div>

          <div className="p-1.5 rounded-2xl ring-1 ring-border/40 shadow-xl bg-background/80">
            <img
              src="/images/disha-professional.jpeg"
              alt="Portrait of Disha Shirbad"
              className="w-56 h-56 md:w-64 md:h-64 rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
