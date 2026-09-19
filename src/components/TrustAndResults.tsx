"use client";

import React, { useState } from "react";
import { Award, Quote, ChevronLeft, ChevronRight, CheckCircle2, Shield } from "lucide-react";
import { siteContent, Language } from "@/data/content";

interface TrustAndResultsProps {
  currentLang: Language;
}

export const TrustAndResults: React.FC<TrustAndResultsProps> = ({ currentLang }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const { testimonials } = siteContent;

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonialIndex];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] radial-glow-navy pointer-events-none opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {currentLang === "kh" ? "លទ្ធផលការងារ និងទំនុកចិត្ត" : "TRACK RECORD & CLIENT TRUST"}
            </span>
          </div>

          {currentLang === "kh" ? (
            <h2 className="font-khmer text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.6]">
              លទ្ធផលជាក់ស្តែងនៃការការពារក្តី និងការប្រឹក្សា
            </h2>
          ) : (
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Proven Outcomes in <span className="text-gradient-gold">High-Stakes Matters</span>
            </h2>
          )}

          <p
            className={`text-slate-300 text-base sm:text-lg ${
              currentLang === "kh" ? "font-khmer text-[15px] leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {currentLang === "kh"
              ? "សក្ខីភាពពីថ្នាក់ដឹកនាំក្រុមហ៊ុន និងវិនិយោគិន ដែលបានជឿទុកចិត្តលើការការពារក្តី និងការរៀបចំកិច្ចសន្យាដោយក្រុមមេធាវីអឹមភើរៀល។"
              : "Discover how our strategic counsel and disciplined litigation protect corporate investments, resolve protracted disputes, and uphold client interests."}
          </p>
        </div>

        {/* 2-Column: Track Record Highlights + Testimonial Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Notable Track Record Milestones */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-8 rounded-3xl border border-[#D4AF37]/25">
            <div>
              <h3
                className={`text-xl font-bold text-white mb-6 flex items-center gap-2.5 ${
                  currentLang === "kh" ? "font-khmer text-lg leading-[1.6]" : "font-serif-luxury"
                }`}
              >
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                {currentLang === "kh" ? "សមិទ្ធផលការងារលេចធ្លោ" : "Representative Matters & Precedents"}
              </h3>

              <div className="space-y-4">
                {[
                  {
                    titleEn: "$45 Million Foreign Direct Investment (FDI)",
                    titleKh: "គម្រោងវិនិយោគផ្ទាល់ពីបរទេសតម្លៃ ៤៥ លានដុល្លារ",
                    descEn: "Full legal due diligence, commercial contracts, and CDC Qualified Investment Project (QIP) approval for a major industrial development.",
                    descKh: "ត្រួតពិនិត្យប្លង់ដី ធ្វើកិច្ចសន្យាពាណិជ្ជកម្ម និងសុំការអនុម័តគម្រោង QIP ពីក្រុមប្រឹក្សាអភិវឌ្ឍន៍កម្ពុជា (CDC) ដោយជោគជ័យ។",
                  },
                  {
                    titleEn: "Landmark Appellate Commercial Litigation",
                    titleKh: "ជ័យជម្នះក្នុងបណ្តឹងពាណិជ្ជកម្មនៅសាលាឧទ្ធរណ៍",
                    descEn: "Successfully defended a regional distribution group against a $12M unlawful contract termination lawsuit, securing full dismissal.",
                    descKh: "ការពារក្តីជោគជ័យជូនក្រុមហ៊ុនចែកចាយក្នុងតំបន់ ប្រឆាំងនឹងការទាមទារសំណងមិនស្របច្បាប់តម្លៃ ១២ លានដុល្លារ។",
                  },
                  {
                    titleEn: "Commercial Banking & Collateral Perfection",
                    titleKh: "ការចុះបញ្ជីធានាឥណទានធនាគារពាណិជ្ជកម្ម",
                    descEn: "Structured and registered complex syndicated mortgage facilities and debt security packages for commercial lenders under NBC regulations.",
                    descKh: "រៀបចំរចនាសម្ព័ន្ធ និងចុះបញ្ជីទ្រព្យបញ្ចាំធានាកម្ចីពហុភាគីស្របតាមបទប្បញ្ញត្តិធនាគារជាតិនៃកម្ពុជា។",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0A1931]/80 border border-slate-800 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4
                        className={`text-sm font-bold text-[#F3E5AB] mb-1 ${
                          currentLang === "kh" ? "font-khmer text-xs leading-[1.6]" : ""
                        }`}
                      >
                        {currentLang === "kh" ? item.titleKh : item.titleEn}
                      </h4>
                      <p
                        className={`text-xs text-slate-300 ${
                          currentLang === "kh" ? "font-khmer text-[12px] leading-[1.75]" : "leading-relaxed"
                        }`}
                      >
                        {currentLang === "kh" ? item.descKh : item.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
                {currentLang === "kh" ? "ឯកសារសំណុំរឿងផ្ទៀងផ្ទាត់រួច" : "Verified Case Files"}
              </span>
              <span className={`text-[#D4AF37] ${currentLang === "kh" ? "font-khmer leading-normal" : ""}`}>
                {currentLang === "kh" ? "រក្សាការសម្ងាត់ជូនកូនក្តី" : "Confidentiality Preserved"}
              </span>
            </div>
          </div>

          {/* Right Column: Client Testimonial Carousel */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#0E2243]/90 to-[#071126]/90 relative">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6">
              <Quote className="w-6 h-6" />
            </div>

            <div className="my-auto">
              <p
                className={`text-base sm:text-lg text-slate-100 mb-6 ${
                  currentLang === "kh"
                    ? "font-khmer text-[15px] not-italic leading-[1.85]"
                    : "italic leading-relaxed"
                }`}
              >
                “{current.quote[currentLang]}”
              </p>

              <div>
                <h4 className="font-bold text-white text-base tracking-normal">
                  {current.author}
                </h4>
                <p
                  className={`text-xs text-[#D4AF37] font-medium mt-0.5 ${
                    currentLang === "kh" ? "font-khmer text-[12px] leading-normal" : ""
                  }`}
                >
                  {current.title[currentLang]}
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-6">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonialIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonialIndex ? "w-6 bg-[#D4AF37]" : "w-2 bg-slate-700"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 rounded-full bg-[#0A1931] border border-slate-700 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center text-slate-300 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 rounded-full bg-[#0A1931] border border-slate-700 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center text-slate-300 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
