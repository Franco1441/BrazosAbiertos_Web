"use client";

import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref?: string;
  variant?: "default" | "primary" | "dark";
}

export function CTASection({
  id,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  variant = "default",
}: CTASectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const variantClasses = {
    default: "bg-muted/30",
    primary: "bg-primary/10",
    dark: "bg-card",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-24 md:py-32", variantClasses[variant])}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {eyebrow && (
          <p
            className={cn(
              "text-xs tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            {eyebrow}
          </p>
        )}

        <h2
          className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6 text-balance transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 text-pretty",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            {description}
          </p>
        )}

        <div
          className={cn(
            "transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
