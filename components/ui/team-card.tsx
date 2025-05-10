import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamCardProps {
  imageSrc: string
  imageAlt: string
  role: string
  caption?: string
}

export function TeamCard({ imageSrc, imageAlt, role, caption }: TeamCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="text-center">
        <CardTitle className="text-lg">{role}</CardTitle>
      </CardHeader>
      {caption && (
        <CardContent>
          <CardDescription className="text-center">{caption}</CardDescription>
        </CardContent>
      )}
    </Card>
  )
}
