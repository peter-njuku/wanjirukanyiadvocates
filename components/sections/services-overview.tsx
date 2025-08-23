import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Users, Shield, Briefcase, Building, Lightbulb, Heart, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: Scale,
      title: "Civil & Commercial Litigation",
      description: "Resolving disputes with strategic advocacy, meticulous preparation, and a results-driven approach.",
      highlights: ["Contract disputes", "Debt recovery", "Commercial arbitration"]
    },
    {
      icon: Heart,
      title: "Family Law & Child Protection",
      description: "Offering compassionate yet firm representation in matters of custody, maintenance, and child safeguarding.",
      highlights: ["Child custody", "Divorce proceedings", "Protection orders"]
    },
    {
      icon: Briefcase,
      title: "Employment & Labour Law",
      description: "Advising on contracts, workplace disputes, wrongful termination, and compliance with labour regulations.",
      highlights: ["Employment contracts", "Workplace disputes", "Compliance guidance"]
    },
    {
      icon: Building,
      title: "Corporate & Commercial Law",
      description: "Supporting businesses, influencers, and entrepreneurs with contract negotiation, debt recovery, and dispute resolution.",
      highlights: ["Business formation", "Contract negotiation", "Regulatory compliance"]
    },
    {
      icon: Lightbulb,
      title: "Legal Awareness & Advisory",
      description: "Translating complex legal concepts into practical guidance, empowering clients to make informed decisions.",
      highlights: ["Legal workshops", "Compliance training", "Policy development"]
    },
    {
      icon: Shield,
      title: "Digital Rights & Cybercrime",
      description: "Protecting individuals and businesses against online defamation, bullying, harassment, and misuse of technology.",
      highlights: ["Cybercrime defense", "Digital privacy", "Online reputation protection"]
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">Our Specializations</span>
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
            Comprehensive Legal Expertise
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            At Wanjiru Kanyi Law Advocates, we deliver tailored legal solutions with precision, integrity, and professionalism. 
            Our expertise spans across key practice areas, enabling us to serve a diverse clientele with confidence and clarity.
          </p>
          <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-slate-200 group hover:border-cyan-300/50 bg-white h-full overflow-hidden hover:-translate-y-2"
              >
                <CardHeader className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-cyan-50/80 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-cyan-600" />
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {index + 1}/{services.length}
                    </span>
                  </div>
                  
                  <CardTitle className="text-slate-900 text-xl group-hover:text-cyan-700 transition-colors duration-300 mb-4">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>

                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Focus Areas:</h4>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-10 md:p-12 shadow-2xl max-w-5xl mx-auto text-white overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center bg-cyan-500/20 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="h-5 w-5 text-cyan-300 mr-2" />
              <span className="text-cyan-200 font-medium text-sm">Our Philosophy</span>
            </div>
            
            <h3 className="font-serif font-semibold text-2xl md:text-3xl mb-6 text-cyan-50 bg-gradient-to-r from-cyan-50 to-cyan-100 bg-clip-text text-transparent">
              Excellence Through Understanding
            </h3>
            
            <p className="text-lg text-blue-100 leading-relaxed mb-6 max-w-3xl mx-auto">
              Our philosophy is anchored in excellence and accessibility: combining deep legal knowledge with clear communication, 
              ensuring that justice is not only pursued but also understood.
            </p>
            
            <p className="text-lg text-blue-100 leading-relaxed font-medium max-w-3xl mx-auto mb-8">
              With us, you gain more than legal representation—you gain a strategic partner committed to protecting your rights, 
              advancing your interests, and securing lasting solutions.
            </p>

            <Link 
              href="/services" 
              className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold transition-colors duration-300"
            >
              Explore all our services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}