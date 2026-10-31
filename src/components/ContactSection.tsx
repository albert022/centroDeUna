"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/icons/SocialIcons";
import { businessConfig } from "@/data/businessConfig";
import { buildWhatsAppBookingUrl, BookingFormData } from "@/lib/whatsapp";

export default function ContactSection() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceId: "manicura-clasica",
    serviceName: "Manicura Clásica",
    preferredDate: "",
    preferredTime: "Tarde (2:00 PM – 6:00 PM)",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Today's date in YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split("T")[0];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Por favor, escribe tu nombre completo.";
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Por favor, ingresa tu número de WhatsApp o teléfono.";
    } else if (formData.phone.trim().replace(/\D/g, "").length < 8) {
      errs.phone = "Ingresa un número telefónico válido (mínimo 8 dígitos).";
    }

    if (!formData.preferredDate) {
      errs.preferredDate = "Por favor, selecciona una fecha estimada para tu cita.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const foundService = businessConfig.services.find((s) => s.id === selectedId);
    setFormData({
      ...formData,
      serviceId: selectedId,
      serviceName: foundService ? foundService.name : "Servicio a consultar",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const bookingPayload: BookingFormData = {
      fullName: formData.fullName,
      phone: formData.phone,
      serviceId: formData.serviceId,
      serviceName: formData.serviceName,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      notes: formData.notes,
    };

    const targetUrl = buildWhatsAppBookingUrl(bookingPayload);

    // Open WhatsApp in a new tab
    window.open(targetUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-nude-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-300/60 text-rose-deep text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-gold-soft" />
            <span>Contacto & Citas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-deep leading-tight">
            Solicita tu Cita o Cotización
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Completa tus datos para enviar tu solicitud directa a nuestro WhatsApp. Te confirmamos el horario a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Formulario de Solicitud */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-nude-200/90 shadow-md">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal-deep">
                Formulario de Cita Rápida
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Envía tus preferencias. Atención rápida y personalizada por WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Nombre completo */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal-deep mb-1.5">
                  Nombre completo <span className="text-rose-deep">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: "" });
                  }}
                  placeholder="Ej. Carolina Gómez"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-deep bg-ivory/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? "border-red-400 focus:ring-red-300"
                      : "border-nude-300 focus:border-rose-accent focus:ring-rose-200/60"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Teléfono / WhatsApp */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal-deep mb-1.5">
                  Teléfono / WhatsApp <span className="text-rose-deep">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder="Ej. (829) 499-4321"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-deep bg-ivory/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? "border-red-400 focus:ring-red-300"
                      : "border-nude-300 focus:border-rose-accent focus:ring-rose-200/60"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Servicio de interés */}
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-charcoal-deep mb-1.5">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  value={formData.serviceId}
                  onChange={handleServiceChange}
                  className="w-full px-4 py-3 rounded-xl border border-nude-300 text-sm text-charcoal-deep bg-ivory/50 focus:bg-white focus:border-rose-accent focus:ring-2 focus:ring-rose-200/60 focus:outline-none transition-all cursor-pointer"
                >
                  {businessConfig.services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} (RD$ {service.priceRD.toLocaleString("es-DO")})
                    </option>
                  ))}
                  <option value="otro">Otro servicio / Combinación de varios</option>
                </select>
              </div>

              {/* Fecha y Horario */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-charcoal-deep mb-1.5">
                    Fecha preferida <span className="text-rose-deep">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-deep bg-ivory/50 focus:bg-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.preferredDate
                        ? "border-red-400 focus:ring-red-300"
                        : "border-nude-300 focus:border-rose-accent focus:ring-rose-200/60"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-charcoal-deep mb-1.5">
                    Franja horaria preferida
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-nude-300 text-sm text-charcoal-deep bg-ivory/50 focus:bg-white focus:border-rose-accent focus:ring-2 focus:ring-rose-200/60 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Mañana (9:00 AM – 1:00 PM)">Mañana (9:00 AM – 1:00 PM)</option>
                    <option value="Tarde (2:00 PM – 5:00 PM)">Tarde (2:00 PM – 5:00 PM)</option>
                    <option value="Final de tarde (5:00 PM – 7:00 PM)">Final de tarde (5:00 PM – 7:00 PM)</option>
                    <option value="Cualquier horario disponible">Cualquier horario disponible</option>
                  </select>
                </div>
              </div>

              {/* Mensaje opcional */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-charcoal-deep mb-1.5">
                  Mensaje o notas opcionales
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="¿Deseas retiro de acrílico previo, algún diseño específico o preferencia especial?"
                  className="w-full px-4 py-3 rounded-xl border border-nude-300 text-sm text-charcoal-deep bg-ivory/50 focus:bg-white focus:border-rose-accent focus:ring-2 focus:ring-rose-200/60 focus:outline-none transition-all resize-y"
                />
              </div>

              {/* Notice */}
              <div className="p-3.5 rounded-xl bg-champagne-light/70 border border-champagne-dark/40 text-xs text-charcoal-body leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-deep shrink-0 mt-0.5" />
                <span>
                  Esta solicitud abrirá WhatsApp con los detalles de tu cita para coordinar el horario definitivo directamente con el estudio.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-deep to-rose-accent hover:from-rose-dark hover:to-rose-deep text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-900/20 active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar solicitud por WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Column: Información del Negocio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-nude-200/90 shadow-md space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-deep">
                  Visítanos en el estudio
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-deep mt-1">
                  {businessConfig.name}
                </h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  Atención personalizada con previa cita para garantizar tu confort.
                </p>
              </div>

              {/* Address with click opening Google Maps URL */}
              <a
                href={businessConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 text-sm text-charcoal-body hover:bg-blush-50 p-2.5 -m-2.5 rounded-2xl transition-colors group"
                title="Abrir ubicación en Google Maps"
              >
                <div className="w-9 h-9 rounded-xl bg-blush-100 text-rose-deep flex items-center justify-center shrink-0 group-hover:bg-rose-deep group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-charcoal-deep flex items-center gap-1.5">
                    <span>Dirección:</span>
                    <ExternalLink className="w-3.5 h-3.5 text-rose-deep opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 group-hover:text-rose-deep transition-colors">
                    {businessConfig.location.address}
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-3.5 text-sm text-charcoal-body">
                <div className="w-9 h-9 rounded-xl bg-blush-100 text-rose-deep flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-charcoal-deep">Horario de Atención:</p>
                  <ul className="mt-1 space-y-1 text-xs text-charcoal-muted">
                    {businessConfig.hours.map((h, idx) => (
                      <li key={idx} className="flex justify-between border-b border-nude-100 pb-1">
                        <span>{h.days}</span>
                        <span className="font-semibold text-charcoal-body">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5 text-sm text-charcoal-body">
                <div className="w-9 h-9 rounded-xl bg-blush-100 text-rose-deep flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-charcoal-deep">Contacto Directo:</p>
                  <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5">
                    WhatsApp: {businessConfig.contact.whatsappDisplay}
                  </p>
                </div>
              </div>

              {/* Google Maps Button with the specific URL */}
              <a
                href={businessConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-ivory hover:bg-nude-100 text-charcoal-deep border border-nude-300 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:border-rose-300"
              >
                <MapPin className="w-4 h-4 text-rose-deep" />
                <span>Abrir ubicación en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted" />
              </a>

              {/* Social Channels */}
              <div className="pt-4 border-t border-nude-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                  Síguenos en redes:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={businessConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-nude-100 hover:bg-rose-deep text-charcoal-body hover:text-white transition-colors"
                    aria-label="Perfil de Instagram @qrmoon.rd"
                    title="Instagram @qrmoon.rd"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={businessConfig.contact.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-nude-100 hover:bg-rose-deep text-charcoal-body hover:text-white transition-colors"
                    aria-label="Perfil de TikTok @gato_colonial"
                    title="TikTok @gato_colonial"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
