"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, ArrowRight, MapPin, ShieldCheck, Heart } from "lucide-react";
import { businessConfig } from "@/data/businessConfig";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl" />
        <div className="absolute top-36 right-10 w-80 h-80 bg-champagne-base/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-rose-light/50 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Commercial Pitch */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nude-100 border border-nude-300/80 text-charcoal-body text-xs sm:text-sm font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-rose-deep" />
              <span>{businessConfig.location.city}, República Dominicana</span>
            </div>

            {/* Main Hero Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-deep leading-[1.12] tracking-tight">
              El arte de consentirte{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-deep via-rose-accent to-gold-dark">
                empieza en tus manos
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2 text-rose-accent/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted max-w-2xl leading-relaxed font-normal">
              Uñas impecables, detalles que enamoran y una experiencia de belleza hecha para ti en un espacio cálido y sofisticado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-rose-deep hover:bg-rose-dark text-white font-semibold text-sm sm:text-base shadow-lg shadow-rose-900/20 hover:shadow-xl hover:shadow-rose-900/30 active:scale-95 transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>Solicitar mi cita</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-nude-100 text-charcoal-deep font-semibold text-sm sm:text-base border border-nude-300/80 shadow-xs hover:border-rose-300 transition-all duration-200"
              >
                <span>Explorar servicios</span>
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-nude-200/80 w-full max-w-lg">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Heart className="w-4 h-4 text-rose-accent shrink-0" />
                <span className="text-xs text-charcoal-body font-medium">Trato Cercano</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-charcoal-body font-medium">Máxima Higiene</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-4 h-4 text-gold-soft shrink-0" />
                <span className="text-xs text-charcoal-body font-medium">Nail Art Pro</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-rose-accent/20 via-gold-soft/20 to-blush-400/20 rounded-3xl blur-xl" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 aspect-[4/5] bg-nude-200">
                <Image
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop"
                  alt="Manicura profesional de alta precisión en Aura Nails & Beauty Studio"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-rose-deep font-bold">
                        Experiencia Boutique
                      </p>
                      <p className="text-sm font-serif font-bold text-charcoal-deep">
                        Cuidado de Manos & Estética
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-rose-light text-rose-deep text-xs font-semibold">
                      Santo Domingo Este
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-nude-200 shadow-xl hidden sm:flex items-center gap-3 animate-subtle-pulse">
                <div className="w-10 h-10 rounded-xl bg-blush-200 text-rose-deep flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-deep">Esmaltes en Gel</p>
                  <p className="text-[11px] text-charcoal-muted">Hasta 21 días de brillo</p>
                </div>
              </div>

              {/* Floating Pill Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-nude-200 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-light text-gold-dark flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-deep">Higiene 100%</p>
                  <p className="text-[11px] text-charcoal-muted">Instrumental esterilizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
