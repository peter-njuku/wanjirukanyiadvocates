import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share, Shield, AlertTriangle, BookOpen, Scale } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CyberbullyingPost() {
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
              Cyber Law
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Cyberbullying in Kenya: Offenses, Effects, and Legal Remedies
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>March 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r">
              <p className="text-red-800 font-medium">
                Understanding the Computer Misuse and Cyber Crimes Act 2018 and how to protect yourself from online harassment, 
                with penalties up to KES 20,000,000 or 10 years imprisonment.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg mb-8 text-center">
              <Shield className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Computer Misuse and Cyber Crimes Act, 2018</h3>
              <p className="text-cyan-100">Your legal protection against online harassment in Kenya</p>
            </div>

            <h2>What is Cyberbullying and Cyber Harassment?</h2>
            
            <p>Cyberbullying and cyber harassment refer to harassment that occurs through the use of telecommunication and digital devices such as phones, computers, and tablets. This harassment can also occur through social media platforms used to share information that can be accessed by many people.</p>

            <div className="bg-slate-50 p-6 rounded-lg my-6 border-l-4 border-cyan-400">
              <h4 className="text-slate-900 font-semibold mb-3">Examples of Cyberbullying</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Sharing false information about someone</li>
                <li>Sharing mean or harmful content about a person</li>
                <li>Sending abusive emails, texts, or WhatsApp messages</li>
                <li>Sharing private information that may lead to embarrassment or humiliation</li>
                <li>Posting or sending harmful and negative content about someone</li>
              </ul>
            </div>

            <h2>Legal Framework: Section 27 of the Computer Misuse and Cyber Crimes Act</h2>
            
            <p>The Act provides that a person who willfully communicates directly or indirectly with another person, knowing that their conduct is likely to cause the recipient:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-500 mb-2" />
                <h4 className="font-semibold text-slate-900">Apprehension & Fear</h4>
                <p className="text-sm text-slate-600">Causing fear of violence or property damage</p>
              </div>
              
              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-500 mb-2" />
                <h4 className="font-semibold text-slate-900">Negative Impact</h4>
                <p className="text-sm text-slate-600">Communication that negatively affects the receiver</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-500 mb-2" />
                <h4 className="font-semibold text-slate-900">Offensive Content</h4>
                <p className="text-sm text-slate-600">Grossly offensive and indecent communication</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-500 mb-2" />
                <h4 className="font-semibold text-slate-900">Intimidation</h4>
                <p className="text-sm text-slate-600">Conduct meant to intimidate or threaten</p>
              </div>
            </div>

            <h2>Punishment for Cyberbullying Offenses</h2>
            
            <div className="bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-400">
              <h4 className="text-red-800 font-semibold mb-3">Severe Penalties</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-red-700">KES 20,000,000</p>
                  <p className="text-sm text-red-600">Maximum fine</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-700">10 Years</p>
                  <p className="text-sm text-red-600">Imprisonment term</p>
                </div>
              </div>
              <p className="text-red-700 text-sm mt-3">Or both fine and imprisonment</p>
            </div>

            <h2>Devastating Effects of Cyberbullying</h2>
            
            <div className="bg-amber-50 p-6 rounded-lg my-6">
              <h4 className="text-amber-800 font-semibold mb-3">Psychological and Physical Impact</h4>
              <ul className="list-disc list-inside space-y-2 text-amber-700">
                <li>Feelings of fear, anxiety, and unsafety</li>
                <li>Deterioration of mental and physical health</li>
                <li>Self-harm and suicidal tendencies</li>
                <li>Loss of concentration and poor academic performance</li>
                <li>Severe loss of self-esteem and confidence</li>
              </ul>
            </div>

            <h2>What to Do If You're Being Cyberbullied</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-6 border-l-4 border-green-400">
              <h4 className="text-green-800 font-semibold mb-3">Immediate Action Steps</h4>
              <ol className="list-decimal list-inside space-y-3 text-green-700">
                <li><strong>Preserve Evidence:</strong> Save text messages, voice notes, social media posts, direct messages, images, and screenshots</li>
                <li><strong>File a Complaint:</strong> Report to the Directorate of Criminal Investigations (DCI)</li>
                <li><strong>Visit Police Station:</strong> Most stations have dedicated Cyber Crime offices</li>
                <li><strong>Legal Representation:</strong> Engage a qualified advocate to represent you</li>
                <li><strong>Platform Reporting:</strong> Report the content to the social media platform</li>
              </ol>
            </div>

            <h2>Understanding the Scope of Cyberbullying</h2>
            
            <p>Cyberbullying can be perpetrated by friends, workmates, family members, school mates, or acquaintances. Bullies often take advantage of their position of power, strength (physical or financial), or popularity to belittle, shame, taunt, threaten, or physically harass their victims.</p>

            <div className="bg-slate-100 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Key Characteristics</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Can occur in both public and private settings</li>
                <li>Affects both adults and children</li>
                <li>Makes victims feel alone, incapable, humiliated, and trapped</li>
                <li>Violates fundamental human rights</li>
                <li>A criminal offense in Kenya and internationally</li>
              </ul>
            </div>

            <h2>Prevention and Awareness</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-white p-4 border border-slate-200 rounded-lg text-center">
                <BookOpen className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Policy Development</h4>
                <p className="text-sm text-slate-600">Schools and organizations should implement cyberbullying policies</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg text-center">
                <Scale className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Awareness Programs</h4>
                <p className="text-sm text-slate-600">Sensitize employees, students, and the public about cyberbullying dangers</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg text-center">
                <Shield className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Safe Environments</h4>
                <p className="text-sm text-slate-600">Create spaces where victims feel safe to report incidents</p>
              </div>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg my-8 border-l-4 border-cyan-400">
              <h4 className="text-cyan-800 font-semibold mb-3">Legal Support Available</h4>
              <p>At Wanjiru Kanyi Law Advocates, we provide comprehensive legal representation for cyberbullying cases. Our expertise in the Computer Misuse and Cyber Crimes Act ensures that victims receive the protection and justice they deserve.</p>
              <div className="mt-4 p-4 bg-white rounded">
                <p className="text-slate-700 font-medium">📍 ACK Mustard Seed Complex, Ground Floor</p>
                <p className="text-slate-700 font-medium">📞 Calls/WhatsApp: 0792932136</p>
                <p className="text-slate-600 text-sm">Waiyaki Way, Uthiru, Nairobi</p>
              </div>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Disclaimer: This article provides general information about cyberbullying laws in Kenya and does not constitute legal advice. For specific legal guidance regarding cyberbullying cases, please consult with a qualified advocate.</em>
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
                  <p className="text-sm text-slate-600">Safeguarding children's digital safety through data protection laws</p>
                </div>
              </Link>
              <Link href="/blog/data-protection-act-analysis" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Data Protection Act 2019: Who is Protected and How?
                  </h4>
                  <p className="text-sm text-slate-600">Understanding Kenya's comprehensive data protection framework</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}