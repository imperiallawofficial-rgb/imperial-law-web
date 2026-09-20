import image from "next/image";

export type Language = 'en' | 'kh';

export interface PracticeArea {
  id: string;
  iconName: string;
  title: {
    en: string;
    kh: string;
  };
  shortDesc: {
    en: string;
    kh: string;
  };
  fullDesc: {
    en: string;
    kh: string;
  };
  highlights: {
    en: string[];
    kh: string[];
  };
}

export interface Attorney {
  id: string;
  name: {
    en: string;
    kh: string;
  };
  role: {
    en: string;
    kh: string;
  };
  barStatus: {
    en: string;
    kh: string;
  };
  experience: {
    en: string;
    kh: string;
  };
  specialties: {
    en: string[];
    kh: string[];
  };
  bio: {
    en: string;
    kh: string;
  };
  image: string;
}

export interface StatItem {
  value: string;
  label: {
    en: string;
    kh: string;
  };
  sublabel: {
    en: string;
    kh: string;
  };
}

export const siteContent = {
  brand: {
    nameEn: "Imperial Law Group",
    nameKh: "ក្រុមមេធាវីអឹមភើរៀល",
    taglineEn: "Defending Justice, Protecting Your Legacy",
    taglineKh: "ការពារយុត្តិធម៌ ថែរក្សាឧត្តមប្រយោជន៍ និងកេរ្តិ៍ឈ្មោះរបស់លោកអ្នក",
    addressEn: "Time Square3 Building, Floor 25th F&G, St355, Sangkat Boeung Kak1, Khan Toul,​ Phnom Penh.",
    addressKh: "អគារ ថាមស្វ្សែរ៣ ជាន់ទី២៥ F&G ផ្លូវ៣៥៥ សង្កាត់បឹងកក់១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ",
    hotline: "(+855) 15 333 313 / 60 888 828",
    emergencyPhone: "(+855) 15 333 313 / 60 888 828",
    email: "imperiallawgroup@gmail.com",
    telegram: "https://t.me/visoth012",
    workingHoursEn: "Mon - Fri: 8:00 AM - 5:30 PM | Sat: By Appointment | Emergency Hotline 24/7",
    workingHoursKh: "ចន្ទ - សុក្រ: ៨:០០ ព្រឹក - ៥:៣០ ល្ងាច | សៅរ៍: តាមការណាត់ | ជំនួយបន្ទាន់ ២៤/៧",
  },

  nav: {
    home: { en: "Home", kh: "ទំព័រដើម" },
    about: { en: "About Firm", kh: "អំពីយើងខ្ញុំ" },
    practices: { en: "Practice Areas", kh: "ជំនាញច្បាប់" },
    team: { en: "Our Attorneys", kh: "ក្រុមមេធាវី" },
    results: { en: "Track Record", kh: "សមិទ្ធផល" },
    contact: { en: "Contact", kh: "ទំនាក់ទំនង" },
    bookConsultation: { en: "Book Consultation", kh: "កក់ការពិគ្រោះយោបល់" },
  },

  hero: {
    badge: {
      en: "Accredited by the Bar Association of the Kingdom of Cambodia (BAKC)",
      kh: "ចុះបញ្ជីស្របច្បាប់នៃគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា",
    },
    titleLine1: {
      en: "PREMIER LEGAL ADVOCACY &",
      kh: "សេវាកម្មច្បាប់កម្រិតខ្ពស់ និង",
    },
    titleHighlight: {
      en: "STRATEGIC COUNSEL",
      kh: "ការការពារក្តីប្រកបដោយយុទ្ធសាស្ត្រ",
    },
    subtitle: {
      en: "Imperial Law Group stands as an unwavering pillar of legal mastery in Cambodia. We represent corporate leaders, international investors, and families with unyielding diligence and absolute confidentiality.",
      kh: "ក្រុមមេធាវីអឹមភើរៀល គឺជាបង្អែកច្បាប់ដ៏រឹងមាំ និងជាទីទុកចិត្តខ្ពស់បំផុតនៅកម្ពុជា។ យើងខ្ញុំការពារផលប្រយោជន៍ក្រុមហ៊ុន វិនិយោគិនជាតិ-អន្តរជាតិ និងបុគ្គលឯកជន ប្រកបដោយក្រមសីលធម៌ និងការរក្សាការសម្ងាត់ខ្ពស់បំផុត។",
    },
    ctaPrimary: {
      en: "Request Confidential Consultation",
      kh: "កក់ការពិគ្រោះយោបល់ជាសម្ងាត់",
    },
    ctaSecondary: {
      en: "Explore Practice Areas",
      kh: "ស្វែងយល់ពីជំនាញច្បាប់",
    },
    callUrgent: {
      en: "Urgent Legal Assistance 24/7",
      kh: "ជំនួយផ្នែកច្បាប់បន្ទាន់ ២៤/៧",
    },
  },

  stats: [
    {
      value: "98.4%",
      label: { en: "Case Success Rate", kh: "អត្រាជោគជ័យនៃក្តីក្តាំ" },
      sublabel: { en: "Court & Arbitration", kh: "ក្នុងតុលាការ និងមជ្ឈត្តការ" },
    },
    {
      value: "$350M+",
      label: { en: "Transactions Advised", kh: "ទំហំប្រតិបត្តិការវិនិយោគ" },
      sublabel: { en: "M&A, Real Estate & Banking", kh: "ពាណិជ្ជកម្ម និងអចលនទ្រព្យ" },
    },
    {
      value: "15+",
      label: { en: "Years Combined Experience", kh: "ឆ្នាំនៃបទពិសោធន៍វិជ្ជាជីវៈ" },
      sublabel: { en: "Senior Bar Members", kh: "មេធាវីជាន់ខ្ពស់ពេញសិទ្ធិ" },
    },
    {
      value: "500+",
      label: { en: "Corporate & Private Clients", kh: "អតិថិជនក្រុមហ៊ុន និងឯកជន" },
      sublabel: { en: "Trusted Across ASEAN", kh: "ទូទាំងតំបន់អាស៊ាន និងអន្តរជាតិ" },
    },
  ] as StatItem[],

  practices: [
    {
      id: "corporate",
      iconName: "Briefcase",
      title: {
        en: "Corporate & Commercial Law",
        kh: "ច្បាប់ពាណិជ្ជកម្ម និងក្រុមហ៊ុន",
      },
      shortDesc: {
        en: "Strategic counsel for corporate structuring, cross-border investments, mergers & acquisitions, and regulatory compliance.",
        kh: "ប្រឹក្សាយោបល់យុទ្ធសាស្ត្រក្នុងការបង្កើតក្រុមហ៊ុន ការវិនិយោគឆ្លងដែន ការទិញ-រួមបញ្ចូលក្រុមហ៊ុន និងការអនុលោមតាមច្បាប់។",
      },
      fullDesc: {
        en: "We guide multi-national corporations and fast-growing Cambodian enterprises through intricate commercial transactions, M&A due diligence, shareholder agreements, corporate governance, and licensing with the Ministry of Commerce and CDC.",
        kh: "យើងផ្តល់ការប្រឹក្សាដល់ក្រុមហ៊ុនពហុជាតិ និងសហគ្រាសក្នុងស្រុក លើការត្រួតពិនិត្យឯកសារវិនិយោគ (Due Diligence) កិច្ចសន្យាម្ចាស់ភាគហ៊ុន ការគ្រប់គ្រងអភិបាលកិច្ច និងការសុំអាជ្ញាប័ណ្ណពីក្រសួងពាណិជ្ជកម្ម និងក្រុមប្រឹក្សាអភិវឌ្ឍន៍កម្ពុជា (CDC)។",
      },
      highlights: {
        en: [
          "Company Formation & Restructuring",
          "Mergers & Acquisitions (M&A)",
          "Commercial Contracts Drafting & Vetting",
          "Qualified Investment Project (QIP) Applications",
        ],
        kh: [
          "ការបង្កើត និងរៀបចំរចនាសម្ព័ន្ធក្រុមហ៊ុនឡើងវិញ",
          "ការទិញ និងរួមបញ្ចូលក្រុមហ៊ុន (M&A)",
          "ការតាក់តែង និងពិនិត្យកិច្ចសន្យាពាណិជ្ជកម្ម",
          "ការស្នើសុំគម្រោងវិនិយោគមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់ (QIP)",
        ],
      },
    },
    {
      id: "realestate",
      iconName: "Building2",
      title: {
        en: "Real Estate & Construction",
        kh: "ច្បាប់អចលនទ្រព្យ និងសំណង់",
      },
      shortDesc: {
        en: "Comprehensive legal assistance in land title due diligence, transfer of ownership, zoning, and construction dispute prevention.",
        kh: "ជំនួយច្បាប់ពេញលេញក្នុងការផ្ទៀងផ្ទាត់ប្លង់ដី ការផ្ទេរកម្មសិទ្ធិ អភិវឌ្ឍន៍បុរី-ខុនដូ និងការការពារហានិភ័យសំណង់។",
      },
      fullDesc: {
        en: "Our firm handles the full lifecycle of real estate development in Cambodia: systematic title verification, hard title transfers, strata-title acquisitions for foreign buyers, construction permits, and joint venture developer agreements.",
        kh: "យើងផ្តល់សេវាច្បាប់គ្រប់ជ្រុងជ្រោយលើការអភិវឌ្ឍអចលនទ្រព្យ៖ ការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃប័ណ្ណកម្មសិទ្ធិ (ប្លង់រឹង/ប្លង់ទន់) ការផ្ទេរកម្មសិទ្ធិ កម្មសិទ្ធិអគារសហកម្មសិទ្ធិ (Strata Title) សម្រាប់ជនបរទេស និងកិច្ចសន្យាសហការវិនិយោគ។",
      },
      highlights: {
        en: [
          "Land Title Due Diligence & Cadastral Verification",
          "Hard Title Transfer & Long-Term Leases",
          "Strata Title Compliance for Foreign Investors",
          "Construction Contracts & Developer Advisory",
        ],
        kh: [
          "ការចុះត្រួតពិនិត្យប្លង់ដី និងផ្ទៀងផ្ទាត់ជាមួយសុរិយោដី",
          "ការផ្ទេរប្លង់រឹង និងកិច្ចសន្យាជួលរយៈពេលវែង",
          "នីតិវិធីទិញខុនដូស្របច្បាប់សម្រាប់ជនបរទេស",
          "កិច្ចសន្យាសំណង់ និងការប្រឹក្សាម្ចាស់គម្រោង",
        ],
      },
    },
    {
      id: "litigation",
      iconName: "Gavel",
      title: {
        en: "Dispute Resolution & Litigation",
        kh: "ការដោះស្រាយវិវាទ និងតាក់តែងការពារក្តី",
      },
      shortDesc: {
        en: "Tenacious courtroom advocacy and strategic arbitration across all court levels and the National Commercial Arbitration Centre (NCAC).",
        kh: "ការការពារក្តីយ៉ាងម៉ឺងម៉ាត់នៅគ្រប់ជាន់ថ្នាក់តុលាការ និងមជ្ឈត្តការនៅមជ្ឈមណ្ឌលជាតិជាអាជ្ញាកណ្តាលពាណិជ្ជកម្ម (NCAC)។",
      },
      fullDesc: {
        en: "When conflicts arise, Imperial Law Group delivers formidable courtroom defense and strategic negotiation. We represent clients at the Municipal Courts, Court of Appeal, and Supreme Court, as well as arbitral proceedings.",
        kh: "នៅពេលមានទំនាស់កើតឡើង ក្រុមមេធាវីអឹមភើរៀល ផ្តល់នូវការតស៊ូមតិយ៉ាងស្វិតស្វាញ និងយុទ្ធសាស្ត្រច្បាប់ច្បាស់លាស់។ យើងតំណាងកូនក្តីនៅសាលាដំបូង សាលាឧទ្ធរណ៍ និងតុលាការកំពូល ព្រមទាំងវេទិកាមជ្ឈត្តការ។",
      },
      highlights: {
        en: [
          "Commercial & Civil Litigation Advocacy",
          "NCAC Arbitration Representation",
          "Injunctions & Asset Freezing Orders",
          "Enforcement of Foreign & Domestic Judgments",
        ],
        kh: [
          "ការតំណាងការពារក្តីក្នុងវិវាទរដ្ឋប្បវេណី និងពាណិជ្ជកម្ម",
          "តំណាងក្នុងដំណើរការមជ្ឈត្តការ NCAC",
          "ដីកាសម្រេចរក្សាការពារ និងការបង្កកទ្រព្យសម្បត្តិ",
          "ការអនុវត្តសាលក្រម/សាលដីកាជាតិ និងអន្តរជាតិ",
        ],
      },
    },
    {
      id: "banking",
      iconName: "Landmark",
      title: {
        en: "Banking, Finance & Investment",
        kh: "ច្បាប់ធនាគារ ហិរញ្ញវត្ថុ និងវិនិយោគ",
      },
      shortDesc: {
        en: "Advising domestic banks, microfinance institutions, fintech startups, and international lenders on regulatory compliance.",
        kh: "ប្រឹក្សាដល់ធនាគារ គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុ ក្រុមហ៊ុន Fintech និងអ្នកផ្តល់កម្ចីអន្តរជាតិលើបទប្បញ្ញត្តិធនាគារជាតិនៃកម្ពុជា (NBC)។",
      },
      fullDesc: {
        en: "We offer comprehensive banking advisory: loan facility structuring, syndicated financing, mortgage perfection, pledge agreements, debt restructuring, and regulatory licensing under the National Bank of Cambodia.",
        kh: "យើងផ្តល់ការប្រឹក្សាលើកិច្ចសន្យាកម្ចី ការធានាឥណទាន ការដាក់បញ្ចាំអចលនវត្ថុ ការរៀបចំឥណទានឡើងវិញ និងការស្នើសុំអាជ្ញាប័ណ្ណពីធនាគារជាតិនៃកម្ពុជា។",
      },
      highlights: {
        en: [
          "Syndicated Lending & Credit Facility Agreements",
          "Mortgage Registration & Collateral Structuring",
          "Fintech & Payment Gateway Licensing",
          "Non-Performing Loan (NPL) Recovery",
        ],
        kh: [
          "កិច្ចព្រមព្រៀងកម្ចីរួម និងឥណទានធនាគារ",
          "ការចុះបញ្ជីបញ្ចាំ និងការរៀបចំទ្រព្យធានា",
          "ការសុំអាជ្ញាប័ណ្ណបច្ចេកវិទ្យាហិរញ្ញវត្ថុ (Fintech)",
          "នីតិវិធីទាមទារបំណុលមិនដំណើរការ (NPL)",
        ],
      },
    },
    {
      id: "ip",
      iconName: "Award",
      title: {
        en: "Intellectual Property & Trademarks",
        kh: "កម្មសិទ្ធិបញ្ញា និងម៉ាកពាណិជ្ជកម្ម",
      },
      shortDesc: {
        en: "Protecting brands, patents, trademarks, and copyright assets against counterfeit and infringement.",
        kh: "ការពារម៉ាកយីហោ សញ្ញាសម្គាល់ពាណិជ្ជកម្ម ប៉ាតង់ និងសិទ្ធិអ្នកនិពន្ធ ប្រឆាំងនឹងការក្លែងបន្លំ និងការរំលោភសិទ្ធិ។",
      },
      fullDesc: {
        en: "Imperial Law Group safeguards your proprietary assets through trademark registration at the Ministry of Commerce, Madrid System international filings, patent validation, licensing deals, and anti-counterfeiting raids with competent authorities.",
        kh: "យើងជួយការពារទ្រព្យសម្បត្តិបញ្ញារបស់លោកអ្នក តាមរយៈការចុះបញ្ជីម៉ាកពាណិជ្ជកម្មនៅក្រសួងពាណិជ្ជកម្ម ប្រព័ន្ធ Madrid អន្តរជាតិ ប៉ាតង់ កិច្ចសន្យាផ្តល់សិទ្ធិ និងសហការជាមួយសមត្ថកិច្ចក្នុងការបង្ក្រាបទំនិញក្លែងក្លាយ។",
      },
      highlights: {
        en: [
          "Trademark Registration (Domestic & Madrid Protocol)",
          "Patent, Design & Copyright Recordation",
          "IP Licensing & Franchising Agreements",
          "Anti-Counterfeit Enforcement & Raids",
        ],
        kh: [
          "ការចុះបញ្ជីម៉ាកពាណិជ្ជកម្ម (ជាតិ និងប្រព័ន្ធ Madrid)",
          "ការការពារប៉ាតង់ គំរូ និងសិទ្ធិអ្នកនិពន្ធ",
          "កិច្ចសន្យាហ្វ្រេនឆាយ (Franchise) និងផ្តល់សិទ្ធិអាជីវកម្ម",
          "វិធានការច្បាប់ និងការបង្ក្រាបផលិតផលរំលោភកម្មសិទ្ធិបញ្ញា",
        ],
      },
    },
    {
      id: "labor",
      iconName: "Users",
      title: {
        en: "Labor, Employment & Immigration",
        kh: "ច្បាប់ការងារ និងទំនាក់ទំនងវិជ្ជាជីវៈ",
      },
      shortDesc: {
        en: "Navigating Ministry of Labor regulations, internal workplace rules, foreign work permits, and employment disputes.",
        kh: "ការអនុវត្តត្រឹមត្រូវតាមច្បាប់ការងារ បទបញ្ជាផ្ទៃក្នុង ការសុំប័ណ្ណការងារជនបរទេស និងការដោះស្រាយវិវាទការងារ។",
      },
      fullDesc: {
        en: "We assist HR leaders and executives in formulating labor contracts, registering internal regulations with the Ministry of Labor and Vocational Training (MLVT), securing foreign quota/work permits, and handling Arbitration Council collective disputes.",
        kh: "យើងជួយរៀបចំកិច្ចសន្យាការងារ ការចុះបញ្ជីបទបញ្ជាផ្ទៃក្នុងនៅក្រសួងការងារ ការសុំកូតា និងប័ណ្ណការងារជនបរទេស (Work Permit) ព្រមទាំងការដោះស្រាយវិវាទការងារនៅក្រុមប្រឹក្សាអាជ្ញាកណ្តាល។",
      },
      highlights: {
        en: [
          "Employment Contracts & Executive Agreements",
          "Internal Regulations Registration (MLVT)",
          "Foreign Quotas & Work Permit Procurement",
          "Arbitration Council Representation",
        ],
        kh: [
          "កិច្ចសន្យាការងារបុគ្គលិក និងថ្នាក់ដឹកនាំ",
          "ការចុះបញ្ជីបទបញ្ជាផ្ទៃក្នុងនៅក្រសួងការងារ",
          "ការស្នើសុំកូតា និងប័ណ្ណការងារជនបរទេស",
          "ការតំណាងនៅក្រុមប្រឹក្សាអាជ្ញាកណ្តាលការងារ",
        ],
      },
    },
    {
      id: "criminal",
      iconName: "ShieldAlert",
      title: {
        en: "Criminal Defense & Civil Liberties",
        kh: "ការការពារក្តីព្រហ្មទណ្ឌ និងសិទ្ធិពលរដ្ឋ",
      },
      shortDesc: {
        en: "Immediate legal intervention, investigation rights protection, bail petitions, and trial defense in complex criminal matters.",
        kh: "អន្តរាគមន៍ច្បាប់ទាន់ពេលវេលា ការពារសិទ្ធិកំឡុងការស៊ើបសួរ ការស្នើសុំនៅក្រៅឃុំ និងការតស៊ូការពារក្តីក្នុងសំណុំរឿងព្រហ្មទណ្ឌ។",
      },
      fullDesc: {
        en: "Our criminal defense team is on call to protect rights during police inquiries, judicial investigations, detention hearings, and high-profile courtroom trials. We uphold the presumption of innocence with fierce dedication.",
        kh: "ក្រុមមេធាវីព្រហ្មទណ្ឌរបស់យើង ត្រៀមខ្លួនជាស្រេចក្នុងការការពារសិទ្ធិរបស់លោកអ្នក តាំងពីដំណាក់កាលនគរបាលយុត្តិធម៌ ការស៊ើបសួររបស់ចៅក្រម ការសុំនៅក្រៅឃុំបណ្តោះអាសន្ន និងសវនាការជំនុំជម្រះ។",
      },
      highlights: {
        en: [
          "24/7 Police Custody & Investigation Assistance",
          "Bail Applications & Provisional Release Petitions",
          "White-Collar & Financial Crime Defense",
          "Appellate Court Representation",
        ],
        kh: [
          "ជំនួយច្បាប់បន្ទាន់ក្នុងដំណាក់កាលឃាត់ខ្លួន និងស៊ើបសួរ",
          "ការសុំនៅក្រៅឃុំបណ្តោះអាសន្ន និងការតវ៉ាដីកាឃុំខ្លួន",
          "ការពារក្តីបទល្មើសសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ (White-Collar)",
          "ការប្តឹងឧទ្ធរណ៍ និងសាទុក្ខទៅតុលាការកំពូល",
        ],
      },
    },
    {
      id: "family",
      iconName: "HeartHandshake",
      title: {
        en: "Family Law & Estate Planning",
        kh: "ច្បាប់គ្រួសារ ការបែងចែកទ្រព្យ និងមរតក",
      },
      shortDesc: {
        en: "Discreet counsel for cross-border marriages, prenuptial contracts, divorce proceedings, child custody, and family estate trusts.",
        kh: "ការប្រឹក្សាដោយសម្ងាត់លើអាពាហ៍ពិពាហ៍អន្តរជាតិ ខសន្យាមុនរៀបការ នីតិវិធីលែងលះ សិទ្ធិអំណាចមេបា និងការបែងចែកកេរ្តិ៍មរតក។",
      },
      fullDesc: {
        en: "We treat sensitive personal matters with compassion and legal rigor. We structure wills, inheritance declarations, pre-marital agreements, international divorces, and cross-border adoption compliance with Cambodian civil law.",
        kh: "យើងយល់ច្បាស់ពីភាពរសើបនៃកិច្ចការគ្រួសារ។ យើងជួយតាក់តែងលិខិតបណ្តាំមរតក លិខិតបញ្ជាក់សិទ្ធិទទួលមរតក កិច្ចសន្យាទ្រព្យសម្បត្តិប្តីប្រពន្ធ នីតិវិធីលែងលះ និងកិច្ចការពារផលប្រយោជន៍កូនៗ។",
      },
      highlights: {
        en: [
          "Wills & Estate Succession Structuring",
          "Prenuptial Agreements & Matrimonial Property",
          "Child Custody & Maintenance Petitions",
          "Foreign-Cambodian Marriage Legalization",
        ],
        kh: [
          "ការតាក់តែងលិខិតបណ្តាំ និងការផ្ទេរមរតក",
          "ខសន្យាមុនរៀបការ និងការបែងចែកទ្រព្យសម្បត្តិរួម",
          "សិទ្ធិអំណាចមេបា និងប្រាក់ឧបត្ថម្ភកូន",
          "នីតិវិធីអាពាហ៍ពិពាហ៍រវាងខ្មែរ និងជនបរទេស",
        ],
      },
    },
  ] as PracticeArea[],

  attorneys: [
    {
      id: "1",
      nameKh: "ឯកឧត្តម យឹម វិស្សុត",
      nameEn: "H.E. Yim Vissot",
      roleKh: "ប្រធានក្រុមមេធាវី និងមេធាវីជាន់ខ្ពស់",
      roleEn: "Managing Partner & Senior Attorney",
      image: "/images/lawyer1.jpg",
      telegram: "https://t.me/visoth012",
      coolapp: "https://me.coolapp.chat/#acc/SxYWr47RS7eF-qCUP0tPWA",
      experienceKh: "បទពិសោធន៍ជាង ២០ ឆ្នាំ ក្នុងប្រព័ន្ធតុលាការ និងច្បាប់ក្រុមហ៊ុន",
      specialties: {
        en: ["Commercial Litigation", "Cross-Border M&A", "Real Estate Law"],
        kh: ["វិវាទពាណិជ្ជកម្ម", "ការវិនិយោគឆ្លងដែន", "ច្បាប់អចលនទ្រព្យ"],
      },
      bio: {
        en: "Advising Fortune 500 companies, prominent banking institutions, and leading real estate developers with strategic legal guidance.",
        kh: "បានផ្តល់ការប្រឹក្សាដល់ក្រុមហ៊ុនកំពូលៗ គ្រឹះស្ថានធនាគារ និងអ្នកអភិវឌ្ឍន៍អចលនទ្រព្យធំៗ មានកេរ្តិ៍ឈ្មោះល្បីល្បាញខាងយុទ្ធសាស្ត្រតស៊ូមតិក្នុងតុលាការ និងការដោះស្រាយវិវាទស្មុគស្មាញ។"
      }
    },
    {
      id: "2",
      nameKh: "មេធាវី សេន វាសនា",
      nameEn: "Attorney Sen Veasna",
      roleKh: "អនុប្រធានក្រុមមេធាវី",
      roleEn: "Deputy Managing Partner",
      image: "/images/lawyer2.jpg",
      telegram: "https://t.me/veasnasen",
      coolapp: "",
      experienceKh: "បទពិសោធន៍ជាង ១៦ ឆ្នាំ ក្នុងប្រព័ន្ធតុលាការ និងមជ្ឈត្តការ",
      specialties: {
        en: ["Banking & Finance", "Corporate Law", "Commercial Dispute"],
        kh: ["ច្បាប់ធនាគារ និងហិរញ្ញវត្ថុ", "ច្បាប់ក្រុមហ៊ុន", "វិវាទពាណិជ្ជកម្ម"],
      },
      bio: {
        en: "Extensive background in financial restructuring, legal compliance, and complex corporate dispute resolution.",
        kh: "ជំនាញដោះស្រាយវិវាទពាណិជ្ជកម្ម ការរៀបចំរចនាសម្ព័ន្ធហិរញ្ញវត្ថុឡើងវិញ និងការការពារផលប្រយោជន៍ស្របច្បាប់ជូនស្ថាប័នសាជីវកម្មធំៗ។"
      }
    },
    {
      id: "3",
      nameKh: "មេធាវី ខាត់ធី ឌីម៉ង់",
      nameEn: "Attorney Khatthy Diamond",
      roleKh: "សមាជិកក្រុមមេធាវី",
      roleEn: "Associate Attorney",
      image: "/images/lawyer3.jpg",
      telegram: "https://t.me/Att_KhatthyDiamond",
      coolapp: "",
      experienceKh: "បទពិសោធន៍ក្នុងការប្រឹក្សាច្បាប់ក្រុមហ៊ុន និងកម្មសិទ្ធិបញ្ញា",
      specialties: {
        en: ["Intellectual Property", "Contract Drafting", "Labor Law"],
        kh: ["កម្មសិទ្ធិបញ្ញា", "ការតាក់តែងកិច្ចសន្យា", "ច្បាប់ការងារ"],
      },
      bio: {
        en: "Specializing in intellectual property registration, labor compliance, and contract negotiation for domestic and international clients.",
        kh: "ជំនាញការពារកម្មសិទ្ធិបញ្ញា ការចុះបញ្ជីពាណិជ្ជកម្ម ការតាក់តែងនិងត្រួតពិនិត្យកិច្ចសន្យាពាណិជ្ជកម្ម និងការអនុលោមតាមច្បាប់ការងារ។"
      }
    },
    {
      id: "4",
      nameKh: "មេធាវី ចិន មុំ",
      nameEn: "Attorney Chen Mom",
      roleKh: "សមាជិកក្រុមមេធាវី",
      roleEn: "Associate Attorney",
      image: "/images/lawyer4.jpg",
      telegram: "https://t.me/Chen_Mom",
      coolapp: "",
      experienceKh: "បទពិសោធន៍ក្នុងការដោះស្រាយវិវាទរដ្ឋប្បវេណី និងដីធ្លី",
      specialties: {
        en: ["Civil Litigation", "Family Law", "Land & Property Dispute"],
        kh: ["វិវាទរដ្ឋប្បវេណី", "ច្បាប់គ្រួសារ", "វិវាទដីធ្លី និងអចលនទ្រព្យ"],
      },
      bio: {
        en: "Experienced in handling civil lawsuits, family law settlements, and real estate litigation with deep legal dedication.",
        kh: "បទពិសោធន៍ស៊ីជម្រៅលើដំណើរការនីតិវិធីតុលាការរដ្ឋប្បវេណី ការដោះស្រាយវិវាទដីធ្លី និងការផ្តល់ការប្រឹក្សាផ្នែកច្បាប់គ្រួសារ។"
      }
    }
  ],

  values: [
    {
      iconName: "Scale",
      title: { en: "Uncompromising Integrity", kh: "សុចរិតភាពឥតងាករេ" },
      desc: {
        en: "Our allegiance is strictly to justice, ethical rigor, and the Bar Association code of conduct. We operate with radical transparency.",
        kh: "យើងប្រកាន់ខ្ជាប់នូវយុត្តិធម៌ ក្រមសីលធម៌វិជ្ជាជីវៈមេធាវីយ៉ាងម៉ឺងម៉ាត់ និងតម្លាភាពខ្ពស់បំផុតចំពោះកូនក្តី។",
      },
    },
    {
      iconName: "ShieldCheck",
      title: { en: "Absolute Confidentiality", kh: "ការសម្ងាត់កម្រិតអតិបរមា" },
      desc: {
        en: "Client records, proprietary case strategies, and consultations are safeguarded by strict legal privilege and robust security.",
        kh: "រាល់ព័ត៌មាន កិច្ចសន្ទនា និងឯកសារកូនក្តី ត្រូវបានការពារក្រោមការសម្ងាត់វិជ្ជាជីវៈមេធាវីជាដាច់ខាត។",
      },
    },
    {
      iconName: "Gavel",
      title: { en: "Tenacious Courtroom Power", kh: "ភាពខ្លាំងពូកែក្នុងការតស៊ូមតិ" },
      desc: {
        en: "We prepare exhaustive legal briefs and articulate decisive arguments that win cases in trial and appellate courts.",
        kh: "យើងរៀបចំភស្តុតាង និងអំណះអំណាងគតិយុត្តយ៉ាងហ្មត់ចត់ ដើម្បីធានាបាននូវឧត្តមភាពក្នុងសវនាការ។",
      },
    },
    {
      iconName: "Landmark",
      title: { en: "Deep Cambodian Acumen", kh: "ចំណេះដឹងច្បាប់កម្ពុជាស៊ីជម្រៅ" },
      desc: {
        en: "Decades of insight into the Cambodian legal framework, ministries, land registries, and judicial procedures.",
        kh: "ការយល់ដឹងច្បាស់លាស់ស៊ីជម្រៅអំពីប្រព័ន្ធច្បាប់កម្ពុជា ក្រសួង ស្ថាប័នរដ្ឋ និងនីតិវិធីតុលាការ។",
      },
    },
  ],

  testimonials: [
    {
      quote: {
        en: "Imperial Law Group handled our $45M foreign direct investment joint venture seamlessly. Their land title due diligence protected us from catastrophic risk.",
        kh: "ក្រុមមេធាវីអឹមភើរៀល បានជួយសម្របសម្រួលគម្រោងវិនិយោគរួមតម្លៃ ៤៥ លានដុល្លាររបស់យើងយ៉ាងរលូន។ ការពិនិត្យប្លង់ដីដ៏ហ្មត់ចត់របស់ពួកគាត់ បានការពារយើងពីហានិភ័យដ៏ធំធេង។",
      },
      author: "David L.",
      title: { en: "Managing Director, International Real Estate Fund", kh: "នាយកប្រតិបត្តិ មូលនិធិវិនិយោគអចលនទ្រព្យអន្តរជាតិ" },
    },
    {
      quote: {
        en: "When we faced an unjust multi-million dollar commercial lawsuit, their litigation team delivered a masterclass in defense at the Court of Appeal. Truly elite advocates.",
        kh: "នៅពេលក្រុមហ៊ុនយើងជួបប្រទះបណ្តឹងពាណិជ្ជកម្មរាប់លានដុល្លារ ក្រុមមេធាវីការពារក្តីរបស់អឹមភើរៀល បានតស៊ូមតិយ៉ាងអស្ចារ្យនៅសាលាឧទ្ធរណ៍រហូតឈ្នះក្តី។ ពួកគាត់ជាមេធាវីឆ្នើមពិតប្រាកដ។",
      },
      author: "Oknha K. Meng",
      title: { en: "Chairman, Logistics & Manufacturing Group", kh: "ប្រធានក្រុមប្រឹក្សាភិបាល ក្រុមហ៊ុនភស្តុភារ និងកម្មន្តសាល" },
    },
    {
      quote: {
        en: "Their responsiveness, bilingual fluency in English and Khmer, and precision in contract negotiations made them our sole outside counsel in Southeast Asia.",
        kh: "ការឆ្លើយតបទាន់ចិត្ត ភាពស្ទាត់ជំនាញទាំងភាសាខ្មែរ និងអង់គ្លេស និងភាពច្បាស់លាស់ក្នុងការចរចាកិច្ចសន្យា ធ្វើឱ្យពួកគាត់ក្លាយជាទីប្រឹក្សាច្បាប់ចម្បងរបស់យើង។",
      },
      author: "Sarah Chen",
      title: { en: "VP of Legal, Asia-Pacific Tech Corporation", kh: "អនុប្រធានផ្នែកច្បាប់ ក្រុមហ៊ុនបច្ចេកវិទ្យាតំបន់អាស៊ីប៉ាស៊ីហ្វិក" },
    },
  ],

  faq: [
    {
      q: {
        en: "Are your attorneys licensed by the Bar Association of the Kingdom of Cambodia (BAKC)?",
        kh: "តើក្រុមមេធាវីរបស់លោកអ្នក មានអាជ្ញាប័ណ្ណត្រឹមត្រូវពីគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជាដែរឬទេ?",
      },
      a: {
        en: "Yes, all Imperial Law Group advocates are officially registered and in good standing with the Bar Association of the Kingdom of Cambodia (BAKC), authorized to practice in all national courts.",
        kh: "បាទ/ចាស! មេធាវីទាំងអស់នៃក្រុមមេធាវីអឹមភើរៀល គឺជាសមាជិកពេញសិទ្ធិ និងចុះបញ្ជីស្របច្បាប់នៃគណៈមេធាវីនៃព្រះរាជាណាចក្រកម្ពុជា ដែលមានសិទ្ធិពេញលេញក្នុងការការពារក្តីនៅគ្រប់ជាន់ថ្នាក់តុលាការ។",
      },
    },
    {
      q: {
        en: "Can foreign individuals or foreign companies own land or real estate in Cambodia?",
        kh: "តើជនបរទេស ឬក្រុមហ៊ុនបរទេស អាចកាន់កាប់ដីធ្លី ឬអចលនទ្រព្យនៅកម្ពុជាបានដោយរបៀបណា?",
      },
      a: {
        en: "Under Cambodian law, foreign nationals cannot own ground-level land directly. However, foreigners can legally own strata-titled co-owned buildings (1st floor and above), acquire 50-year perpetual leases, or invest through compliant land-holding company structures. We specialize in legally bulletproof ownership structures.",
        kh: "តាមច្បាប់កម្ពុជា ជនបរទេសមិនអាចកាន់កាប់ដីផ្ទាល់លើប្លង់រឹងបានឡើយ។ ប៉ុន្តែជនបរទេសអាចទិញយូនីតខុនដូ (ចាប់ពីជាន់ទី១ឡើង) ធ្វើកិច្ចសន្យាជួលរយៈពេលវែង ឬវិនិយោគតាមរយៈក្រុមហ៊ុនសហកម្មសិទ្ធិស្របច្បាប់។ យើងខ្ញុំជំនាញក្នុងការរៀបចំរចនាសម្ព័ន្ធនេះដោយសុវត្ថិភាពបំផុត។",
      },
    },
    {
      q: {
        en: "How do I schedule an initial consultation?",
        kh: "តើខ្ញុំអាចណាត់ជួបដើម្បីពិគ្រោះយោបល់លើកដំបូងដោយរបៀបណា?",
      },
      a: {
        en: "You can book directly using our online consultation form, call our office hotline, or reach out to our emergency Telegram. We offer both in-person meetings at our Phnom Penh office and secure virtual consultations worldwide.",
        kh: "លោកអ្នកអាចកក់ការណាត់ជួបតាមរយៈទម្រង់អនឡាញលើគេហទំព័រនេះ ទូរស័ព្ទមកកាន់ការិយាល័យផ្ទាល់ ឬទាក់ទងមកតេឡេក្រាម (Telegram)។ យើងខ្ញុំផ្តល់ការប្រឹក្សាផ្ទាល់នៅការិយាល័យក្នុងរាជធានីភ្នំពេញ ឬតាមប្រព័ន្ធវីដេអូពីចម្ងាយ។",
      },
    },
    {
      q: {
        en: "What should I prepare for my first legal consultation?",
        kh: "តើខ្ញុំគួរត្រៀមអ្វីខ្លះ សម្រាប់ជំនួបពិគ្រោះយោបល់លើកដំបូង?",
      },
      a: {
        en: "Please bring all relevant contracts, notices, court summons, land titles, or correspondence pertaining to your situation, along with your national ID or passport. All discussions remain protected under strict attorney-client privilege.",
        kh: "សូមរៀបចំឯកសារពាក់ព័ន្ធទាំងអស់ ដូចជាកិច្ចសន្យា លិខិតជូនដំណឹង ដីកាតុលាការ ប្លង់ដី ឬសារឆ្លងឆ្លើយ ព្រមទាំងអត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន។ រាល់ការពិភាក្សាទាំងអស់ ត្រូវបានរក្សាជាការសម្ងាត់វិជ្ជាជីវៈដាច់ខាត។",
      },
    },
  ],

  consultationModal: {
    title: { en: "Schedule Confidential Consultation", kh: "កក់ការពិគ្រោះយោបល់ដោយសម្ងាត់" },
    subtitle: {
      en: "Speak directly with our senior legal advocates. Your inquiries are strictly confidential.",
      kh: "ជួបពិភាក្សាផ្ទាល់ជាមួយមេធាវីជាន់ខ្ពស់។ រាល់ព័ត៌មានត្រូវបានរក្សាជាការសម្ងាត់ដាច់ខាត។",
    },
    fullName: { en: "Full Name / Company Name", kh: "ឈ្មោះពេញ / ឈ្មោះក្រុមហ៊ុន" },
    phone: { en: "Phone / Telegram Number", kh: "លេខទូរស័ព្ទ / តេឡេក្រាម" },
    email: { en: "Email Address", kh: "អ៊ីមែល" },
    practiceCategory: { en: "Legal Practice Area", kh: "ប្រភេទនៃបញ្ហាច្បាប់" },
    preferredDate: { en: "Preferred Date & Time", kh: "កាលបរិច្ឆេទ និងពេលវេលាណាត់" },
    caseSummary: { en: "Brief Description of Legal Matter", kh: "សេចក្តីសង្ខេបអំពីករណីច្បាប់របស់លោកអ្នក" },
    urgency: { en: "Urgency Level", kh: "កម្រិតបន្ទាន់" },
    urgencyNormal: { en: "Normal Consultation (1-3 days)", kh: "ធម្មតា (១-៣ ថ្ងៃ)" },
    urgencyHigh: { en: "Urgent (Within 24 Hours)", kh: "បន្ទាន់ (ក្នុងរយៈពេល ២៤ ម៉ោង)" },
    urgencyCritical: { en: "Critical / Immediate Court Detention", kh: "បន្ទាន់បំផុត / ការឃាត់ខ្លួន ឬវិវាទតុលាការ" },
    submitBtn: { en: "Confirm Consultation Request", kh: "បញ្ជាក់ការកក់ការពិគ្រោះ" },
    successTitle: { en: "Consultation Request Received", kh: "ទទួលបានសំណើពិគ្រោះយោបល់ហើយ" },
    successMsg: {
      en: "Thank you. Our legal team will review your matter and contact you within 2 hours to confirm your appointment.",
      kh: "សូមអរគុណ! ក្រុមមេធាវីយើងខ្ញុំនឹងត្រួតពិនិត្យ និងទាក់ទងមកលោកអ្នកវិញក្នុងរយៈពេល ២ ម៉ោង ដើម្បីបញ្ជាក់ការណាត់ជួប។",
    },
    closeBtn: { en: "Close", kh: "បិទ" },
  },
};
