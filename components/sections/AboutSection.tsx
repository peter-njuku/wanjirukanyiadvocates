export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              About Wanjiru Kanyi Law Advocates
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              We are a distinguished law firm dedicated to providing **professional legal services with a commitment to justice**. Our practice serves communities across Kenya, specializing in key areas such as **Land & Property Law**, **Succession**, **Data Protection**, and **Cyber Crime Matters**.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700">
            <div className="space-y-4">
              <p>
                As a trusted **Legal Information and Resource Centre**, we prioritize accessible legal knowledge and confidentiality in all our engagements.
              </p>
              <div className="flex items-center space-x-2">
                <Scale className="w-5 h-5 text-blue-600" />
                <span>Our firm is built on a foundation of **expertise, integrity, and a passion for community advocacy**.</span>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                We believe that every Kenyan has the right to quality representation. We achieve this through our dedicated community programs, legal education initiatives, and a client-first approach to every case.
              </p>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-rose-500" />
                <span>We ensure our clients receive skilled and compassionate representation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}