import { Users, Shield, Award, Heart } from "lucide-react"

export default function CommunityFocus() {
  const focusAreas = [
    {
      icon: Users,
      title: "Community Legal Education",
      description: "Regular legal awareness programs and accessible community consultations",
    },
    {
      icon: Shield,
      title: "Child Protection Advocacy",
      description: "Dedicated to safeguarding children's digital safety and data protection rights",
    },
    {
      icon: Award,
      title: "Legal Profession Mentorship",
      description: "Training and guiding the next generation of Kenyan legal professionals",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Commitment to Community Justice
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              We serve as a Legal Information and Resource Centre, promoting accessible legal knowledge and existing
              laws for citizens across Kenya. Our practice emphasizes expertise, skill, and
              confidentiality in all community engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="text-center group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-50 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg group-hover:text-cyan-700 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              )
            })}
          </div>

          {/* Additional trust element */}
          <div className="text-center pt-12">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
              <Heart className="h-5 w-5 text-rose-500 mr-3" />
              {/*<span className="text-slate-700 text-sm font-medium">
                Proudly serving communities across Kenya since 2015
              </span>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}