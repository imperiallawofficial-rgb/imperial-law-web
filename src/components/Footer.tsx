"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowUp } from "lucide-react";
import { siteContent, Language } from "@/data/content";
import { SiteContentType } from "@/context/ContentContext";

interface FooterProps {
  currentLang: Language;
  onOpenConsultation: () => void;
  content?: SiteContentType;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenConsultation, content }) => {
  const activeContent = content || siteContent;
  const { brand, nav, practices } = activeContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03060E] border-t border-[#D4AF37]/20 pt-16 pb-12 relative overflow-hidden text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Imperial Law Group Seal"
                  fill
                  className="object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                />
              </div>
              <div>
                <span className="font-khmer text-sm font-bold text-[#E6CE78] block leading-snug">
                  {brand.nameKh}
                </span>
                <span className="font-serif-luxury text-base font-bold text-white tracking-wider uppercase block">
                  {brand.nameEn}
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase block">
                  Advocates & Legal Counselors • Phnom Penh
                </span>
              </div>
            </div>

            <p
              className={`text-slate-300 text-xs max-w-sm ${
                currentLang === "kh" ? "font-khmer text-[12px] leading-[1.8]" : "leading-relaxed"
              }`}
            >
              {currentLang === "kh"
                ? "ក្រុមមេធាវីអឹមភើរៀល ផ្តល់សេវាកម្មច្បាប់កម្រិតខ្ពស់ ដោយប្រកាន់ខ្ជាប់នូវក្រមសីលធម៌វិជ្ជាជីវៈ សុចរិតភាព និងការរក្សាការសម្ងាត់ដាច់ខាត ស្របតាមច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា។"
                : "Imperial Law Group is an elite legal practice in the Kingdom of Cambodia, dedicated to protecting investments, defending rights, and delivering strategic corporate advocacy."}
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-[#071126] border border-[#D4AF37]/30 text-[#D4AF37] text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
                {currentLang === "kh"
                  ? "សមាជិកគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា"
                  : "Bar Association of the Kingdom of Cambodia (BAKC)"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className={`text-white font-bold text-xs ${
                currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
              }`}
            >
              {currentLang === "kh" ? "រុករកទំព័រ" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className={`hover:text-[#D4AF37] transition-colors ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  {nav.about[currentLang]}
                </a>
              </li>
              <li>
                <a
                  href="#practices"
                  className={`hover:text-[#D4AF37] transition-colors ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  {nav.practices[currentLang]}
                </a>
              </li>
              <li>
                <a
                  href="#attorneys"
                  className={`hover:text-[#D4AF37] transition-colors ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  {nav.team[currentLang]}
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className={`hover:text-[#D4AF37] transition-colors ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  {nav.results[currentLang]}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-[#D4AF37] transition-colors ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  {nav.contact[currentLang]}
                </a>
              </li>
            </ul>
          </div>

          {/* Key Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className={`text-white font-bold text-xs ${
                currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
              }`}
            >
              {currentLang === "kh" ? "ជំនាញច្បាប់ចម្បង" : "Practice Focus"}
            </h4>
            <ul className="space-y-2">
              {practices.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a
                    href="#practices"
                    className={`hover:text-[#D4AF37] transition-colors line-clamp-1 ${
                      currentLang === "kh" ? "font-khmer text-[11px] leading-normal" : ""
                    }`}
                  >
                    {p.title[currentLang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Contact Hotline */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className={`text-white font-bold text-xs ${
                currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
              }`}
            >
              {currentLang === "kh" ? "ជំនួយច្បាប់រហ័ស" : "Consultation"}
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenConsultation}
                className={`w-full py-2 px-3 text-center rounded-lg text-xs font-bold text-[#071126] bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors cursor-pointer ${
                  currentLang === "kh" ? "font-khmer leading-normal" : ""
                }`}
              >
                <span>{nav.bookConsultation[currentLang]}</span>
              </button>
              <p className="text-[11px] text-slate-400 pt-1">Hotline:</p>
              <a
                href={`tel:${brand.hotline}`}
                className="text-white font-semibold hover:text-[#D4AF37] transition-colors block text-xs tracking-normal"
              >
                {brand.hotline}
              </a>
              <a
                href={brand.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline block text-xs tracking-normal"
              >
                Telegram: @imperiallawgroup
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-[#071126]/60 border border-slate-800 text-[11px] text-slate-400">
            <p className={currentLang === "kh" ? "font-khmer text-[11px] leading-[1.85]" : "leading-relaxed"}>
              {currentLang === "kh"
                ? "សេចក្តីបញ្ជាក់គតិយុត្ត៖ ព័ត៌មានទាំងអស់ដែលត្រូវបានផ្សព្វផ្សាយលើគេហទំព័រនេះ គឺសម្រាប់គោលបំណងផ្តល់ព័ត៌មានទូទៅប៉ុណ្ណោះ និងមិនបង្កើតជាទំនាក់ទំនងមេធាវីនិងកូនក្តីឡើយ រហូតទាល់តែកិច្ចសន្យាប្រគល់សិទ្ធិតំណាងស្របច្បាប់ត្រូវបានចុះហត្ថលេខាជាផ្លូវការ។"
                : "Legal Disclaimer: The materials and content on this website are provided for informational purposes only and do not constitute formal legal advice. Viewing or transmitting information via this portal does not create an attorney-client relationship until a formal retainer agreement is executed with Imperial Law Group."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p className={currentLang === "kh" ? "font-khmer text-[11px] leading-normal" : ""}>
              © {new Date().getFullYear()} {brand.nameEn} ({brand.nameKh}). All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-slate-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <span className={currentLang === "kh" ? "font-khmer leading-normal text-[11px]" : ""}>
                  {currentLang === "kh" ? "ត្រឡប់ទៅលើ" : "Back to top"}
                </span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
