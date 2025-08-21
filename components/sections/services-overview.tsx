import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Users, Shield, Briefcase, Building, Lightbulb, Heart, FileText } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      icon: Scale,
      title: "Civil & Commercial Litigation",
      description: "Resolving disputes with strategic advocacy, meticulous preparation, and a results-driven approach.",
    },
    {
      icon: Heart,
      title: "Family Law & Child Protection",
      description: "Offering compassionate yet firm representation in matters of custody, maintenance, and child safeguarding.",
    },
    {
      icon: Briefcase,
      title: "Employment & Labour Law",
      description: "Advising on contracts, workplace disputes, wrongful termination, and compliance with labour regulations.",
    },
    {
      icon: Building,
      title: "Corporate & Commercial Law",
      description: "Supporting businesses, influencers, and entrepreneurs with contract negotiation, debt recovery, and dispute resolution.",
    },
    {
      icon: Lightbulb,
      title: "Legal Awareness & Advisory",
      description: "Translating complex legal concepts into practical guidance, empowering clients to make informed decisions.",
    },
    {
      icon: Shield,
      title: "Cybercrime & Digital Law",
      description: "Expert handling of computer misuse, cyberbullying, and cybercrime cases under Kenyan law.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
            Our Legal Expertise
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            At Wanjiru Kanyi Law Advocates, we deliver tailored legal solutions with precision, integrity, and professionalism. 
            Our expertise spans across key practice areas, enabling us to serve a diverse clientele with confidence and clarity.
          </p>
          <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-slate-200 group hover:border-amber-300/50 bg-white h-full"
              >
                <CardHeader className="p-8">
                  {/* Icon Container with Hover Effect */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-amber-50 rounded-lg group-hover:bg-amber-100/80 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-amber-600 group-hover:text-amber-700" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="text-slate-900 text-xl group-hover:text-amber-700 transition-colors duration-300 mb-4">
                    {service.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="font-serif font-semibold text-2xl md:text-3xl text-slate-900 mb-6">
              Our Philosophy
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our philosophy is anchored in excellence and accessibility: combining deep legal knowledge with clear communication, 
              ensuring that justice is not only pursued but also understood.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              With us, you gain more than legal representation—you gain a strategic partner committed to protecting your rights, 
              advancing your interests, and securing lasting solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}