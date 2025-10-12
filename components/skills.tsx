"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "JavaScript"],
    icon: "💻",
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "React.js", "JSP"],
    icon: "🎨",
  },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "REST APIs", "Servlets"],
    icon: "⚙️",
  },
  {
    title: "Database",
    skills: ["MySQL"],
    icon: "🗄️",
  },
  {
    title: "Tools & Technologies",
    skills: ["GitHub", "Figma", "Swagger API"],
    icon: "🛠️",
  },
  {
    title: "Core Concepts",
    skills: ["OOPS", "SDLC", "Cloud Computing Fundamentals"],
    icon: "📚",
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Time Management", "Adaptability", "Team Collaboration"],
    icon: "🤝",
  },
]

export function Skills() {
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
    <section id="skills" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Skills</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
