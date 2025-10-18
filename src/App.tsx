import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Mail, Phone, MapPin, Globe, Linkedin, Download, Briefcase, Code2, PenTool, Rocket, Languages, Building2, Sun, Moon, GalleryVerticalEnd } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import CVPage from "@/pages/CVPage";

// --- THEME / LANG PROVIDER (persisted) ---------------------------------------
function useTheme() {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  // load on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = saved ? saved === 'dark' : prefersDark;
    setIsDark(next);
  }, []);
  // apply & persist
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? 'dark' : 'light');
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
  name: "Elchin Huseynli, Bc.",
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
    bullets: {
      cz: [
        "Působím jako senior webový vývojář a designér v rámci projektového týmu zaměřeného na digitalizaci a virtualizaci IT prostředí a vývoj moderních webových aplikací pro akademické a výzkumné účely.",
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
        "I work as a senior web developer and designer within a project team focused on digitalization and virtualization of IT environment and development of modern web applications for academic and research purposes.",
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
    bullets: {
      cz: [
        "Jsem zakladatelem a vedoucím designérem digitální agentury Flex Digital Agency, která se specializuje na komplexní webová řešení, vizuální identitu a digitální marketing.",
        "Vedu projekty od strategie a konceptu až po jejich realizaci a dlouhodobou správu – od návrhu firemních webů, e-shopů a brand identit až po online kampaně a automatizaci procesů.",
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
        "I am the founder and lead designer of Flex Digital Agency, which specializes in comprehensive web solutions, visual identity and digital marketing.",
        "I lead projects from strategy and concept to their implementation and long-term management – from corporate websites, e-shops and brand identities to online campaigns and process automation.",
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
    bullets: {
      cz: [
        "V rámci skupiny SUAS Group, která sdružuje dceřiné společnosti působící v oblasti energetiky, stavebnictví a rozvoje regionu Sokolovska, zodpovídám za tvorbu a rozvoj vizuální komunikace celé skupiny i jednotlivých subjektů.",
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
        "Within SUAS Group, which brings together subsidiaries operating in energy, construction and development of the Sokolov region, I am responsible for creating and developing visual communication for the entire group and individual entities.",
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
    bullets: {
      cz: [
        "V rámci společnosti Art de Suisse, která se specializuje na luxusní hodinky, šperky a umělecké předměty, jsem vedl marketingové a komunikační aktivity značky v České republice i zahraničí.",
        "Zastával jsem klíčovou roli při rozvoji brand identity, koordinaci kampaní a tvorbě exkluzivního obsahu pro prémiový segment zákazníků.",
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
        "Within Art de Suisse, specializing in luxury watches, jewelry and art objects, I led marketing and communication activities of the brand in the Czech Republic and abroad.",
        "I played a key role in brand identity development, campaign coordination and creation of exclusive content for premium customer segment.",
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
    bullets: {
      cz: [
        "Rozvoj prodejních strategií a správa vztahů s klienty na ázerbájdžánském trhu.",
        "Analýza trhu a identifikace nových obchodních příležitostí.",
        "Koordinace prodejního týmu a dosahování stanovených cílů.",
      ],
      en: [
        "Developed sales strategies and managed client relationships in the Azerbaijani market.",
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
    bullets: {
      cz: [
        "Získávání nových klientů a správa stávajících vztahů na pojišťovacím trhu.",
        "Prezentace pojišťovacích produktů a služeb potenciálním klientům.",
        "Plnění prodejních kvót a dosahování stanovených cílů.",
      ],
      en: [
        "Client acquisition and relationship management in the insurance market.",
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
    bullets: {
      cz: [
        "Hodnocení a posuzování pojišťovacích rizik pro různé typy pojistných smluv.",
        "Stanovování pojistných podmínek a sazeb na základě analýzy rizik.",
        "Spolupráce s pojišťovacími makléři a klienty při sjednávání pojistných smluv.",
      ],
      en: [
        "Evaluated and assessed insurance risks for various types of insurance policies.",
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
    <h3 className="text-xl font-semibold tracking-tight">{children}</h3>
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
  logo?: string | null;
  location: string;
  roles: { cz: string; en: string };
  dates: string;
  bullets: { cz: string[]; en: string[] };
  lang: "cz" | "en";
}> = ({ company, logo, location, roles, dates, bullets, lang }) => {
  // Generate company initials for placeholder
  const getCompanyInitials = (companyName: string) => {
    return companyName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 3)
      .toUpperCase();
  };

  return (
    <Card className="border-muted/40">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
              {logo ? (
                <img 
                  src={logo} 
                  alt={`${company} logo`} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-full h-full flex items-center justify-center text-xs font-semibold text-muted-foreground ${logo ? 'hidden' : ''}`}>
                {getCompanyInitials(company)}
              </div>
            </div>
            <div>
              <CardTitle className="text-lg">{company}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1 text-sm"><Building2 className="h-4 w-4" />{location}</CardDescription>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">{dates}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="font-medium mb-2">{roles[lang]}</div>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {bullets[lang].map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// --- FEATURED PROJECTS -------------------------------------------------------
const featuredProjects = [
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
  { 
    title: { 
      cz: "JASLEIN s.r.o. – Identita a web", 
      en: "JASLEIN s.r.o. – Identity and website" 
    }, 
    category: { cz: "Doprava", en: "Transportation" }, 
    link: "https://flexagency.cz/work/jaslein-s-r-o-kompletni-vizualni-identita-a-prezentacni-web-pro-dopravni-spolecnost/", 
    image: "/projects/jaslein.jpg", 
    blurb: { 
      cz: "Logo, identita a prezentační web s náborem.", 
      en: "Logo, identity and presentation website with recruitment." 
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
];

const categories = [
  { cz: "All", en: "All" },
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
  const filtered = active.cz === "All" ? featuredProjects : featuredProjects.filter(p => p.category[lang] === active[lang]);
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Card key={p.title[lang]} className="group overflow-hidden border-muted/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
            <div className="aspect-[16/10] bg-muted/30 overflow-hidden relative">
              <img src={p.image} alt={p.title[lang]} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-wide group-hover:text-primary transition-colors duration-200">{p.category[lang]}</CardDescription>
              <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors duration-200">{p.title[lang]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{p.blurb[lang]}</p>
              <Button variant="link" asChild className="p-0 h-auto text-sm group-hover:text-primary transition-colors duration-200">
                <a href={p.link} target="_blank" rel="noreferrer">{lang === 'cz' ? 'Zobrazit projekt' : 'View project'} →</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PROFILE PAGE --------------------------------------------------------
function ProfilePage() {
  const { isDark, setIsDark } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <div className="mx-auto max-w-6xl p-6 space-y-6">
      {/* Global Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tabs defaultValue={lang} value={lang} onValueChange={(v) => setLang(v as any)}>
            <TabsList>
              <TabsTrigger value="en">🇬🇧 EN</TabsTrigger>
              <TabsTrigger value="cz">🇨🇿 CZ</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <Switch checked={isDark} onCheckedChange={setIsDark} />
          <Moon className="h-4 w-4" />
        </div>
      </div>

      {/* Header */}
      <Card className="overflow-hidden border-muted/40">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-20 w-20 ring-2 ring-muted"><AvatarImage src="/elchin-profile.png" alt="Elchin" className="object-cover" /><AvatarFallback>EH</AvatarFallback></Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
              <div className="mt-2 text-sm text-muted-foreground">{profile.headline[lang]}</div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{profile.location}</div>
                <a className="flex items-center gap-2 hover:underline" href={`mailto:${profile.contacts.email}`}><Mail className="h-4 w-4" />{profile.contacts.email}</a>
                <a className="flex items-center gap-2 hover:underline" href={`tel:${profile.contacts.phone}`}><Phone className="h-4 w-4" />{profile.contacts.phone}</a>
                <a className="flex items-center gap-2 hover:underline" href={profile.contacts.site} target="_blank" rel="noreferrer"><Globe className="h-4 w-4" />flexagency.cz</a>
                <a className="flex items-center gap-2 hover:underline" href={profile.contacts.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" asChild>
                <a href="#services"><Rocket className="h-4 w-4 mr-2"/>{lang === "cz" ? "Služby" : "Services"}</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://flexagency.cz/nase-prace/" target="_blank" rel="noreferrer"><GalleryVerticalEnd className="h-4 w-4 mr-2"/>{lang === "cz" ? "Portfolio" : "Portfolio"}</a>
              </Button>
              <Button asChild>
                <a href={`/cv-page?lang=${lang}`} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4 mr-2"/>{lang === "cz" ? "Stáhnout CV" : "Download CV"}
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<PenTool className="h-5 w-5"/>}>{lang === "cz" ? "O mně" : "About"}</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-1 text-sm leading-7">{about[lang]}</div>
        </CardContent>
      </Card>

      {/* Services */}
      <Card id="services" className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<Briefcase className="h-5 w-5"/>}>{lang === "cz" ? "Služby" : "Services"}</SectionTitle>
          <CardDescription>{lang === "cz" ? "Hlavní nabídka pro klienty a partnery" : "Primary offerings for clients and partners"}</CardDescription>
        </CardHeader>
        <CardContent>
          <PillList items={services} />
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
            <PillList items={skillsPrimary} withLogos />
          </CardContent>
        </Card>
        <Card className="border-muted/40">
          <CardHeader>
            <SectionTitle icon={<PenTool className="h-5 w-5"/>}>{lang === "cz" ? "Měkké dovednosti" : "Soft Skills"}</SectionTitle>
            <CardDescription>{lang === "cz" ? "Komunikace · Leadership · Analýza" : "Communication · Leadership · Analysis"}</CardDescription>
          </CardHeader>
          <CardContent>
            <PillList items={[
              lang === 'cz' ? 'Strategické a analytické myšlení' : 'Strategic & Analytical Thinking',
              lang === 'cz' ? 'Leadership a koordinace týmu' : 'Leadership & Team Coordination',
              lang === 'cz' ? 'Efektivní komunikace a prezentace' : 'Effective Communication & Presentation',
              lang === 'cz' ? 'Kreativní řešení problémů' : 'Creative Problem Solving',
              lang === 'cz' ? 'Detailní orientace a zodpovědnost' : 'Attention to Detail & Ownership',
              lang === 'cz' ? 'Klientská komunikace a konzultace' : 'Client Communication & Consulting',
              lang === 'cz' ? 'Systematické plánování a delivery' : 'Systematic Planning & Delivery',
            ]} />
          </CardContent>
        </Card>
      </div>

      {/* Featured Projects */}
      <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<GalleryVerticalEnd className="h-5 w-5"/>}>{lang === 'cz' ? 'Vybrané projekty' : 'Featured Projects'}</SectionTitle>
          <CardDescription>{lang === 'cz' ? 'Výběr prací z portfolia Flex Digital Agency' : 'Selected works from the Flex Digital Agency portfolio'}</CardDescription>
        </CardHeader>
        <CardContent>
          <FeaturedGrid lang={lang} />
        </CardContent>
      </Card>

      {/* Experience */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">{lang === "cz" ? "Praxe" : "Experience"}</h2>
        {experience.map((exp) => (
          <ExperienceItem key={exp.company} lang={lang} {...exp} />
        ))}
      </div>

      {/* Languages */}
      <Card className="border-muted/40">
        <CardHeader>
          <SectionTitle icon={<Languages className="h-5 w-5"/>}>{lang === "cz" ? "Jazyky" : "Languages"}</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {profile.languages.map((l) => (
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

      {/* Contact Form */}
      <Card className="border-muted/40">
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
              <a href={`/cv-page?lang=${lang}`} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4 mr-2"/>
                {lang === "cz" ? "Stáhnout CV" : "Download CV"}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />
      <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Elchin Huseynli — Flex Digital Agency</div>
    </div>
  );
}

// --- MAIN APP WITH ROUTER -----------------------------------------------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cv-page" element={<CVPage />} />
        <Route path="/*" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
