"use client";

import { useInView } from "@/hooks/use-in-view";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface BannerSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  ctaLabel: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  dismissible?: boolean;
  variant?: "default" | "gradient" | "accent";
}

export function BannerSection({
  id,
  eyebrow,
  title,
  ctaLabel,
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref = "#",
  dismissible = false,
  variant = "default",
}: BannerSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const variantClasses = {
    default: "bg-secondary",
    gradient: "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20",
    accent: "bg-primary/10 border-y border-primary/20",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-16 md:py-20 relative",
        variantClasses[variant],
        "transition-all duration-700",
        isInView ? "opacity-100" : "opacity-0"
      )}
    >
      {dismissible && (
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar banner"
        >
          <X size={20} />
        </button>
      )}

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {eyebrow}
          </p>
        )}

        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 text-balance">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 font-medium"
          >
            {ctaLabel}
          </Link>
          {secondaryCtaLabel && (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase border border-foreground/30 text-foreground rounded-full hover:bg-foreground/10 transition-all duration-300 font-medium"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
