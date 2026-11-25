import { BrainCircuit, CloudCog, Code, Rocket, Zap } from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

const iconMap = {
  Code,
  Zap,
  CloudCog,
  Rocket,
  BrainCircuit,
}

const serviceStyleMap = {
  Code: {
    icon: 'text-sky-500',
    badge: 'bg-sky-500/10 text-sky-700 ring-sky-500/20 dark:text-sky-300',
  },
  Zap: {
    icon: 'text-violet-500',
    badge: 'bg-violet-500/10 text-violet-700 ring-violet-500/20 dark:text-violet-300',
  },
  CloudCog: {
    icon: 'text-emerald-500',
    badge: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300',
  },
  Rocket: {
    icon: 'text-amber-500',
    badge: 'bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-300',
  },
  BrainCircuit: {
    icon: 'text-fuchsia-500',
    badge: 'bg-fuchsia-500/10 text-fuchsia-700 ring-fuchsia-500/20 dark:text-fuchsia-300',
  },
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            const iconKey = service.icon as keyof typeof iconMap
            const IconComponent = iconMap[iconKey]
            const serviceStyle = serviceStyleMap[iconKey]
            return (
              <div
                key={index}
                className="group flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:-translate-y-0.5 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-background/70 p-2 ${serviceStyle.icon}`}>
                  <IconComponent className="w-full h-full transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-base md:text-lg font-semibold text-foreground">{service.title}</h4>
                    {'status' in service && (
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${serviceStyle.badge}`}>
                        <span className="size-1.5 rounded-full bg-current animate-pulse" />
                        {service.status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Developer Highlights */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Developer Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group rounded-xl md:rounded-2xl border border-border bg-secondary p-4 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <h4 className="text-base font-semibold text-foreground md:text-lg">{highlight.title}</h4>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies with Marquee Animation */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Technologies</h3>
        <div className="relative overflow-hidden py-4">
          <div className="flex gap-4 md:gap-6 animate-marquee-slow">
            {[...data.technologies, ...data.technologies].map((technology, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-secondary rounded-xl md:rounded-2xl border border-border flex items-center justify-center p-4 md:p-6 hover:border-accent transition-colors"
              >
                {technology.logo ? (
                  <img
                    src={technology.logo}
                    alt={technology.name}
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-xs md:text-sm font-semibold text-foreground text-center">
                    {technology.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
