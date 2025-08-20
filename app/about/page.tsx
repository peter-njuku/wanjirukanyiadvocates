import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Scale, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              About Our Firm
            </Badge>
            <h1 className="font-serif font-black text-4xl md:text-5xl text-primary">
              About Wanjiru Kanyi Law Advocates
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A dedicated law practice offering efficient and professional legal services with a commitment to ensuring
              access to justice and legal information for communities across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-3xl text-primary mb-6">Meet Our Founder</h2>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-primary mb-3">Wanjiru Kanyi</h3>
                  <p className="text-accent font-medium mb-4">Advocate of the High Court of Kenya & Founder</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Wanjiru Kanyi is an Advocate of the High Court of Kenya and the founder of Wanjiru Kanyi Law
                  Advocates. She is a Litigation Advocate who is also passionate about using the law to make justice
                  accessible, especially through simplified legal education and technology.
                </p>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Areas of Expertise</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Her work spans employment law, family law, contract law, land law, digital rights, brand-influencer
                    representation, and child protection.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Beyond the Courtroom</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Outside the courtroom, she mentors young girls, promotes reproductive health rights, and supports
                    ethical innovation & responsible use of AI in the legal and tech space. Her commitment to community
                    service and legal education reflects her belief that justice should be accessible to all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-serif font-bold text-3xl text-primary mb-6">Our Mission & Values</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We prioritize expertise, skill, and confidentiality in all our engagements, serving as a Legal
                Information and Resource Centre to promote easier access to legal knowledge and existing laws.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Scale className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Access to Justice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe that quality legal services should be accessible to all members of society, not just the
                    privileged few. Our practice extends beyond our clients to serve ordinary citizens within
                    communities across Kenya.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Community Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our community-oriented approach ensures that we understand the unique challenges faced by Kenyan
                    families and businesses, providing tailored legal solutions that address real-world problems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Confidentiality & Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain the highest standards of professional confidentiality and ethical practice, ensuring
                    that our clients can trust us with their most sensitive legal matters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Professional Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our commitment to expertise and skill has been recognized through our nomination for the KEOnline
                    Digitally Fit Awards 2024 in the "Advocating & Law" category.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl text-primary text-center mb-12">What Sets Us Apart</h2>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-xl mb-3">Community-Oriented Legal Support</h3>
                <p className="text-muted-foreground">
                  We go beyond traditional legal practice by actively engaging with communities, providing legal
                  education, and ensuring that legal knowledge is accessible to all. Our walk-in consultation weeks
                  exemplify this commitment to community service.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-xl mb-3">Comprehensive Legal Consultations</h3>
                <p className="text-muted-foreground">
                  From complex land transactions to sensitive family matters, we provide thorough legal consultations
                  that help our clients understand their rights and options. We serve as a trusted resource for legal
                  information and guidance.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-xl mb-3">Specialized Expertise</h3>
                <p className="text-muted-foreground">
                  Our practice areas reflect the most pressing legal needs in Kenya today, from traditional land and
                  succession matters to modern challenges like data protection and cyberbullying. We stay current with
                  legal developments to serve our clients better.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-xl mb-3">Future-Focused Legal Education</h3>
                <p className="text-muted-foreground">
                  Through our student mentorship program, we invest in the next generation of legal professionals,
                  ensuring that Kenya continues to have skilled advocates who understand both traditional and emerging
                  legal challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
