"use client";

import React, { useState } from "react";
import { Phone, ShieldCheck, Menu, X, Calendar } from "lucide-react";
import { Language } from "@/data/content";

interface NavbarProps {
  currentLang: Language;
  onToggleLang?: (lang: Language) => void;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang = "kh",
  onToggleLang,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLangChange = (lang: Language) => {
    if (onToggleLang) {
      onToggleLang(lang);
    }
  };

  const navLinks = [
    { href: "#about", labelKh: "អំពីយើងខ្ញុំ", labelEn: "About Firm" },
    { href: "#practice-areas", labelKh: "ជំនាញច្បាប់", labelEn: "Practice Areas" },
    { href: "#attorneys", labelKh: "ក្រុមមេធាវី", labelEn: "Our Attorneys" },
    { href: "#results", labelKh: "សមិទ្ធផល", labelEn: "Track Record" },
    { href: "#contact", labelKh: "ទំនាក់ទំនង", labelEn: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#040915]/90 border-b border-slate-800">
      {/* Top Utility Bar */}
      <div className="bg-[#071126] border-b border-slate-800/60 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className={currentLang === "kh" ? "font-khmer text-[11px]" : "text-[11px]"}>
              {currentLang === "kh"
                ? "ចុះបញ្ជីស្របច្បាប់នៃគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា"
                : "Accredited by the Bar Association of the Kingdom of Cambodia (BAKC)"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <a
              href="tel:+85515333313"
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Hotline: (+855) 15 333 313 / 60 888 828</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className={currentLang === "kh" ? "font-khmer" : ""}>
                {currentLang === "kh" ? "ជំនួយបន្ទាន់ ២៤/៧" : "24/7 Emergency"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-khmer font-bold text-sm tracking-wide text-[#D4AF37] leading-tight">
                ក្រុមមេធាវីអុីមភើរៀល
              </span>
              <span className="font-serif font-bold text-xs tracking-wider text-white uppercase leading-tight">
                IMPERIAL LAW GROUP
              </span>
              <span className="text-[9px] tracking-widest text-slate-400 uppercase">
                Advocates & Legal Counselors
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm text-slate-300 hover:text-[#D4AF37] transition-colors py-1 relative font-medium ${currentLang === "kh" ? "font-khmer" : ""
                  }`}
              >
                {currentLang === "kh" ? link.labelKh : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action & Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center bg-[#071126] border border-slate-800 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => handleLangChange("kh")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${currentLang === "kh"
                    ? "bg-[#D4AF37] text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                ខ្មែរ
              </button>
              <button
                type="button"
                onClick={() => handleLangChange("en")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${currentLang === "en"
                    ? "bg-[#D4AF37] text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                EN
              </button>
            </div>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-slate-950 hover:brightness-110 font-semibold text-xs flex items-center gap-2 transition-all shadow-lg hover:shadow-[#D4AF37]/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className={currentLang === "kh" ? "font-khmer" : ""}>
                  {currentLang === "kh" ? "កក់ការពិគ្រោះយោបល់" : "Consultation"}
                </span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center bg-[#071126] border border-slate-800 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => handleLangChange("kh")}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${currentLang === "kh" ? "bg-[#D4AF37] text-slate-950" : "text-slate-400"
                  }`}
              >
                ខ្មែរ
              </button>
              <button
                type="button"
                onClick={() => handleLangChange("en")}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${currentLang === "en" ? "bg-[#D4AF37] text-slate-950" : "text-slate-400"
                  }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071126] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm text-slate-300 hover:text-[#D4AF37] border-b border-slate-800/40 ${currentLang === "kh" ? "font-khmer" : ""
                }`}
            >
              {currentLang === "kh" ? link.labelKh : link.labelEn}
            </a>
          ))}

          {onOpenConsultation && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-slate-950 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span className={currentLang === "kh" ? "font-khmer" : ""}>
                {currentLang === "kh" ? "កក់ការពិគ្រោះយោបល់" : "Consultation"}
              </span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};