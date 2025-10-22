import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Mail, Phone, MapPin, Globe, Linkedin, Download, Briefcase, Code2, PenTool, Languages, Sun, Moon, GalleryVerticalEnd, GraduationCap, Award } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import CVPage from "@/pages/CVPage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { cvData } from "./data/cvData";

// --- THEME / LANG PROVIDER (persisted) ---------------------------------------
function useTheme() {
  // Initialize with saved preference or default to dark mode
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("isDark");
      if (saved !== null) {
        return saved === 'true';
      }
    }
    return true; // Default to dark mode
  });
  
  // Apply theme and persist changes
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("isDark", isDark.toString());
  }, [isDark]);
  
  return { isDark, setIsDark } as const;
}

// Global language state (CZ / EN) with persistence and auto-detection
function useLang() {
  // Initialize with saved preference or default to English
  const [lang, setLang] = React.useState<"cz" | "en">(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("lang");
      if (saved === 'cz' || saved === 'en') {
        return saved;
      }
      // Auto-detect browser language only if no saved preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('cs') || browserLang.startsWith('cz')) {
        return 'cz';
      }
    }
    return 'en'; // Default to English
  });
  
  React.useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  
  return { lang, setLang } as const;
}

// --- DATA --------------------------------------------------------------------
const profile = {
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

const education = [
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

const certifications = [
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

const about = {
  cz: `Jsem zakladatel a vedoucí designér digitální agentury Flex Digital Agency, kde propojuji kreativitu s technologií. Zaměřuji se na tvorbu moderních webových stránek, vizuálních identit a digitálních strategií, které pomáhají firmám růst a zviditelnit se v online prostoru. Mám více než 10 let zkušeností v oblasti grafického designu, vývoje a marketingu. Zajímám se o automatizaci, nové technologie a UX trendy; cílem jsou řešení, která nejen skvěle vypadají, ale i fungují.`,
  en: `Founder and lead designer of Flex Digital Agency, where creativity meets technology. I focus on modern web design, branding, and digital strategy that help companies grow. Over 10 years of experience across design, development, and marketing. Passionate about automation, UX, and new tech — building products that look great and work flawlessly.`,
};

const services = [
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

// Extended experience based on prior prepared copy
const experience = [
  {
    company: "Czech University of Life Sciences (CZU)",
    logo: "/company-logos/czuvpraze_logo.jpeg",
    location: "Prague, Czech Republic",
    roles: {
      cz: "Senior Web Developer",
      en: "Senior Web Developer",
    },
    dates: "2024 – present",
    description: {
      cz: "Působím jako senior webový vývojář a designér v rámci projektového týmu zaměřeného na digitalizaci a virtualizaci IT prostředí a vývoj moderních webových aplikací pro akademické a výzkumné účely.",
      en: "I work as a senior web developer and designer within a project team focused on digitalization and virtualization of IT environment and development of modern web applications for academic and research purposes.",
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
        "Grafická podpora pro projektový tým – návrh prezentačních šablon, pozvánek a interních materiálů.",
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
        "Graphic support for project team – design of presentation templates, invitations and internal materials.",
      ],
    },
  },
  {
    company: "Flex Digital Agency s.r.o.",
    logo: "/company-logos/flex.jpeg",
    location: "Karlovy Vary, Czech Republic",
    roles: {
      cz: "Zakladatel · Kreativní ředitel · Webový vývojář",
      en: "Founder · Creative Director · Web Developer",
    },
    dates: "2020 – present",
    description: {
      cz: "Jsem zakladatelem a vedoucím designérem digitální agentury Flex Digital Agency, která se specializuje na komplexní webová řešení, vizuální identitu a digitální marketing. Vedu projekty od strategie a konceptu až po jejich realizaci a dlouhodobou správu – od návrhu firemních webů, e-shopů a brand identit až po online kampaně a automatizaci procesů.",
      en: "I am the founder and lead designer of Flex Digital Agency, which specializes in comprehensive web solutions, visual identity and digital marketing. I lead projects from strategy and concept to their implementation and long-term management – from corporate websites, e-shops and brand identities to online campaigns and process automation.",
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
        "Dlouhodobá údržba webů, optimalizace výkonu, bezpečnostní dohled a UX vylepšení.",
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
        "Long‑term website maintenance, performance optimization, security monitoring and UX improvements.",
      ],
    },
  },
  {
    company: "SUAS Group a.s.",
    logo: "/company-logos/suas_group_logo.jpeg",
    location: "Sokolov, Czech Republic",
    roles: {
      cz: "Vedoucí grafického a webového designu",
      en: "Lead Graphic & Web Designer",
    },
    dates: "2021 – 2024",
    description: {
      cz: "V rámci skupiny SUAS Group, která sdružuje dceřiné společnosti působící v oblasti energetiky, stavebnictví a rozvoje regionu Sokolovska, zodpovídám za tvorbu a rozvoj vizuální komunikace celé skupiny i jednotlivých subjektů.",
      en: "Within SUAS Group, which brings together subsidiaries operating in energy, construction and development of the Sokolov region, I am responsible for creating and developing visual communication for the entire group and individual entities.",
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
        "Spolupráce s vedením skupiny na rozvoji marketingové a komunikační strategie.",
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
        "Cooperation with group management on the development of marketing and communication strategy.",
      ],
    },
  },
  {
    company: "Art de Suisse s.r.o.",
    logo: "/company-logos/art_de_suisse_logo.jpeg",
    location: "Karlovy Vary, Czech Republic",
    roles: {
      cz: "Head of Marketing & Brand Development",
      en: "Head of Marketing & Brand Development",
    },
    dates: "2014 – 2021",
    description: {
      cz: "V rámci společnosti Art de Suisse, která se specializuje na luxusní hodinky, šperky a umělecké předměty, jsem vedl marketingové a komunikační aktivity značky v České republice i zahraničí. Zastával jsem klíčovou roli při rozvoji brand identity, koordinaci kampaní a tvorbě exkluzivního obsahu pro prémiový segment zákazníků.",
      en: "Within Art de Suisse, specializing in luxury watches, jewelry and art objects, I led marketing and communication activities of the brand in the Czech Republic and abroad. I played a key role in brand identity development, campaign coordination and creation of exclusive content for premium customer segment.",
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
        "Komunikace s vedením společnosti, reporting výsledků a návrhy na optimalizaci marketingové strategie.",
      ],
      en: [
        "Leading the marketing team and ensuring strategic direction of the brand.",
        "Creating and implementing marketing plans for online and offline channels.",
        "Organization and visual coordination of events, private exhibitions and VIP presentations.",
        "Cooperation with international partners and suppliers from Switzerland, France, Germany, England and Italy.",
        "Creation and implementation of advertising campaigns (digital and outdoor) in line with the image of individual brands.",
        "Responsibility for the visual style of the company – from graphic design and product photography to final printing and presentation.",
        "Design and management of marketing budget, ROI evaluation and performance metrics.",
        "Communication with company management, reporting results and proposals for marketing strategy optimization.",
      ],
    },
  },
  {
    company: "AZSIĞORTA ASC",
    logo: "/company-logos/azsigorta.jpeg",
    location: "Azerbaijan",
    roles: {
      cz: "Manažer prodeje",
      en: "Sales Manager",
    },
    dates: "2009 – 2010",
    description: {
      cz: "Rozvoj prodejních strategií a správa vztahů s klienty na ázerbájdžánském trhu.",
      en: "Developed sales strategies and managed client relationships in the Azerbaijani market.",
    },
    bullets: {
      cz: [
        "Analýza trhu a identifikace nových obchodních příležitostí.",
        "Koordinace prodejního týmu a dosahování stanovených cílů.",
      ],
      en: [
        "Market analysis and identification of new business opportunities.",
        "Sales team coordination and achievement of set targets.",
      ],
    },
  },
  {
    company: "AXA MBASK OJSC",
    logo: null, // Will use placeholder with initials
    location: "Azerbaijan",
    roles: {
      cz: "Obchodní zástupce",
      en: "Sales Representative",
    },
    dates: "2008 – 2009",
    description: {
      cz: "Získávání nových klientů a správa stávajících vztahů na pojišťovacím trhu.",
      en: "Client acquisition and relationship management in the insurance market.",
    },
    bullets: {
      cz: [
        "Prezentace pojišťovacích produktů a služeb potenciálním klientům.",
        "Plnění prodejních kvót a dosahování stanovených cílů.",
      ],
      en: [
        "Presentation of insurance products and services to potential clients.",
        "Meeting sales quotas and achieving set targets.",
      ],
    },
  },
  {
    company: "Ateshgah Insurance Group",
    logo: "/company-logos/ateshgah.png",
    location: "Azerbaijan",
    roles: {
      cz: "Pojišťovací upisovatel",
      en: "Insurance Underwriter",
    },
    dates: "2006 – 2008",
    description: {
      cz: "Hodnocení a posuzování pojišťovacích rizik pro různé typy pojistných smluv.",
      en: "Evaluated and assessed insurance risks for various types of insurance policies.",
    },
    bullets: {
      cz: [
        "Stanovování pojistných podmínek a sazeb na základě analýzy rizik.",
        "Spolupráce s pojišťovacími makléři a klienty při sjednávání pojistných smluv.",
      ],
      en: [
        "Determined policy terms and rates based on risk analysis.",
        "Collaborated with insurance brokers and clients in policy negotiations.",
      ],
    },
  },
];

// Skills with actual logo images from Logo.dev
const SkillLogo: React.FC<{ name: string }> = ({ name }) => {
  const logoMap: Record<string, string> = {
    "JavaScript": "/logos/javascript.png",
    "HTML5": "/logos/html5.png",
    "CSS3": "/logos/css3.png",
    "Tailwind CSS": "/logos/tailwindcss.png",
    "GSAP": "/logos/gsap.png",
    "Webflow": "/logos/webflow.png",
    "WordPress": "/logos/wordpress.png",
    "Figma": "/logos/figma.png",
    "Docker": "/logos/docker.png",
    "GitHub": "/logos/github.svg",
    "Cloudflare": "/logos/cloudflare.png",
    "Vite": "/logos/vite.png",
    "Astro": "/logos/astro.png",
  };

  const logoPath = logoMap[name];
  
  if (logoPath) {
    return (
      <img 
        src={logoPath} 
        alt={`${name} logo`} 
        className="h-4 w-4 object-contain transition-opacity duration-200 hover:opacity-80" 
        loading="lazy"
      />
    );
  }
  
  return null;
};

const skillsPrimary = [
  "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Webflow", "WordPress", "Figma", "API Integrations", "Docker", "GitHub", "Cloudflare", "Vite", "Astro",
];

// --- COMPONENTS --------------------------------------------------------------
const SectionTitle: React.FC<{ icon?: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <div className="flex items-center gap-2 mb-3">
    {icon}
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
  </div>
);

const PillList: React.FC<{ items: string[]; withLogos?: boolean }> = ({ items, withLogos }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => {
      const icon = withLogos ? <SkillLogo name={t} /> : null;
      return (
        <Badge 
          key={t} 
          variant="secondary" 
          className={`rounded-2xl px-3 py-1 text-sm flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 cursor-pointer group ${icon ? 'gap-1' : ''}`}
        >
          {icon}
          <span className="group-hover:font-medium transition-all duration-300">{t}</span>
        </Badge>
      );
    })}
  </div>
);

const ExperienceItem: React.FC<{
  company: string;
  role: string;
  dates: string;
  logo: string | null;
  description: { cz: string; en: string };
  bullets: { cz: string[]; en: string[] };
  lang: "cz" | "en";
}> = ({ company, role, dates, logo, description, bullets, lang }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  // Generate company initials for placeholder
  const getCompanyInitials = (companyName: string) => {
    return companyName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 3)
      .toUpperCase();
  };

  const hasMoreContent = bullets[lang].length > 0;

  return (
    <div className="relative flex items-start gap-6">
      {/* Timeline Dot */}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-4 ring-background">
        <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
      </div>
      
      {/* Timeline Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <div className="flex items-start gap-3">
            {/* Company Logo */}
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center flex-shrink-0">
                  {logo ? (
                    <img 
                      src={logo.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
                      alt={company} 
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Try original format if WebP fails
                        if (target.src.includes('.webp')) {
                          target.src = logo;
                        } else {
                          // Fallback to company initials if logo fails to load
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-xs font-semibold text-muted-foreground">${getCompanyInitials(company)}</div>`;
                          }
                        }
                      }}
                    />
                  ) : (
                <div className="text-xs font-semibold text-muted-foreground">
                  {getCompanyInitials(company)}
                </div>
              )}
            </div>
            
            <div>
                  <h4 className="text-lg font-semibold">{role}</h4>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
          
          <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block w-fit">
            {dates}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
          {description[lang]}
        </p>
        
        {/* Show/Hide Activities Button */}
        {hasMoreContent && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 p-0 h-auto font-normal mb-3"
            >
              {isExpanded 
                ? (lang === "cz" ? "Skrýt aktivity" : "Hide activities") 
                : (lang === "cz" ? "Hlavní aktivity a zodpovědnosti" : "Main activities and responsibilities")
              }
              <span className="ml-1">{isExpanded ? "↑" : "↓"}</span>
            </Button>
            
            {/* Bullet Points - Only show when expanded */}
            {isExpanded && (
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {bullets[lang].map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// --- FEATURED PROJECTS -------------------------------------------------------
const featuredProjects = [
  { 
    title: { 
      cz: "Karlovarská sůl – Nový vizuální styl a web", 
      en: "Karlovy Vary Salt – New visual style and website" 
    }, 
    category: { cz: "FMCG", en: "FMCG" }, 
    link: "https://flexagency.cz/work/karlovarska-sul-novy-vizualni-styl-a-web-pro-tradicni-cesky-produkt/", 
    image: "/projects/karlovarska-sul.jpg", 
    blurb: { 
      cz: "Rebranding tradiční značky a nový web.", 
      en: "Rebranding of traditional brand and new website." 
    } 
  },
  { 
    title: { 
      cz: "Art de Suisse – Online katalog butiků", 
      en: "Art de Suisse – Online boutique catalog" 
    }, 
    category: { cz: "Luxury Retail", en: "Luxury Retail" }, 
    link: "https://flexagency.cz/work/art-de-suisse-katalog-pro-sit-butiku-luxusnich-hodinek-a-sperku/", 
    image: "/projects/art-de-suisse.jpg", 
    blurb: { 
      cz: "Online katalog pro prémiový retail.", 
      en: "Online catalog for premium retail." 
    } 
  },
  { 
    title: { 
      cz: "Sansei Royal Thai Massage – Nový web", 
      en: "Sansei Royal Thai Massage – New website" 
    }, 
    category: { cz: "Wellness", en: "Wellness" }, 
    link: "https://flexagency.cz/work/sansei-royal-thai-massage-novy-web-pro-thajsky-masazni-salon/", 
    image: "/projects/sansei.jpg", 
    blurb: { 
      cz: "Elegantní a funkční web pro prémiové služby.", 
      en: "Elegant and functional website for premium services." 
    } 
  },
  { 
    title: { 
      cz: "Villa Julius – Web a identita", 
      en: "Villa Julius – Website and identity" 
    }, 
    category: { cz: "Hospitality", en: "Hospitality" }, 
    link: "https://flexagency.cz/work/webove-stranky-a-vizualni-identita-pro-villa-julius/", 
    image: "/projects/villa-julius.jpg", 
    blurb: { 
      cz: "Kompletní vizuální identita a vícejazyčný web.", 
      en: "Complete visual identity and multilingual website." 
    } 
  },

  { 
    title: { 
      cz: "Císařské lázně – Nový web pro kulturní a návštěvní prostor", 
      en: "Císařské lázně – New website for cultural and visitor space" 
    }, 
    category: { cz: "Veřejný sektor", en: "Public Sector" }, 
    link: "https://flexagency.cz/work/cisarske-lazne-novy-web-pro-kulturni-a-navstevni-prostor-v-karlovych-varech/", 
    image: "/projects/cisarske-lazne.jpg", 
    blurb: { 
      cz: "Informačně bohatý web reflektující novou identitu objektu.", 
      en: "Information-rich website reflecting the new identity of the building." 
    } 
  },
  { 
    title: { 
      cz: "Pohyb jsou lázně – EMS 2025", 
      en: "Movement is Spa – EMS 2025" 
    }, 
    category: { cz: "Veřejný sektor", en: "Public Sector" }, 
    link: "https://flexagency.cz/work/web-pohyb-jsou-lazne/", 
    image: "/projects/pohyb-jsou-lazne.jpg", 
    blurb: { 
      cz: "Dynamický landing page pro město Karlovy Vary.", 
      en: "Dynamic landing page for Karlovy Vary city." 
    } 
  },

  { 
    title: { 
      cz: "Carlsbad Reality – Modernizace webu pro developera", 
      en: "Carlsbad Reality – Website modernization for developer" 
    }, 
    category: { cz: "Real Estate", en: "Real Estate" }, 
    link: "https://flexagency.cz/work/carlsbad-reality-modernizace-webu-pro-realitni-developera/", 
    image: "/projects/carlsbad-reality.jpg", 
    blurb: { 
      cz: "Moderní web s filtrem a mapovými cenami.", 
      en: "Modern website with filters and map pricing." 
    } 
  },
  { 
    title: { 
      cz: "Institut lázeňství a balneologie – Redesign", 
      en: "Institute of Spa and Balneology – Redesign" 
    }, 
    category: { cz: "Výzkum", en: "Research" }, 
    link: "https://flexagency.cz/work/institut-lazenstvi-a-balneologie-redesign-webu-pro-verejnou-vyzkumnou-instituci/", 
    image: "/projects/i-lab.jpg", 
    blurb: { 
      cz: "Vícejazyčný web pro veřejnou instituci.", 
      en: "Multilingual website for public institution." 
    } 
  },
  // { 
  //   title: { 
  //     cz: "JASLEIN s.r.o. – Identita a web", 
  //     en: "JASLEIN s.r.o. – Identity and website" 
  //   }, 
  //   category: { cz: "Doprava", en: "Transportation" }, 
  //   link: "https://flexagency.cz/work/jaslein-s-r-o-kompletni-vizualni-identita-a-prezentacni-web-pro-dopravni-spolecnost/", 
  //   image: "/projects/jaslein.jpg", 
  //   blurb: { 
  //     cz: "Logo, identita a prezentační web s náborem.", 
  //     en: "Logo, identity and presentation website with recruitment." 
  //   } 
  // },


  { 
    title: { 
      cz: "Bieneberg – Web pro poskytovatele topenářských a instalatérských služeb", 
      en: "Bieneberg – Website for heating and plumbing services provider" 
    }, 
    category: { cz: "Technické služby", en: "Technical Services" }, 
    link: "https://flexagency.cz/work/bieneberg-web-pro-poskytovatele-topenarskych-a-instalaterskych-sluzeb/", 
    image: "/projects/bieneberg.jpg", 
    blurb: { 
      cz: "Kompletní digitální prezentace – logotyp, identita a prezentační web.", 
      en: "Complete digital presentation – logo, identity and presentation website." 
    } 
  },
];

const categories = [
  { cz: "Všechny", en: "All" },
  { cz: "Real Estate", en: "Real Estate" },
  { cz: "Luxury Retail", en: "Luxury Retail" },
  { cz: "Wellness", en: "Wellness" },
  { cz: "Hospitality", en: "Hospitality" },
  { cz: "Veřejný sektor", en: "Public Sector" },
  { cz: "Výzkum", en: "Research" },
  { cz: "Doprava", en: "Transportation" },
  { cz: "FMCG", en: "FMCG" },
  { cz: "Technické služby", en: "Technical Services" }
] as const;

type Category = typeof categories[number];

const FeaturedGrid: React.FC<{ lang: "cz" | "en" }> = ({ lang }) => {
  const [active, setActive] = React.useState<Category>(categories[0]);
  const filtered = active[lang] === (lang === "cz" ? "Všechny" : "All") ? featuredProjects : featuredProjects.filter(p => p.category[lang] === active[lang]);
  
  const ProjectCard: React.FC<{ project: typeof featuredProjects[0] }> = ({ project }) => (
    <Card className="group overflow-hidden border-muted/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
      <div className="aspect-[16/10] bg-muted/30 overflow-hidden relative">
        <img 
          src={project.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
          alt={project.title[lang]} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" 
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = project.image;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <CardDescription className="text-xs uppercase tracking-wide group-hover:text-primary transition-colors duration-200">{project.category[lang]}</CardDescription>
        <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors duration-200">{project.title[lang]}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{project.blurb[lang]}</p>
        <Button variant="link" asChild className="p-0 h-auto text-sm group-hover:text-primary transition-colors duration-200">
          <a href={project.link} target="_blank" rel="noreferrer">{lang === 'cz' ? 'Zobrazit projekt' : 'View project'} →</a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <GalleryVerticalEnd className="h-4 w-4"/>
        {categories.map((c) => (
          <Button key={c[lang]} size="sm" variant={active[lang] === c[lang] ? "default" : "secondary"} onClick={() => setActive(c)} className="rounded-2xl">
            {c[lang]}
          </Button>
        ))}
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.title[lang]} project={p} />
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          className="project-swiper"
        >
          {filtered.map((p) => (
            <SwiperSlide key={p.title[lang]}>
              <ProjectCard project={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// --- MAIN PROFILE PAGE --------------------------------------------------------
function ProfilePage() {
  const { isDark, setIsDark } = useTheme();
  const { lang, setLang } = useLang();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/40" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/elchin photo-cut.webp" 
              alt="Elchin Huseynli" 
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/elchin photo-cut.png";
              }}
            />
            <div className="font-semibold text-lg">Elchin Huseynli</div>
          </div>

          {/* Desktop Navigation & Controls */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm hover:text-primary transition-colors"
            >
              {lang === "cz" ? "O mně" : "About"}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm hover:text-primary transition-colors"
            >
              {lang === "cz" ? "Služby" : "Services"}
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm hover:text-primary transition-colors"
            >
              {lang === "cz" ? "Zkušenosti" : "Experience"}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm hover:text-primary transition-colors"
            >
              {lang === "cz" ? "Projekty" : "Projects"}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-primary transition-colors"
            >
              {lang === "cz" ? "Kontakt" : "Contact"}
            </button>
            
            {/* Language Switcher */}
            <Tabs value={lang} onValueChange={(v) => setLang(v as any)}>
              <TabsList className="h-8" aria-label={lang === "cz" ? "Výběr jazyka" : "Language selection"}>
                <TabsTrigger value="en" className="text-xs px-2">EN</TabsTrigger>
                <TabsTrigger value="cz" className="text-xs px-2">CZ</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {/* Theme Switcher */}
            <div className="flex items-center gap-1">
              <Sun className="h-4 w-4" aria-hidden="true" />
              <Switch 
                checked={isDark} 
                onCheckedChange={setIsDark} 
                className="scale-75"
                aria-label={lang === "cz" ? "Přepnout na světlý režim" : "Switch to light mode"}
                role="switch"
                aria-checked={isDark}
              />
              <Moon className="h-4 w-4" aria-hidden="true" />
            </div>
            
            {/* Download CV Button */}
            <Button 
              onClick={() => window.open(`/resume?lang=${lang}`, '_blank')}
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              {lang === "cz" ? "CV" : "CV"}
            </Button>
          </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 mobile-menu-button rounded-lg hover:bg-muted/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? (lang === "cz" ? "Zavřít menu" : "Close menu") : (lang === "cz" ? "Otevřít menu" : "Open menu")}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out my-1 ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-y-0'
                  }`}></span>
                </div>
              </button>
        </div>

            {/* Mobile Navigation */}
            <div 
              id="mobile-navigation"
              className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden mobile-menu-container ${
                isMobileMenuOpen 
                  ? 'max-h-screen opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-muted/40 py-4 backdrop-blur-md bg-background/80">
                <div className="space-y-4">
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col gap-2">
                    {[
                      { id: 'about', label: { cz: 'O mně', en: 'About' } },
                      { id: 'services', label: { cz: 'Služby', en: 'Services' } },
                      { id: 'experience', label: { cz: 'Zkušenosti', en: 'Experience' } },
                      { id: 'projects', label: { cz: 'Projekty', en: 'Projects' } },
                      { id: 'contact', label: { cz: 'Kontakt', en: 'Contact' } }
                    ].map((item, index) => (
                      <button 
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="mobile-menu-item text-left text-sm hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 hover:translate-x-2 hover:scale-105 group relative overflow-hidden"
                        style={{
                          animationDelay: `${index * 80}ms`,
                          animation: isMobileMenuOpen ? `slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms both` : 'none'
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          {item.label[lang]}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Mobile Controls */}
                  <div 
                    className="flex items-center justify-between pt-4 px-6 border-t border-muted/40"
                    style={{
                      animationDelay: '400ms',
                      animation: isMobileMenuOpen ? `fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 400ms both` : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Language Switcher */}
                      <Tabs value={lang} onValueChange={(v) => setLang(v as any)}>
                        <TabsList className="h-8 hover:scale-105 transition-transform duration-200" aria-label={lang === "cz" ? "Výběr jazyka" : "Language selection"}>
                          <TabsTrigger value="en" className="text-xs px-2">EN</TabsTrigger>
                          <TabsTrigger value="cz" className="text-xs px-2">CZ</TabsTrigger>
                        </TabsList>
                      </Tabs>
                      
                      {/* Theme Switcher */}
                      <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                        <Sun className="h-4 w-4" aria-hidden="true" />
                        <Switch 
                          checked={isDark} 
                          onCheckedChange={setIsDark} 
                          className="scale-75"
                          aria-label={lang === "cz" ? "Přepnout na světlý režim" : "Switch to light mode"}
                          role="switch"
                          aria-checked={isDark}
                        />
                        <Moon className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                    
                    {/* Download CV Button */}
                    <Button 
                      onClick={() => window.open(`/resume?lang=${lang}`, '_blank')}
                      size="sm"
                      className="hover:scale-105 hover:shadow-lg transition-all duration-300 bg-primary hover:bg-primary/90"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {lang === "cz" ? "CV" : "CV"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
      </nav>

      <main role="main" className="space-y-8 md:space-y-6">
        {/* Header */}
      <Card className="overflow-hidden border-muted/40">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-20 w-20 ring-2 ring-muted">
              <AvatarImage 
                src="/elchin photo-cut.webp" 
                alt="Elchin Huseynli" 
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/elchin photo-cut.png";
                }}
              />
              <AvatarFallback>EH</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">{cvData.profile.name[lang]}</h1>
              <div className="mt-2 text-sm text-muted-foreground">{cvData.profile.headline[lang]}</div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{cvData.profile.location}</div>
                <a className="flex items-center gap-2 hover:underline" href={`mailto:${cvData.profile.contacts.email}`}><Mail className="h-4 w-4" />{cvData.profile.contacts.email}</a>
                <a className="flex items-center gap-2 hover:underline" href={`tel:${cvData.profile.contacts.phone}`}><Phone className="h-4 w-4" />{cvData.profile.contacts.phone}</a>
                <a className="flex items-center gap-2 hover:underline" href={cvData.profile.contacts.site} target="_blank" rel="noreferrer"><Globe className="h-4 w-4" />flexagency.cz</a>
                <a className="flex items-center gap-2 hover:underline" href={cvData.profile.contacts.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <section id="about" aria-labelledby="about-heading">
        <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<PenTool className="h-5 w-5"/>}><span id="about-heading">{lang === "cz" ? "O mně" : "About"}</span></SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-1 text-sm leading-7">{cvData.about[lang]}</div>
        </CardContent>
        </Card>
      </section>

      {/* Services */}
      <Card id="services" className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<Briefcase className="h-5 w-5"/>}>{lang === "cz" ? "Služby" : "Services"}</SectionTitle>
          <CardDescription>{lang === "cz" ? "Hlavní nabídka pro klienty a partnery" : "Primary offerings for clients and partners"}</CardDescription>
        </CardHeader>
        <CardContent>
          <PillList items={cvData.services} />
        </CardContent>
      </Card>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-muted/40">
          <CardHeader>
            <SectionTitle icon={<Code2 className="h-5 w-5"/>}>{lang === "cz" ? "Klíčové dovednosti" : "Core Skills"}</SectionTitle>
            <CardDescription>{lang === "cz" ? "Denní stack a specializace" : "Daily stack & specialties"}</CardDescription>
          </CardHeader>
          <CardContent>
            <PillList items={cvData.skills} withLogos />
          </CardContent>
        </Card>
        <Card className="border-muted/40">
          <CardHeader>
            <SectionTitle icon={<PenTool className="h-5 w-5"/>}>{lang === "cz" ? "Měkké dovednosti" : "Soft Skills"}</SectionTitle>
            <CardDescription>{lang === "cz" ? "Komunikace · Leadership · Analýza" : "Communication · Leadership · Analysis"}</CardDescription>
          </CardHeader>
          <CardContent>
            <PillList items={cvData.softSkills} />
          </CardContent>
        </Card>
      </div>

      {/* Experience Timeline */}
      <div id="experience" className="space-y-8">
        <h3 className="text-2xl font-bold tracking-tight">{lang === "cz" ? "Praxe" : "Experience"}</h3>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {cvData.experience.map((exp) => (
              <ExperienceItem key={exp.company} lang={lang} {...exp} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <Card id="projects" className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<GalleryVerticalEnd className="h-5 w-5"/>}>{lang === 'cz' ? 'Vybrané projekty' : 'Featured Projects'}</SectionTitle>
          <CardDescription>{lang === 'cz' ? 'Výběr prací z portfolia Flex Digital Agency' : 'Selected works from the Flex Digital Agency portfolio'}</CardDescription>
        </CardHeader>
        <CardContent>
          <FeaturedGrid lang={lang} />
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<Languages className="h-5 w-5"/>}>{lang === "cz" ? "Jazyky" : "Languages"}</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {cvData.profile.languages.map((l) => (
              <Badge 
                key={l.label} 
                variant="outline" 
                className="rounded-2xl px-3 py-1 text-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 cursor-pointer group"
              >
                <span className="mr-1 group-hover:scale-110 transition-transform duration-300">{l.flag}</span>
                <span className="group-hover:font-medium transition-all duration-300">{l.label} · {l.level}</span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<GraduationCap className="h-5 w-5"/>}>{lang === "cz" ? "Vzdělání" : "Education"}</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <div className="font-semibold text-base">{edu.institution[lang]}</div>
                  <div className="text-sm text-muted-foreground">{edu.degree[lang]}</div>
                  <div className="text-xs text-muted-foreground mt-1">{edu.location}</div>
                </div>
                <div className="text-sm text-muted-foreground">{edu.dates}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<Award className="h-5 w-5"/>}>{lang === "cz" ? "Certifikace" : "Certifications"}</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cvData.certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={cert.badge} 
                    alt={cert.name[lang]} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-base">{cert.name[lang]}</div>
                  <div className="text-sm text-muted-foreground">{cert.issuer} · {cert.date}</div>
                  <div className="text-xs text-muted-foreground mt-1">{cert.description[lang]}</div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                  >
                    {lang === "cz" ? "Zobrazit certifikát" : "View Certificate"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card id="contact" className="border-muted/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {lang === "cz" ? "Kontaktní formulář" : "Contact Form"}
          </CardTitle>
          <CardDescription>
            {lang === "cz" 
              ? "Máte projekt na mysli? Rádi si o něm popovídáme." 
              : "Have a project in mind? Let's talk about it."
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm lang={lang} />
        </CardContent>
      </Card>

      {/* Download CV */}
      <Card className="border-muted/40">
        <CardContent className="py-6 text-center">
          <div className="space-y-4">
            <div>
              <div className="text-lg font-semibold">{lang === "cz" ? "Stáhněte si mé CV" : "Download my CV"}</div>
              <div className="text-sm text-muted-foreground">{lang === "cz" ? "Kompletní profesní profil pro tisk nebo sdílení." : "Complete professional profile for printing or sharing."}</div>
            </div>
            <Button variant="secondary" asChild size="lg">
              <a href={`/resume?lang=${lang}`} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4 mr-2"/>
                {lang === "cz" ? "Stáhnout CV" : "Download CV"}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />
      <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Elchin Huseynli — Flex Digital Agency</div>
      </main>
    </div>
  );
}

// --- MAIN APP WITH ROUTER -----------------------------------------------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<CVPage />} />
        <Route path="/*" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
