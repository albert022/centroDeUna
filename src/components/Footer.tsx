"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Phone, MessageCircle, Heart, Star, ExternalLink } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/icons/SocialIcons";
import { businessConfig } from "@/data/businessConfig";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

interface FooterProps {
  onOpenReviews?: () => void;
}

export default function Footer({ onOpenReviews }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-deep text-white pt-16 pb-12 border-t border-charcoal-deep/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-deep via-rose-accent to-gold-soft flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  Aura Nails
                </span>
                <span className="text-[10px] tracking-widest uppercase text-blush-300 -mt-1 font-medium">
                  & Beauty Studio
                </span>
              </div>
            </div>

            <p className="text-blush-200 text-xs sm:text-sm leading-relaxed max-w-sm">
              {businessConfig.about.lead} Cuidado profesional, higiene rigurosa y diseños a tu medida en Santo Domingo Este.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose-accent flex items-center justify-center text-blush-100 hover:text-white transition-colors"
                aria-label="Instagram @qrmoon.rd"
                title="Instagram @qrmoon.rd"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={businessConfig.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose-accent flex items-center justify-center text-blush-100 hover:text-white transition-colors"
                aria-label="TikTok @gato_colonial"
                title="TikTok @gato_colonial"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-blush-100 hover:text-white transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Fast Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-light">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-blush-200">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    if (typeof window !== "undefined") {
                      history.pushState(null, "", "#inicio");
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios y Tarifas
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galería de Trabajos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto & Citas
                </a>
              </li>
              {onOpenReviews && (
                <li>
                  <button
                    onClick={onOpenReviews}
                    className="hover:text-white transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <Star className="w-3.5 h-3.5 text-gold-soft fill-gold-soft" />
                    <span>Google Reviews</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Horario y Ubicación (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-light">
              Ubicación & Horarios
            </h4>
            <div className="space-y-2 text-xs text-blush-200">
              <a
                href={businessConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-rose-accent shrink-0 mt-0.5 group-hover:text-gold-light" />
                <span>{businessConfig.location.address}</span>
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-accent shrink-0" />
                <span>{businessConfig.contact.phoneDisplay}</span>
              </p>
              <div className="pt-2 text-[11px] text-blush-300">
                <p className="font-semibold text-white">Horarios de Atención:</p>
                <p>Lun - Vie: 9:00 AM – 7:00 PM</p>
                <p>Sáb: 9:00 AM – 6:30 PM</p>
                <p>Dom: Con cita previa coordinada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blush-300 text-center md:text-left">
          <p>
            © {currentYear} {businessConfig.name}. Santo Domingo Este, República Dominicana.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-blush-200">
            <span>Desarrollado por</span>
            <strong className="text-white font-bold tracking-wide">QRMOON</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
