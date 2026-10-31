"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, X, ChevronLeft, ChevronRight, ZoomIn, Info } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { businessConfig, GalleryItem } from "@/data/businessConfig";
import { buildWhatsAppGalleryInquiryUrl } from "@/lib/whatsapp";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "todas", label: "Todas" },
    { id: "manicura", label: "Manicura" },
    { id: "acrilicas", label: "Uñas Acrílicas" },
    { id: "nailart", label: "Nail Art" },
    { id: "pedicura", label: "Pedicura" },
    { id: "estetica", label: "Estética" },
  ];

  const filteredItems = businessConfig.gallery.filter((item) => {
    if (activeCategory === "todas") return true;
    return item.category === activeCategory;
  });

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="galeria" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-blush-50/50 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-300/60 text-rose-deep text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-soft" />
            <span>Galería de Trabajos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-deep leading-tight">
            Inspiración & Resultados Reales
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Descubre algunas de las técnicas, acabados y estilos que realizamos. Haz clic en cualquier imagen para verla en detalle.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-rose-deep text-white shadow-md shadow-rose-900/20"
                  : "bg-white text-charcoal-muted hover:text-charcoal-deep hover:bg-nude-100 border border-nude-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-nude-200 border border-nude-300/60 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-charcoal-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-light">
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif text-sm sm:text-base font-bold leading-tight mt-1">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center justify-between text-xs text-blush-200">
                  <span className="text-[11px]">{item.tagline}</span>
                  <div className="p-1 rounded-full bg-white/20">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Category chip always visible */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-charcoal-deep/60 backdrop-blur-xs text-white text-[10px] font-medium group-hover:opacity-0 transition-opacity">
                {item.categoryLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Photo catalog note */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-charcoal-muted">
          <Info className="w-3.5 h-3.5 text-rose-accent" />
          <span>Catálogo visual de acabados y estilos de tendencia en el estudio.</span>
        </div>

        {/* CTA Card: WhatsApp & Instagram */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-rose-deep via-rose-accent to-rose-dark text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              ¿Te gustaría un diseño como este?
            </h3>
            <p className="text-blush-100 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              Escríbenos por WhatsApp, cuéntanos tu idea o envíanos una foto de referencia y coordinamos tu cita.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppGalleryInquiryUrl("Diseño visto en galería", "Consulta General")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-blush-100 text-rose-deep font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-rose-deep/20" />
                <span>Escríbenos por WhatsApp</span>
              </a>

              <a
                href={businessConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/30 backdrop-blur-sm transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Ver más en Instagram {businessConfig.contact.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-charcoal-deep/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-charcoal-deep shadow-md transition-colors"
              aria-label="Cerrar vista ampliada"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full md:w-3/5 h-72 sm:h-96 md:h-auto min-h-[300px] bg-charcoal-deep flex items-center justify-center">
              <Image
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    lightboxIndex !== null && lightboxIndex > 0 ? lightboxIndex - 1 : filteredItems.length - 1
                  );
                }}
                className="absolute left-3 p-2 rounded-full bg-white/70 hover:bg-white text-charcoal-deep shadow-md"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    lightboxIndex !== null && lightboxIndex < filteredItems.length - 1 ? lightboxIndex + 1 : 0
                  );
                }}
                className="absolute right-3 p-2 rounded-full bg-white/70 hover:bg-white text-charcoal-deep shadow-md"
                aria-label="Siguiente foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Sidebar Info */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-ivory">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-full bg-blush-200 text-rose-deep text-xs font-bold inline-block">
                  {currentLightboxItem.categoryLabel}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-deep">
                  {currentLightboxItem.title}
                </h3>

                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {currentLightboxItem.tagline}. Todos nuestros sets son personalizados según la forma y estilo que desees.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-nude-200 space-y-3">
                <a
                  href={buildWhatsAppGalleryInquiryUrl(currentLightboxItem.title, currentLightboxItem.categoryLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-deep hover:bg-rose-dark text-white font-semibold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Me interesa este diseño</span>
                </a>

                <p className="text-[11px] text-center text-charcoal-muted">
                  Te responderemos al instante por WhatsApp para confirmar disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
