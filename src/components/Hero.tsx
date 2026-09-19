"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight, PhoneCall, Scale, Award, ChevronDown } from "lucide-react";
import { siteContent, Language } from "@/data/content";
import { SiteContentType } from "@/context/ContentContext";

interface HeroProps {
  currentLang: Language;
  onOpenConsultation: () => void;
  content?: SiteContentType;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenConsultation, content }) => {
  const activeContent = content || siteContent;
  const { hero, brand, stats } = activeContent;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-glow-gold pointer-events-none opacity-40 blur-3xl" />
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] radial-glow-navy pointer-events-none opacity-50 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] radial-glow-navy pointer-events-none opacity-40 blur-3xl" />

      {/* Subtle Classical Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2243]/80 border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-5 animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span
                className={`text-xs font-medium text-slate-200 ${
                  currentLang === "kh"
                    ? "font-khmer text-[12px] leading-normal"
                    : "tracking-wide"
                }`}
              >
                {hero.badge[currentLang]}
              </span>
            </div>

            {/* Khmer Brand Heading */}
            <h2 className="font-khmer text-xl sm:text-2xl lg:text-3xl font-semibold text-[#E6CE78] mb-3 leading-relaxed drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]">
              {brand.nameKh}
            </h2>

            {/* Main Power Headline: Specially tuned hierarchy for Khmer & English */}
            {currentLang === "kh" ? (
              <h1 className="font-khmer text-2xl sm:text-3xl lg:text-[2.65rem] font-bold text-white leading-[1.65] mb-6 drop-shadow-sm">
                {hero.titleLine1.kh}{" "}
                <span className="text-gradient-gold block sm:inline">
                  {hero.titleHighlight.kh}
                </span>
              </h1>
            ) : (
              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {hero.titleLine1.en}{" "}
                <span className="text-gradient-gold block lg:inline">
                  {hero.titleHighlight.en}
                </span>
              </h1>
            )}

            {/* Slogan & Mission Subtitle */}
            <p
              className={`text-base sm:text-lg text-slate-300 max-w-2xl mb-8 ${
                currentLang === "kh"
                  ? "font-khmer text-[15px] sm:text-base leading-[1.8]"
                  : "font-sans-luxury leading-relaxed"
              }`}
            >
              {hero.subtitle[currentLang]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                  currentLang === "kh" ? "font-khmer leading-normal" : "tracking-wide"
                }`}
              >
                <span>{hero.ctaPrimary[currentLang]}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#071126]" />
              </button>

              <a
                href="#practices"
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm text-slate-200 border border-[#D4AF37]/40 bg-[#0E2243]/40 backdrop-blur-sm hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#0E2243]/70 transition-all duration-300 flex items-center justify-center gap-2 ${
                  currentLang === "kh" ? "font-khmer leading-normal" : ""
                }`}
              >
                <span>{hero.ctaSecondary[currentLang]}</span>
              </a>
            </div>

            {/* Direct 24/7 hotline banner */}
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
              <div className="w-8 h-8 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`block text-slate-400 ${
                    currentLang === "kh" ? "font-khmer leading-normal text-[12px]" : ""
                  }`}
                >
                  {hero.callUrgent[currentLang]}
                </span>
                <a
                  href={`tel:${brand.emergencyPhone}`}
                  className="text-white font-bold tracking-normal hover:text-[#D4AF37] transition-colors"
                >
                  {brand.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Resolution Emblem Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Golden Glow & Concentric Circles */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/25 animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-[#D4AF37]/15 animate-[spin_60s_linear_infinite_reverse]" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#0E2243] to-[#071126] shadow-2xl" />

              {/* Logo Emblem Image */}
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Imperial Law Group Seal"
                  fill
                  className="object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Shield Badges */}
              <div className="absolute -bottom-4 -left-4 bg-[#0A1931]/90 border border-[#D4AF37]/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-gold flex items-center justify-center text-[#071126]">
                  <Scale className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    BAKC Registered
                  </p>
                  <p className="text-xs font-bold text-[#E6CE78]">
                    Licensed Advocates
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#0A1931]/90 border border-[#D4AF37]/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-gold flex items-center justify-center text-[#071126]">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Success Rate
                  </p>
                  <p className="text-xs font-bold text-[#E6CE78]">
                    98.4% Proven Results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/20 flex flex-col justify-center"
            >
              <span className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-gradient-gold mb-1 tracking-normal">
                {item.value}
              </span>
              <span
                className={`text-sm font-semibold text-white ${
                  currentLang === "kh" ? "font-khmer text-xs leading-relaxed" : ""
                }`}
              >
                {item.label[currentLang]}
              </span>
              <span
                className={`text-xs text-slate-400 mt-0.5 ${
                  currentLang === "kh" ? "font-khmer text-[11px] leading-relaxed" : ""
                }`}
              >
                {item.sublabel[currentLang]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Downward Indicator */}
      <div className="flex justify-center mt-8">
        <a
          href="#about"
          className="text-slate-500 hover:text-[#D4AF37] transition-colors animate-bounce p-2"
          aria-label="Scroll to About Section"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
