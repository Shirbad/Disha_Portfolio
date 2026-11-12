"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  title: string
  longDescription: string
  technologies: string[]
  features?: string[]
  category: string
  code?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "NexBank Banking Microservices",
    category: "Backend Application",
    longDescription:
      "A Java 21 and Spring Boot banking backend built as five services for authentication, accounts, transfers, fraud review, and notifications. PostgreSQL stores account and ledger data, Kafka carries service events, and Redis supports caching and rate limits.",
    features: [
      "JWT authentication with rotating refresh tokens and role-based access",
      "Deposits, withdrawals, account ownership checks, and transaction history",
      "Database-backed transfers with ordered locks and idempotency keys",
      "Kafka transactional outbox with fraud and notification consumers",
      "JUnit and Mockito tests; about 91% measured service-class line coverage, with a 70% JaCoCo minimum",
    ],
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "Docker", "JUnit"],
    code: "https://github.com/Shirbad/NexBank",
  },
  {
    title: "Feronix Paints Website",
    category: "Live Website",
    longDescription:
      "The first website for the Feronix rust-protection paint brand, built and launched end-to-end, with 11 product pages, a blog and dealer registration. Includes WhatsApp click-to-chat for customer enquiries and ongoing SEO with Google Search Console and Google Analytics.",
    technologies: ["Next.js", "React.js", "Node.js", "Tailwind CSS", "SEO"],
    demo: "https://feronixpaints.com",
  },
  {
    title: "Alex India Website",
    category: "Live Website",
    longDescription:
      "A responsive company website for an anti-corrosive paint manufacturer, with a product catalog, individual product pages, About and Contact pages, and SEO setup (meta tags, Open Graph cards, canonical URLs).",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "SEO"],
    demo: "https://alexindia.in",
  },
  {
    title: "Virtual Blood Bank System",
    category: "Full-Stack Application",
    longDescription:
      "A blood bank management system for donor registration, blood inventory tracking and hospital requests, with a React.js front end, a Spring Boot back end and role-based access control.",
    technologies: ["React.js", "Spring Boot", "MySQL", "Maven", "Role-Based Access Control"],
    features: [
      "Secure donor registration and authentication",
      "Real-time blood inventory management",
      "Hospital blood request system",
      "Centralized database for donor records",
      "Blood availability checking portal",
    ],
  },
  {
    title: "Job Portal",
    category: "Web Application",
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
  },
]

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{children}</h3>
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <Badge key={tech} variant="secondary" className="font-normal">
          {tech}
        </Badge>
      ))}
    </div>
  )
}

function Links({ project }: { project: Project }) {
  if (!project.code && !project.demo) return null
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.code && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            View Code
          </a>
        </Button>
      )}
      {project.demo && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Website
          </a>
        </Button>
      )}
    </div>
  )
}

function Title({ project, live }: { project: Project; live?: boolean }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xl font-semibold text-primary">{project.title}</h4>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{project.category}</Badge>
        {live && (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live
          </span>
        )}
      </div>
    </div>
  )
}

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

  const [featured, ...rest] = projects
  const live = rest.filter((p) => p.demo)
  const more = rest.filter((p) => !p.demo)
  const card = "border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300"

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Projects</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        {/* Featured */}
        <div className="space-y-4">
          <GroupLabel>Featured Project</GroupLabel>
          <Card className={card}>
            <CardContent className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 flex flex-col gap-5">
                  <Title project={featured} />
                  <p className="text-muted-foreground leading-relaxed">{featured.longDescription}</p>
                  <div className="mt-auto space-y-5">
                    <Tags items={featured.technologies} />
                    <Links project={featured} />
                  </div>
                </div>
                {featured.features && (
                  <div className="lg:col-span-2 rounded-lg border border-border bg-muted/30 p-5 space-y-4">
                    <h5 className="font-semibold text-foreground">Key Features</h5>
                    <FeatureList items={featured.features} />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live websites */}
        <div className="space-y-4">
          <GroupLabel>Live Websites</GroupLabel>
          <div className="grid md:grid-cols-2 gap-6">
            {live.map((project) => (
              <Card key={project.title} className={`${card} h-full`}>
                <CardContent className="p-6 h-full flex flex-col gap-5">
                  <Title project={project} live />
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  <div className="mt-auto space-y-5">
                    <Tags items={project.technologies} />
                    <Links project={project} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* More projects */}
        <div className="space-y-4">
          <GroupLabel>More Projects</GroupLabel>
          <div className="grid md:grid-cols-2 gap-6">
            {more.map((project) => (
              <Card key={project.title} className={`${card} h-full`}>
                <CardContent className="p-6 h-full flex flex-col gap-5">
                  <Title project={project} />
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  {project.features && (
                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">Key Features</h5>
                      <FeatureList items={project.features} />
                    </div>
                  )}
                  <div className="mt-auto space-y-5 pt-1">
                    <Tags items={project.technologies} />
                    <Links project={project} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
