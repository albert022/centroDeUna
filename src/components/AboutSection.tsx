import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Palette, HeartHandshake, CheckCircle2 } from "lucide-react";
import { businessConfig } from "@/data/businessConfig";

export default function AboutSection() {
  const benefits = [
    {
      title: "Atención personalizada",
      description: "Escuchamos tus ideas y analizamos la uña natural para recomendarte el largo, forma y técnica más saludable y favorecedora para ti.",
      icon: HeartHandshake,
      badge: "Dedica tiempo para ti",
    },
    {
      title: "Cuidado e higiene rigurosa",
      description: "Desinfección constante de superficies, sobres de instrumentos esterilizados y limas/bloques de uso descartable para tu total tranquilidad.",
      icon: ShieldCheck,
      badge: "Salud y Bioseguridad",
    },
    {
      title: "Diseños adaptados a cada estilo",
      description: "Desde esmaltados clásicos y sobrios para oficina hasta técnicas en tendencia de nail art, cromo, foil y encapsulados a mano alzada.",
      icon: Palette,
      badge: "Creatividad sin límites",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-nude-50/80 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-300/60 text-rose-deep text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestra Filosofía</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-deep leading-tight">
            Un espacio creado para consentirte con calma y dedicación
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {businessConfig.about.description}
          </p>
        </div>

        {/* 3 Visual Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/90 p-8 border border-nude-200/80 shadow-sm hover:shadow-xl hover:border-rose-300/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blush-200 to-champagne-light text-rose-deep flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold tracking-wider uppercase text-rose-accent/80 block mb-1">
                    {benefit.badge}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-deep mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-nude-100 flex items-center gap-2 text-xs font-medium text-rose-deep">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Compromiso garantizado en cada visita</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient Beauty Studio Banner */}
        <div className="mt-16 rounded-3xl overflow-hidden relative bg-charcoal-deep text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-light">
                Ambiente Boutique · Santo Domingo Este
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Disfruta de una pausa en tu día mientras cuidamos de ti
              </h3>
              <p className="text-blush-100 text-sm sm:text-base max-w-xl font-light leading-relaxed">
                Música relajante, sillones cómodos, bebidas de cortesía y la calidez de un trato profesional que te hace sentir en casa.
              </p>
              <div className="pt-2">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-soft hover:bg-gold-dark text-charcoal-deep hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  <span>Reservar mi espacio</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop"
                alt="Ambiente y detalle estético en Aura Nails & Beauty Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/30 to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
