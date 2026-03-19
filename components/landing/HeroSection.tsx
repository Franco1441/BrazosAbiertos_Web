"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  showScrollIndicator?: boolean;
  overlay?: "dark" | "gradient" | "none";
  alignment?: "center" | "left";
  height?: "full" | "large" | "medium";
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage = "/images/hero-worship.jpg",
  backgroundVideo,
  showScrollIndicator = true,
  overlay = "gradient",
  alignment = "center",
  height = "full",
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current && backgroundVideo) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked
      });
    }
  }, [backgroundVideo]);

  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[85vh]",
    medium: "min-h-[70vh]",
  };

  const overlayClasses = {
    dark: "bg-background/70",
    gradient:
      "bg-gradient-to-b from-background/60 via-background/30 to-background",
    none: "",
  };

  return (
    <section
      id="inicio"
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        heightClasses[height]
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className={cn(
            "object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-0" : "opacity-100"
          )}
          priority
        />
      </div>

      {/* Background Video */}
      {backgroundVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className={cn("absolute inset-0 z-10", overlayClasses[overlay])} />

      {/* Content */}
      <div
        className={cn(
          "relative z-20 px-6 lg:px-8 max-w-5xl mx-auto",
          alignment === "center" ? "text-center" : "text-left"
        )}
      >
        {/* Subtitle / Eyebrow */}
        {subtitle && (
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in-down opacity-0 delay-200">
            {subtitle}
          </p>
        )}

        {/* Main Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight text-foreground mb-8 animate-hero-text opacity-0 text-balance">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-400 leading-relaxed text-pretty">
            {description}
          </p>
        )}

        {/* CTAs */}
        <div
          className={cn(
            "flex gap-4 animate-fade-in-up opacity-0 delay-600",
            alignment === "center"
              ? "justify-center flex-col sm:flex-row"
              : "justify-start flex-col sm:flex-row"
          )}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium group"
            >
              <Play
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider uppercase border border-foreground/30 text-foreground rounded-full hover:bg-foreground/10 transition-all duration-300 font-medium"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      )}
    </section>
  );
}
