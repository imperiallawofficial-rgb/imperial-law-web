"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { siteContent, Language } from "@/data/content";

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = siteContent;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#071126]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {currentLang === "kh" ? "សំណួរដែលសួរញឹកញាប់" : "FREQUENTLY ASKED QUESTIONS"}
            </span>
          </div>

          {currentLang === "kh" ? (
            <h2 className="font-khmer text-2xl sm:text-3xl font-bold text-white mb-4 leading-[1.6]">
              ព័ត៌មាន និងចម្ងល់ទាក់ទងនឹងសេវាច្បាប់
            </h2>
          ) : (
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Answers to Key <span className="text-gradient-gold">Legal Questions</span>
            </h2>
          )}

          <p
            className={`text-slate-300 text-sm sm:text-base ${
              currentLang === "kh" ? "font-khmer text-[14px] leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {currentLang === "kh"
              ? "ស្វែងយល់បន្ថែមអំពីបទប្បញ្ញត្តិនៃច្បាប់កម្ពុជា អាជ្ញាប័ណ្ណមេធាវី និងនីតិវិធីពិគ្រោះយោបល់។"
              : "Clear answers on Cambodian legal frameworks, foreign ownership, court procedures, and our client confidentiality standards."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0A1931]/80 border border-[#D4AF37]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/45"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-white text-sm sm:text-base ${
                      currentLang === "kh" ? "font-khmer text-[14px] leading-[1.65]" : "font-sans-luxury"
                    }`}
                  >
                    {item.q[currentLang]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0E2243] flex items-center justify-center flex-shrink-0 text-[#D4AF37] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#132B5E]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 animate-fade-in">
                    <p className={currentLang === "kh" ? "font-khmer text-[13px] leading-[1.85]" : "leading-relaxed"}>
                      {item.a[currentLang]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
