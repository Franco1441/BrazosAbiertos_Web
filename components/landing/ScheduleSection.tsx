"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  day: string;
  times: string[];
}

interface ScheduleSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  schedule?: ScheduleItem[];
  backgroundColor?: "primary" | "muted" | "dark";
}

const defaultSchedule: ScheduleItem[] = [
  { day: "Lunes", times: ["10:00 - 11:30", "18:00 - 19:30"] },
  { day: "Martes", times: ["18:00 - 19:30"] },
  { day: "Miércoles", times: ["18:00 - 19:30", "19:30 - 21:00"] },
  { day: "Jueves", times: ["10:00 - 11:30", "18:00 - 19:30", "19:30 - 21:00"] },
  { day: "Viernes", times: ["18:00 - 19:30"] },
];

export function ScheduleSection({
  id = "horarios",
  title = "Mañana, Tarde y Noche",
  subtitle = "Sala de Oración Diaria",
  schedule = defaultSchedule,
  backgroundColor = "primary",
}: ScheduleSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const bgClasses = {
    primary: "bg-primary/10",
    muted: "bg-muted/50",
    dark: "bg-card",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-20 md:py-28", bgClasses[backgroundColor])}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm tracking-[0.2em] uppercase text-primary">
              {subtitle}
            </p>
          )}
        </div>

        {/* Schedule Grid */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {schedule.map((item, index) => (
            <div
              key={item.day}
              className={cn(
                "text-center transition-all duration-500",
                index === schedule.length - 1 &&
                  schedule.length % 2 !== 0 &&
                  "col-span-2 md:col-span-1"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {item.day}
              </h3>
              <div className="space-y-1">
                {item.times.map((time, timeIndex) => (
                  <p
                    key={timeIndex}
                    className="text-sm md:text-base text-muted-foreground"
                  >
                    {time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
