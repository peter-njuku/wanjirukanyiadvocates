import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share, BookOpen, GraduationCap, Users, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MentorshipProgramPost() {
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
              Legal Education
            </Badge>
            
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Student Mentorship Program: Bridging Theory and Practice
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Wanjiru Kanyi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>March 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>5 min read</span>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r">
              <p className="text-cyan-800 font-medium">
                Our comprehensive mentorship program for law students and aspiring legal professionals across Kenya, 
                offering practical skills and real-world experience.
              </p>
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900">
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg mb-8 text-center">
              <GraduationCap className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Transforming Legal Education</h3>
              <p className="text-slate-700">Bridging the gap between academic theory and practical legal practice</p>
            </div>

            <h2>About Our Mentorship Program</h2>
            
            <p>The Wanjiru Kanyi Law Advocates Student Mentorship Program is an educational initiative designed to offer opportunities for law students and intending law students to gain an understanding of the practical side of the law. The program serves as an introduction to the legal profession's various practice areas and provides hands-on experience that complements academic learning.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-cyan-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Engagement Formats</h3>
                <p className="text-slate-600 text-sm">Both one-on-one sessions and virtual engagements to accommodate different learning styles and schedules</p>
              </div>
              
              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
                <Target className="h-8 w-8 text-cyan-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Program Reach</h3>
                <p className="text-slate-600 text-sm">Available to students across Kenya, with virtual options making it accessible beyond geographical limitations</p>
              </div>
            </div>

            <h2>Eligibility Criteria</h2>
            
            <div className="bg-slate-50 p-6 rounded-lg my-6">
              <h4 className="text-slate-900 font-semibold mb-3">Who Can Apply?</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Law Students in Colleges and Universities</li>
                <li>Students at Kenya School of Law</li>
                <li>Young People intending to pursue law as a career</li>
                <li>Recent graduates seeking practical experience</li>
              </ul>
            </div>

            <h2>Benefits of the Program</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-100 p-2 rounded">
                    <BookOpen className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Legal Writing & Drafting</h4>
                </div>
                <p className="text-slate-600 text-sm">Learn basic legal writing, drafting, and research skills essential for legal practice</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-100 p-2 rounded">
                    <BookOpen className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">E-Filing Proficiency</h4>
                </div>
                <p className="text-slate-600 text-sm">Master the use of the judiciary e-filing portal for efficient case management</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-100 p-2 rounded">
                    <BookOpen className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Court Observation</h4>
                </div>
                <p className="text-slate-600 text-sm">Attend and observe virtual court sessions to understand courtroom procedures</p>
              </div>

              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-100 p-2 rounded">
                    <BookOpen className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Legal Research</h4>
                </div>
                <p className="text-slate-600 text-sm">Learn to utilize Kenya Law Online Database for comprehensive legal research</p>
              </div>
            </div>

            <h3>Additional Learning Outcomes</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 my-6">
              <li>Familiarize yourself with various court documents and their purposes</li>
              <li>Learn to find, understand, and analyze laws and cases effectively</li>
              <li>Understand procedures and processes in different court registries</li>
              <li>Gain exposure to various practice areas within the legal profession</li>
              <li>Develop professional networking skills within the legal community</li>
            </ul>

            <div className="bg-cyan-50 p-6 rounded-lg my-8 border-l-4 border-cyan-400">
              <h4 className="text-cyan-800 font-semibold mb-3">Program Philosophy</h4>
              <p>We believe that practical experience is just as important as academic knowledge in shaping competent legal professionals. Our mentorship program is designed to bridge the gap between classroom learning and real-world legal practice, ensuring that the next generation of lawyers is well-prepared to serve their communities effectively.</p>
            </div>

            <h2>How to Join</h2>
            
            <div className="bg-slate-900 text-white p-6 rounded-lg my-6">
              <h4 className="text-cyan-300 font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span> +254792932136
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span> wanjirukanyilawa@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Social Media:</span> Wanjiru Kanyi Law
                </p>
              </div>
              <p className="mt-4 text-cyan-100 text-sm">
                Reach out to us to learn more about the application process and upcoming program cycles.
              </p>
            </div>

            <p className="text-sm text-slate-500 mt-12">
              <em>Note: The mentorship program is offered on a rolling basis with limited slots available. Early application is encouraged to secure placement.</em>
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/children-bill-2022-reforms" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Kenya's New Children Bill 2022: What's Changing?
                  </h4>
                  <p className="text-sm text-slate-600">Major reforms in children's rights and juvenile justice</p>
                </div>
              </Link>
              <Link href="/blog/data-protection-act-analysis" className="group">
                <div className="p-4 border border-slate-200 rounded-lg hover:border-cyan-300 transition-colors">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 mb-2">
                    Data Protection Act 2019: Who is Protected and How?
                  </h4>
                  <p className="text-sm text-slate-600">Understanding Kenya's data protection landscape</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}