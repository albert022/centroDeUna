import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { businessConfig } from "@/data/businessConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF0EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${businessConfig.name} | Centro de Uñas y Estética Integral en ${businessConfig.location.city}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: `${businessConfig.slogan}. Manicura, pedicura spa, uñas acrílicas, soft gel, cejas y lifting en ${businessConfig.location.city}, República Dominicana. Solicita tu cita por WhatsApp.`,
  keywords: [
    "centro de uñas Santo Domingo Este",
    "uñas acrílicas Santo Domingo",
    "manicura semipermanente RD",
    "pedicura spa Santo Domingo",
    "soft gel República Dominicana",
    "lifting de pestañas Santo Domingo Este",
    "nail art Santo Domingo",
    "Aura Nails",
    "estética integral RD",
    "salón de belleza Santo Domingo",
  ],
  authors: [{ name: "QRMOON — Soluciones Digitales" }],
  creator: "QRMOON",
  openGraph: {
    title: `${businessConfig.name} | ${businessConfig.slogan}`,
    description: `Estudio boutique de uñas y belleza en ${businessConfig.location.city}, RD. Atención personalizada y acabados impecables.`,
    url: "https://auranailsrd.com",
    siteName: businessConfig.name,
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${businessConfig.name} - Centro de Uñas y Estética`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.name,
    description: businessConfig.slogan,
    images: ["https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        {/* Preparación para Google Analytics mediante variable de entorno */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal-body antialiased selection:bg-blush-200 selection:text-rose-deep">
        {children}
      </body>
    </html>
  );
}
