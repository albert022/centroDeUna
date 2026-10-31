"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sparkles, MapPin, Phone, Star } from "lucide-react";
import { businessConfig } from "@/data/businessConfig";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

interface HeaderProps {
  onOpenReviews?: () => void;
}

export default function Header({ onOpenReviews }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (typeof window !== "undefined") {
        history.pushState(null, "", "#inicio");
      }
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        if (typeof window !== "undefined") {
          history.pushState(null, "", href);
        }
      }
    }
  };

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-md shadow-rose-950/5 border-b border-nude-200/80 py-3"
          : "bg-ivory/80 backdrop-blur-sm border-b border-nude-200/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand -> Always scrolls cleanly to top */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="group flex items-center gap-2.5 focus:outline-none cursor-pointer"
            aria-label="Aura Nails & Beauty Studio - Ir al inicio"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-deep via-rose-accent to-gold-soft flex items-center justify-center text-white shadow-sm shadow-rose-900/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal-deep group-hover:text-rose-deep transition-colors">
                Aura Nails
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-charcoal-muted -mt-1 font-medium">
                & Beauty Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-charcoal-body hover:text-rose-deep transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-accent hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            {onOpenReviews && (
              <button
                onClick={onOpenReviews}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-nude-100 hover:bg-blush-200 text-charcoal-body hover:text-rose-dark transition-all border border-nude-300/80 cursor-pointer flex items-center gap-1.5"
                title="Ver opiniones en Google"
              >
                <Star className="w-3.5 h-3.5 text-gold-soft fill-gold-soft" />
                <span>Google Reviews</span>
              </button>
            )}
          </nav>

          {/* WhatsApp Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-rose-deep to-rose-accent hover:from-rose-dark hover:to-rose-deep text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-rose-900/20 active:scale-95 transition-all duration-200"
              aria-label="Solicitar cotización por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Cotizar por WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-charcoal-deep hover:bg-blush-100 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-ivory/98 backdrop-blur-xl border-b border-nude-200 shadow-xl transition-all duration-300 px-6 py-6 z-50">
          <nav className="flex flex-col gap-4" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-charcoal-deep hover:text-rose-deep py-2 border-b border-nude-200/50 flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-xs text-rose-accent">→</span>
              </a>
            ))}

            {onOpenReviews && (
              <button
                onClick={() => {
                  closeMenu();
                  onOpenReviews();
                }}
                className="text-left text-sm font-medium text-charcoal-body hover:text-rose-deep py-2 flex items-center gap-2 cursor-pointer"
              >
                <Star className="w-4 h-4 text-gold-soft fill-gold-soft" />
                <span>Google Reviews</span>
              </button>
            )}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={buildWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-rose-deep to-rose-accent text-white font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar cotización por WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-4 text-xs text-charcoal-muted pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-accent" />
                  {businessConfig.location.city}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-rose-accent" />
                  {businessConfig.contact.phoneDisplay}
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
