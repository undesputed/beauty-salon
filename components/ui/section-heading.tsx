import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl mb-12", centered && "text-center mx-auto", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg opacity-80">{subtitle}</p>}
    </div>
  )
}
