import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { BlogCard } from "@/components/ui/blog-card"

export const metadata: Metadata = {
  title: "Blog",
  description: "Beauty tips, trends, and updates from Tutor Beauty Salon and Spa in Ubay, Bohol.",
}

// Sample blog data
const blogPosts = [
  {
    title: "5 Tips for Maintaining Healthy Hair Between Salon Visits",
    excerpt: "Keep your locks looking salon-fresh with these easy-to-follow tips for at-home hair care.",
    imageSrc: "/placeholder.svg?height=600&width=800&query=woman%20with%20healthy%20hair",
    imageAlt: "Woman with healthy hair",
    date: "May 10, 2023",
    slug: "healthy-hair-tips",
  },
  {
    title: "The Ultimate Guide to Nail Care: Do's and Don'ts",
    excerpt: "Learn how to maintain beautiful, healthy nails with our comprehensive guide to nail care.",
    imageSrc: "https://v0.blob.com/WjL8Z  healthy nails with our comprehensive guide to nail care.",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb2b73bc-584d-4c93-bd34-adb516aecdfe-oQSag3lHHAeA5RBQk8tu0DgEmkN6NU.jpeg",
    imageAlt: "Nail Polish Collection",
    date: "April 25, 2023",
    slug: "nail-care-guide",
  },
  {
    title: "Microblading vs. Ombre Brows: Which is Right for You?",
    excerpt: "Understand the differences between these popular brow techniques to make the best choice for your face.",
    imageSrc: "/eyebrow-microblading.png",
    imageAlt: "Eyebrow microblading",
    date: "April 12, 2023",
    slug: "microblading-vs-ombre",
  },
  {
    title: "Summer Beauty Trends to Try This Season",
    excerpt: "Stay ahead of the curve with these hot summer beauty trends that are taking over in 2023.",
    imageSrc: "/placeholder.svg?height=600&width=800&query=summer%20beauty%20trends",
    imageAlt: "Summer beauty trends",
    date: "March 30, 2023",
    slug: "summer-beauty-trends",
  },
  {
    title: "Self-Care Rituals to Incorporate into Your Beauty Routine",
    excerpt: "Enhance your beauty routine with these simple yet effective self-care practices for mind and body.",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48e26109-05fe-4708-a57d-ab658ac3848d-fCKGUZPKn1nj5rhi42qhHO3G7aQbR9.jpeg",
    imageAlt: "Salon Waiting Area",
    date: "March 15, 2023",
    slug: "self-care-rituals",
  },
  {
    title: "How to Prepare for Your First Microblading Session",
    excerpt: "Everything you need to know before getting microblading done for the first time.",
    imageSrc: "/placeholder.svg?height=600&width=800&query=microblading%20preparation",
    imageAlt: "Microblading preparation",
    date: "February 28, 2023",
    slug: "microblading-preparation",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-tutor-black text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Beauty Blog"
            subtitle="Tips, trends, and insights from our beauty experts."
            centered
            className="text-white"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
