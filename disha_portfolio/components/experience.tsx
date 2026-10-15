"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Trainee Consultant, Java Developer",
    company: "Informatrix IT Solutions Pvt. Ltd.",
    period: "April 2026 — Present",
    location: "Nagpur",
    bullets: [
      "Design and develop backend modules and REST APIs on a 3-tier Java architecture (Servlets, JSP, Hibernate/JPA) using Spring Boot and Spring MVC",
      "Built alexindia.in and feronixpaints.com (the brand's first website) end-to-end with Next.js, React and Node.js",
      "Optimize SEO for both sites using Google Search Console and Google Analytics",
      "Test and debug APIs with Postman, take part in code reviews, and work in Agile with Git",
    ],
    tags: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Next.js", "React.js", "SEO"],
  },
  {
    role: "Java Developer Intern",
    company: "Softtronix Software Services Pvt. Ltd.",
    period: "June 2024 — October 2024",
    location: "Nagpur",
    bullets: [
      "Resolved a production performance issue through SQL query optimization and indexing, cutting response time by 80% (about 400 ms to under 80 ms)",
      "Developed 10+ RESTful APIs using Java and Spring Boot with a modular service-based architecture",
      "Built a full-stack Virtual Blood Bank System with a React.js front end and Spring Boot back end (Maven), with role-based access control",
      "Designed and optimized MySQL schemas, tested APIs with Postman and Swagger, and took part in code reviews using Git and GitHub",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "React.js", "Maven", "REST APIs", "Postman", "Swagger"],
  },
]

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
          {experiences.map((exp) => (
            <Card key={exp.company} className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-lg text-foreground">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-3 text-muted-foreground">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.tags.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
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
