import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Sample data for demonstration
  return {
    title: "5 Tips for Maintaining Healthy Hair Between Salon Visits",
    excerpt: "Keep your locks looking salon-fresh with these easy-to-follow tips for at-home hair care.",
    content: `
      <p>Having beautiful, healthy hair doesn't just happen during your salon visits. Proper hair care between appointments is crucial for maintaining that salon-fresh look and feel. Here are five essential tips to keep your locks looking their best until your next visit to Tutor Beauty Salon.</p>
      
      <h2>1. Use Professional Hair Products</h2>
      <p>The products you use at home make a significant difference in your hair's health and appearance. While drugstore options might seem economical, professional products are formulated with higher-quality ingredients that provide better results. At Tutor Beauty Salon, we recommend products specifically tailored to your hair type and concerns.</p>
      
      <h2>2. Protect Your Hair from Heat</h2>
      <p>Heat styling tools like blow dryers, flat irons, and curling wands can cause significant damage if used improperly. Always apply a heat protectant before styling, keep your tools at a moderate temperature, and try to incorporate heat-free styling days into your routine.</p>
      
      <h2>3. Regular Deep Conditioning</h2>
      <p>Deep conditioning treatments should be part of your regular hair care routine, especially if you have color-treated or chemically processed hair. Apply a deep conditioner or hair mask once a week to replenish moisture and nutrients.</p>
      
      <h2>4. Gentle Handling and Brushing</h2>
      <p>Treat your hair gently, especially when it's wet and more vulnerable to breakage. Use a wide-tooth comb or a brush designed for wet hair, and always start detangling from the ends, working your way up to the roots.</p>
      
      <h2>5. Protect Your Hair While Sleeping</h2>
      <p>Cotton pillowcases can cause friction that leads to frizz and breakage. Switch to a silk or satin pillowcase, or wrap your hair in a silk scarf before bed to minimize damage and maintain your style longer.</p>
      
      <p>By following these simple tips, you can maintain your hair's health and beauty between salon visits. Remember, consistent care is key to achieving and maintaining the hair of your dreams!</p>
      
      <p>Have specific questions about your hair care routine? Our stylists at Tutor Beauty Salon are always happy to provide personalized advice during your next appointment.</p>
    `,
    author: "Hair Care Team",
    date: "May 10, 2023",
    imageSrc: "/placeholder.svg?height=800&width=1200&query=woman%20with%20healthy%20hair",
    imageAlt: "Woman with healthy hair",
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.imageSrc,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6 -ml-4 text-gray-600 hover:text-pink-600">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">{post.title}</h1>

          <div className="flex items-center text-sm text-gray-500 mb-8">
            <div className="flex items-center mr-6">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={post.imageSrc || "/placeholder.svg"}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>

        <div className="prose prose-pink max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
