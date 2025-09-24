import { Target, Users, Shield } from "lucide-react"

export default function ValuesCards() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Highest standards in legal expertise and preparation to deliver outstanding results.",
    },
    {
      icon: Users,
      title: "Client-First",
      description: "Personalized attention and clear, compassionate communication throughout your legal journey.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Strict adherence to ethical standards and absolute confidentiality in all legal matters.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="w-full px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="bg-white/10 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100/20"
              >
                <div className="flex justify-center mb-6">
                  <IconComponent className="h-12 w-12 text-cyan-300" />
                </div>
                <h3 className="font-semibold text-xl text-white mb-2 text-center">{value.title}</h3>
                <p className="text-sm text-blue-100 text-center">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}