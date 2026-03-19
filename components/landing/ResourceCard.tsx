"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description?: string;
  image: string;
  href?: string;
  badge?: string;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function ResourceCard({
  title,
  description,
  image,
  href = "#",
  badge,
  variant = "default",
  className,
}: ResourceCardProps) {
  const variants = {
    default: "aspect-[4/3]",
    featured: "aspect-[16/9] md:aspect-[21/9]",
    compact: "aspect-square",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-card transition-all duration-500 hover:scale-[1.02]",
        className
      )}
    >
      {/* Image */}
      <div className={cn("relative w-full overflow-hidden", variants[variant])}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-foreground/10 backdrop-blur-sm rounded-full">
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
