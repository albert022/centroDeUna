export interface ServiceItem {
  id: string;
  name: string;
  category: 'manicura' | 'acrilicas' | 'softgel' | 'pedicura' | 'nailart' | 'estetica';
  categoryLabel: string;
  shortDescription: string;
  priceRD: number;
  duration: string;
  imageUrl: string;
  badge?: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'manicura' | 'acrilicas' | 'nailart' | 'pedicura' | 'estetica';
  categoryLabel: string;
  imageUrl: string;
  alt: string;
  tagline: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChatbotItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  suggestedAction?: {
    label: string;
    actionType: 'whatsapp' | 'scroll-services' | 'scroll-contact';
    target?: string;
  };
}

export const businessConfig = {
  // Datos Generales de la Marca
  name: "Aura Nails & Beauty Studio",
  shortName: "Aura Nails",
  brandReference: "Aura Nails & Beauty Studio",
  slogan: "El arte de consentirte empieza en tus manos",
  subheading: "Uñas impecables, detalles que enamoran y una experiencia de belleza hecha para ti.",
  
  about: {
    lead: "Un rincón boutique en Santo Domingo Este pensado para desconectar de la rutina y resaltar tu belleza.",
    description: "En Aura Nails & Beauty Studio cuidamos cada detalle: desde un trato cálido y personalizado hasta la rigurosa esterilización de nuestros instrumentos. Creemos que una manicura o pedicura bien cuidada no es solo estética, es bienestar y amor propio.",
    benefits: [
      {
        id: "atencion-personalizada",
        title: "Atención personalizada",
        description: "Evaluamos el estado de tus uñas y adaptamos la forma, tono y técnica a tu estilo de vida y gusto individual.",
        icon: "Sparkles",
      },
      {
        id: "cuidado-higiene",
        title: "Cuidado e higiene rigurosa",
        description: "Protocolos estrictos de esterilización en autoclave, implementos descartables y espacios desinfectados.",
        icon: "ShieldCheck",
      },
      {
        id: "disenos-estilo",
        title: "Diseños adaptados a tu estilo",
        description: "Desde esmaltados sutiles y elegantes para el día a día hasta acabados y nail art de tendencia.",
        icon: "Palette",
      },
    ],
  },

  // Ubicación y Contacto en Santo Domingo Este, RD
  location: {
    country: "República Dominicana",
    city: "Santo Domingo Este",
    sector: "Alma Rosa / San Vicente",
    address: "Av. San Vicente de Paúl esq. Carretera Mella, Plaza Bella Vista Suite 204, Santo Domingo Este, RD",
    googleMapsUrl: "https://maps.app.goo.gl/H2rKWwfrzkDnj27Y9",
  },

  contact: {
    whatsappRaw: "18294994321",
    whatsappDisplay: "+1 (829) 499-4321",
    phoneDisplay: "+1 (829) 499-4321",
    instagramUrl: "https://instagram.com/qrmoon.rd",
    instagramHandle: "@qrmoon.rd",
    tiktokUrl: "https://tiktok.com/@gato_colonial",
    tiktokHandle: "@gato_colonial",
    googleReviewsUrl: "https://www.google.com/travel/search?q=google%20map%20gato%20colonial&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076%2C122097177%2C122192361&hl=en-DO&gl=do&cs=1&ssta=1&ts=CAEaRwopEicyJTB4OGVhZjg5MGM0ZDQ5NTBlOToweDM1YmNlMGIwN2MzYzIxYmYSGhIUCgcI6g8QCxgBEgcI6g8QCxgCGAEyAhAA&qs=CAEyE0Nnb0l2OFB3NFllV3VONDFFQUU4AkIJCb8hPHyw4Lw1&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwoM-x6eSXAxUAAAAAHQAAAAAQAw",
  },

  // Horarios de Atención
  hours: [
    { days: "Lunes a Viernes", time: "9:00 AM – 7:00 PM" },
    { days: "Sábados", time: "9:00 AM – 6:30 PM" },
    { days: "Domingos", time: "Con cita previa exclusiva" },
  ],

  // Catálogo de Servicios con precios en RD$
  services: [
    {
      id: "manicura-clasica",
      name: "Manicura Clásica",
      category: "manicura",
      categoryLabel: "Manicura",
      shortDescription: "Cuidado esencial de uñas y cutículas, exfoliación suave, limado, pulido y esmaltado tradicional con hidratación profunda.",
      priceRD: 650,
      duration: "45 min",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
      badge: "Esencial",
      highlights: [
        "Retiro y tratamiento de cutícula",
        "Limado y forma personalizada",
        "Hidratación con aceites naturales y masaje",
      ],
    },
    {
      id: "esmaltado-semipermanente",
      name: "Esmaltado Semipermanente en Gel",
      category: "manicura",
      categoryLabel: "Manicura",
      shortDescription: "Color vibrante y brillo espejo de larga duración (hasta 21 días) curado bajo lámpara LED, sin dañar tu uña natural.",
      priceRD: 1100,
      duration: "1h",
      imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
      badge: "Más Solicitado",
      highlights: [
        "Preparación no invasiva de la uña",
        "Geles de alta fijación y brillo duradero",
        "Secado instantáneo sin riesgo de manchas",
      ],
    },
    {
      id: "unas-acrilicas",
      name: "Uñas Acrílicas (Full Set)",
      category: "acrilicas",
      categoryLabel: "Acrílicas",
      shortDescription: "Extensiones esculpidas con monómero y polímero de alta resistencia. Diseñadas a la medida del largo y estilo que elijas.",
      priceRD: 1850,
      duration: "1h 45min",
      imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
      badge: "Estructura Premium",
      highlights: [
        "Puntas almendradas, coffin, stiletto o cuadradas",
        "Materiales hipoalergénicos de primera calidad",
        "Durabilidad superior y sellado anti-levantamiento",
      ],
    },
    {
      id: "soft-gel-extensiones",
      name: "Soft Gel y Extensiones",
      category: "softgel",
      categoryLabel: "Soft Gel",
      shortDescription: "Técnica vanguardista de tips 100% gel que se adhieren suavemente. Apariencia ultrafina, flexible y muy natural.",
      priceRD: 1600,
      duration: "1h 15min",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
      badge: "Tendencia",
      highlights: [
        "Sensación ligera y flexibilidad cómoda",
        "Retiro amable sin limado agresivo",
        "Ideal para quienes buscan acabado natural",
      ],
    },
    {
      id: "pedicura-spa",
      name: "Pedicura Spa Relajante",
      category: "pedicura",
      categoryLabel: "Pedicura",
      shortDescription: "Inmersión en sales marinas aromáticas, exfoliación profunda, remoción de asperezas, mascarilla hidratante y masaje relajante.",
      priceRD: 1350,
      duration: "1h 15min",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
      badge: "Bienestar",
      highlights: [
        "Tina de hidromasaje higiénica individual",
        "Exfoliante frutal y mascarilla de parafina suave",
        "Esmaltado a tu elección y masaje podal",
      ],
    },
    {
      id: "nail-art-personalizado",
      name: "Nail Art y Diseños Personalizados",
      category: "nailart",
      categoryLabel: "Nail Art",
      shortDescription: "Diseños a mano alzada, francesas modernas, efecto cromo, encapsulados, foil, degradados o pedrería elegante según tu referencia.",
      priceRD: 500,
      duration: "30 – 45 min",
      imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop",
      badge: "Creatividad",
      highlights: [
        "Cotización por uña o set completo",
        "Técnicas: French glaze, chrome, trazos finos",
        "Puedes traer tu foto de referencia de Instagram/Pinterest",
      ],
    },
    {
      id: "perfilado-cejas",
      name: "Diseño y Perfilado de Cejas",
      category: "estetica",
      categoryLabel: "Estética",
      shortDescription: "Visagismo profesional para enmarcar tu mirada mediante cera tibia o pinza, con opción de sombreado temporal en henna.",
      priceRD: 600,
      duration: "35 min",
      imageUrl: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop",
      badge: "Mirada",
      highlights: [
        "Medición y visagismo acorde a tus facciones",
        "Depilación limpia y respetuosa con tu piel",
        "Sombra natural opcional para mayor definición",
      ],
    },
    {
      id: "lifting-pestanas",
      name: "Lifting de Pestañas",
      category: "estetica",
      categoryLabel: "Estética",
      shortDescription: "Tratamiento que curva y alarga visualmente tus pestañas naturales desde la raíz, complementado con tinte negro intenso y keratina.",
      priceRD: 1500,
      duration: "1h",
      imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      badge: "Top Belleza",
      highlights: [
        "Efecto máscara de pestañas 24/7 sin extensiones",
        "Duración de 5 a 7 semanas",
        "Nutrición con keratina y botox de pestañas",
      ],
    },
  ] as ServiceItem[],

  // Galería de Trabajos (10 imágenes)
  gallery: [
    {
      id: "gal-1",
      title: "Manicura Francesa Moderna con Toque Nude",
      category: "manicura",
      categoryLabel: "Manicura",
      imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
      alt: "Manicura francesa elegante en uñas limpias y cuidadas",
      tagline: "Elegancia minimalista para cualquier ocasión",
    },
    {
      id: "gal-2",
      title: "Set Acrílico Nude Almendrado con Efecto Glaze",
      category: "acrilicas",
      categoryLabel: "Uñas Acrílicas",
      imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=900&auto=format&fit=crop",
      alt: "Uñas acrílicas almendradas en tono nude empolvado",
      tagline: "Forma y resistencia con acabado natural",
    },
    {
      id: "gal-3",
      title: "Nail Art Minimalista con Trazos Finos y Dorado",
      category: "nailart",
      categoryLabel: "Nail Art",
      imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=900&auto=format&fit=crop",
      alt: "Diseño de nail art contemporáneo con acentos dorados",
      tagline: "Creatividad plasmada al milímetro",
    },
    {
      id: "gal-4",
      title: "Pedicura Spa con Tono Rosa Suave y Acabado Brillante",
      category: "pedicura",
      categoryLabel: "Pedicura",
      imageUrl: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=900&auto=format&fit=crop",
      alt: "Pedicura spa con esmaltado impecable y piel hidratada",
      tagline: "Tus pies merecen descanso y atención profunda",
    },
    {
      id: "gal-5",
      title: "Lifting de Pestañas y Perfilado de Cejas",
      category: "estetica",
      categoryLabel: "Estética",
      imageUrl: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=900&auto=format&fit=crop",
      alt: "Lifting de pestañas con curva perfecta y cejas enmarcadas",
      tagline: "Mirada abierta, definida y natural",
    },
    {
      id: "gal-6",
      title: "Esmaltado Semipermanente Rojo Borgoña Clásico",
      category: "manicura",
      categoryLabel: "Manicura",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop",
      alt: "Esmaltado semipermanente de acabado brillante",
      tagline: "Un tono atemporal que nunca pasa de moda",
    },
    {
      id: "gal-7",
      title: "Estructura Coffin en Tono Champán con Brillo Suave",
      category: "acrilicas",
      categoryLabel: "Uñas Acrílicas",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
      alt: "Uñas esculpidas con forma coffin y matices champán",
      tagline: "Estilo sofisticado para eventos especiales",
    },
    {
      id: "gal-8",
      title: "Nail Art Efecto Mármol con Hojilla de Oro",
      category: "nailart",
      categoryLabel: "Nail Art",
      imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=900&auto=format&fit=crop",
      alt: "Efecto mármol con detalles sutiles en foil dorado",
      tagline: "Detalles artesanales hechos con amor",
    },
    {
      id: "gal-9",
      title: "Pedicura Spa y Exfoliación Relajante",
      category: "pedicura",
      categoryLabel: "Pedicura",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
      alt: "Momento de spa y descanso en cabina de belleza",
      tagline: "Experiencia sensorial de hidratación completa",
    },
    {
      id: "gal-10",
      title: "Perfilado y Laminado Suave de Cejas",
      category: "estetica",
      categoryLabel: "Estética",
      imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
      alt: "Diseño armónico de cejas en cabina de estética",
      tagline: "Armonía facial que resalta tu expresión",
    },
  ] as GalleryItem[],

  // Preguntas Frecuentes
  faqs: [
    {
      id: "faq-ubicacion",
      question: "¿Dónde están ubicados exactamente?",
      answer: "Estamos ubicados en Santo Domingo Este, sobre la Av. San Vicente de Paúl esq. Carretera Mella (Plaza Bella Vista, Suite 204). Es una ubicación céntrica y de fácil acceso con parqueo vigilado para tu comodidad.",
      category: "Ubicación",
    },
    {
      id: "faq-horario",
      question: "¿Cuál es el horario de atención?",
      answer: "Laboramos de Lunes a Viernes de 9:00 AM a 7:00 PM, y Sábados de 9:00 AM a 6:30 PM. Los domingos atendemos únicamente bajo reserva previa coordinada con anticipación.",
      category: "Horarios",
    },
    {
      id: "faq-cita",
      question: "¿Cómo solicito una cita?",
      answer: "Puedes enviar tu solicitud desde el formulario de esta web o escribiéndonos directamente a nuestro WhatsApp oficial (+1 829 499 4321). Te responderemos confirmando la disponibilidad del horario que prefieres y los detalles de tu servicio.",
      category: "Citas",
    },
    {
      id: "faq-servicios",
      question: "¿Qué servicios ofrecen en el estudio?",
      answer: "Nos especializamos en manicura clásica y semipermanente en gel, uñas acrílicas esculpidas, extensiones Soft Gel, pedicura spa completa, nail art personalizado, visagismo y diseño de cejas, y lifting de pestañas.",
      category: "Servicios",
    },
    {
      id: "faq-precios",
      question: "¿Cómo consulto los precios y cotizaciones?",
      answer: "En nuestra sección de servicios encuentras nuestras tarifas base en RD$. Para diseños de nail art complejos o sets temáticos especiales, puedes enviarnos una foto de referencia por WhatsApp y te damos el presupuesto exacto sin compromiso.",
      category: "Precios",
    },
    {
      id: "faq-cancelar",
      question: "¿Qué pasa si necesito cancelar o reprogramar mi cita?",
      answer: "Entendemos que surgen imprevistos. Te agradecemos notificarnos por WhatsApp con al menos 3 a 4 horas de anticipación para poder liberar el turno y reprogramar tu visita para el día y hora que mejor te acomode.",
      category: "Políticas",
    },
    {
      id: "faq-pagos",
      question: "¿Cuáles métodos de pago aceptan?",
      answer: "Aceptamos efectivo en pesos dominicanos (RD$), transferencias bancarias (Banreservas, Banco Popular, BHD) y pagos con tarjeta o enlaces de pago móvil en el estudio.",
      category: "Pagos",
    },
    {
      id: "faq-higiene",
      question: "¿Cómo manejan la esterilización y la higiene?",
      answer: "Tu seguridad es primordial. Todo el instrumental metálico pasa por lavado enzimático y esterilización médica. Las limas, pulidores y separadores son descartables o de uso individual.",
      category: "Higiene",
    },
  ] as FaqItem[],

  // Preguntas predefinidas para el widget de Chatbot
  chatbotQuestions: [
    {
      id: "bot-donde",
      question: "¿Dónde están ubicados?",
      shortAnswer: "Santo Domingo Este (Av. San Vicente de Paúl esq. Carretera Mella).",
      detailedAnswer: "📍 Estamos ubicados en Santo Domingo Este: Av. San Vicente de Paúl esq. Carretera Mella, Plaza Bella Vista Suite 204. ¡Contamos con parqueo y acceso cómodo!",
      suggestedAction: {
        label: "Ver en Google Maps",
        actionType: "whatsapp",
      },
    },
    {
      id: "bot-horario",
      question: "¿Cuál es el horario?",
      shortAnswer: "Lun-Vie: 9am a 7pm | Sáb: 9am a 6:30pm | Dom: Previa cita.",
      detailedAnswer: "⏰ Nuestro horario de atención es:\n• Lunes a Viernes: 9:00 AM – 7:00 PM\n• Sábados: 9:00 AM – 6:30 PM\n• Domingos: Exclusivamente con cita previa coordinada.",
      suggestedAction: {
        label: "Solicitar cita por WhatsApp",
        actionType: "whatsapp",
      },
    },
    {
      id: "bot-cita",
      question: "¿Cómo solicito una cita?",
      shortAnswer: "Vía WhatsApp al +1 829 499 4321 o completando el formulario.",
      detailedAnswer: "📅 Puedes solicitar tu cita completando el formulario rápido al final de esta página o escribiéndonos directamente a nuestro WhatsApp (+1 829 499 4321). ¡Te respondemos en breve para coordinar tu hora!",
      suggestedAction: {
        label: "Ir al formulario de cita",
        actionType: "scroll-contact",
      },
    },
    {
      id: "bot-servicios",
      question: "¿Qué servicios ofrecen?",
      shortAnswer: "Manicura, acrílicas, soft gel, pedicura spa, cejas y pestañas.",
      detailedAnswer: "💅 Ofrecemos:\n1. Manicura clásica y esmaltado semipermanente\n2. Uñas acrílicas y Soft Gel\n3. Pedicura Spa relajante\n4. Nail Art a mano alzada\n5. Perfilado de cejas y Lifting de pestañas.",
      suggestedAction: {
        label: "Ver catálogo de servicios",
        actionType: "scroll-services",
      },
    },
    {
      id: "bot-precios",
      question: "¿Cómo consulto los precios?",
      shortAnswer: "Nuestros precios parten desde RD$ 500. Consulta el catálogo.",
      detailedAnswer: "💵 Nuestras tarifas parten desde RD$ 500 (Nail Art) y RD$ 650 (Manicura). Puedes revisar cada servicio con su precio en la sección de catálogo o enviarnos tu foto de referencia para cotizarte al instante.",
      suggestedAction: {
        label: "Cotizar por WhatsApp",
        actionType: "whatsapp",
      },
    },
    {
      id: "bot-cancelar",
      question: "¿Qué pasa si necesito cancelar?",
      shortAnswer: "Avísanos con 3-4 horas de anticipación por WhatsApp.",
      detailedAnswer: "🔄 No te preocupes por imprevistos: solo te pedimos avisarnos al WhatsApp con al menos 3 a 4 horas de margen para liberar el turno y reprogramar tu visita cuando gustes.",
      suggestedAction: {
        label: "Escribir a WhatsApp",
        actionType: "whatsapp",
      },
    },
  ] as ChatbotItem[],
};
