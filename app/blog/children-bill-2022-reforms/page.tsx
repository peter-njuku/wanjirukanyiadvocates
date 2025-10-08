import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ChildrenBillPost() {
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
              Children's Law
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Kenya's New Children Bill 2022: What's Changing?
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>6 min read</span>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r">
              <p className="text-cyan-800 font-medium">
                Major reforms including raised age of criminal responsibility, free legal aid for children, and new kinship adoption procedures.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            <h2>Landmark Reforms in Children's Rights</h2>
            
            <p>Kenya has taken a significant step forward in protecting children's rights with the signing of the Children Bill 2022 into law. This comprehensive legislation introduces several groundbreaking changes that will transform how we handle children's matters in the justice system.</p>

            <h3>Diversion from Court System</h3>
            <p>Children in conflict with the law, especially those accused of committing minor offenses, will no longer be automatically taken through the traditional court system. Instead, they will be diverted to community-based systems that focus on rehabilitation rather than punishment.</p>

            <h3>Free Legal Aid for All Children</h3>
            <p>One of the most significant provisions is that <strong>all children coming into conflict with the law will be provided with free legal aid</strong>. This ensures that every child, regardless of their economic background, can navigate the justice system with proper legal representation.</p>

            <h3>Raised Age of Criminal Responsibility</h3>
            <p>The law raises the age of criminal responsibility from 8 years to 12 years, bringing Kenya in line with international standards and recognizing that younger children lack the maturity to understand the consequences of their actions.</p>

            <div className="bg-slate-50 p-6 rounded-lg my-8 border-l-4 border-cyan-400">
              <h4 className="text-cyan-700 font-semibold mb-3">Rights of Children with Disabilities</h4>
              <p>Children living with disabilities will now be accorded comprehensive support including:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Medical treatment</li>
                <li>Special care and education</li>
                <li>Training programs</li>
                <li>All provided free of charge</li>
              </ul>
            </div>

            <h3>Kinship Adoption</h3>
            <p>The law introduces a new concept of kinship adoption, which will enable relatives of adopted children to complete the process in a much cheaper, faster way that is devoid of legal technicalities. This makes it easier for children to stay within their extended family structures.</p>

            <h3>Child Welfare Fund</h3>
            <p>The legislation establishes a Child Welfare Fund to provide financial support for the implementation of these new provisions and ensure sustainable funding for children's programs across the country.</p>

            <div className="bg-cyan-50 p-6 rounded-lg mt-8">
              <h4 className="text-cyan-800 font-semibold">What This Means for Kenya</h4>
              <p>These reforms represent a major shift toward a more compassionate and effective juvenile justice system. By focusing on rehabilitation rather than punishment, providing free legal aid, and raising the age of criminal responsibility, Kenya is taking significant steps to protect its most vulnerable citizens and ensure every child has the opportunity to thrive.</p>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Disclaimer: This article provides general information and does not constitute legal advice. For specific legal guidance regarding children's law matters, please consult with a qualified advocate.</em>
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
                  <p className="text-sm text-slate-600">How data protection laws safeguard children's digital safety</p>
                </div>
              </Link>
              <Link href="/blog/student-mentorship-program" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Student Mentorship Program
                  </h4>
                  <p className="text-sm text-slate-600">Bridging the gap between legal theory and practice</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}