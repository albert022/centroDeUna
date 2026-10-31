"use client";

import React from "react";
import { X, ExternalLink, QrCode, Star, Sparkles } from "lucide-react";
import { businessConfig } from "@/data/businessConfig";

interface GoogleReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GoogleReviewsModal({ isOpen, onClose }: GoogleReviewsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-deep/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-nude-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-charcoal-deep via-rose-dark to-charcoal-deep p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal de reseñas"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-1 text-gold-light mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-light text-gold-light" />
            ))}
          </div>

          <h3 className="font-serif text-2xl font-bold">
            Reseñas en Google
          </h3>
          <p className="text-xs text-blush-200 mt-1">
            Conoce la experiencia de nuestras clientas o déjanos tu opinión
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 bg-ivory">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blush-100 text-rose-deep flex items-center justify-center shadow-xs">
              <QrCode className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-lg font-bold text-charcoal-deep">
              Tu opinión es nuestra mayor satisfacción
            </h4>

            <p className="text-xs text-charcoal-muted leading-relaxed">
              Trabajamos cada día para brindarte una atención impecable en cada manicura, pedicura y diseño. Puedes consultar nuestras valoraciones o calificar tu visita en nuestro perfil oficial de Google.
            </p>
          </div>

          {/* Action button */}
          <div className="space-y-3">
            <a
              href={businessConfig.contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-rose-deep hover:bg-rose-dark text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <span>Ver y dejar reseña en Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
