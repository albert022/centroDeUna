"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BasicChatbot from "@/components/BasicChatbot";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleReviewsModal from "@/components/GoogleReviewsModal";

export default function Home() {
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-blush-200 selection:text-rose-deep">
      {/* Anchor top target for #inicio */}
      <div id="inicio" className="absolute top-0 left-0 -z-50 pointer-events-none h-0 w-0" />

      {/* 1. Encabezado de Navegación */}
      <Header onOpenReviews={() => setReviewsModalOpen(true)} />

      <main className="flex-1">
        {/* SECCIÓN 1: Inicio, Filosofía y Servicios */}
        <Hero />
        <AboutSection />
        <ServicesSection />

        {/* SECCIÓN 2: Nuestros Trabajos (Galería con Filtros y Lightbox) */}
        <GallerySection />

        {/* SECCIÓN 3: Contacto, Citas e Información del Estudio */}
        <ContactSection />

        {/* Preguntas Frecuentes */}
        <FaqSection />
      </main>

      {/* Pie de página */}
      <Footer onOpenReviews={() => setReviewsModalOpen(true)} />

      {/* Asistente interactivo de Preguntas con respuestas directas e inmediatas */}
      <BasicChatbot />

      {/* Botón flotante de WhatsApp con mensaje requerido */}
      <FloatingWhatsApp />

      {/* Modal oficial de Google Reviews */}
      <GoogleReviewsModal
        isOpen={reviewsModalOpen}
        onClose={() => setReviewsModalOpen(false)}
      />
    </div>
  );
}
