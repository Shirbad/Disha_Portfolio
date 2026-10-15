"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Server, Database, LayoutTemplate, Wrench, BookOpen, Cloud, Users } from "lucide-react"

const skillCategories = [
  { title: "Programming Languages", skills: ["Java", "SQL", "JavaScript", "TypeScript", "Python", "C"], icon: Code2 },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "Spring MVC", "Hibernate/JPA", "Spring Security", "JWT", "REST APIs", "Servlets", "JSP", "Microservices"],
    icon: Server,
  },
  { title: "Database", skills: ["MySQL", "SQL queries", "Indexing and query optimization"], icon: Database },
  { title: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"], icon: LayoutTemplate },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Maven", "Postman", "Swagger", "Google Search Console", "Google Analytics", "Figma"],
    icon: Wrench,
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "Design Patterns", "Data Structures & Algorithms", "SDLC", "Agile"],
    icon: BookOpen,
  },
  { title: "Cloud & AI", skills: ["AWS (EC2, S3)", "Claude Code (AI-assisted development)"], icon: Cloud },
  { title: "Soft Skills", skills: ["Problem Solving", "Time Management", "Adaptability", "Team Collaboration"], icon: Users },
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

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
