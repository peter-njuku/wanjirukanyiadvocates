import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share, Scale as ScaleIcon, FileText, Users, Home, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SuccessionGuidePost() {
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
              Succession Law
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Succession and Inheritance in Kenya: A Comprehensive Guide
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>February 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>10 min read</span>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r">
              <p className="text-cyan-800 font-medium">
                Complete guide to navigating Kenya's Law of Succession Act, from obtaining grants of administration 
                to handling polygamous family distributions and understanding your rights as a beneficiary.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg mb-8 text-center">
              <ScaleIcon className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">The Law of Succession Act</h3>
              <p className="text-cyan-100">Understanding the legal framework for property redistribution in Kenya</p>
            </div>

            <h2>What is Succession?</h2>
            
            <p>Succession is defined as <strong>"the transfer or redistribution of the property of the deceased, to the person or persons entitled, either by will or by operation of law."</strong> This is what is commonly known as <em>'kushtaki kifo'</em> in Swahili.</p>

            <div className="bg-amber-50 p-6 rounded-lg my-6 border-l-4 border-amber-400">
              <AlertCircle className="h-6 w-6 text-amber-600 float-left mr-4" />
              <h4 className="text-amber-800 font-semibold mb-2">Important Legal Notice</h4>
              <p className="text-amber-700">
                It is an offence to interfere with the property of the deceased without the authority of the Court. 
                This authority is called a <strong>Grant of Letters of Administration</strong>.
              </p>
            </div>

            <h2>Intestate Succession: When There's No Will</h2>
            
            <p>Most people in Kenya die without a will (intestate). They leave property including land, cars, real estate, money in bank accounts, companies, and crops that are registered in their name.</p>

            <h2>Who Can Apply for Letters of Administration?</h2>
            
            <div className="bg-slate-50 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Order of Priority for Applicants</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li><strong>Surviving spouse/spouses</strong></li>
                <li><strong>Children</strong> of the deceased</li>
                <li><strong>Parents</strong> of the deceased</li>
                <li><strong>Brothers and sisters</strong> of the deceased</li>
                <li><strong>Any relatives</strong> of the deceased (nearest blood relation)</li>
                <li><strong>Public Trustees</strong></li>
                <li><strong>Creditors</strong></li>
              </ol>
            </div>

            <h2>Required Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <FileText className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">Mandatory Documents</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Death Certificate</strong> - Most important document</li>
                  <li><strong>Letter from the Local Chief</strong> identifying beneficiaries and relationship to deceased</li>
                  <li><strong>List of all beneficiaries</strong> with their Identity Cards</li>
                  <li><strong>Full inventory</strong> of the deceased's assets and liabilities</li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-cyan-600 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-3">About the Administrator</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>The person to whom a grant is issued</li>
                  <li>Can be 1-4 people from the beneficiary list</li>
                  <li>Duty is to distribute the estate to beneficiaries</li>
                  <li>All beneficiaries must consent to the administrator</li>
                  <li>Administrators do not own the properties</li>
                </ul>
              </div>
            </div>

            <h2>The Succession Process Timeline</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="text-blue-800 font-semibold mb-3">Key Steps and Timeframes</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Application Submission</p>
                    <p className="text-blue-700 text-sm">Submit complete documentation to the court</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Kenya Gazette Advertisement</p>
                    <p className="text-blue-700 text-sm">Mandatory public notice of the application</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Grant Issuance</p>
                    <p className="text-blue-700 text-sm">Court issues Grant of Letters of Administration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-700 font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">6-Month Waiting Period</p>
                    <p className="text-blue-700 text-sm">Allows for any protests or objections</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-700 font-bold">5</span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Confirmation of Grant</p>
                    <p className="text-blue-700 text-sm">Final distribution of assets to beneficiaries</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Limited Grants for Urgent Matters</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-400">
              <h4 className="text-green-800 font-semibold mb-3">Expedited Process for Emergency Situations</h4>
              <p className="text-green-700 mb-3">Limited grants are short-term grants only limited to specific purposes and take relatively shorter time than the main grant.</p>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li><strong>School Fees</strong> for dependents</li>
                <li><strong>Medical Expenses</strong> for family members</li>
                <li><strong>Perishing Assets</strong> like crops at risk of spoilage</li>
                <li><strong>Legal Cases</strong> where the estate needs to sue or is being sued</li>
                <li><strong>Fatal Accident Claims</strong> where family is claiming compensation</li>
              </ul>
            </div>

            <h2>Special Considerations</h2>
            
            <h3>Polygamous Families</h3>
            <div className="bg-purple-50 p-6 rounded-lg my-4">
              <p className="text-purple-800">
                In polygamous families, the property (household effects and residue of the estate) of the deceased 
                is divided according to the number of children in each house <strong>plus the wife</strong>.
              </p>
              <p className="text-purple-800 mt-2">
                The deceased's children are equal, whether dead, married, of unsound mind, male or female.
              </p>
            </div>

            <h3>Inclusion of Omitted Beneficiaries</h3>
            <div className="bg-amber-50 p-4 rounded-lg my-4">
              <p className="text-amber-800">
                If anyone feels they are a rightful beneficiary and have been left out or inadequately provided for, 
                they can apply to Court to be included as beneficiaries of the estate.
              </p>
            </div>

            <h3>Additional Claimants</h3>
            <div className="bg-slate-100 p-4 rounded-lg my-4">
              <p className="text-slate-700">
                This includes anyone claiming to be a wife of the deceased, or a child believed to be previously 
                maintained or sired by the deceased.
              </p>
            </div>

            <h2>Property Transactions During Succession</h2>
            
            <div className="bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-400">
              <AlertCircle className="h-6 w-6 text-red-600 float-left mr-4" />
              <h4 className="text-red-800 font-semibold mb-2">Critical Legal Requirement</h4>
              <p className="text-red-700">
                If you intend to buy land that is in the name of the deceased, it <strong>must be transferred to you by the administrator</strong>. 
                Any transaction without proper succession proceedings is illegal and void.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg my-8 border-l-4 border-cyan-400">
              <h4 className="text-cyan-800 font-semibold mb-3">Professional Legal Assistance</h4>
              <p>Navigating succession matters can be complex, especially with polygamous families, disputed beneficiaries, or large estates. Our firm provides comprehensive succession legal services including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ul className="list-disc list-inside space-y-1 text-cyan-700">
                  <li>Grant application preparation</li>
                  <li>Beneficiary identification</li>
                  <li>Asset valuation and inventory</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-cyan-700">
                  <li>Court representation</li>
                  <li>Dispute resolution</li>
                  <li>Property transfer facilitation</li>
                </ul>
              </div>
              <div className="mt-4 p-4 bg-white rounded">
                <p className="text-slate-700 font-medium">📍 ACK Mustard Seed Complex, Ground Floor, Uthiru</p>
                <p className="text-slate-700 font-medium">📞 Calls/WhatsApp: 0792932136</p>
                <p className="text-slate-600 text-sm">Waiyaki Way, Nairobi | wanjirukanyilawa@gmail.com</p>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-2">Did You Know?</h4>
              <p className="text-slate-700 text-sm">
                We conduct regular <strong>Land & Inheritance Legal Service Weeks</strong> offering walk-in consultations 
                for succession matters. Follow our social media for upcoming dates.
              </p>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Disclaimer: This guide provides general information about succession law in Kenya and does not constitute legal advice. Laws and procedures may change. For specific succession matters, please consult with a qualified advocate.</em>
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/land-inheritance-service-week" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Land & Inheritance Legal Service Week
                  </h4>
                  <p className="text-sm text-slate-600">Specialized consultation services for property and succession matters</p>
                </div>
              </Link>
              <Link href="/blog/children-bill-2021-reforms" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Kenya's New Children Bill 2021
                  </h4>
                  <p className="text-sm text-slate-600">Understanding recent reforms in children's inheritance rights</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}