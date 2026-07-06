import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights & Blogs | Earney',
  description: 'Learn about AI automation, web development, app creation, and digital growth from the Earney team.',
}

// Temporary placeholder blogs until CMS/Markdown integration
const BLOGS = [
  {
    id: '1',
    title: 'How AI Agents are Replacing Traditional Chatbots',
    excerpt: 'Traditional chatbots rely on strict decision trees. AI agents understand intent, fetch data, and complete workflows automatically. Heres why businesses are upgrading.',
    date: 'Oct 24, 2024',
    readTime: '5 min read',
    category: 'AI Automation',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: '2',
    title: 'The Modern Web Stack: Why Next.js is Winning',
    excerpt: 'Performance, SEO, and developer experience. Exploring why we build all our high-end marketing sites and applications using Next.js and the App Router.',
    date: 'Oct 18, 2024',
    readTime: '6 min read',
    category: 'Web Development',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: '3',
    title: 'Why Your Marketing Funnel Needs AI Automation',
    excerpt: 'Stop leaking leads. How to use AI to automatically qualify inbound leads, answer their questions, and book them onto your sales calendar.',
    date: 'Oct 12, 2024',
    readTime: '4 min read',
    category: 'Digital Growth',
    gradient: 'from-fuchsia-500 to-pink-500',
  }
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6 mb-16">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-400/80 uppercase">
              <span className="w-4 h-px bg-violet-400/50" />
              // INSIGHTS
            </span>
            <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Thoughts on{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Tech & Growth
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Actionable advice on AI, automation, software development, and building systems that scale businesses.
            </p>
          </div>

          {/* Featured Post (First item) */}
          <div className="mb-12">
            <Link href={`/blogs/${BLOGS[0].id}`} className="group block relative rounded-3xl overflow-hidden bg-white/2 border border-white/6 hover:border-violet-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm text-white/50 font-mono">
                    <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{BLOGS[0].category}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {BLOGS[0].date}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold mb-4 group-hover:text-violet-300 transition-colors">
                    {BLOGS[0].title}
                  </h2>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    {BLOGS[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-violet-400 font-medium">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="hidden lg:block relative bg-white/5 border-l border-white/5 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-3xl group-hover:scale-105 transition-transform duration-700" />
                   <Image 
                     src="/recovered-assets/home05-image-suc1.png" 
                     alt="Featured blog post" 
                     fill 
                     className="object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity duration-500" 
                   />
                </div>
              </div>
            </Link>
          </div>

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOGS.slice(1).map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`} className="group block glass-card rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:text-white transition-colors">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-white/40 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {post.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-sm text-white/60 font-medium group-hover:text-white transition-colors">
                  Read more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/10 pointer-events-none" />
         <div className="max-w-2xl mx-auto text-center relative z-10">
           <h2 className="font-space-grotesk text-3xl font-bold mb-4">Stay ahead of the curve</h2>
           <p className="text-white/50 mb-8">Get our latest insights on AI, automation, and digital growth delivered to your inbox.</p>
           <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
             <input type="email" placeholder="Your email address" required className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 transition-colors" />
             <button type="submit" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
               Subscribe
             </button>
           </form>
         </div>
      </section>

      <Footer />
    </div>
  )
}
