"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Contact</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you would like to discuss a project, collaboration opportunity, or just say hi, I'm always open to
                connecting with fellow developers and potential employers.
              </p>
            </div>

            <div className="space-y-4">
              <ContactItem
                icon={Mail}
                label="Email"
                value="shirbaddisha@gmail.com"
                href="mailto:shirbaddisha@gmail.com"
              />
              <ContactItem icon={Phone} label="Phone" value="+91 8010360211" href="tel:+918010360211" />
              <ContactItem icon={MapPin} label="Location" value="Nagpur, Maharashtra" />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/Shirbad" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Quick Message</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out directly via email or connect with me on LinkedIn. I typically respond within
                  24 hours and look forward to hearing from you!
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:shirbaddisha@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 Disha Shirbad. Built with React.js and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-foreground">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}
