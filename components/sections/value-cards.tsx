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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex justify-center mb-6">
                  <IconComponent className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}