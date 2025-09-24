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
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="relative w-full px-4">
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