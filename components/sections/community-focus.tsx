import { Users, Shield, Award, Heart, BookOpen, GraduationCap, Scale } from "lucide-react"

export default function CommunityFocus() {
  const focusAreas = [
    {
      icon: BookOpen,
      title: "Community Legal Education",
      description: "Regular legal awareness programs and accessible community consultations",
    },
    {
      icon: Shield,
      title: "Child Protection Advocacy",
      description: "Dedicated to safeguarding children's digital safety and data protection rights",
    },
    {
      icon: GraduationCap,
      title: "Legal Profession Mentorship",
      description: "Training and guiding the next generation of Kenyan legal professionals",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Scale className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium text-sm">Community Focus</span>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Our Commitment to Community Justice
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              We serve as a Legal Information and Resource Centre, promoting accessible legal knowledge and existing
              laws for citizens across Kenya. Our practice emphasizes expertise, skill, and
              confidentiality in all community engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="text-center group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-100">
                  <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="h-9 w-9 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-4 text-lg group-hover:text-blue-800 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              )
            })}
          </div>

          {/* Additional impact metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
              <div className="text-sm text-blue-700 font-medium">Community Workshops</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-800 mb-2">1K+</div>
              <div className="text-sm text-blue-700 font-medium">Lives Impacted</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-800 mb-2">5+</div>
              <div className="text-sm text-blue-700 font-medium">Years of Service</div>
            </div>
          </div>

          {/* Additional trust element */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center bg-white px-6 py-4 rounded-xl shadow-sm border border-blue-100">
              <Heart className="h-6 w-6 text-rose-500 mr-3" />
              <span className="text-slate-700 font-medium">
                Proudly serving communities across Kenya & beyond
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}