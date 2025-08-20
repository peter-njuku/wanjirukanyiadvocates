import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Home, Users, Shield, MessageSquareWarning, FileText } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Land & Property Law",
      description: "Comprehensive land transactions, title transfers, subdivisions, and property disputes.",
    },
    {
      icon: Users,
      title: "Succession & Inheritance",
      description: "Expert guidance through Kenya's Law of Succession Act for estate planning and inheritance matters.",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Compliance with Kenya's Data Protection Act (2019) and children's digital safety advocacy.",
    },
    {
      icon: MessageSquareWarning,
      title: "Cyberbullying Cases",
      description: "Legal representation under the Computer Misuse and Cyber Crimes Act (2018).",
    },
    {
      icon: Scale,
      title: "Employment Law",
      description: "Workplace disputes, contract negotiations, and employment rights protection.",
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Contract drafting, affidavits, legal opinions, and document certification services.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">Our Legal Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to meet the diverse needs of individuals, families, and businesses
            across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <IconComponent className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
