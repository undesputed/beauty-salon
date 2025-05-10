import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  title: string
  excerpt: string
  imageSrc: string
  imageAlt: string
  date: string
  slug: string
}

export function BlogCard({ title, excerpt, imageSrc, imageAlt, date, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="mr-1 h-4 w-4" />
          {date}
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full border-tutor-gold text-tutor-gold hover:bg-tutor-gold hover:text-tutor-black"
        >
          <Link href={`/blog/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
