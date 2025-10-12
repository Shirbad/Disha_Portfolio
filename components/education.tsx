"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Vocation: Software Development",
    institution: "St. Vincent Pallotti College of Engineering & Technology",
    year: "2025",
    grade: "CGPA: 9.01 / 10",
    type: "Bachelor's Degree",
  },
  {
    degree: "Higher Secondary Certification",
    institution: "Nirala Junior College",
    year: "2021",
    grade: "Percentage: 89.50%",
    type: "Higher Secondary",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Adarsh Vidya Mandir",
    year: "2019",
    grade: "Percentage: 85.20%",
    type: "Secondary School",
  },
]

export function Education() {
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
    <section id="education" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Education</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <Badge variant="outline" className="w-fit">
                        {edu.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="text-sm font-medium text-primary">{edu.grade}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
