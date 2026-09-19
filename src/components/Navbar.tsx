"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Shield, Calendar } from "lucide-react";
import { siteContent, Language } from "@/data/content";
import { SiteContentType } from "@/context/ContentContext";

interface NavbarProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenConsultation: () => void;
  content?: SiteContentType;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenConsultation,
  content,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeContent = content || siteContent;
  const { nav, brand } = activeContent;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: nav.about[currentLang] },
    { href: "#practices", label: nav.practices[currentLang] },
    { href: "#attorneys", label: nav.team[currentLang] },
    { href: "#results", label: nav.results[currentLang] },
    { href: "#contact", label: nav.contact[currentLang] },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#040915]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/20 py-2.5"
          : "bg-gradient-to-b from-[#040915]/90 to-transparent py-4"
      }`}
    >
      {/* Top micro bar for quick emergency & accreditation notice */}
      <div className="hidden lg:block border-b border-[#D4AF37]/15 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-slate-300">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Shield className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {activeContent.hero.badge[currentLang]}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Hotline:</span>
              <a
                href={`tel:${brand.hotline}`}
                className="font-semibold text-white hover:text-[#D4AF37] transition-colors"
              >
                {brand.hotline}
              </a>
            </div>
            <div className="w-px h-3 bg-slate-700" />
            <div className="flex items-center gap-1.5 text-[#E6CE78]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
                {currentLang === "kh" ? "ជំនួយច្បាប់បន្ទាន់ ២៤/៧" : "24/7 Urgent Legal Support"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Imperial Law Group Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-khmer text-xs sm:text-sm font-semibold text-[#D4AF37] leading-snug">
                {brand.nameKh}
              </span>
              <span className="font-serif-luxury text-sm sm:text-base font-bold text-white tracking-wider uppercase group-hover:text-[#F3E5AB] transition-colors leading-tight">
                {brand.nameEn}
              </span>
              <span className="text-[9px] text-slate-400 uppercase tracking-widest hidden sm:inline">
                Advocates & Legal Counselors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm text-slate-200 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300 ${
                  currentLang === "kh"
                    ? "font-khmer text-[13px] tracking-normal leading-normal"
                    : "font-sans-luxury tracking-wide"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#071126] border border-[#D4AF37]/30 rounded-full p-0.5 shadow-inner">
              <button
                type="button"
                onClick={() => onToggleLang("kh")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  currentLang === "kh"
                    ? "bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-[#071126] shadow-sm font-khmer tracking-normal"
                    : "text-slate-300 hover:text-white font-khmer"
                }`}
                title="Khmer"
              >
                ខ្មែរ
              </button>
              <button
                type="button"
                onClick={() => onToggleLang("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  currentLang === "en"
                    ? "bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-[#071126] shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Book Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className={`hidden sm:flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${
                currentLang === "kh" ? "font-khmer leading-normal" : "tracking-wide"
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#071126]" />
              <span>{nav.bookConsultation[currentLang]}</span>
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-[#D4AF37] md:hidden focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#D4AF37]/20 bg-[#071126]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg text-slate-200 hover:bg-[#132B5E]/50 hover:text-[#D4AF37] transition-colors ${
                    currentLang === "kh"
                      ? "font-khmer text-sm leading-normal"
                      : "text-sm font-medium"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] rounded-lg shadow-md ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{nav.bookConsultation[currentLang]}</span>
                </button>
                <a
                  href={`tel:${brand.hotline}`}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs text-[#E6CE78] border border-[#D4AF37]/30 rounded-lg hover:bg-[#0E2243]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{brand.hotline}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
