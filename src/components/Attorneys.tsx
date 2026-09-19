"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, ShieldCheck, Calendar } from "lucide-react";
import { siteContent, Language, Attorney } from "@/data/content";

interface AttorneysProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ currentLang, onOpenConsultation }) => {
  const { attorneys } = siteContent;

  return (
    <section id="attorneys" className="py-24 relative overflow-hidden bg-[#071126]/80">
      {/* Background ambient accents */}
      <div className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] radial-glow-gold pointer-events-none opacity-15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {currentLang === "kh" ? "ក្រុមមេធាវី និងទីប្រឹក្សាច្បាប់" : "LEGAL LEADERSHIP"}
            </span>
          </div>

          {currentLang === "kh" ? (
            <h2 className="font-khmer text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.6]">
              ក្រុមមេធាវីឆ្នើមប្រកបដោយបទពិសោធន៍ និងកេរ្តិ៍ឈ្មោះ
            </h2>
          ) : (
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Distinguished Advocates & <span className="text-gradient-gold">Senior Counsel</span>
            </h2>
          )}

          <p
            className={`text-slate-300 text-base sm:text-lg ${
              currentLang === "kh" ? "font-khmer text-[15px] leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {currentLang === "kh"
              ? "ក្រុមមេធាវីរបស់យើងរួមមានអ្នកជំនាញច្បាប់ដែលមានបទពិសោធន៍យូរអង្វែង ឆ្លងកាត់ការការពារក្តីរាប់រយករណី និងមានការទទួលស្គាល់ជាផ្លូវការពីគណៈមេធាវី។"
              : "Our partners bring decades of distinguished courtroom advocacy, regulatory leadership, and academic honors to every client relationship."}
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="glass-card rounded-3xl overflow-hidden border border-[#D4AF37]/25 flex flex-col justify-between group hover:border-[#D4AF37]/60 transition-all duration-300"
            >
              <div>
                {/* Header portrait badge area */}
                <div className="h-44 bg-gradient-to-br from-[#0E2243] via-[#0A1931] to-[#040915] p-6 relative flex flex-col justify-between border-b border-slate-800">
                  <div className="flex justify-between items-start">
                    <span
                      className={`px-2.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[11px] font-semibold text-[#F3E5AB] ${
                        currentLang === "kh" ? "font-khmer leading-normal" : ""
                      }`}
                    >
                      {attorney.experience[currentLang]}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0A1931] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#132B5E] to-[#0E2243] border border-[#D4AF37]/50 flex items-center justify-center text-[#F3E5AB] font-serif-luxury font-bold text-xl shadow-lg">
                      {attorney.name.en.replace(/^(H\.E\.|Attorney)\s+/, "").substring(0, 2)}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors ${
                          currentLang === "kh" ? "font-khmer text-base leading-[1.6]" : "font-serif-luxury leading-tight"
                        }`}
                      >
                        {attorney.name[currentLang]}
                      </h3>
                      <p
                        className={`text-xs text-[#D4AF37] font-medium mt-0.5 ${
                          currentLang === "kh" ? "font-khmer text-[12px] leading-normal" : "leading-snug"
                        }`}
                      >
                        {attorney.role[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  {/* BAKC Status Badge */}
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <GraduationCap className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span
                      className={`text-[12px] font-medium ${
                        currentLang === "kh" ? "font-khmer text-[12px] leading-normal" : ""
                      }`}
                    >
                      {attorney.barStatus[currentLang]}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm text-slate-300 ${
                      currentLang === "kh" ? "font-khmer text-[13px] leading-[1.8]" : "leading-relaxed"
                    }`}
                  >
                    {attorney.bio[currentLang]}
                  </p>

                  {/* Specialties Pills */}
                  <div>
                    <span
                      className={`text-[11px] font-semibold block mb-2 ${
                        currentLang === "kh"
                          ? "font-khmer text-xs text-[#E6CE78] leading-normal"
                          : "uppercase tracking-wider text-slate-400"
                      }`}
                    >
                      {currentLang === "kh" ? "ឯកទេសចម្បង" : "Focus Areas"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {attorney.specialties[currentLang].map((spec, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] px-2.5 py-1 rounded-lg bg-[#0A1931] border border-slate-700/60 text-slate-300 ${
                            currentLang === "kh" ? "font-khmer text-[11px] tracking-normal leading-normal" : ""
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {currentLang === "kh" ? "ណាត់ជួបមេធាវី" : "Schedule Meeting"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
