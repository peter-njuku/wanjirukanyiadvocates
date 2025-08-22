import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share, Shield, AlertTriangle, Users, Baby, Lock, Scale } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ChildrenDataProtectionPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button asChild variant="ghost" className="text-cyan-600 hover:text-cyan-700">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 mb-4">
              Children's Law & Data Protection
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Tots in Safe Spaces: Protecting Children Through Data Privacy
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>February 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>6 min read</span>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r">
              <p className="text-cyan-800 font-medium">
                How the Data Protection Act 2019 provides enhanced safeguards for children's digital safety, 
                prevents exploitation, and ensures the best interests of the child remain paramount in the digital age.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg mb-8 text-center">
              <Baby className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Tots in Safe Spaces Initiative</h3>
              <p className="text-cyan-100">Promoting the safety of children through comprehensive data protection</p>
            </div>

            <h2>Enhanced Legal Protection for Children's Data</h2>
            
            <p>The Data Protection Act of 2019 provides specific and enhanced protections for children's personal information, recognizing their particular vulnerability in the digital space.</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-400">
              <Shield className="h-8 w-8 text-blue-600 float-left mr-4" />
              <h4 className="text-blue-800 font-semibold mb-2">Mandatory Parental Consent</h4>
              <p className="text-blue-700">
                The Act provides that anyone dealing with or processing data (controller/processor) involving information 
                relating to a child <strong>must obtain explicit consent from parents or guardians</strong>.
              </p>
            </div>

            <h2>What Constitutes Children's Data?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Protected Information</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Images and photographs</li>
                  <li>Videos and recordings</li>
                  <li>Real names and identities</li>
                  <li>School enrollment information</li>
                  <li>Residential addresses</li>
                  <li>Any sensitive information</li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Data Processors Include</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Schools and educational institutions</li>
                  <li>Hospitals and healthcare providers</li>
                  <li>Churches and religious organizations</li>
                  <li>Government agencies</li>
                  <li>Any organization handling children's data</li>
                </ul>
              </div>
            </div>

            <h2>Digital Dangers to Children</h2>
            
            <div className="bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-400">
              <AlertTriangle className="h-8 w-8 text-red-600 float-left mr-4" />
              <h4 className="text-red-800 font-semibold mb-2">Serious Risks of Data Exposure</h4>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li><strong>Child pornography:</strong> Images digitally manipulated and sold to pornographic sites</li>
                <li><strong>Grooming:</strong> Children accessible to pedophiles for sexual exploitation</li>
                <li><strong>Body shaming:</strong> Harassment based on appearances</li>
                <li><strong>Abduction targeting:</strong> Children targeted and abducted using location data</li>
                <li><strong>Sex slavery:</strong> Vulnerable children sold into trafficking rings</li>
                <li><strong>Personal vendettas:</strong> Children used to settle disputes between adults</li>
              </ul>
            </div>

            <h2>The Fundamental Principle: Best Interests of the Child</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-6 text-center">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-green-800 mb-2">
                "The best interests of the child are paramount"
              </h3>
              <p className="text-green-700">
                This guiding principle requires that all decisions regarding children's data must prioritize 
                their safety, security, and overall well-being above all other considerations.
              </p>
            </div>

            <h2>Consent Requirements for Children's Data</h2>
            
            <div className="bg-amber-50 p-6 rounded-lg my-6">
              <h4 className="text-amber-800 font-semibold mb-3">Informed Parental Consent Must Include</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">Transparency Requirements</h5>
                  <ul className="list-disc list-inside space-y-1 text-amber-700">
                    <li>Where the data will be stored</li>
                    <li>How the data will be used</li>
                    <li>Who will have access to the data</li>
                    <li>Duration of data retention</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">Parental Rights</h5>
                  <ul className="list-disc list-inside space-y-1 text-amber-700">
                    <li>Right to choose and control data usage</li>
                    <li>Right to withdraw consent at any time</li>
                    <li>Right to access and review stored data</li>
                    <li>Right to request data deletion</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Enforcement and Penalties</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg my-6 border-l-4 border-purple-400">
              <Scale className="h-8 w-8 text-purple-600 float-left mr-4" />
              <h4 className="text-purple-800 font-semibold mb-2">Office of the Data Protection Commissioner</h4>
              <div className="space-y-3 text-purple-700">
                <p>The Act establishes the Office of the Data Protection Commissioner which is mandated to receive complaints of infringements of children's data rights.</p>
                <p><strong>Heavy punitive fines</strong> apply for breaches involving children's data, as demonstrated in recent cases like the Roma School precedent.</p>
                <p>Complaints can be filed directly with the Commissioner's office by parents or through legal representatives.</p>
              </div>
            </div>

            <h2>Practical Steps for Parents and Guardians</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <Shield className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Protective Measures</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Review privacy policies of schools and organizations</li>
                  <li>Ask specific questions about data usage</li>
                  <li>Limit sharing of children's images online</li>
                  <li>Use privacy settings on social media</li>
                  <li>Educate children about digital safety</li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Vigilance Actions</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Monitor children's online activities</li>
                  <li>Check what information schools are collecting</li>
                  <li>Be cautious about location-sharing features</li>
                  <li>Regularly review app permissions</li>
                  <li>Report suspicious activities immediately</li>
                </ul>
              </div>
            </div>

            <h2>Creating a Culture of Safety</h2>
            
            <div className="bg-slate-100 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Collective Responsibility</h4>
              <p className="text-slate-700 mb-3">In this era of technological advancement, it is imperative for each person to exercise personal responsibility in safeguarding the safety, security and best interests of every child.</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Develop a culture of making complaints against violating platforms</li>
                <li>Report and flag images that indecently expose children</li>
                <li>Challenge institutions that violate data protection guidelines</li>
                <li>Support organizations that prioritize children's safety</li>
                <li>Advocate for stronger enforcement of existing laws</li>
              </ul>
            </div>

            <h2>Legal Recourse and Support</h2>
            
            <div className="bg-cyan-50 p-6 rounded-lg my-6 border-l-4 border-cyan-400">
              <h4 className="text-cyan-800 font-semibold mb-3">When to Seek Legal Help</h4>
              <p>If you suspect your child's data has been misused or improperly handled, immediate legal action may be necessary. Situations requiring legal intervention include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ul className="list-disc list-inside space-y-1 text-cyan-700">
                  <li>Unauthorized use of children's images</li>
                  <li>Data breaches involving minors</li>
                  <li>Refusal to provide consent information</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-cyan-700">
                  <li>Cyber crimes targeting children</li>
                  <li>Institutional non-compliance</li>
                  <li>Need for DPC complaints</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-lg my-8">
              <h3 className="text-2xl font-serif font-bold text-cyan-300 mb-4">Wanjiru Kanyi Law Advocates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cyan-100 mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <p>📍 ACK Mustard Seed Complex, Uthiru</p>
                    <p>📞 0792932136 (Calls/WhatsApp)</p>
                    <p>📧 wanjirukanyilawa@gmail.com</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-100 mb-3">Specialized Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-cyan-100">
                    <li>Data protection compliance advice</li>
                    <li>DPC complaint representation</li>
                    <li>Children's digital safety advocacy</li>
                    <li>School policy development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-2">Join the Movement</h4>
              <p className="text-slate-700 text-sm">
                Follow our "Tots in Safe Spaces" initiative for ongoing updates, resources, and advocacy efforts 
                aimed at creating safer digital environments for all children in Kenya.
              </p>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Disclaimer: This information provides general guidance on children's data protection under Kenyan law and does not constitute legal advice. For specific legal matters involving children's data, please consult with a qualified advocate.</em>
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/data-protection-act-analysis" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Data Protection Act 2019: Who is Protected and How?
                  </h4>
                  <p className="text-sm text-slate-600">Comprehensive analysis of Kenya's data protection framework</p>
                </div>
              </Link>
              <Link href="/blog/cybercrime-legal-remedies" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Computer misuse and cyber crimes in Kenya: Offenses, Effects, and Legal Remedies
                  </h4>
                  <p className="text-sm text-slate-600">Protecting children from online harassment and abuse</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}