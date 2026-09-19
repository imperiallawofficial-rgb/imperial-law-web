"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { siteContent, siteContent as defaultContent } from "@/data/content";

export type SiteContentType = typeof siteContent;

interface ContentContextType {
  content: SiteContentType;
  updateContent: (newContent: SiteContentType) => void;
  resetToDefault: () => void;
  isLoaded: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const STORAGE_KEY = "imperial_custom_content";

export function getStoredContent(): SiteContentType {
  if (typeof window === "undefined") return defaultContent;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultContent;
    const parsed = JSON.parse(saved);
    return {
      ...defaultContent,
      ...parsed,
      brand: { ...defaultContent.brand, ...(parsed.brand || {}) },
      hero: { ...defaultContent.hero, ...(parsed.hero || {}) },
      nav: { ...defaultContent.nav, ...(parsed.nav || {}) },
      practices: parsed.practices || defaultContent.practices,
      attorneys: parsed.attorneys || defaultContent.attorneys,
      stats: parsed.stats || defaultContent.stats,
      values: parsed.values || defaultContent.values,
      testimonials: parsed.testimonials || defaultContent.testimonials,
      faq: parsed.faq || defaultContent.faq,
      consultationModal: { ...defaultContent.consultationModal, ...(parsed.consultationModal || {}) },
    };
  } catch (err) {
    console.error("Error reading stored imperial content:", err);
    return defaultContent;
  }
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContentType>(defaultContent);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initial = getStoredContent();
    setContent(initial);
    setIsLoaded(true);

    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      setContent(getStoredContent());
    };

    window.addEventListener("storage", handleStorageChange as EventListener);
    window.addEventListener("imperial_content_updated", handleStorageChange as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorageChange as EventListener);
      window.removeEventListener("imperial_content_updated", handleStorageChange as EventListener);
    };
  }, []);

  const updateContent = (newContent: SiteContentType) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
      window.dispatchEvent(new CustomEvent("imperial_content_updated"));
    } catch (err) {
      console.error("Error saving content to localStorage:", err);
    }
  };

  const resetToDefault = () => {
    setContent(defaultContent);
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent("imperial_content_updated"));
    } catch (err) {
      console.error("Error resetting content:", err);
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetToDefault, isLoaded }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    return {
      content: defaultContent,
      updateContent: () => {},
      resetToDefault: () => {},
      isLoaded: true,
    };
  }
  return ctx;
};
