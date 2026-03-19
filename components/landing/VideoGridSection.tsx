"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  type?: "youtube" | "vimeo" | "custom";
}

interface VideoCategory {
  title: string;
  videos: Video[];
  viewMoreHref?: string;
}

interface VideoGridSectionProps {
  id?: string;
  title?: string;
  categories?: VideoCategory[];
}

const defaultCategories: VideoCategory[] = [
  {
    title: "Sala de Oración Diaria",
    viewMoreHref: "#",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Sesión de Oración 1" },
      { id: "dQw4w9WgXcQ", title: "Sesión de Oración 2" },
      { id: "dQw4w9WgXcQ", title: "Sesión de Oración 3" },
      { id: "dQw4w9WgXcQ", title: "Sesión de Oración 4" },
    ],
  },
  {
    title: "Mensajes Principales",
    viewMoreHref: "#",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Mensaje 1" },
      { id: "dQw4w9WgXcQ", title: "Mensaje 2" },
      { id: "dQw4w9WgXcQ", title: "Mensaje 3" },
      { id: "dQw4w9WgXcQ", title: "Mensaje 4" },
    ],
  },
];

function VideoThumbnail({ video }: { video: Video }) {
  const thumbnailUrl =
    video.thumbnail ||
    `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video rounded-lg overflow-hidden bg-card"
    >
      <Image
        src={thumbnailUrl}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Play className="w-6 h-6 text-foreground fill-current ml-1" />
        </div>
      </div>
    </Link>
  );
}

export function VideoGridSection({
  id = "videos",
  title = "Mañana, Tarde y Noche",
  categories = defaultCategories,
}: VideoGridSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id={id} ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Title */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            {title}
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "transition-all duration-700",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {category.title}
                </h3>
                {category.viewMoreHref && (
                  <Link
                    href={category.viewMoreHref}
                    className="text-xs tracking-wider uppercase text-primary hover:text-primary/80 transition-colors"
                  >
                    Ver Más
                  </Link>
                )}
              </div>

              {/* Videos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.videos.map((video, videoIndex) => (
                  <div
                    key={`${category.title}-${videoIndex}`}
                    className={cn(
                      "transition-all duration-500",
                      isInView ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                      transitionDelay: `${categoryIndex * 200 + videoIndex * 100}ms`,
                    }}
                  >
                    <VideoThumbnail video={video} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
