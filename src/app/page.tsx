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

  // ដោះស្រាយបញ្ហា Hydration Mismatch ដោយផ្ទុកភាសាពី LocalStorage ក្រោយពេល Client Mounted
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("imperial_law_lang") as Language;
      if (savedLang === "kh" || savedLang === "en") {
        setCurrentLang(savedLang);
      }
    } catch (e) {
      console.error("Failed to read language preference:", e);
    }
    setMounted(true);
  }, []);

  // មុខងារប្តូរភាសា (Switch Language) ដោយរក្សាទុកទៅក្នុង LocalStorage
  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem("imperial_law_lang", lang);
    } catch (e) {
      console.error("Failed to save language preference:", e);
    }
  };

  // ការពារកុំឱ្យ Browser Render ជាន់គ្នា មុនពេល Client ស្គាល់ State ពិតប្រាកដ
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#040915] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040915] text-[#F8FAFC] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* របារ Menu ខាងលើ */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* ខ្លឹមសារគោលនៃទំព័រដើម */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
        <AboutUs currentLang={currentLang} />
        <PracticeAreas currentLang={currentLang} />
        <Attorneys
          currentLang={currentLang}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
        <TrustAndResults currentLang={currentLang} />
        <FaqSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* បាតក្រោមគេហទំព័រ */}
      <Footer currentLang={currentLang} />

      {/* ផ្ទាំង Popup កក់ការពិគ្រោះយោបល់ */}
      {isConsultationOpen && (
        <ConsultationModal
          currentLang={currentLang}
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      )}

      {/* ប៊ូតុងរុញឡើងទៅលើវិញ */}
      <ScrollToTop />
    </div>
  );
}