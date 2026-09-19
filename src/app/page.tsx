"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
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
import { Language } from "@/data/content";
import { ContentProvider, useContent } from "@/context/ContentContext";

function MainWebsite() {
  const { content } = useContent();
  const [currentLang, setCurrentLang] = useState<Language>("kh");
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [selectedPractice, setSelectedPractice] = useState<string | undefined>(undefined);

  // Restore saved language preference if present
  useEffect(() => {
    const saved = localStorage.getItem("imperial_lang") as Language | null;
    if (saved === "en" || saved === "kh") {
      setCurrentLang(saved);
      document.documentElement.lang = saved === "kh" ? "km" : "en";
    } else {
      document.documentElement.lang = "km";
    }
  }, []);

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("imperial_lang", lang);
    document.documentElement.lang = lang === "kh" ? "km" : "en";
  };

  const handleOpenConsultation = (practiceId?: string) => {
    if (practiceId) {
      setSelectedPractice(practiceId);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedPractice(undefined);
  };

  return (
    <div
      lang={currentLang === "kh" ? "km" : "en"}
      className="min-h-screen bg-[#040915] text-[#F8FAFC] flex flex-col selection:bg-[#C5A059] selection:text-[#040915] relative"
    >
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenConsultation={() => handleOpenConsultation()}
        content={content}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
          content={content}
        />

        <AboutUs
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <PracticeAreas
          currentLang={currentLang}
          onSelectPractice={(id) => handleOpenConsultation(id)}
          content={content}
        />

        <Attorneys
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <TrustAndResults currentLang={currentLang} />

        <FaqSection currentLang={currentLang} />

        <ContactSection currentLang={currentLang} content={content} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenConsultation={() => handleOpenConsultation()}
        content={content}
      />

      {/* Appointment & Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        currentLang={currentLang}
        initialPractice={selectedPractice}
        content={content}
      />
    </div>
  );
}

export default function Home() {
  return (
    <ContentProvider>
      <MainWebsite />
    </ContentProvider>
  );
}
