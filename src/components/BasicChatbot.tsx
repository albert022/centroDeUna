"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, ArrowRight, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { businessConfig } from "@/data/businessConfig";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  primaryAction?: {
    label: string;
    url?: string;
    actionType: "whatsapp" | "maps" | "scroll-services" | "scroll-contact";
  };
}

export default function BasicChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: `¡Hola! 👋 Te damos la bienvenida a ${businessConfig.name}. ¿En qué podemos ayudarte hoy? Toca una opción o escribe tu pregunta:`,
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const respondToQuery = (questionText: string, specificAnswer?: string, specificAction?: ChatMessage["primaryAction"]) => {
    // 1. Add user message immediately
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: questionText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Short simulated delay so user clearly sees the system responding
    setTimeout(() => {
      let botResponseText = specificAnswer;
      let botAction = specificAction;

      if (!botResponseText) {
        const lower = questionText.toLowerCase();

        if (lower.includes("ubicad") || lower.includes("donde") || lower.includes("direccion") || lower.includes("llegar")) {
          botResponseText = `📍 Estamos ubicados en Santo Domingo Este:\n\n${businessConfig.location.address}.\n\nContamos con parqueo vigilado para tu comodidad.`;
          botAction = {
            label: "Ver en Google Maps",
            actionType: "maps",
            url: businessConfig.location.googleMapsUrl,
          };
        } else if (lower.includes("horario") || lower.includes("hora") || lower.includes("abren") || lower.includes("dias")) {
          botResponseText = `⏰ Nuestro horario de atención es:\n\n• Lunes a Viernes: 9:00 AM – 7:00 PM\n• Sábados: 9:00 AM – 6:30 PM\n• Domingos: Con cita previa coordinada.`;
          botAction = {
            label: "Solicitar cita por WhatsApp",
            actionType: "whatsapp",
          };
        } else if (lower.includes("cita") || lower.includes("reserv") || lower.includes("turno")) {
          botResponseText = `📅 Para solicitar tu cita puedes completar el formulario al final de esta web o escribirnos directo por WhatsApp. ¡Te responderemos confirmando la hora que prefieras!`;
          botAction = {
            label: "Ir al formulario de cita",
            actionType: "scroll-contact",
          };
        } else if (lower.includes("precio") || lower.includes("cuanto") || lower.includes("costo") || lower.includes("tarifa")) {
          botResponseText = `💵 Nuestras tarifas parten desde RD$ 500 (Nail Art) y RD$ 650 (Manicura Clásica). En la sección de servicios encuentras los precios detallados de cada opción.`;
          botAction = {
            label: "Ver catálogo de servicios",
            actionType: "scroll-services",
          };
        } else if (lower.includes("servicio") || lower.includes("acrilic") || lower.includes("gel") || lower.includes("ceja") || lower.includes("pestaña") || lower.includes("pedicur")) {
          botResponseText = `💅 Ofrecemos Manicura clásica y en gel, Uñas acrílicas, Soft Gel, Pedicura Spa profunda, Nail Art personalizado, Perfilado de cejas y Lifting de pestañas.`;
          botAction = {
            label: "Ver servicios detallados",
            actionType: "scroll-services",
          };
        } else if (lower.includes("cancel") || lower.includes("reprogram") || lower.includes("cambi")) {
          botResponseText = `🔄 Si necesitas cambiar o cancelar tu turno, solo te pedimos avisarnos al WhatsApp con al menos 3 a 4 horas de anticipación para reprogramarte sin problema.`;
          botAction = {
            label: "Escribir al WhatsApp",
            actionType: "whatsapp",
          };
        } else {
          botResponseText = `¡Gracias por tu mensaje! Con gusto te atendemos de forma personalizada para darte cotizaciones exactas y consultar disponibilidad de citas.`;
          botAction = {
            label: "Hablar por WhatsApp",
            actionType: "whatsapp",
          };
        }
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponseText,
        primaryAction: botAction,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  const handleSelectQuestion = (q: (typeof businessConfig.chatbotQuestions)[0]) => {
    let actionPayload: ChatMessage["primaryAction"] = undefined;
    if (q.id === "bot-donde") {
      actionPayload = {
        label: "Abrir en Google Maps",
        actionType: "maps",
        url: businessConfig.location.googleMapsUrl,
      };
    } else if (q.id === "bot-servicios") {
      actionPayload = {
        label: "Ver catálogo de servicios",
        actionType: "scroll-services",
      };
    } else if (q.id === "bot-cita") {
      actionPayload = {
        label: "Ir al formulario de cita",
        actionType: "scroll-contact",
      };
    } else {
      actionPayload = {
        label: "Consultar por WhatsApp",
        actionType: "whatsapp",
      };
    }

    respondToQuery(q.question, q.detailedAnswer, actionPayload);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText("");
    respondToQuery(text);
  };

  const handleActionClick = (action?: ChatMessage["primaryAction"]) => {
    if (!action) return;

    if (action.actionType === "whatsapp") {
      window.open(buildWhatsAppGeneralUrl(), "_blank", "noopener,noreferrer");
    } else if (action.actionType === "maps") {
      window.open(action.url || businessConfig.location.googleMapsUrl, "_blank", "noopener,noreferrer");
    } else if (action.actionType === "scroll-services") {
      setIsOpen(false);
      const el = document.getElementById("servicios");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (action.actionType === "scroll-contact") {
      setIsOpen(false);
      const el = document.getElementById("contacto");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-5 sm:right-6 z-40 p-3.5 rounded-full bg-charcoal-deep text-white shadow-xl hover:bg-rose-deep border-2 border-white transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
        aria-label="Abrir asistente de preguntas"
        title="Preguntas frecuentes de Aura Nails"
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-gold-light" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-accent animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-accent" />
            </>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[600px] h-[540px] bg-white rounded-3xl shadow-2xl border border-nude-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-charcoal-deep via-rose-dark to-charcoal-deep text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-gold-light">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold tracking-wide">
                  Asistente Aura Nails
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-blush-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>En línea · Respuesta inmediata</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-blush-200 hover:text-white hover:bg-white/10"
              aria-label="Cerrar ventana de preguntas"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-ivory text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-blush-200 text-rose-deep flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-2xs ${
                    msg.sender === "user"
                      ? "bg-rose-deep text-white rounded-br-xs"
                      : "bg-white text-charcoal-body border border-nude-200 rounded-bl-xs"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Focused action button */}
                  {msg.primaryAction && (
                    <button
                      onClick={() => handleActionClick(msg.primaryAction)}
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blush-100 hover:bg-rose-deep hover:text-white text-rose-deep font-semibold text-xs transition-colors cursor-pointer border border-blush-200"
                    >
                      <span>{msg.primaryAction.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-nude-300 text-charcoal-deep flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-charcoal-muted text-xs pl-9">
                <span className="w-2 h-2 rounded-full bg-rose-deep animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-rose-deep animate-bounce [animation-delay:0.15s]" />
                <span className="w-2 h-2 rounded-full bg-rose-deep animate-bounce [animation-delay:0.3s]" />
                <span className="text-[11px] text-charcoal-muted font-medium ml-1">Escribiendo respuesta...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions Chips */}
          <div className="px-3 pt-2 pb-1 bg-white border-t border-nude-100 shrink-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-muted block mb-1.5">
              Toca para consultar directamente:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pb-1">
              {businessConfig.chatbotQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuestion(q)}
                  className="text-left text-[11px] px-2.5 py-1 rounded-full bg-nude-100 hover:bg-blush-100 text-charcoal-body hover:text-rose-deep border border-nude-200 transition-colors cursor-pointer"
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Box */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-nude-200 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-nude-300 focus:outline-none focus:border-rose-accent focus:ring-1 focus:ring-rose-200 text-charcoal-body"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-rose-deep hover:bg-rose-dark disabled:opacity-40 text-white transition-colors cursor-pointer"
              aria-label="Enviar pregunta"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
