import { businessConfig } from "@/data/businessConfig";

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime?: string;
  notes?: string;
}

/**
 * Standard greeting required for all WhatsApp conversions
 */
export const REQUIRED_WHATSAPP_HEADER = `¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (${businessConfig.name})`;

/**
 * Builds a direct WhatsApp URL with the required header and user booking details
 */
export function buildWhatsAppBookingUrl(data: BookingFormData): string {
  const lines: string[] = [
    REQUIRED_WHATSAPP_HEADER,
    ``,
    `*Datos de la solicitud de cita:*`,
    `• *Nombre:* ${data.fullName.trim()}`,
    `• *Teléfono:* ${data.phone.trim()}`,
    `• *Servicio:* ${data.serviceName}`,
    `• *Fecha deseada:* ${data.preferredDate}`,
  ];

  if (data.preferredTime && data.preferredTime.trim()) {
    lines.push(`• *Horario de preferencia:* ${data.preferredTime.trim()}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`• *Detalles adicionales:* ${data.notes.trim()}`);
  }

  const message = lines.join("\n");
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct WhatsApp URL to inquire about a specific service
 */
export function buildWhatsAppServiceInquiryUrl(serviceName?: string, priceRD?: number): string {
  const lines: string[] = [REQUIRED_WHATSAPP_HEADER];

  if (serviceName) {
    const priceText = priceRD ? ` (Tarifa ref: RD$ ${priceRD.toLocaleString("es-DO")})` : "";
    lines.push(``);
    lines.push(`• *Servicio de interés:* ${serviceName}${priceText}`);
  }

  const message = lines.join("\n");
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct WhatsApp URL for a design in the gallery
 */
export function buildWhatsAppGalleryInquiryUrl(designTitle?: string, category?: string): string {
  const lines: string[] = [REQUIRED_WHATSAPP_HEADER];

  if (designTitle) {
    lines.push(``);
    lines.push(`• *Diseño de referencia:* ${designTitle} (${category || "Galería"})`);
  }

  const message = lines.join("\n");
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a general WhatsApp URL with the required greeting
 */
export function buildWhatsAppGeneralUrl(): string {
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(REQUIRED_WHATSAPP_HEADER)}`;
}
