"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
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
    <section id="experience" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Experience</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="space-y-8">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Java Developer Intern</h3>
                    <p className="text-lg text-foreground">Softtronix Software Services Pvt. Ltd</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>June 2024 — October 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Nagpur</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Developed and tested RESTful APIs using Spring Boot integrated with frontend modules, contributing
                    to robust full-stack applications with seamless data flow and user interactions.
                  </p>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Developed and tested RESTful APIs using Spring Boot integrated with frontend modules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Worked on MySQL database design, query optimization, and data handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>
                        Assisted in debugging, code reviews, and feature enhancements to improve application
                        functionality
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">RESTful APIs</Badge>
                    <Badge variant="secondary">Code Review</Badge>
                    <Badge variant="secondary">Database Design</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
