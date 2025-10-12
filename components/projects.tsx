"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Virtual Blood Bank System",
    description:
      "Built a comprehensive full-stack application for donor registration, blood inventory management, and hospital blood requests with secure authentication.",
    longDescription:
      "A complete blood bank management system that streamlines the process of blood donation and distribution. Features include donor registration, blood inventory tracking, hospital request management, and a centralized database for efficient record keeping.",
    technologies: ["Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Secure donor registration and authentication",
      "Real-time blood inventory management",
      "Hospital blood request system",
      "Centralized database for donor records",
      "Blood availability checking portal",
    ],
    category: "Full-Stack Application",
    github: "https://github.com/Shirbad/VirtualBloodBankProject"
  },
  {
    title: "Job Recruitment Portal",
    description:
      "Developed a comprehensive job portal with advanced search, filtering, application tracking, and bookmarking features with role-based access control.",
    longDescription:
      "A modern job recruitment platform that connects job seekers with employers. Includes advanced search capabilities, application tracking, employer dashboards, and comprehensive analytics for monitoring platform usage.",
    technologies: ["React.js", "Spring Boot", "MySQL", "Swagger API"],
    features: [
      "Advanced job search and filtering",
      "Application tracking system",
      "Job bookmarking functionality",
      "Role-based authentication system",
      "Admin dashboard with React Charts",
      "Employer job management portal",
    ],
    category: "Web Application",
    github:"https://github.com/Shirbad/JobPortal",
  },
]

export function Projects() {
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
    <section id="projects" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Projects</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border bg-card/50 backdrop-blur-sm group hover:bg-card/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="opacity-70 hover:opacity-100">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="opacity-70 hover:opacity-100">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="grid lg:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
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
