"use client";

import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
  variant?: "image-left" | "image-right" | "image-background";
  height?: "default" | "tall" | "screen";
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  image = "/images/building-house.jpg",
  imageAlt = "Imagen destacada",
  variant = "image-right",
  height = "default",
}: FeatureSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const heightClasses = {
    default: "py-24 md:py-32",
    tall: "py-32 md:py-48",
    screen: "min-h-screen flex items-center py-20",
  };

  if (variant === "image-background") {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          heightClasses[height],
          height !== "screen" && "py-32 md:py-48"
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "max-w-xl transition-all duration-1000",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
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
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                {ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  const isImageLeft = variant === "image-left";

  return (
    <section id={id} ref={ref} className={cn(heightClasses[height])}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            isImageLeft && "lg:grid-flow-dense"
          )}
        >
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              isImageLeft && "lg:col-start-2"
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
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                {ctaLabel}
              </Link>
            )}
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-1000 delay-200",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              isImageLeft && "lg:col-start-1"
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
