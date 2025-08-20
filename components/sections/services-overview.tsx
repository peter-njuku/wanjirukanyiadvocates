import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Home, Users, Shield, MessageSquareWarning, FileText, Cpu, Heart, Globe } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      icon: MessageSquareWarning,
      title: "Cyberbullying Cases",
      description: "Legal representation under the Computer Misuse and Cyber Crimes Act (2018).",
    },
    {
      icon: Cpu,
      title: "Computer Misuse & CyberCrimes Matters",
      description: "Expert handling of all computer misuse and cybercrime cases across Kenya.",
    },
    {
      icon: Users,
      title: "Family Law Matters",
      description: "Children cases, divorce cases, and comprehensive family law representation.",
    },
    {
      icon: Heart,
      title: "Children Cases",
      description: "Dedicated advocacy for children's rights and protection in legal matters.",
    },
    {
      icon: Shield,
      title: "Ethical AI Advocacy",
      description: "Leading the conversation on ethical use and regulation of Artificial Intelligence.",
    },
    {
      icon: Globe,
      title: "Nationwide & International Service",
      description: "Operating across Kenya and beyond to serve clients wherever they are located.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            Our Legal Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive legal solutions with a focus on modern digital challenges and family law matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-slate-200 group hover:border-cyan-300/50"
              >
                <CardHeader className="text-center p-8">
                  {/* Icon Container with Hover Effect */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cyan-50 rounded-lg group-hover:bg-cyan-100/80 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-cyan-600 group-hover:text-cyan-700" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="text-slate-900 text-xl group-hover:text-cyan-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="text-slate-600 mt-3 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}