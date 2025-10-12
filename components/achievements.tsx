"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users } from "lucide-react"

const achievements = [
  {
    title: "NASSCOM Certifications",
    description: "National Association of Software and Service Companies (IT-ITes)",
    details: "Software Developer, Web Developer, Test Engineer, Application Developer",
    icon: Award,
    type: "Certification",
  },
  {
    title: "1st Position - Codetronics",
    description: "Technosav'23 Competition",
    details:
      "Won first place in the coding competition, demonstrating exceptional problem-solving skills and technical expertise",
    icon: Trophy,
    type: "Competition",
  },
  {
    title: "Event Coordinator - Aptithon",
    description: "Technosav'23 Technical Event",
    details: "Successfully coordinated and managed technical event, showcasing leadership and organizational skills",
    icon: Users,
    type: "Leadership",
  },
]

export function Achievements() {
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
    <section id="achievements" ref={ref} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Achievements</h2>
          <div className="h-px bg-border w-16"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {achievement.type}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{achievement.description}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.details}</p>
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
