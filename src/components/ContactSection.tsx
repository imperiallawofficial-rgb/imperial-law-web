"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteContent, Language } from "@/data/content";
import { SiteContentType } from "@/context/ContentContext";

interface ContactSectionProps {
  currentLang: Language;
  content?: SiteContentType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, content }) => {
  const activeContent = content || siteContent;
  const { brand, practices } = activeContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practice: "corporate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] radial-glow-gold pointer-events-none opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2243] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span className={currentLang === "kh" ? "font-khmer leading-normal" : ""}>
              {currentLang === "kh" ? "ទំនាក់ទំនងការិយាល័យ" : "HEADQUARTERS & CONTACT"}
            </span>
          </div>

          {currentLang === "kh" ? (
            <h2 className="font-khmer text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.6]">
              ទំនាក់ទំនង និងណាត់ជួបជាមួយក្រុមមេធាវី
            </h2>
          ) : (
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Initiate a Confidential <span className="text-gradient-gold">Legal Inquiry</span>
            </h2>
          )}

          <p
            className={`text-slate-300 text-base sm:text-lg ${
              currentLang === "kh" ? "font-khmer text-[15px] leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {currentLang === "kh"
              ? "ការិយាល័យកណ្តាលរបស់យើងខ្ញុំស្ថិតនៅបេះដូងពាណិជ្ជកម្មនៃរាជធានីភ្នំពេញ ងាយស្រួលក្នុងការធ្វើដំណើរ និងមានចំណតយានយន្តធំទូលាយ។"
              : "Reach out to schedule an in-person conference at our Phnom Penh offices or request an immediate remote briefing."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-[#D4AF37]/25 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0E2243] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold text-white mb-1 ${
                      currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
                    }`}
                  >
                    {currentLang === "kh" ? "អាសយដ្ឋានការិយាល័យកណ្តាល" : "Phnom Penh Headquarters"}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm text-slate-300 ${
                      currentLang === "kh" ? "font-khmer leading-[1.75]" : "leading-relaxed"
                    }`}
                  >
                    {currentLang === "kh" ? brand.addressKh : brand.addressEn}
                  </p>
                </div>
              </div>

              {/* Phone & Emergency */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-[#0E2243] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold text-white mb-1 ${
                      currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
                    }`}
                  >
                    {currentLang === "kh" ? "ទូរស័ព្ទ និងសង្គ្រោះបន្ទាន់" : "Direct Hotlines"}
                  </h4>
                  <p className="text-xs text-slate-400">Main Office:</p>
                  <a
                    href={`tel:${brand.hotline}`}
                    className="text-sm font-bold text-white hover:text-[#D4AF37] transition-colors block"
                  >
                    {brand.hotline}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">24/7 Emergency Line:</p>
                  <a
                    href={`tel:${brand.emergencyPhone}`}
                    className="text-sm font-bold text-[#E6CE78] hover:underline block"
                  >
                    {brand.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* Email & Telegram */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-[#0E2243] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold text-white mb-1 ${
                      currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
                    }`}
                  >
                    {currentLang === "kh" ? "ទំនាក់ទំនងរហ័ស" : "Instant Messaging & Email"}
                  </h4>
                  <p className="text-xs text-slate-400">Official Telegram Channel:</p>
                  <a
                    href={brand.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#D4AF37] hover:underline inline-block mt-0.5"
                  >
                    t.me/imperiallawgroup (Direct Chat)
                  </a>
                  <p className="text-xs text-slate-400 mt-2">Email:</p>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-xs font-semibold text-slate-200 hover:text-white"
                  >
                    {brand.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-[#0E2243] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold text-white mb-1 ${
                      currentLang === "kh" ? "font-khmer text-xs leading-normal" : "uppercase tracking-wider"
                    }`}
                  >
                    {currentLang === "kh" ? "ម៉ោងបំពេញការងារ" : "Office Hours"}
                  </h4>
                  <p
                    className={`text-xs text-slate-300 ${
                      currentLang === "kh" ? "font-khmer leading-[1.75]" : "leading-relaxed"
                    }`}
                  >
                    {currentLang === "kh" ? brand.workingHoursKh : brand.workingHoursEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality Guarantee Notice */}
            <div className="p-4 rounded-2xl bg-[#0A1931]/60 border border-[#D4AF37]/20 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <span className={currentLang === "kh" ? "font-khmer text-[12px] leading-[1.65]" : ""}>
                {currentLang === "kh"
                  ? "រាល់ទិន្នន័យ និងព័ត៌មានដែលផ្ញើមកកាន់យើងខ្ញុំ ត្រូវបានការពារក្រោមសិទ្ធិសម្ងាត់រវាងមេធាវី និងកូនក្តី។"
                  : "All inquiries are protected by attorney-client privilege under Cambodian Bar regulations."}
              </span>
            </div>
          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className={`text-xl font-bold text-white ${
                      currentLang === "kh" ? "font-khmer text-lg leading-[1.6]" : "font-serif-luxury"
                    }`}
                  >
                    {activeContent.consultationModal.successTitle[currentLang]}
                  </h3>
                  <p
                    className={`text-sm text-slate-300 max-w-md mx-auto ${
                      currentLang === "kh" ? "font-khmer text-xs leading-[1.75]" : "leading-relaxed"
                    }`}
                  >
                    {activeContent.consultationModal.successMsg[currentLang]}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        practice: "corporate",
                        message: "",
                      });
                    }}
                    className={`mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 ${
                      currentLang === "kh" ? "font-khmer leading-normal" : ""
                    }`}
                  >
                    {currentLang === "kh" ? "ផ្ញើសំណើថ្មី" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-6">
                    <h3
                      className={`text-xl font-bold text-white ${
                        currentLang === "kh" ? "font-khmer text-lg leading-[1.6]" : "font-serif-luxury"
                      }`}
                    >
                      {currentLang === "kh" ? "ទម្រង់ទំនាក់ទំនងពិគ្រោះយោបល់" : "Direct Case Inquiry Form"}
                    </h3>
                    <p
                      className={`text-xs text-slate-400 mt-1 ${
                        currentLang === "kh" ? "font-khmer text-[12px] leading-normal" : ""
                      }`}
                    >
                      {currentLang === "kh"
                        ? "សូមបំពេញព័ត៌មានខាងក្រោម។ មេធាវីជំនាញរបស់យើងនឹងឆ្លើយតបក្នុងពេលឆាប់ៗ។"
                        : "Fill out the fields below. A senior attorney will review and contact you promptly."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs text-slate-300 mb-1.5 ${
                          currentLang === "kh"
                            ? "font-khmer text-xs leading-normal font-medium"
                            : "uppercase tracking-wider font-semibold"
                        }`}
                      >
                        {currentLang === "kh" ? "ឈ្មោះពេញ / ក្រុមហ៊ុន *" : "Full Name / Organization *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={currentLang === "kh" ? "ឧ. សុខ ចិន្តា / ក្រុមហ៊ុន..." : "e.g. John Doe / Oknha ..."}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors ${
                          currentLang === "kh" ? "font-khmer leading-normal" : ""
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs text-slate-300 mb-1.5 ${
                          currentLang === "kh"
                            ? "font-khmer text-xs leading-normal font-medium"
                            : "uppercase tracking-wider font-semibold"
                        }`}
                      >
                        {currentLang === "kh" ? "លេខទូរស័ព្ទ / តេឡេក្រាម *" : "Phone / Telegram *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+855 ..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs text-slate-300 mb-1.5 ${
                          currentLang === "kh"
                            ? "font-khmer text-xs leading-normal font-medium"
                            : "uppercase tracking-wider font-semibold"
                        }`}
                      >
                        {currentLang === "kh" ? "អ៊ីមែល (ប្រសិនបើមាន)" : "Email Address"}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs text-slate-300 mb-1.5 ${
                          currentLang === "kh"
                            ? "font-khmer text-xs leading-normal font-medium"
                            : "uppercase tracking-wider font-semibold"
                        }`}
                      >
                        {currentLang === "kh" ? "វិស័យច្បាប់ពាក់ព័ន្ធ" : "Relevant Practice Area"}
                      </label>
                      <select
                        value={formData.practice}
                        onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors ${
                          currentLang === "kh" ? "font-khmer leading-normal" : ""
                        }`}
                      >
                        {practices.map((p) => (
                          <option key={p.id} value={p.id} className="bg-[#0A1931] text-white">
                            {p.title[currentLang]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-xs text-slate-300 mb-1.5 ${
                        currentLang === "kh"
                          ? "font-khmer text-xs leading-normal font-medium"
                          : "uppercase tracking-wider font-semibold"
                      }`}
                    >
                      {currentLang === "kh" ? "សង្ខេបបញ្ហា ឬករណីច្បាប់" : "Brief Matter Summary"}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        currentLang === "kh"
                          ? "សូមសរសេរសង្ខេបអំពីករណីរបស់លោកអ្នក..."
                          : "Please provide a concise overview of your situation or requested legal service..."
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors ${
                        currentLang === "kh" ? "font-khmer leading-[1.7]" : ""
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      currentLang === "kh" ? "font-khmer leading-normal" : ""
                    }`}
                  >
                    <Send className="w-4 h-4 text-[#071126]" />
                    <span>
                      {currentLang === "kh" ? "ផ្ញើសំណើពិគ្រោះយោបល់" : "Transmit Confidential Request"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
