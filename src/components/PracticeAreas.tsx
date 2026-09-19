"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Building2,
  Gavel,
  Landmark,
  Award,
  Users,
  ShieldAlert,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { siteContent, Language, PracticeArea } from "@/data/content";
import { SiteContentType } from "@/context/ContentContext";

interface PracticeAreasProps {
  currentLang: Language;
  onSelectPractice: (practiceId: string) => void;
  content?: SiteContentType;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  currentLang,
  onSelectPractice,
  content,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedModalPractice, setSelectedModalPractice] = useState<PracticeArea | null>(null);

  const activeContent = content || siteContent;
  const { practices } = activeContent;

  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
    Building2: <Building2 className="w-6 h-6 text-[#D4AF37]" />,
    Gavel: <Gavel className="w-6 h-6 text-[#D4AF37]" />,
    Landmark: <Landmark className="w-6 h-6 text-[#D4AF37]" />,
    Award: <Award className="w-6 h-6 text-[#D4AF37]" />,
    Users: <Users className="w-6 h-6 text-[#D4AF37]" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />,
  };

  const filteredPractices = practices.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "corporate") return ["corporate", "banking", "ip"].includes(item.id);
    if (activeFilter === "litigation") return ["litigation", "criminal"].includes(item.id);
    if (activeFilter === "property") return ["realestate", "family", "labor"].includes(item.id);
    return true;
  });

  return (
    <section id="practices" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] radial-glow-gold pointer-events-none opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <Gavel className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {currentLang === "kh" ? "វិស័យអនុវត្ត និងជំនាញច្បាប់" : "OUR PRACTICE AREAS"}
            </span>
          </div>

          {currentLang === "kh" ? (
            <h2 className="font-khmer text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.6]">
              សេវាការពារក្តី និងប្រឹក្សាច្បាប់គ្រប់ជ្រុងជ្រោយ
            </h2>
          ) : (
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Comprehensive Counsel Across <span className="text-gradient-gold">Key Legal Sectors</span>
            </h2>
          )}

          <p
            className={`text-slate-300 text-base sm:text-lg ${
              currentLang === "kh" ? "font-khmer text-[15px] leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {currentLang === "kh"
              ? "យើងខ្ញុំផ្តល់នូវដំណោះស្រាយច្បាប់ប្រកបដោយយុទ្ធសាស្ត្រខ្ពស់ ដើម្បីការពារផលប្រយោជន៍ស្របច្បាប់របស់លោកអ្នកក្នុងគ្រប់កាលៈទេសៈ។"
              : "From high-stakes commercial disputes to major property acquisitions, our specialized advocates provide authoritative and strategic legal guidance."}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: "all", labelEn: "All Practices", labelKh: "ជំនាញទាំងអស់" },
              { id: "corporate", labelEn: "Corporate & Finance", labelKh: "ក្រុមហ៊ុន និងហិរញ្ញវត្ថុ" },
              { id: "litigation", labelEn: "Litigation & Defense", labelKh: "វិវាទ និងការពារក្តី" },
              { id: "property", labelEn: "Property & Personal", labelKh: "អចលនទ្រព្យ និងបុគ្គល" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#D4AF37] text-[#071126] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-[#0A1931] text-slate-300 border border-slate-800 hover:border-[#D4AF37]/40 hover:text-white"
                } ${currentLang === "kh" ? "font-khmer tracking-normal leading-normal" : ""}`}
              >
                {currentLang === "kh" ? tab.labelKh : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPractices.map((practice) => (
            <div
              key={practice.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300"
              onClick={() => setSelectedModalPractice(practice)}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0E2243] border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#132B5E] transition-all duration-300 shadow-sm">
                  {iconMap[practice.iconName]}
                </div>

                <h3
                  className={`text-lg font-bold text-white mb-2.5 group-hover:text-[#F3E5AB] transition-colors ${
                    currentLang === "kh" ? "font-khmer text-base leading-[1.6]" : "font-serif-luxury leading-snug"
                  }`}
                >
                  {practice.title[currentLang]}
                </h3>

                <p
                  className={`text-xs sm:text-sm text-slate-300 mb-4 line-clamp-3 ${
                    currentLang === "kh" ? "font-khmer text-[13px] leading-[1.75]" : "leading-relaxed"
                  }`}
                >
                  {practice.shortDesc[currentLang]}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                  <span className={currentLang === "kh" ? "font-khmer text-[12px] leading-normal" : ""}>
                    {currentLang === "kh" ? "ស្វែងយល់លម្អិត" : "Explore Details"}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Area Deep-Dive Modal */}
      {selectedModalPractice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#071126] border border-[#D4AF37]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedModalPractice(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close practice detail modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0E2243] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                {iconMap[selectedModalPractice.iconName]}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  Imperial Law Practice Focus
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-white ${
                    currentLang === "kh" ? "font-khmer text-lg leading-[1.6]" : "font-serif-luxury"
                  }`}
                >
                  {selectedModalPractice.title[currentLang]}
                </h3>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p
                className={`text-sm sm:text-base text-slate-200 ${
                  currentLang === "kh" ? "font-khmer leading-[1.8]" : "leading-relaxed"
                }`}
              >
                {selectedModalPractice.fullDesc[currentLang]}
              </p>

              <div>
                <h4
                  className={`text-xs font-bold text-[#E6CE78] mb-3 ${
                    currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
                  }`}
                >
                  {currentLang === "kh" ? "សេវាកម្មចម្បងដែលយើងខ្ញុំផ្តល់ជូន" : "Key Advisory & Representation Capabilities"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModalPractice.highlights[currentLang].map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#0A1931] border border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span
                        className={`text-xs text-slate-200 ${
                          currentLang === "kh" ? "font-khmer text-[12px] leading-[1.65]" : ""
                        }`}
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  const pId = selectedModalPractice.id;
                  setSelectedModalPractice(null);
                  onSelectPractice(pId);
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  currentLang === "kh" ? "font-khmer leading-normal" : ""
                }`}
              >
                <span>
                  {currentLang === "kh" ? "ពិគ្រោះយោបល់លើជំនាញនេះ" : "Consult on this Practice Area"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedModalPractice(null)}
                className={`w-full sm:w-auto px-5 py-2.5 text-xs text-slate-400 hover:text-white ${
                  currentLang === "kh" ? "font-khmer leading-normal" : ""
                }`}
              >
                {currentLang === "kh" ? "ត្រឡប់ក្រោយ" : "Close Window"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
