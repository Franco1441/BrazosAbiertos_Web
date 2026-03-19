"use client";

import { useInView } from "@/hooks/use-in-view";
import { ResourceCard } from "./ResourceCard";
import { cn } from "@/lib/utils";

interface Resource {
  title: string;
  description: string;
  image: string;
  href?: string;
  badge?: string;
}

interface ResourcesSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  resources?: Resource[];
}

const defaultResources: Resource[] = [
  {
    title: "Plan Bíblico 365",
    description:
      "Una invitación para nuestra comunidad a ser transformados por la Palabra de Dios.",
    image: "/images/resource-bible.jpg",
    badge: "Nuevo",
  },
  {
    title: "Álbum Musical",
    description:
      "Nuestros proyectos musicales son el desborde de lo que hacemos como casa de oración.",
    image: "/images/resource-music.jpg",
  },
  {
    title: "Escuela de Ministerio",
    description:
      "Programas únicos para estudiantes con el objetivo de proveer entendimiento bíblico y práctico.",
    image: "/images/resource-school.jpg",
  },
];

export function ResourcesSection({
  id = "recursos",
  title = "Lanzamientos Recientes",
  subtitle,
  resources = defaultResources,
}: ResourcesSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id={id} ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "mb-12 md:mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              {subtitle}
            </p>
          )}
        </div>

        {/* Resources Grid */}
        <div
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {resources.map((resource, index) => (
            <ResourceCard
              key={resource.title}
              {...resource}
              className={cn(
                "transition-all duration-500",
                isInView ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
