"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: React.ReactNode;
  brandName?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Recursos", href: "#recursos" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Contacto", href: "#contacto" },
];

export function Header({
  logo,
  brandName = "TU MARCA",
  navItems = defaultNavItems,
  ctaLabel = "En Vivo",
  ctaHref = "#live",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Ir al inicio"
          >
            {logo ? (
              logo
            ) : (
              <span className="font-serif text-xl tracking-widest text-foreground group-hover:text-primary transition-colors">
                {brandName}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={ctaHref}
              className="px-6 py-2.5 text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href={ctaHref}
                className="inline-block px-6 py-2.5 text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {ctaLabel}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
