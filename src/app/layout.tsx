import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://imperiallawgroup.com"),
  title: "Imperial Law Group | ក្រុមមេធាវីអឹមភើរៀល - Premier Legal Services in Cambodia",
  description:
    "Imperial Law Group (ក្រុមមេធាវីអឹមភើរៀល) is a premier law firm in Phnom Penh, Cambodia providing high-stakes litigation, corporate advisory, real estate, banking, and dispute resolution services.",
  keywords: [
    "Imperial Law Group",
    "ក្រុមមេធាវីអឹមភើរៀល",
    "Law Firm Cambodia",
    "Phnom Penh Lawyer",
    "Cambodian Bar Association",
    "Corporate Law Cambodia",
    "Litigation Lawyer Cambodia",
    "Real Estate Law Phnom Penh",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Imperial Law Group | ក្រុមមេធាវីអឹមភើរៀល",
    description:
      "Defending Justice, Protecting Your Legacy. Premier legal counsel in the Kingdom of Cambodia.",
    images: [{ url: "/images/logo.png", width: 800, height: 900, alt: "Imperial Law Group Logo" }],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load Google Fonts: Kantumruy Pro (all weights), Battambang, Siemreap, Cinzel, Plus Jakarta Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Battambang:wght@400;700;900&family=Cinzel:wght@500;600;700;800;900&family=Kantumruy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Siemreap&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#040915] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
