"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar, ShieldCheck, CheckCircle2, Send, Clock, User, Phone, Mail } from "lucide-react";
import { siteContent, Language } from "@/data/content";
import { SiteContentType } from "@/context/ContentContext";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialPractice?: string;
  content?: SiteContentType;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialPractice,
  content,
}) => {
  const activeContent = content || siteContent;
  const { consultationModal, practices, brand } = activeContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    practice: initialPractice || "corporate",
    urgency: "normal",
    meetingType: "office",
    date: "",
    summary: "",
  });

  useEffect(() => {
    if (initialPractice) {
      setFormData((prev) => ({ ...prev, practice: initialPractice }));
    }
  }, [initialPractice]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      practice: "corporate",
      urgency: "normal",
      meetingType: "office",
      date: "",
      summary: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#071126] border border-[#D4AF37]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close Consultation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-4">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Imperial Law Group Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3
              className={`text-lg sm:text-xl font-bold text-white ${
                currentLang === "kh" ? "font-khmer text-base leading-[1.6]" : "font-serif-luxury leading-tight"
              }`}
            >
              {consultationModal.title[currentLang]}
            </h3>
            <p
              className={`text-xs text-[#D4AF37] font-medium mt-0.5 ${
                currentLang === "kh" ? "font-khmer text-[11px] leading-normal" : ""
              }`}
            >
              {consultationModal.subtitle[currentLang]}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4
              className={`text-xl font-bold text-white ${
                currentLang === "kh" ? "font-khmer leading-[1.6]" : "font-serif-luxury"
              }`}
            >
              {consultationModal.successTitle[currentLang]}
            </h4>
            <p
              className={`text-xs sm:text-sm text-slate-300 max-w-md mx-auto ${
                currentLang === "kh" ? "font-khmer text-xs leading-[1.75]" : "leading-relaxed"
              }`}
            >
              {consultationModal.successMsg[currentLang]}
            </p>
            <div className="p-3 bg-[#0A1931] border border-slate-800 rounded-xl text-xs text-slate-400">
              Emergency Direct Line:{" "}
              <a href={`tel:${brand.emergencyPhone}`} className="text-[#D4AF37] font-bold">
                {brand.emergencyPhone}
              </a>
            </div>
            <button
              onClick={resetAndClose}
              className={`mt-4 px-8 py-2.5 rounded-xl font-bold text-xs text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] ${
                currentLang === "kh" ? "font-khmer leading-normal" : ""
              }`}
            >
              {consultationModal.closeBtn[currentLang]}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Urgency Badge Selector */}
            <div>
              <label
                className={`block text-[11px] text-slate-300 mb-1.5 ${
                  currentLang === "kh"
                    ? "font-khmer text-xs leading-normal font-medium"
                    : "uppercase tracking-wider font-bold text-slate-400"
                }`}
              >
                {consultationModal.urgency[currentLang]}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "normal", label: consultationModal.urgencyNormal[currentLang], color: "hover:border-[#D4AF37]" },
                  { id: "high", label: consultationModal.urgencyHigh[currentLang], color: "hover:border-amber-400" },
                  { id: "critical", label: consultationModal.urgencyCritical[currentLang], color: "hover:border-rose-400" },
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, urgency: u.id })}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold border transition-all text-center ${
                      formData.urgency === u.id
                        ? "bg-[#D4AF37] text-[#071126] border-[#D4AF37]"
                        : "bg-[#0A1931] text-slate-300 border-slate-800"
                    } ${u.color} ${currentLang === "kh" ? "font-khmer text-[11px] tracking-normal leading-normal" : ""}`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  className={`block text-[11px] text-slate-300 mb-1 ${
                    currentLang === "kh"
                      ? "font-khmer text-xs leading-normal font-medium"
                      : "uppercase tracking-wider font-bold"
                  }`}
                >
                  {consultationModal.fullName[currentLang]} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={currentLang === "kh" ? "ឈ្មោះពេញ" : "Full Name"}
                    className={`w-full px-3.5 py-2 pl-9 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none ${
                      currentLang === "kh" ? "font-khmer leading-normal" : ""
                    }`}
                  />
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label
                  className={`block text-[11px] text-slate-300 mb-1 ${
                    currentLang === "kh"
                      ? "font-khmer text-xs leading-normal font-medium"
                      : "uppercase tracking-wider font-bold"
                  }`}
                >
                  {consultationModal.phone[currentLang]} *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+855 ..."
                    className="w-full px-3.5 py-2 pl-9 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                </div>
              </div>
            </div>

            {/* Email and Practice Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  className={`block text-[11px] text-slate-300 mb-1 ${
                    currentLang === "kh"
                      ? "font-khmer text-xs leading-normal font-medium"
                      : "uppercase tracking-wider font-bold"
                  }`}
                >
                  {consultationModal.email[currentLang]}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2 pl-9 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label
                  className={`block text-[11px] text-slate-300 mb-1 ${
                    currentLang === "kh"
                      ? "font-khmer text-xs leading-normal font-medium"
                      : "uppercase tracking-wider font-bold"
                  }`}
                >
                  {consultationModal.practiceCategory[currentLang]}
                </label>
                <select
                  value={formData.practice}
                  onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none ${
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

            {/* Meeting Type & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  className={`block text-[11px] text-slate-300 mb-1 ${
                    currentLang === "kh"
                      ? "font-khmer text-xs leading-normal font-medium"
                      : "uppercase tracking-wider font-bold"
                  }`}
                >
                  {currentLang === "kh" ? "ទម្រង់ជំនួប" : "Consultation Format"}
                </label>
                <select
                  value={formData.meetingType}
                  onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none ${
                    currentLang === "kh" ? "font-khmer leading-normal" : ""
                  }`}
                >
                  <option value="office">
                    {currentLang === "kh" ? "ការិយាល័យភ្នំពេញ (In-Person Office)" : "Phnom Penh Office (In-Person)"}
                  </option>
                  <option value="video">
                    {currentLang === "kh" ? "វីដេអូ Zoom / Google Meet" : "Secure Virtual Video Call"}
                  </option>
                  <option value="phone">
                    {currentLang === "kh" ? "ការហៅទូរស័ព្ទ / Telegram Call" : "Confidential Phone/Telegram Call"}
                  </option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-[11px] text-slate-300 mb-1 ${
                    currentLang === "kh"
                      ? "font-khmer text-xs leading-normal font-medium"
                      : "uppercase tracking-wider font-bold"
                  }`}
                >
                  {consultationModal.preferredDate[currentLang]}
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            {/* Summary */}
            <div>
              <label
                className={`block text-[11px] text-slate-300 mb-1 ${
                  currentLang === "kh"
                    ? "font-khmer text-xs leading-normal font-medium"
                    : "uppercase tracking-wider font-bold"
                }`}
              >
                {consultationModal.caseSummary[currentLang]}
              </label>
              <textarea
                rows={3}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                placeholder={
                  currentLang === "kh"
                    ? "សូមបញ្ជាក់ព័ត៌មានត្រួសៗអំពីបញ្ហាដែលលោកអ្នកចង់ពិគ្រោះ..."
                    : "Key points or questions you would like our attorneys to address..."
                }
                className={`w-full px-3.5 py-2 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none ${
                  currentLang === "kh" ? "font-khmer leading-[1.7]" : ""
                }`}
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className={currentLang === "kh" ? "font-khmer leading-normal text-[11px]" : ""}>
                  {currentLang === "kh" ? "រក្សាការសម្ងាត់ ១០០%" : "100% Confidential"}
                </span>
              </div>

              <button
                type="submit"
                className={`px-6 py-2.5 rounded-xl font-bold text-xs text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 cursor-pointer ${
                  currentLang === "kh" ? "font-khmer leading-normal" : ""
                }`}
              >
                <Send className="w-3.5 h-3.5 text-[#071126]" />
                <span>{consultationModal.submitBtn[currentLang]}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
