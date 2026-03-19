"use client";

import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TeamSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
}

export function TeamSection({
  id = "equipo",
  eyebrow = "Nuestro Equipo",
  title = "Liderazgo con Integridad",
  description = "Las calificaciones en las Escrituras para los líderes pueden resumirse en compromiso, convicción, competencia y carácter. Nuestros líderes se esfuerzan por la excelencia, integridad y vulnerabilidad como ejemplo para todos en la comunidad.",
  ctaLabel = "Conocer Más",
  ctaHref = "#",
  image = "/images/team-leadership.jpg",
  imageAlt = "Equipo de liderazgo",
}: TeamSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id={id} ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/3] lg:aspect-[3/4] rounded-lg overflow-hidden transition-all duration-1000",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            {eyebrow && (
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
                {eyebrow}
              </p>
            )}

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6 text-balance">
              {title}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              {description}
            </p>

            {ctaLabel && (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <span className="text-sm tracking-wider uppercase font-medium">
                  {ctaLabel}
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
