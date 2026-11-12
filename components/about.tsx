"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, Target, Users, Send } from "lucide-react"

const quickFacts = [
  { icon: Briefcase, label: "Experience", value: "About 10 months, internship and trainee" },
  { icon: Send, label: "Open to", value: "Java Developer, Software Engineer" },
  { icon: MapPin, label: "Preferred cities", value: "Pune, Hyderabad, Bengaluru, Mumbai" },
]

export function About() {
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
    <section id="about" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">About</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Story */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              I'm a Java developer with about 10 months of internship and trainee experience, building REST APIs and
              full-stack applications with Spring Boot, Hibernate, MySQL and React.js.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Softtronix, I built 10+ REST APIs and a full-stack Virtual Blood Bank System with role-based access
              control, and I cut a production API's response time by 80% through SQL optimization and indexing. At
              Informatrix, I work on Java backend modules and have built and launched two live websites, alexindia.in
              and feronixpaints.com, with Next.js, React and Node.js, including their SEO.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I also built NexBank, a five-service banking backend using Java 21, Spring Boot, PostgreSQL, Kafka and
              Redis. It includes JWT authentication, account transfers, fraud review and event-driven notifications.
              I'm a B.Tech graduate in Artificial Intelligence & Data Science, and I'm looking for a
              Software Engineer or Java Developer role where I can keep learning and ship quality code.
            </p>
          </div>

          {/* Side column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-5">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Current Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I recently completed NexBank's Docker setup, automated tests and GitHub Actions CI.
                </p>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </section>
  )
}
