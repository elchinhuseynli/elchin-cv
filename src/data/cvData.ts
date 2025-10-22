// Shared CV data that can be used by both main page and CV generator
// This follows DRY principle - single source of truth for all CV content

export const profile = {
  name: {
    en: "Elchin Huseynli, Bc.",
    cz: "Bc. Elchin Huseynli",
  },
  headline: {
    cz: "Zakladatel & kreativní ředitel ve Flex Digital Agency | Webflow & WordPress expert | Branding · UX/UI · Automatizace",
    en: "Founder & Creative Director at Flex Digital Agency | Webflow & WordPress Expert | Branding · UX/UI · Automation",
  },
  location: "Karlovy Vary, Czech Republic",
  contacts: {
    phone: "+420 702 006 220",
    email: "webmaster@flexagency.cz",
    site: "https://flexagency.cz",
    linkedin: "https://www.linkedin.com/in/elchin-huseynli/",
    address: "Mattoniho nábřeží 694/50, Karlovy Vary",
  },
  languages: [
    { label: "Russian", level: "Native or Bilingual", flag: "🇷🇺" },
    { label: "English", level: "Full Professional", flag: "🇬🇧" },
    { label: "Czech", level: "Professional Working", flag: "🇨🇿" },
  ],
};

export const education = [
  {
    institution: {
      en: "Azerbaijan State Oil Academy",
      cz: "Ázerbájdžánská státní ropná akademie",
    },
    degree: {
      en: "Bachelor of Business Administration",
      cz: "Bakalář obchodní administrativy",
    },
    dates: "2005 – 2009",
    location: "Baku, Azerbaijan",
  },
];

export const certifications = [
  {
    name: {
      en: "Webflow Certification",
      cz: "Webflow Certifikace",
    },
    issuer: "Webflow",
    date: "2025",
    credentialId: "c516f1bc-d16f-47f9-ad5c-084a7e325688",
    url: "https://www.credential.net/c516f1bc-d16f-47f9-ad5c-084a7e325688#acc.zwbnRdVC",
    badge: "/wf-certificate.png",
    description: {
      en: "Certified Webflow Developer - Proud to Build The Webflow Way",
      cz: "Certifikovaný Webflow vývojář - Hrdě stavím Webflow způsobem",
    },
  },
];

export const about = {
  cz: `Jsem zakladatel a vedoucí designér digitální agentury Flex Digital Agency, kde propojuji kreativitu s technologií. Zaměřuji se na tvorbu moderních webových stránek, vizuálních identit a digitálních strategií, které pomáhají firmám růst a zviditelnit se v online prostoru. Mám více než 10 let zkušeností v oblasti grafického designu, vývoje a marketingu. Zajímám se o automatizaci, nové technologie a UX trendy; cílem jsou řešení, která nejen skvěle vypadají, ale i fungují.`,
  en: `Founder and lead designer of Flex Digital Agency, where creativity meets technology. I focus on modern web design, branding, and digital strategy that help companies grow. Over 10 years of experience across design, development, and marketing. Passionate about automation, UX, and new tech — building products that look great and work flawlessly.`,
};

export const services = [
  "Web Design",
  "Web Development", 
  "Branding & Visual Identity",
  "WordPress Development",
  "Webflow Development",
  "UX/UI Design",
  "Digital Strategy",
  "SEO Optimization",
  "Email & Marketing Automation",
  "Graphic Design",
];

export const skills = [
  "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Webflow", "WordPress", 
  "Figma", "API Integration", "Docker", "GitHub", "Cloudflare", "Vite", "Astro"
];

export const softSkills = [
  "Creative Thinking", "Project Management", "Client Communication", "Team Collaboration",
  "Problem Solving", "Strategic Planning", "Quality Assurance", "Time Management",
  "Effective Communication & Presentation", "Creative Problem Solving",
  "Attention to Detail & Ownership", "Client Communication & Consulting",
  "Systematic Planning & Delivery"
];

// Extended experience based on prior prepared copy
export const experience = [
  {
    company: "Czech University of Life Sciences (CZU)",
    role: "Senior Web Developer",
    dates: "2024 – present",
    logo: "/company-logos/czuvpraze_logo.jpeg", // We'll need to add this logo
    description: {
      cz: "Působím jako senior webový vývojář a designér v rámci projektového týmu zaměřeného na digitalizaci a virtualizaci IT prostředí a vývoj moderních webových aplikací pro akademické a výzkumné účely.",
      en: "I work as a senior web developer and designer within a project team focused on digitalization and virtualization of IT environment and development of modern web applications for academic and research purposes."
    },
    bullets: {
      cz: [
        "Vývoj responzivních a uživatelsky přívětivých webových stránek a aplikací s důrazem na výkon, přístupnost a bezpečnost.",
        "Odborná realizace a podpora aktivit zaměřených na virtualizaci IT prostředí, včetně návrhu, implementace a testování řešení.",
        "Návrh a realizace architektury virtualizovaného prostředí pro provoz webových služeb a datových výstupů.",
        "Analýza požadavků odborného týmu na funkčnost webových aplikací, uživatelské rozhraní a datovou strukturu.",
        "Návrh datového modelu a architektury webové aplikace, včetně backendové a frontendové logiky.",
        "Tvorba wireframů a prototypů uživatelského rozhraní (UI) a návrh základní navigační logiky (UX).",
        "Návrh a realizace pilotních verzí aplikací, testování funkčnosti a UX ve spolupráci s odborným týmem.",
        "Testování prototypů, shromažďování zpětné vazby a zapracování připomínek do finální implementace.",
        "Příprava vizuální identity projektu (barevnost, typografie, ikonografie) a její uplatnění v digitálním prostředí.",
        "Grafická podpora pro projektový tým – návrh prezentačních šablon, pozvánek a interních materiálů."
      ],
      en: [
        "Development of responsive and user-friendly websites and applications with emphasis on performance, accessibility and security.",
        "Professional implementation and support of activities focused on IT environment virtualization, including design, implementation and testing of solutions.",
        "Design and implementation of virtualized environment architecture for web services and data outputs.",
        "Analysis of requirements from professional teams for web application functionality, user interface and data structure.",
        "Design of data model and web application architecture, including backend and frontend logic.",
        "Creation of wireframes and prototypes of user interface (UI) and design of basic navigation logic (UX).",
        "Design and implementation of pilot versions of applications, testing functionality and UX in cooperation with professional team.",
        "Prototype testing, feedback collection and incorporation of comments into final implementation.",
        "Preparation of project visual identity (colors, typography, iconography) and its application in digital environment.",
        "Graphic support for project team – design of presentation templates, invitations and internal materials."
      ]
    }
  },
  {
    company: "Flex Digital Agency s.r.o.",
    role: "Founder · Creative Director · Web Developer",
    dates: "2020 – present",
    logo: "/company-logos/flex.jpeg", // We'll need to add this logo
    description: {
      cz: "Jsem zakladatelem a vedoucím designérem digitální agentury Flex Digital Agency, která se specializuje na komplexní webová řešení, vizuální identitu a digitální marketing. Vedu projekty od strategie a konceptu až po jejich realizaci a dlouhodobou správu – od návrhu firemních webů, e-shopů a brand identit až po online kampaně a automatizaci procesů.",
      en: "I am the founder and lead designer of Flex Digital Agency, which specializes in comprehensive web solutions, visual identity and digital marketing. I lead projects from strategy and concept to their implementation and long-term management – from corporate websites, e-shops and brand identities to online campaigns and process automation."
    },
    bullets: {
      cz: [
        "Kompletní řízení a rozvoj agentury, včetně strategického a finančního plánování.",
        "Návrh vizuálních identit a brand manuálů pro české i mezinárodní klienty.",
        "Tvorba moderních webů a e‑shopů na platformách WordPress, Webflow, Next.js a dalších.",
        "Vývoj vlastních custom modulů, integrací a interaktivních prvků (GSAP, API, AJAX, JSON, ACF Pro).",
        "Implementace vícejazyčných řešení pomocí WPML, Weglot a dalších překladových nástrojů.",
        "Správa serverové infrastruktury (VPS, Docker, Coolify, Cloudflare) a DevOps procesů.",
        "Automatizace obchodních a marketingových procesů (např. Monday.com → Mailchimp integrace, e‑mailové automatizace, webhooky).",
        "Vedení projektového týmu – designéři, vývojáři, copywriteři, externí spolupracovníci.",
        "Komplexní komunikace s klienty: analýza potřeb, tvorba nabídek, prezentace a konzultace.",
        "Návrh a realizace digitálních marketingových strategií (SEO, PPC, sociální sítě, analytika).",
        "Dlouhodobá údržba webů, optimalizace výkonu, bezpečnostní dohled a UX vylepšení."
      ],
      en: [
        "Complete agency management and development, including strategic and financial planning.",
        "Design of visual identities and brand manuals for Czech and international clients.",
        "Creation of modern websites and e‑shops on WordPress, Webflow, Next.js and other platforms.",
        "Development of custom modules, integrations and interactive elements (GSAP, API, AJAX, JSON, ACF Pro).",
        "Implementation of multilingual solutions using WPML, Weglot and other translation tools.",
        "Server infrastructure management (VPS, Docker, Coolify, Cloudflare) and DevOps processes.",
        "Business and marketing process automation (e.g. Monday.com → Mailchimp integration, email automation, webhooks).",
        "Project team leadership – designers, developers, copywriters, external collaborators.",
        "Complex client communication: needs analysis, proposal creation, presentations and consultations.",
        "Design and implementation of digital marketing strategies (SEO, PPC, social media, analytics).",
        "Long‑term website maintenance, performance optimization, security monitoring and UX improvements."
      ]
    }
  },
  {
    company: "SUAS Group a.s.",
    role: "Lead Graphic & Web Designer",
    dates: "2021 – 2024",
    logo: "/company-logos/suas_group_logo.jpeg", // We'll need to add this logo
    description: {
      cz: "V rámci skupiny SUAS Group, která sdružuje dceřiné společnosti působící v oblasti energetiky, stavebnictví a rozvoje regionu Sokolovska, zodpovídám za tvorbu a rozvoj vizuální komunikace celé skupiny i jednotlivých subjektů.",
      en: "Within SUAS Group, which brings together subsidiaries operating in energy, construction and development of the Sokolov region, I am responsible for creating and developing visual communication for the entire group and individual entities."
    },
    bullets: {
      cz: [
        "Návrh a realizace nové korporátní identity pro nově vzniklé dceřiné společnosti.",
        "Tvorba komplexních grafických materiálů — billboardy, tiskové a digitální bannery, pozvánky, logotypy, logomanuály, brožury, katalogy, letáky, zpravodaje a magazíny.",
        "Spolupráce s externími dodavateli při výrobě tiskovin a propagačních materiálů.",
        "Vývoj responzivních webových stránek pomocí HTML, CSS, JavaScript (případně PHP) na platformách Webflow a WordPress.",
        "Implementace interaktivních prvků, animací a moderních UI/UX principů pro zlepšení uživatelského zážitku.",
        "Zajištění kompatibility napříč prohlížeči, optimalizace výkonu a bezpečnosti webových řešení.",
        "Integrace třetích stran API a nástrojů pro rozšíření funkčnosti webů (např. mapové služby, formuláře, dynamická data).",
        "Poskytování technické podpory, správa obsahu a řešení provozních problémů.",
        "Spolupráce s vedením skupiny na rozvoji marketingové a komunikační strategie."
      ],
      en: [
        "Design and implementation of new corporate identity for newly established subsidiaries.",
        "Creation of comprehensive graphic materials — billboards, print and digital banners, invitations, logos, logo manuals, brochures, catalogs, flyers, newsletters and magazines.",
        "Cooperation with external suppliers in the production of printed materials and promotional materials.",
        "Development of responsive websites using HTML, CSS, JavaScript (possibly PHP) on Webflow and WordPress platforms.",
        "Implementation of interactive elements, animations and modern UI/UX principles to improve user experience.",
        "Ensuring cross‑browser compatibility, performance optimization and security of web solutions.",
        "Integration of third‑party APIs and tools to extend website functionality (e.g. mapping services, forms, dynamic data).",
        "Providing technical support, content management and solving operational problems.",
        "Cooperation with group management on the development of marketing and communication strategy."
      ]
    }
  },
  {
    company: "Art de Suisse s.r.o.",
    role: "Head of Marketing & Brand Development",
    dates: "2014 – 2021",
    logo: "/company-logos/art_de_suisse_logo.jpeg", // We'll need to add this logo
    description: {
      cz: "V rámci společnosti Art de Suisse, která se specializuje na luxusní hodinky, šperky a umělecké předměty, jsem vedl marketingové a komunikační aktivity značky v České republice i zahraničí. Zastával jsem klíčovou roli při rozvoji brand identity, koordinaci kampaní a tvorbě exkluzivního obsahu pro prémiový segment zákazníků.",
      en: "Within Art de Suisse, specializing in luxury watches, jewelry and art objects, I led marketing and communication activities of the brand in the Czech Republic and abroad. I played a key role in brand identity development, campaign coordination and creation of exclusive content for premium customer segment."
    },
    bullets: {
      cz: [
        "Vedení marketingového týmu a zajištění strategického směřování značky.",
        "Vytváření a implementace marketingových plánů pro online i offline kanály.",
        "Organizace a vizuální koordinace eventů, privátních výstav a VIP prezentací.",
        "Spolupráce s mezinárodními partnery a dodavateli z Švýcarska, Francie, Německa, Anglie a Itálie.",
        "Tvorba a realizace reklamních kampaní (digitálních i outdoorových) v souladu s image jednotlivých značek.",
        "Zodpovědnost za vizuální styl společnosti – od grafického designu a produktové fotografie po finální tisk a prezentaci.",
        "Návrh a správa marketingového rozpočtu, vyhodnocování ROI a výkonnostních metrik.",
        "Komunikace s vedením společnosti, reporting výsledků a návrhy na optimalizaci marketingové strategie."
      ],
      en: [
        "Leading the marketing team and ensuring strategic direction of the brand.",
        "Creating and implementing marketing plans for online and offline channels.",
        "Organization and visual coordination of events, private exhibitions and VIP presentations.",
        "Cooperation with international partners and suppliers from Switzerland, France, Germany, England and Italy.",
        "Creation and implementation of advertising campaigns (digital and outdoor) in line with the image of individual brands.",
        "Responsibility for the visual style of the company – from graphic design and product photography to final printing and presentation.",
        "Design and management of marketing budget, ROI evaluation and performance metrics.",
        "Communication with company management, reporting results and proposals for marketing strategy optimization."
      ]
    }
  },
  {
    company: "AZSIĞORTA ASC",
    role: "Sales Manager",
    dates: "2009 – 2010",
    logo: "/company-logos/azsigorta.jpeg", // No logo available
    description: {
      cz: "Rozvoj prodejních strategií a správa vztahů s klienty na ázerbájdžánském trhu.",
      en: "Developed sales strategies and managed client relationships in the Azerbaijani market."
    },
    bullets: {
      cz: [
        "Analýza trhu a identifikace nových obchodních příležitostí.",
        "Koordinace prodejního týmu a dosahování stanovených cílů."
      ],
      en: [
        "Market analysis and identification of new business opportunities.",
        "Sales team coordination and achievement of set targets."
      ]
    }
  },
  {
    company: "AXA MBASK OJSC",
    role: "Sales Representative",
    dates: "2008 – 2009",
    logo: "/company-logos/AXA_Logo.svg", // No logo available
    description: {
      cz: "Získávání nových klientů a správa stávajících vztahů na pojišťovacím trhu.",
      en: "Client acquisition and relationship management in the insurance market."
    },
    bullets: {
      cz: [
        "Prezentace pojišťovacích produktů a služeb potenciálním klientům.",
        "Plnění prodejních kvót a dosahování stanovených cílů."
      ],
      en: [
        "Presentation of insurance products and services to potential clients.",
        "Meeting sales quotas and achieving set targets."
      ]
    }
  },
  {
    company: "Ateshgah Insurance Group",
    role: "Insurance Underwriter",
    dates: "2006 – 2008",
    logo: "/company-logos/ateshgah-logo.png", 
    description: {
      cz: "Hodnocení a posuzování pojišťovacích rizik pro různé typy pojistných smluv.",
      en: "Evaluated and assessed insurance risks for various types of insurance policies."
    },
    bullets: {
      cz: [
        "Stanovování pojistných podmínek a sazeb na základě analýzy rizik.",
        "Spolupráce s pojišťovacími makléři a klienty při sjednávání pojistných smluv."
      ],
      en: [
        "Determined policy terms and rates based on risk analysis.",
        "Collaborated with insurance brokers and clients in policy negotiations."
      ]
    }
  }
];

// Combined CV data export
export const cvData = {
  profile,
  education,
  certifications,
  about,
  services,
  skills,
  softSkills,
  experience,
};// Force deployment with English job roles - Wed Oct 22 11:22:28 CEST 2025
