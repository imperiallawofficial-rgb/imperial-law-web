"use client";

import React from "react";
import Image from "next/image";
import { Scale, ShieldCheck, Gavel, Landmark, CheckCircle } from "lucide-react";
import { siteContent, Language } from "@/data/content";

interface AboutUsProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ currentLang, onOpenConsultation }) => {
  const { values, brand } = siteContent;

  const iconMap: Record<string, React.ReactNode> = {
    Scale: <Scale className="w-5 h-5 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
    Gavel: <Gavel className="w-5 h-5 text-[#D4AF37]" />,
    Landmark: <Landmark className="w-5 h-5 text-[#D4AF37]" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#071126]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {currentLang === "kh" ? "អំពីក្រុមមេធាវីយើងខ្ញុំ" : "ABOUT THE FIRM"}
            </span>
          </div>

          {currentLang === "kh" ? (
            <h2 className="font-khmer text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.6]">
              ឧត្តមភាពច្បាប់ និងកេរ្តិ៍ឈ្មោះរឹងមាំតាំងពីការចាប់ផ្តើម
            </h2>
          ) : (
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Unwavering Dedication to <span className="text-gradient-gold">Justice & Excellence</span>
            </h2>
          )}

          <p
            className={`text-slate-300 text-base sm:text-lg ${
              currentLang === "kh" ? "font-khmer text-[15px] leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {currentLang === "kh"
              ? "ក្រុមមេធាវីអឹមភើរៀល ត្រូវបានបង្កើតឡើងដោយប្រមូលផ្តុំនូវមេធាវីឆ្នើមៗដែលមានបទពិសោធន៍យូរអង្វែង ក្នុងការការពារផលប្រយោជន៍ស្របច្បាប់ជូនអតិថិជនទាំងក្នុង និងក្រៅប្រទេស។ យើងខ្ញុំប្រកាន់ខ្ជាប់នូវក្រមសីលធម៌វិជ្ជាជីវៈជាចម្បង។"
              : "Imperial Law Group is an elite full-service legal practice headquartered in Phnom Penh. Built on a foundation of intellectual rigor, extensive courtroom authority, and uncompromising ethical conduct, we navigate Cambodia's evolving commercial and civil landscape for multinational enterprises and esteemed families."}
          </p>
        </div>

        {/* 2-Column Overview: Story / Managing Partner Note & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Mission Statement Card */}
          <div className="lg:col-span-6">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#E6CE78]">
                    {brand.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 font-khmer leading-normal">
                    {brand.nameKh}
                  </p>
                </div>
              </div>

              <blockquote
                className={`text-slate-200 text-base sm:text-lg mb-6 border-l-2 border-[#D4AF37] pl-4 ${
                  currentLang === "kh"
                    ? "font-khmer text-sm not-italic leading-[1.8]"
                    : "italic leading-relaxed"
                }`}
              >
                {currentLang === "kh"
                  ? "«នៅពេលដែលកូនក្តីប្រគល់សេចក្តីទុកចិត្តមកឱ្យក្រុមមេធាវីយើងខ្ញុំ នោះមិនមែនត្រឹមតែជាកិច្ចការច្បាប់ធម្មតានោះទេ ប៉ុន្តែជាការទទួលខុសត្រូវខ្ពស់បំផុតក្នុងការការពារយុត្តិធម៌ កេរ្តិ៍ឈ្មោះ និងអនាគតរបស់ពួកគាត់។»"
                  : "“When clients entrust their legal affairs to Imperial Law Group, they are not simply retaining counsel — they are securing a strategic alliance dedicated relentlessly to their defense, stability, and generational legacy.”"}
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div>
                  <h4
                    className={`font-bold text-white text-sm ${
                      currentLang === "kh" ? "font-khmer leading-normal" : ""
                    }`}
                  >
                    {currentLang === "kh" ? "ឯកឧត្តម សុខា សុវណ្ណ" : "H.E. Sokha Sovann"}
                  </h4>
                  <p
                    className={`text-xs text-[#D4AF37] ${
                      currentLang === "kh" ? "font-khmer leading-normal" : ""
                    }`}
                  >
                    {currentLang === "kh"
                      ? "ប្រធានក្រុមមេធាវីអឹមភើរៀល (Managing Partner)"
                      : "Managing Partner, Imperial Law Group"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    BAKC Credential
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Active & Licensed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Pillars / Values */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[#0A1931]/80 border border-[#D4AF37]/20 rounded-2xl p-5 hover:border-[#D4AF37]/50 hover:bg-[#0E2243] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#132B5E]/60 border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                  {iconMap[v.iconName] || <Scale className="w-5 h-5 text-[#D4AF37]" />}
                </div>
                <h4
                  className={`text-base font-bold text-white mb-2 ${
                    currentLang === "kh" ? "font-khmer text-sm leading-[1.6]" : ""
                  }`}
                >
                  {v.title[currentLang]}
                </h4>
                <p
                  className={`text-xs text-slate-300 ${
                    currentLang === "kh" ? "font-khmer text-[12px] leading-[1.75]" : "leading-relaxed"
                  }`}
                >
                  {v.desc[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-[#071126] flex-shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4
                className={`text-base sm:text-lg font-bold text-white ${
                  currentLang === "kh" ? "font-khmer leading-[1.6]" : ""
                }`}
              >
                {currentLang === "kh"
                  ? "ត្រូវការពិគ្រោះយោបល់លើបញ្ហាច្បាប់ ឬកិច្ចសន្យា?"
                  : "Need Strategic Legal Guidance on a Critical Matter?"}
              </h4>
              <p
                className={`text-xs sm:text-sm text-slate-300 ${
                  currentLang === "kh" ? "font-khmer leading-[1.7]" : ""
                }`}
              >
                {currentLang === "kh"
                  ? "ក្រុមមេធាវីយើងខ្ញុំត្រៀមផ្តល់ការប្រឹក្សាដោយផ្ទាល់ ឬតាមអនឡាញ ដោយរក្សាការសម្ងាត់ខ្ពស់បំផុត។"
                  : "Our senior advocates are prepared to evaluate your case discreetly and thoroughly."}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 whitespace-nowrap cursor-pointer ${
              currentLang === "kh" ? "font-khmer leading-normal" : ""
            }`}
          >
            <span>{siteContent.nav.bookConsultation[currentLang]}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
