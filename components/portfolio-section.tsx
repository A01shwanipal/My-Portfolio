
'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { ExternalLink, Eye } from 'lucide-react'
import { useState } from 'react'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({
  data = portfolioData,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter)

  return (
    <section className="flex flex-col gap-8">
      {/* Projects Heading */}
      <div className="flex-1 space-y-6 md:space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            My Projects
          </h2>

          <div className="mb-6 h-1 w-10 rounded-full bg-accent" />

          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            A collection of projects I&apos;ve worked on, showcasing my skills
            in web development, backend development, and problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-xl px-4 py-2 text-xs font-medium capitalize transition-all md:px-5 md:py-2.5 md:text-sm ${
                activeFilter === category
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 md:rounded-2xl"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#080d19]">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Category Badge */}
                <div className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-medium capitalize text-cyan-300 backdrop-blur-md md:right-4 md:top-4">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 md:p-5">
                <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-xl">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90 md:text-sm"
                    >
                      <Eye className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent md:text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="rounded-xl border border-border bg-secondary p-8 text-center">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
