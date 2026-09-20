"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, ShieldCheck, Calendar, Send } from "lucide-react";
import { siteContent, Language } from "@/data/content";

interface AttorneysProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ currentLang, onOpenConsultation }) => {
  const { attorneys } = siteContent;

  return (
    <section id="attorneys" className="py-24 relative overflow-hidden bg-[#071126]/80">
      {/* Background ambient accents */}
      <div className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] radial-glow-gold pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 mb-4">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal text-xs text-[#D4AF37]" : "text-xs tracking-wider text-[#D4AF37] uppercase font-semibold"}>
              {currentLang === "kh" ? "ក្រុមមេធាវី និងទីប្រឹក្សាច្បាប់" : "LEGAL LEADERSHIP"}
            </span>
          </div>

          <h2 className={currentLang === "kh" ? "font-khmer text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" : "text-3xl sm:text-4xl font-serif font-bold text-white mb-4"}>
            {currentLang === "kh" ? "ក្រុមមេធាវីឆ្នើមប្រកបដោយបទពិសោធន៍ និងកេរ្តិ៍ឈ្មោះ" : "Distinguished Legal Counsel"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {currentLang === "kh"
              ? "ក្រុមការងារដែលមានសមត្ថភាពខ្ពស់ ផ្តល់ការការពារ និងដំណោះស្រាយច្បាប់ប្រកបដោយក្រមសីលធម៌ និងប្រសិទ្ធភាព"
              : "Seasoned legal practitioners dedicated to securing justice and protecting your paramount interests."}
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.map((attorney: any) => {
            const displayName = currentLang === "kh" ? (attorney.nameKh || attorney.nameEn) : (attorney.nameEn || attorney.nameKh);
            const displayRole = currentLang === "kh" ? (attorney.roleKh || attorney.roleEn) : (attorney.roleEn || attorney.roleKh);
            const displayExp = currentLang === "kh" ? (attorney.experienceKh || attorney.experienceEn) : (attorney.experienceEn || attorney.experienceKh);
            const displayBio = currentLang === "kh" ? (attorney.bio?.kh || attorney.bio?.en) : (attorney.bio?.en || attorney.bio?.kh);
            const specialtiesList = currentLang === "kh" ? attorney.specialties?.kh : attorney.specialties?.en;

            return (
              <div
                key={attorney.id}
                className="rounded-2xl bg-[#0B1936]/90 border border-slate-800 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
              >
                <div>
                  {/* Member Photo / Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    {attorney.image ? (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0 shadow-lg">
                        <img
                          src={attorney.image}
                          alt={displayName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[#D4AF37] border border-slate-700 shrink-0">
                        {displayName ? displayName.slice(0, 2) : "IL"}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {displayName}
                      </h3>
                      <p className="text-xs text-[#D4AF37] mt-0.5 leading-snug">
                        {displayRole}
                      </p>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  {displayExp && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0E2243]/80 border border-slate-800 text-[11px] text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="line-clamp-1">{displayExp}</span>
                    </div>
                  )}

                  {/* Bio */}
                  {displayBio && (
                    <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                      {displayBio}
                    </p>
                  )}

                  {/* Specialties */}
                  {specialtiesList && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {specialtiesList.map((spec: string, idx: number) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-800">
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80 mt-auto">
                  {/* Consultation Button */}
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-slate-950 hover:brightness-110 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentLang === "kh" ? "ណាត់ជួបមេធាវី" : "Consult"}</span>
                  </button>

                  {/* Direct Chat Links (Telegram / CoolApp) */}
                  <div className="flex gap-2">
                    {attorney.telegram && (
                      <a
                        href={attorney.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Send className="w-3 h-3" />
                        <span>Telegram</span>
                      </a>
                    )}
                    {attorney.coolapp && (
                      <a
                        href={attorney.coolapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>CoolApp</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};