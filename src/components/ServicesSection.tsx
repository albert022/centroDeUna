"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, MessageCircle, Sparkles, Check, Info } from "lucide-react";
import { businessConfig, ServiceItem } from "@/data/businessConfig";
import { buildWhatsAppServiceInquiryUrl } from "@/lib/whatsapp";

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos los servicios" },
    { id: "manicura", label: "Manicura & Gel" },
    { id: "acrilicas", label: "Acrílicas & Soft Gel" },
    { id: "pedicura", label: "Pedicura Spa" },
    { id: "nailart", label: "Nail Art" },
    { id: "estetica", label: "Cejas & Pestañas" },
  ];

  const filteredServices = businessConfig.services.filter((service) => {
    if (selectedCategory === "todos") return true;
    if (selectedCategory === "manicura") return service.category === "manicura";
    if (selectedCategory === "acrilicas") return service.category === "acrilicas" || service.category === "softgel";
    if (selectedCategory === "pedicura") return service.category === "pedicura";
    if (selectedCategory === "nailart") return service.category === "nailart";
    if (selectedCategory === "estetica") return service.category === "estetica";
    return true;
  });

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-300/60 text-rose-deep text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-soft" />
            <span>Catálogo Profesional</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-deep leading-tight">
            Nuestros Servicios de Belleza & Cuidado
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Cada servicio incluye valoración previa, productos de primera línea y la dedicación que mereces.
          </p>

          {/* Pricing disclaimer badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-champagne-light text-charcoal-body text-xs border border-champagne-dark/50">
            <Info className="w-3.5 h-3.5 text-rose-deep shrink-0" />
            <span>Tarifas base expresadas en pesos dominicanos (RD$). Consulta diseños personalizados.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-rose-deep text-white shadow-md shadow-rose-900/20 scale-105"
                  : "bg-white text-charcoal-muted hover:text-charcoal-deep hover:bg-nude-100 border border-nude-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const whatsappUrl = buildWhatsAppServiceInquiryUrl(service.name, service.priceRD);

            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white border border-nude-200/90 shadow-sm hover:shadow-xl hover:border-rose-300/80 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-nude-200">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-rose-deep text-[11px] font-bold shadow-xs">
                      {service.badge}
                    </span>
                  )}

                  {/* Duration Pill */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-charcoal-deep/80 backdrop-blur-sm text-white text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-light" />
                    {service.duration}
                  </span>
                </div>

                {/* Service Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-deep group-hover:text-rose-deep transition-colors">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Highlights list */}
                    <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-nude-100">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-charcoal-body">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and WhatsApp Consultation Action */}
                  <div className="pt-3 border-t border-nude-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-medium">
                        Precio desde:
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-charcoal-muted">RD$</span>{" "}
                        <span className="text-lg font-serif font-bold text-charcoal-deep">
                          {service.priceRD.toLocaleString("es-DO")}
                        </span>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blush-100 hover:bg-rose-deep text-rose-deep hover:text-white font-semibold text-xs transition-all duration-200 group/btn shadow-2xs hover:shadow-md"
                      aria-label={`Consultar servicio de ${service.name} por WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 group-hover/btn:fill-white/20" />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-nude-100 via-blush-100/60 to-champagne-light border border-blush-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-charcoal-deep">
              ¿Deseas combinar servicios o traer un diseño especial?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Escríbenos directamente por WhatsApp con tu foto de referencia para asesorarte sin compromiso.
            </p>
          </div>
          <a
            href={buildWhatsAppServiceInquiryUrl("Consulta de Combo Personalizado")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-rose-deep hover:bg-rose-dark text-white text-xs sm:text-sm font-semibold shadow-md active:scale-95 transition-all"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
