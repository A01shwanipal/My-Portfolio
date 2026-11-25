import { profileData } from '@/lib/portfolio-data'

const techStack = ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'MySQL', 'REST APIs']

export function HeroSection() {
  return (
    <section className="border-b border-border/70 bg-gradient-to-r from-background via-background to-accent/5">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            {profileData.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {profileData.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
            Building reliable backend applications, REST APIs, and microservices with Java and
            Spring Boot.
          </p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Core technologies">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
