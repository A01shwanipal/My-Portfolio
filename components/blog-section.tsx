import { BookOpen } from 'lucide-react'

export function BlogSection() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Blog</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 via-secondary to-secondary px-6 py-12 text-center md:rounded-2xl md:py-16">
        <div className="relative mx-auto flex max-w-xl flex-col items-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
            <BookOpen className="h-8 w-8" strokeWidth={1.7} />
          </div>

          <span className="mb-4 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Coming Soon
          </span>

          <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
            Fresh ideas are on the way
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            I&apos;m preparing practical articles on Java, Spring Boot, and backend engineering.
            Check back soon.
          </p>
        </div>
      </div>
    </div>
  )
}
