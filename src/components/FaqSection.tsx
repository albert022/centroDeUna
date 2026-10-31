"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { businessConfig, FaqItem } from "@/data/businessConfig";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-cita");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-300/60 text-rose-deep text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold-soft" />
            <span>Dudas Habituales</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-deep leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Resolvemos tus dudas sobre horarios, citas, métodos de pago y cuidado de tus uñas.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {businessConfig.faqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-rose-300 shadow-md ring-1 ring-rose-200/50"
                    : "bg-white/90 border-nude-200/90 hover:border-nude-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-accent shrink-0" />
                    <span className="font-serif text-base sm:text-lg font-bold text-charcoal-deep">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-deep shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-nude-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-nude-100/70 p-6 rounded-2xl border border-nude-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base sm:text-lg font-bold text-charcoal-deep">
              ¿Tienes alguna otra consulta específica?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Con gusto te orientamos directamente por WhatsApp antes de tu visita.
            </p>
          </div>
          <a
            href={buildWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-deep hover:bg-rose-dark text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
