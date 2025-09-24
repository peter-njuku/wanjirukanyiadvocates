import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share, Shield, FileText, Scale as ScaleIcon, Users, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DataProtectionAnalysisPost() {
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
              Data Protection
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Data Protection Act 2019: Who is Protected and How?
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>February 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>7 min read</span>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r">
              <p className="text-cyan-800 font-medium">
                Comprehensive analysis of Kenya's Data Protection Act 2019, landmark court cases, explicit consent requirements, 
                and understanding who qualifies for protection under the law.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg mb-8 text-center">
              <Shield className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Data Protection Act, 2019</h3>
              <p className="text-cyan-100">Kenya's comprehensive framework for personal data privacy and protection</p>
            </div>

            <h2>Overview of the Data Protection Act</h2>
            
            <p>Kenya's data protection laws are contained in the Data Protection Act of 2019. The Act aims to enhance the protection of personal data and ensure the privacy of individuals in the digital age.</p>

            <div className="bg-slate-50 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Key Objectives of the Act</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Define what constitutes personal data</li>
                <li>Outline the rights of data subjects</li>
                <li>Establish requirements for explicit consent</li>
                <li>Define roles of data controllers and processors</li>
                <li>Create the Office of the Data Protection Commissioner</li>
                <li>Provide mechanisms for complaint handling</li>
              </ul>
            </div>

            <h2>The Crucial Requirement: Explicit Consent</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-400">
              <h4 className="text-green-800 font-semibold mb-3">What Constitutes Valid Consent?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-700 mb-2">✅ Required Elements</h5>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>Individuals must be fully informed</li>
                    <li>Consent must be freely given</li>
                    <li>No coercion or pressure</li>
                    <li>Clear and unambiguous</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-green-700 mb-2">✅ Specificity Requirements</h5>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>Given for specific purposes</li>
                    <li>Clear understanding of data usage</li>
                    <li>Right to withdraw at any time</li>
                    <li>Control over data sharing</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Landmark Case: Allen Gichuhi & 2 Others v Data Protection Commissioner</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-400">
              <ScaleIcon className="h-8 w-8 text-blue-600 float-left mr-4" />
              <h4 className="text-blue-800 font-semibold mb-2">High Court Clarification (Application E202 of 2023)</h4>
              <div className="space-y-3 text-blue-700">
                <p><strong>Key Finding 1:</strong> The Court affirmed that only <strong>natural and identifiable persons</strong> are protected by the DPA.</p>
                <p><strong>Key Finding 2:</strong> The role of the Data Protection Commissioner is restricted to the unlawful processing of personal data belonging to individuals.</p>
                <p><strong>Key Finding 3:</strong> Trade secrets and breach of confidentiality matters are <strong>not within the DPC's mandate</strong>.</p>
              </div>
            </div>

            <h2>Who is Protected Under the Act?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">✅ Protected Entities</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Natural persons</strong> (individuals)</li>
                  <li>Referred to as <em>'data subjects'</em></li>
                  <li>Kenyan residents</li>
                  <li>Identifiable individuals</li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <AlertCircle className="h-8 w-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">❌ Not Protected</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Businesses and corporate entities</li>
                  <li>NGOs and organizations</li>
                  <li>Law firms and partnerships</li>
                  <li>Non-residents of Kenya</li>
                </ul>
              </div>
            </div>

            <h2>Filing Complaints for Data Breaches</h2>
            
            <div className="bg-amber-50 p-6 rounded-lg my-6">
              <h4 className="text-amber-800 font-semibold mb-3">Complaint Procedure</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-700 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">Identify the Breach</p>
                    <p className="text-amber-700 text-sm">Unauthorized access, sharing, or use of personal data</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-700 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">Gather Evidence</p>
                    <p className="text-amber-700 text-sm">Document the breach and collect supporting materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-700 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">File Complaint</p>
                    <p className="text-amber-700 text-sm">Submit to Office of the Data Protection Commissioner</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <span className="text-amber-700 font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900">Legal Representation</p>
                    <p className="text-amber-700 text-sm">Can be done personally or through an advocate</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Special Focus: Children's Data Protection</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg my-6 border-l-4 border-purple-400">
              <h4 className="text-purple-800 font-semibold mb-3">Enhanced Protection for Minors</h4>
              <p className="text-purple-700 mb-3">
                The Act provides special safeguards for children's data, requiring explicit consent from parents or guardians for any data processing involving minors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Parental consent mandatory for children's data</li>
                <li>Applies to images, videos, and sensitive information</li>
                <li>Includes schools, hospitals, and all data processors</li>
                <li>Heavy penalties for breaches involving children</li>
              </ul>
            </div>

            <h2>Responsibilities of Data Controllers and Processors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <FileText className="h-6 w-6 text-cyan-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-2">Data Controllers</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  <li>Determine purposes and means of processing</li>
                  <li>Ensure compliance with the Act</li>
                  <li>Implement security measures</li>
                  <li>Maintain processing records</li>
                </ul>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <FileText className="h-6 w-6 text-cyan-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-2">Data Processors</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  <li>Process data on controller's behalf</li>
                  <li>Implement technical security</li>
                  <li>Maintain confidentiality</li>
                  <li>Assist controllers with compliance</li>
                </ul>
              </div>
            </div>

            <h2>Penalties for Non-Compliance</h2>
            
            <div className="bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-400">
              <AlertCircle className="h-6 w-6 text-red-600 float-left mr-4" />
              <h4 className="text-red-800 font-semibold mb-2">Substantial Financial Penalties</h4>
              <p className="text-red-700">
                The Act provides for significant fines for violations, particularly in cases involving children's data 
                or sensitive personal information. Recent cases have demonstrated the serious financial consequences of non-compliance.
              </p>
            </div>

            <h2>Practical Implications for Kenyan Organizations</h2>
            
            <div className="bg-slate-100 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Compliance Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Develop comprehensive data protection policies</li>
                <li>Implement consent management systems</li>
                <li>Train staff on data handling procedures</li>
                <li>Establish breach response protocols</li>
                <li>Maintain accurate data processing records</li>
                <li>Conduct regular compliance audits</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg my-8 border-l-4 border-cyan-400">
              <h4 className="text-cyan-800 font-semibold mb-3">Expert Legal Guidance Available</h4>
              <p>Navigating the Data Protection Act requires specialized knowledge. Our firm provides comprehensive data protection services including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ul className="list-disc list-inside space-y-1 text-cyan-700">
                  <li>Compliance audits and assessments</li>
                  <li>Policy development and implementation</li>
                  <li>Data protection impact assessments</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-cyan-700">
                  <li>Breach response and management</li>
                  <li>DPC complaint representation</li>
                  <li>Staff training and awareness</li>
                </ul>
              </div>
              <div className="mt-4 p-4 bg-white rounded">
                <p className="text-slate-700 font-medium">📍 ACK Mustard Seed Complex, Ground Floor, Uthiru</p>
                <p className="text-slate-700 font-medium">📞 Calls/WhatsApp: 0792932136</p>
                <p className="text-slate-600 text-sm">Specialists in Data Protection and Cyber Law</p>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-700 text-sm">
                Data protection laws are evolving rapidly. Follow our blog and social media for updates on new regulations, 
                court decisions, and compliance requirements under the Data Protection Act.
              </p>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Disclaimer: This analysis provides general information about Kenya's Data Protection Act 2019 and does not constitute legal advice. Laws and interpretations may change. For specific data protection matters, please consult with a qualified advocate.</em>
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/children-data-protection" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Tots in Safe Spaces: Protecting Children Through Data Privacy
                  </h4>
                  <p className="text-sm text-slate-600">Special focus on children's data protection under the Act</p>
                </div>
              </Link>
              <Link href="/blog/cybercrime-legal-remedies" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Computer misuse and cyber crimes in Kenya: Offenses, Effects, and Legal Remedies
                  </h4>
                  <p className="text-sm text-slate-600">Understanding related computer misuse and cyber crimes</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}