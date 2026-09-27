"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Attorneys } from "@/components/Attorneys";
import { TrustAndResults } from "@/components/TrustAndResults";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Language } from "@/data/content";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("kh");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("imperial_law_lang") as Language;
      if (savedLang === "kh" || savedLang === "en") {
        setCurrentLang(savedLang);
      }
    } catch (e) {
      console.error(e);
    }
    setMounted(true);
  }, []);

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem("imperial_law_lang", lang);
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleSelectPractice = (practiceId?: any) => {
    setIsConsultationOpen(true);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#040915] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div key={currentLang} className="min-h-screen bg-[#040915] text-[#F8FAFC] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* Navbar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onOpenConsultation={handleOpenConsultation}
        />
        <AboutUs
          currentLang={currentLang}
          onOpenConsultation={handleOpenConsultation}
        />
        <PracticeAreas
          currentLang={currentLang}
          onSelectPractice={handleSelectPractice}
        />
        <Attorneys
          currentLang={currentLang}
          onOpenConsultation={handleOpenConsultation}
        />
        <TrustAndResults currentLang={currentLang} />
        <FaqSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Modal */}
      {isConsultationOpen && (
        <ConsultationModal
          currentLang={currentLang}
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      )}

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}