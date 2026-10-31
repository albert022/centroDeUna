"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { businessConfig } from "@/data/businessConfig";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover/focus */}
      {showTooltip && (
        <div className="bg-charcoal-deep text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl hidden sm:block animate-in fade-in slide-in-from-right-2 border border-white/10 max-w-xs">
          <p className="font-bold text-emerald-400">¿Deseas una cita?</p>
          <p className="text-[11px] text-blush-100">Escríbenos por WhatsApp ahora</p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={buildWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl shadow-emerald-900/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label={`Contactar a ${businessConfig.name} por WhatsApp`}
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
