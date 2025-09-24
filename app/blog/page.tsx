import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, User, Clock } from "lucide-react"
import Header from "@/components/header"

const blogPosts = [
  {
    id: 1,
    title: "Kenya's New Children Bill 2021: What's Changing?",
    excerpt: "Major reforms including raised age of criminal responsibility, free legal aid for children, and new kinship adoption procedures.",
    date: "2024-03-15",
    author: "Wanjiru Kanyi",
    readTime: "6 min read",
    category: "Children's Law",
    slug: "children-bill-2021-reforms"
  },
  {
    id: 2,
    title: "Student Mentorship Program: Bridging Theory and Practice",
    excerpt: "Our comprehensive mentorship program for law students and aspiring legal professionals across Kenya.",
    date: "2024-03-10",
    author: "Wanjiru Kanyi",
    readTime: "5 min read",
    category: "Legal Education",
    slug: "student-mentorship-program"
  },
  {
    id: 3,
    title: "Computer misuse and cyber crimes in Kenya: Offenses, Effects, and Legal Remedies",
    excerpt: "Understanding the Computer Misuse and Cyber Crimes Act 2018 and how to protect yourself from online harassment.",
    date: "2024-03-05",
    author: "Wanjiru Kanyi",
    readTime: "8 min read",
    category: "Cyber Law",
    slug: "cybercrime-legal-remedies"
  },
  {
    id: 4,
    title: "Succession and Inheritance in Kenya: A Comprehensive Guide",
    excerpt: "Navigating the Law of Succession Act, from grants of administration to polygamous family distributions.",
    date: "2024-02-28",
    author: "Wanjiru Kanyi",
    readTime: "10 min read",
    category: "Succession Law",
    slug: "succession-inheritance-guide"
  },
  {
    id: 5,
    title: "Data Protection Act 2019: Who is Protected and How?",
    excerpt: "Analysis of Kenya's data protection laws, explicit consent requirements, and landmark court cases.",
    date: "2024-02-20",
    author: "Wanjiru Kanyi",
    readTime: "7 min read",
    category: "Data Protection",
    slug: "data-protection-act-analysis"
  },
  {
    id: 6,
    title: "Tots in Safe Spaces: Protecting Children Through Data Privacy",
    excerpt: "How the Data Protection Act safeguards children's digital safety and prevents exploitation.",
    date: "2024-02-15",
    author: "Wanjiru Kanyi",
    readTime: "6 min read",
    category: "Children's Law",
    slug: "children-data-protection"
  },
  {
    id: 7,
    title: "Land & Inheritance Legal Service Week: What We Covered",
    excerpt: "Recap of our specialized consultation week covering land transactions, succession, and property rights.",
    date: "2024-02-10",
    author: "Wanjiru Kanyi",
    readTime: "5 min read",
    category: "Property Law",
    slug: "land-inheritance-service-week"
  },
]

const categories = [
  "All Posts",
  "Children's Law",
  "Cyber Law",
  "Succession Law",
  "Data Protection",
  "Property Law",
  "Legal Education",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">Legal Insights & Updates</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Expert analysis on Kenyan law, cyber legislation, children's rights, and data protection from Wanjiru Kanyi Law Advocates.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 cursor-pointer px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200">
                {/* Blog Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                  <div className="text-cyan-600 opacity-50 group-hover:opacity-70 transition-opacity">
                    <Calendar className="h-16 w-16" />
                  </div>
                </div>

                <CardHeader>
                  <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-slate-900 group-hover:text-cyan-700 transition-colors text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="ghost" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 w-full">
                    <Link href={`/blog/${post.slug}`} className="flex items-center justify-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}