"use client";

import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  backgroundColor?: "default" | "muted" | "card";
}

export function AboutSection({
  id = "nosotros",
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  image = "/images/community-gathering.jpg",
  imageAlt = "Nuestra comunidad",
  reverse = false,
  backgroundColor = "default",
}: AboutSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    card: "bg-card",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-24 md:py-32 lg:py-40", bgClasses[backgroundColor])}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            reverse && "lg:grid-flow-dense"
          )}
        >
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              reverse && "lg:col-start-2"
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

          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden transition-all duration-1000 delay-200",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              reverse && "lg:col-start-1"
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
