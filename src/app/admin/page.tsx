"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Unlock,
  Shield,
  Save,
  CheckCircle2,
  ExternalLink,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  RotateCcw,
  Briefcase,
  AlertCircle,
  Eye,
  LogOut,
  ChevronRight,
  Plus,
  Trash2,
  Edit3,
} from "lucide-react";
import { getStoredContent, STORAGE_KEY, SiteContentType } from "@/context/ContentContext";
import { siteContent as defaultContent, PracticeArea } from "@/data/content";

const PIN_STORAGE_KEY = "imperial_admin_pin";
const AUTH_SESSION_KEY = "imperial_admin_auth";

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<string>("");
  const [storedPin, setStoredPin] = useState<string>("$Web@2026!?");
  const [newPinInput, setNewPinInput] = useState<string>("");
  const [pinSuccessMsg, setPinSuccessMsg] = useState<string>("");

  // Content Editing State
  const [formData, setFormData] = useState<SiteContentType>(defaultContent);
  const [activeTab, setActiveTab] = useState<"contact" | "hero" | "practices" | "security">("contact");
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [selectedPracticeIndex, setSelectedPracticeIndex] = useState<number>(0);

  // Initialize and check session
  useEffect(() => {
    // Load custom PIN if set
    const savedPin = localStorage.getItem(PIN_STORAGE_KEY);
    if (savedPin) {
      setStoredPin(savedPin);
    }

    // Check if session is already active
    const sessionAuth = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }

    // Load stored content
    setFormData(getStoredContent());
  }, []);

  // Handle PIN Login
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === storedPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      setPinError("");
      setPinInput("");
    } else {
      setPinError("Incorrect PIN code. Please try again.");
      setPinInput("");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  };

  // Handle Change PIN
  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPinInput.length < 4) {
      setPinError("PIN must be at least 4 digits");
      return;
    }
    setStoredPin(newPinInput);
    localStorage.setItem(PIN_STORAGE_KEY, newPinInput);
    setPinSuccessMsg("Admin PIN updated successfully!");
    setNewPinInput("");
    setTimeout(() => setPinSuccessMsg(""), 4000);
  };

  // Save All Changes
  const handleSaveChanges = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      window.dispatchEvent(new CustomEvent("imperial_content_updated"));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    } catch (err) {
      console.error("Failed to save changes:", err);
      alert("Failed to save changes to storage.");
    }
  };

  // Reset to Defaults
  const handleResetDefaults = () => {
    if (window.confirm("Are you sure you want to reset all website content to factory defaults?")) {
      setFormData(defaultContent);
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent("imperial_content_updated"));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    }
  };

  // Update specific Practice Area Field
  const updatePracticeField = (
    index: number,
    field: "title" | "shortDesc" | "fullDesc",
    lang: "en" | "kh",
    value: string
  ) => {
    const updated = [...formData.practices];
    updated[index] = {
      ...updated[index],
      [field]: {
        ...updated[index][field],
        [lang]: value,
      },
    };
    setFormData({ ...formData, practices: updated });
  };

  // -------------------------------------------------------------
  // PIN LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#040915] text-[#F8FAFC] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow-gold pointer-events-none opacity-25 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] radial-glow-navy pointer-events-none opacity-30 blur-3xl" />

        <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative z-10 text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <Image
              src="/images/logo.png"
              alt="Imperial Law Group Logo"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </div>

          <span className="font-khmer text-xs font-semibold text-[#D4AF37] block">
            ក្រុមមេធាវីអឹមភើរៀល
          </span>
          <h1 className="font-serif-luxury text-xl font-bold text-white mb-1 tracking-wider">
            IMPERIAL LAW GROUP
          </h1>
          <p className="text-xs text-slate-400 mb-6">
            Administrative Access Portal
          </p>

          <div className="w-12 h-12 rounded-2xl bg-[#0E2243] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37] mb-6 shadow-inner">
            <Lock className="w-6 h-6" />
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Enter Security PIN
              </label>
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError("");
                }}
                placeholder="••••"
                autoFocus
                className="w-full text-center text-2xl tracking-[0.5em] py-3 px-4 rounded-xl bg-[#0A1931] border border-slate-700 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
              <p className="text-[11px] text-slate-500 mt-2">
                Default Access PIN: <span className="text-[#D4AF37] font-mono font-bold">1234</span>
              </p>
            </div>

            {pinError && (
              <div className="flex items-center justify-center gap-1.5 text-rose-400 text-xs py-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{pinError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Unlock className="w-4 h-4 text-[#071126]" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[11px]"
            >
              ← Back to Main Website
            </Link>
            <span className="text-[10px] text-slate-500 font-mono">v1.0.0</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  const currentPractice = formData.practices[selectedPracticeIndex];

  return (
    <div className="min-h-screen bg-[#040915] text-[#F8FAFC] flex flex-col selection:bg-[#C5A059] selection:text-[#040915]">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#071126]/95 backdrop-blur-md border-b border-[#D4AF37]/25 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif-luxury text-sm sm:text-base font-bold text-white tracking-wide">
                  IMPERIAL LAW GROUP
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/30">
                  ADMIN DASHBOARD
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-khmer">
                ផ្ទាំងគ្រប់គ្រងទិន្នន័យគេហទំព័រ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Live Website */}
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-[#0E2243] border border-slate-700 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live Website</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>

            {/* Save Button */}
            <button
              onClick={handleSaveChanges}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              <Save className="w-3.5 h-3.5 text-[#071126]" />
              <span>Save Changes</span>
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
              title="Lock Admin Session"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Save Success Alert Notification Toast */}
      {saveSuccess && (
        <div className="fixed top-18 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-200 shadow-2xl">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <p className="text-xs font-bold">Changes Saved Successfully!</p>
              <p className="text-[11px] text-emerald-300/80">Reflecting live on homepage (/) immediately.</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
          {[
            { id: "contact", label: "Contact Info & Headquarters", icon: <Phone className="w-4 h-4" /> },
            { id: "hero", label: "Hero & Brand Headlines", icon: <Sparkles className="w-4 h-4" /> },
            { id: "practices", label: "Practice Areas (8 Services)", icon: <Briefcase className="w-4 h-4" /> },
            { id: "security", label: "PIN & Settings", icon: <Shield className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-[#D4AF37] text-[#071126] shadow-md"
                  : "bg-[#0A1931] text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white"
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ============================================================== */}
        {/* TAB 1: CONTACT INFO & HEADQUARTERS                            */}
        {/* ============================================================== */}
        {activeTab === "contact" && (
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/20 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span>Direct Communication Channels</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Updates here immediately reflect across the top navbar, hero urgent banner, contact section, and footer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Main Office Hotline Phone
                  </label>
                  <input
                    type="text"
                    value={formData.brand.hotline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, hotline: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    24/7 Urgent Emergency Line
                  </label>
                  <input
                    type="text"
                    value={formData.brand.emergencyPhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, emergencyPhone: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Telegram Official Link / Username
                  </label>
                  <input
                    type="text"
                    value={formData.brand.telegram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, telegram: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Official Inquiries Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.brand.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, email: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Address & Hours Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/20 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span>Phnom Penh Office Address & Working Schedule</span>
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Office Address (English)
                  </label>
                  <input
                    type="text"
                    value={formData.brand.addressEn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, addressEn: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                    អាសយដ្ឋានការិយាល័យ (ភាសាខ្មែរ)
                  </label>
                  <input
                    type="text"
                    value={formData.brand.addressKh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, addressKh: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Working Hours (English)
                    </label>
                    <input
                      type="text"
                      value={formData.brand.workingHoursEn}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          brand: { ...formData.brand, workingHoursEn: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                      ម៉ោងបំពេញការងារ (ភាសាខ្មែរ)
                    </label>
                    <input
                      type="text"
                      value={formData.brand.workingHoursKh}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          brand: { ...formData.brand, workingHoursKh: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: HERO & BRAND HEADLINES                                 */}
        {/* ============================================================== */}
        {activeTab === "hero" && (
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/20 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span>Hero Section Titles & Slogan</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Manage the primary value proposition seen by clients upon landing on the homepage.
                </p>
              </div>

              {/* Brand Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Brand Name (English)
                  </label>
                  <input
                    type="text"
                    value={formData.brand.nameEn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, nameEn: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                    ឈ្មោះស្ថាប័ន (ភាសាខ្មែរ)
                  </label>
                  <input
                    type="text"
                    value={formData.brand.nameKh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: { ...formData.brand, nameKh: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Accreditation Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Accreditation Badge (English)
                  </label>
                  <input
                    type="text"
                    value={formData.hero.badge.en}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          badge: { ...formData.hero.badge, en: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                    ផ្លាកបញ្ជាក់សមាគម (ភាសាខ្មែរ)
                  </label>
                  <input
                    type="text"
                    value={formData.hero.badge.kh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          badge: { ...formData.hero.badge, kh: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Main Headline Line 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Main Headline Line 1 (English)
                  </label>
                  <input
                    type="text"
                    value={formData.hero.titleLine1.en}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          titleLine1: { ...formData.hero.titleLine1, en: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                    ចំណងជើងធំ ជួរទី១ (ភាសាខ្មែរ)
                  </label>
                  <input
                    type="text"
                    value={formData.hero.titleLine1.kh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          titleLine1: { ...formData.hero.titleLine1, kh: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Gold Highlighted Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Gold Highlighted Title (English)
                  </label>
                  <input
                    type="text"
                    value={formData.hero.titleHighlight.en}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          titleHighlight: { ...formData.hero.titleHighlight, en: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                    ចំណងជើងអក្សរមាស (ភាសាខ្មែរ)
                  </label>
                  <input
                    type="text"
                    value={formData.hero.titleHighlight.kh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          titleHighlight: { ...formData.hero.titleHighlight, kh: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Hero Subtitle / Mission Statement */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Hero Subtitle & Value Proposition (English)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.hero.subtitle.en}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          subtitle: { ...formData.hero.subtitle, en: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                    សេចក្តីថ្លែងបេសកកម្ម និងពាក្យស្លោក (ភាសាខ្មែរ)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.hero.subtitle.kh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: {
                          ...formData.hero,
                          subtitle: { ...formData.hero.subtitle, kh: e.target.value },
                        },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer leading-relaxed focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: PRACTICE AREAS                                         */}
        {/* ============================================================== */}
        {activeTab === "practices" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in">
            {/* Left Sidebar: Practice Area Selector */}
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                Select Service to Edit ({formData.practices.length})
              </h3>
              <div className="space-y-1.5">
                {formData.practices.map((practice, index) => (
                  <button
                    key={practice.id}
                    onClick={() => setSelectedPracticeIndex(index)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${selectedPracticeIndex === index
                        ? "bg-[#0E2243] border border-[#D4AF37] text-[#F3E5AB] shadow-md"
                        : "bg-[#0A1931] border border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                  >
                    <div>
                      <span className="block font-bold">{practice.title.en}</span>
                      <span className="text-[11px] text-slate-400 font-khmer block mt-0.5">
                        {practice.title.kh}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel: Practice Area Editor */}
            <div className="lg:col-span-8">
              {currentPractice && (
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/25 space-y-6">
                  <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold block">
                        Editing Practice #{selectedPracticeIndex + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {currentPractice.title.en}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      ID: {currentPractice.id}
                    </span>
                  </div>

                  {/* Title EN & KH */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Title (English)
                      </label>
                      <input
                        type="text"
                        value={currentPractice.title.en}
                        onChange={(e) =>
                          updatePracticeField(selectedPracticeIndex, "title", "en", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                        ឈ្មោះជំនាញ (ភាសាខ្មែរ)
                      </label>
                      <input
                        type="text"
                        value={currentPractice.title.kh}
                        onChange={(e) =>
                          updatePracticeField(selectedPracticeIndex, "title", "kh", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Short Description (English - Grid Card)
                      </label>
                      <textarea
                        rows={2}
                        value={currentPractice.shortDesc.en}
                        onChange={(e) =>
                          updatePracticeField(selectedPracticeIndex, "shortDesc", "en", e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                        ការពិពណ៌នាសង្ខេប (ភាសាខ្មែរ - លើផ្ទាំងកាត)
                      </label>
                      <textarea
                        rows={2}
                        value={currentPractice.shortDesc.kh}
                        onChange={(e) =>
                          updatePracticeField(selectedPracticeIndex, "shortDesc", "kh", e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer leading-relaxed focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Full Description (Modal View) */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Detailed Description (English - In-Depth Modal)
                      </label>
                      <textarea
                        rows={3}
                        value={currentPractice.fullDesc.en}
                        onChange={(e) =>
                          updatePracticeField(selectedPracticeIndex, "fullDesc", "en", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 font-khmer mb-1.5">
                        ការពិពណ៌នាលម្អិត (ភាសាខ្មែរ - ផ្ទាំងលម្អិត Modal)
                      </label>
                      <textarea
                        rows={3}
                        value={currentPractice.fullDesc.kh}
                        onChange={(e) =>
                          updatePracticeField(selectedPracticeIndex, "fullDesc", "kh", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-xs sm:text-sm font-khmer leading-relaxed focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: PIN & SETTINGS                                         */}
        {/* ============================================================== */}
        {activeTab === "security" && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            {/* Change PIN Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/20 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#D4AF37]" />
                  <span>Update Admin Access PIN</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Change your secure numerical passcode for logging into `/admin`.
                </p>
              </div>

              <form onSubmit={handleChangePin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    New Passcode (4-8 digits)
                  </label>
                  <input
                    type="password"
                    maxLength={8}
                    required
                    value={newPinInput}
                    onChange={(e) => setNewPinInput(e.target.value)}
                    placeholder="Enter new PIN"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1931] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                {pinSuccessMsg && (
                  <p className="text-xs text-emerald-400 font-semibold">{pinSuccessMsg}</p>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                >
                  Save New PIN
                </button>
              </form>
            </div>

            {/* Reset Factory Content Defaults */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 space-y-4 bg-rose-950/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-rose-200">
                    Reset Website Content to Factory Defaults
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    This will erase any custom edits saved in browser storage and restore the original bilingual copy.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetDefaults}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-rose-300 border border-rose-500/40 bg-rose-900/20 hover:bg-rose-900/40 transition-colors cursor-pointer"
              >
                Reset Content to Defaults
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="sticky bottom-0 bg-[#071126]/95 backdrop-blur-md border-t border-[#D4AF37]/20 py-3 px-4 sm:px-8 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Admin Session Active</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-xs text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors flex items-center gap-1.5"
            >
              <span>View Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleSaveChanges}
              className="px-6 py-2 rounded-xl text-xs font-bold text-[#071126] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5 text-[#071126]" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
