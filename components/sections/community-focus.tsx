import { Users, Shield, Award } from "lucide-react"

export default function CommunityFocus() {
  const focusAreas = [
    {
      icon: Users,
      title: "Community Outreach",
      description: "Regular legal education programs and community consultations",
    },
    {
      icon: Shield,
      title: "Child Protection",
      description: "Advocating for children's digital safety and data protection rights",
    },
    {
      icon: Award,
      title: "Student Mentorship",
      description: "Training the next generation of legal professionals",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary">Committed to Community Justice</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We serve as a Legal Information and Resource Centre, promoting easier access to legal knowledge and existing
            laws for ordinary citizens within communities across Kenya. Our practice emphasizes expertise, skill, and
            confidentiality in all engagements.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
