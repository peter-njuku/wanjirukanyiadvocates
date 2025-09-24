import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share, Home, Scale as ScaleIcon, FileText, MapPin, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

export default function LandInheritanceServiceWeekPost() {
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
              Property Law & Succession
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Land & Inheritance Legal Service Week: Comprehensive Legal Support
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>February 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>5 min read</span>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r">
              <p className="text-cyan-800 font-medium">
                Specialized walk-in consultation week offering expert legal services for land transactions, 
                succession matters, and property rights from July 1-5, 2024.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg mb-8 text-center">
              <Home className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Land & Inheritance Legal Service Week</h3>
              <p className="text-cyan-100">July 1-5, 2024 | ACK St. Peters Uthiru, Mustard Seed Complex</p>
            </div>

            <h2>Invitation to Property Owners and Beneficiaries</h2>
            
            <p>The firm of <strong>Wanjiru Kanyi Law Advocates</strong> is pleased to invite you to our specialized Legal Consultation Week focusing exclusively on land and property matters, as well as succession and inheritance issues.</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-400">
              <Calendar className="h-8 w-8 text-blue-600 float-left mr-4" />
              <h4 className="text-blue-800 font-semibold mb-2">Event Details</h4>
              <div className="space-y-2 text-blue-700">
                <p><strong>Date:</strong> July 1-5, 2024</p>
                <p><strong>Time:</strong> Daily during office hours (No prior appointments needed)</p>
                <p><strong>Location:</strong> ACK St. Peters Uthiru, Mustard Seed Complex, Ground Floor, Unit G.05</p>
                <p><strong>Focus:</strong> Land, Property, and Succession matters only</p>
              </div>
            </div>

            <h2>Comprehensive Land Services Offered</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <FileText className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Contracts & Transactions</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Land-related contracts and agreements</li>
                  <li>Property transfers and conveyancing</li>
                  <li>Leases, licenses, and rights of access</li>
                  <li>Subdivisions and amalgamations</li>
                  <li>Change of user applications</li>
                  <li>Rectification of title documents</li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <ScaleIcon className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Legal Documentation</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Obtaining necessary consents</li>
                  <li>Paying rates and rents on behalf of clients</li>
                  <li>Property searches and due diligence</li>
                  <li>Caveats, cautions, and restrictions</li>
                  <li>Powers of attorney preparation</li>
                  <li>Trusts and trust deeds</li>
                </ul>
              </div>
            </div>

            <h2>Specialized Property Services</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-400">
              <Home className="h-8 w-8 text-green-600 float-left mr-4" />
              <h4 className="text-green-800 font-semibold mb-2">Advanced Property Solutions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  <li>Reconstruction of green cards</li>
                  <li>Lost title deed applications</li>
                  <li>General property advice</li>
                  <li>Title verification services</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  <li>Sourcing buyers/sellers representation</li>
                  <li>Property dispute resolution</li>
                  <li>Boundary dispute handling</li>
                  <li>Estate planning for property owners</li>
                </ul>
              </div>
            </div>

            <h2>Succession and Inheritance Services</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <ScaleIcon className="h-8 w-8 text-purple-600 float-left mr-4" />
              <h4 className="text-purple-800 font-semibold mb-2">Comprehensive Succession Support</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">Grant Applications</h5>
                  <ul className="list-disc list-inside space-y-1 text-purple-700">
                    <li>Letters of administration</li>
                    <li>Probate applications</li>
                    <li>Confirmation of grants</li>
                    <li>Limited grants for emergencies</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-2">Estate Management</h5>
                  <ul className="list-disc list-inside space-y-1 text-purple-700">
                    <li>Asset identification and valuation</li>
                    <li>Beneficiary identification</li>
                    <li>Estate distribution planning</li>
                    <li>Dispute resolution among heirs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Why Choose Our Service Week?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-white p-4 border border-slate-200 rounded-lg text-center">
                <Calendar className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">No Appointments Needed</h4>
                <p className="text-sm text-slate-600">Walk-in consultations during office hours</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg text-center">
                <ScaleIcon className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Specialized Expertise</h4>
                <p className="text-sm text-slate-600">Focused on land and succession matters only</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg text-center">
                <FileText className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Immediate Assistance</h4>
                <p className="text-sm text-slate-600">Same-day document review and advice</p>
              </div>
            </div>

            <h2>Target Audience</h2>
            
            <div className="bg-amber-50 p-6 rounded-lg my-6">
              <Users className="h-8 w-8 text-amber-600 float-left mr-4" />
              <h4 className="text-amber-800 font-semibold mb-2">Who Should Attend?</h4>
              <ul className="list-disc list-inside space-y-2 text-amber-700">
                <li>Property owners facing transaction challenges</li>
                <li>Beneficiaries of estates with property assets</li>
                <li>Individuals dealing with succession matters</li>
                <li>People with lost title documents</li>
                <li>Those needing property legal advice</li>
                <li>Anyone with land-related disputes</li>
                <li>Property buyers and sellers</li>
                <li>Estate administrators and executors</li>
              </ul>
            </div>

            <h2>Preparation for Consultation</h2>
            
            <div className="bg-slate-100 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Documents to Bring</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">For Land Matters</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Title documents</li>
                    <li>Search certificates</li>
                    <li>Sale agreements</li>
                    <li>Survey plans</li>
                    <li>Correspondence records</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">For Succession Matters</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Death certificate</li>
                    <li>Chief's letter</li>
                    <li>Beneficiary IDs</li>
                    <li>Asset inventory</li>
                    <li>Existing court documents</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-400">
              <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                Important Notice
              </span>
              <h4 className="text-red-800 font-semibold mb-2">Legal Services at a Fee</h4>
              <p className="text-red-700">
                Please note that while consultations are available without appointments, all legal services provided 
                during this week are offered at our standard professional fees. We offer transparent pricing and 
                will provide cost estimates before commencing any work.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg my-8 border-l-4 border-cyan-400">
              <h4 className="text-cyan-800 font-semibold mb-3">Contact Information & Location</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-cyan-700 mb-2">Office Location</h5>
                  <div className="flex items-start gap-2 text-cyan-700">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>ACK St. Peters Uthiru<br />Mustard Seed Complex<br />Ground Floor, Unit G.05<br />Next to Uthiru Girls School</span>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-cyan-700 mb-2">Contact Details</h5>
                  <div className="space-y-2 text-cyan-700">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>0792 932 136 (Calls/WhatsApp)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📧</span>
                      <span>wanjirukanyilawa@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏢</span>
                      <span>P.O Box 73088-00100, Nairobi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-2">Ongoing Services</h4>
              <p className="text-slate-700 text-sm">
                While this special week focuses on land and inheritance, our firm offers comprehensive legal services 
                year-round including family law, cyber law, data protection, and general legal consultations.
              </p>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Regards,<br />KanyiLegal - Wanjiru Kanyi Law Advocates</em>
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/succession-inheritance-guide" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Succession and Inheritance in Kenya: A Comprehensive Guide
                  </h4>
                  <p className="text-sm text-slate-600">Complete guide to navigating Kenya's Law of Succession Act</p>
                </div>
              </Link>
              <Link href="/blog/children-bill-2021-reforms" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Kenya's New Children Bill 2021: What's Changing?
                  </h4>
                  <p className="text-sm text-slate-600">Understanding children's inheritance rights reforms</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}