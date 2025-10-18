import React from "react";
import { Mail, Phone, MapPin, Globe, Briefcase, Code2, PenTool, Rocket, Languages, Building2 } from "lucide-react";

interface CVData {
  name: string;
  title: {
    cz: string;
    en: string;
  };
  about: {
    cz: string;
    en: string;
  };
  services: string[];
  skills: string[];
  softSkills: string[];
  experience: Array<{
    company: string;
    role: string;
    dates: string;
    description: {
      cz: string;
      en: string;
    };
    bullets: {
      cz: string[];
      en: string[];
    };
  }>;
  languages: Array<{
    flag: string;
    name: string;
    level: string;
  }>;
  contacts: {
    email: string;
    phone: string;
    site: string;
    location: string;
  };
}

const cvData: CVData = {
  name: "Elchin Huseynli, Bc.",
  title: {
    cz: "Zakladatel & kreativní ředitel ve Flex Digital Agency",
    en: "Founder & Creative Director at Flex Digital Agency",
  },
  about: {
    cz: "Zakladatel a hlavní designér Flex Digital Agency, kde se kreativita setkává s technologií. Zaměřuji se na moderní webový design, branding a digitální strategii, které pomáhají firmám růst. Více než 10 let zkušeností napříč designem, vývojem a marketingem. Vášnivý pro automatizaci, UX a nové technologie — vytvářím produkty, které vypadají skvěle a fungují bezchybně.",
    en: "Founder and lead designer of Flex Digital Agency, where creativity meets technology. I focus on modern web design, branding, and digital strategy that help companies grow. Over 10 years of experience across design, development, and marketing. Passionate about automation, UX, and new tech — building products that look great and work flawlessly.",
  },
  services: [
    "Webový design", "Webový vývoj", "Branding & vizuální identita", "WordPress vývoj", 
    "Webflow vývoj", "UX/UI design", "Digitální strategie", "SEO optimalizace", 
    "Email & marketingová automatizace", "Grafický design"
  ],
  skills: [
    "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Webflow", "WordPress", 
    "Figma", "API integrace", "Docker", "GitHub", "Cloudflare", "Vite", "Astro"
  ],
  softSkills: [
    "Kreativní myšlení", "Projektové řízení", "Komunikace s klienty", "Týmová spolupráce",
    "Řešení problémů", "Time management", "Adaptabilita", "Detailní orientace",
    "Strategické plánování", "Prezentační dovednosti", "Mentoring", "Cross-cultural komunikace"
  ],
  experience: [
    {
      company: "Czech University of Life Sciences (CZU)",
      role: "Senior Web Developer",
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
      role: "Zakladatel · Kreativní ředitel · Web Developer",
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
      role: "Vedoucí grafik & web designér",
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
      role: "Vedoucí marketingu & rozvoje značky",
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
      role: "Manažer prodeje",
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
      role: "Obchodní zástupce",
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
      role: "Pojišťovací upisovatel",
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
  ],
  languages: [
    { flag: "🇷🇺", name: "Ruština", level: "Rodný nebo bilingvní" },
    { flag: "🇬🇧", name: "Angličtina", level: "Plně profesionální" },
    { flag: "🇨🇿", name: "Čeština", level: "Profesionální pracovní" }
  ],
  contacts: {
    email: "webmaster@flexagency.cz",
    phone: "+420 702 006 220",
    site: "flexagency.cz",
    location: "Karlovy Vary, Česká republika"
  }
};

const CVGenerator: React.FC<{ lang: "cz" | "en" }> = ({ lang }) => {
  const isCzech = lang === "cz";
  
  const services = isCzech ? cvData.services : [
    "Web Design", "Web Development", "Branding & Visual Identity", "WordPress Development",
    "Webflow Development", "UX/UI Design", "Digital Strategy", "SEO Optimization",
    "Email & Marketing Automation", "Graphic Design"
  ];

  const softSkills = isCzech ? cvData.softSkills : [
    "Creative Thinking", "Project Management", "Client Communication", "Team Collaboration",
    "Problem Solving", "Time Management", "Adaptability", "Attention to Detail",
    "Strategic Planning", "Presentation Skills", "Mentoring", "Cross-cultural Communication"
  ];

  const experience = isCzech ? cvData.experience : [
    {
      company: "Czech University of Life Sciences (CZU)",
      role: "Senior Web Developer",
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
      role: "Founder · Creative Director · Web Developer",
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
      role: "Lead Graphic & Web Designer",
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
      role: "Head of Marketing & Brand Development",
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
      role: "Sales Manager",
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
      role: "Sales Representative",
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
      role: "Insurance Underwriter",
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

  const languages = isCzech ? cvData.languages : [
    { flag: "🇷🇺", name: "Russian", level: "Native or Bilingual" },
    { flag: "🇬🇧", name: "English", level: "Full Professional" },
    { flag: "🇨🇿", name: "Czech", level: "Professional Working" }
  ];

  const contactText = isCzech ? {
    about: "O mně",
    services: "Služby",
    skills: "Klíčové dovednosti",
    softSkills: "Měkké dovednosti",
    experience: "Pracovní zkušenosti",
    languages: "Jazyky",
    contact: "Kontakt",
    contactDescription: "Potřebujete designéra‑vývojáře, který propojuje branding a kód? Pojďme si popovídat o vašem webu, e‑shopu nebo potřebách automatizace.",
    printButton: "🖨️ Tisknout/Stáhnout"
  } : {
    about: "About",
    services: "Services",
    skills: "Core Skills",
    softSkills: "Soft Skills",
    experience: "Experience",
    languages: "Languages",
    contact: "Contact",
    contactDescription: "Need a designer‑developer who bridges branding and code? Let's talk about your website, e‑commerce or automation needs.",
    printButton: "🖨️ Print/Download"
  };

  return (
    <div className="cv-container">
      <style>{`
        .cv-container {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 20px;
        }
        .name {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .title {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 15px;
        }
        .contact {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .contact span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
            .experience-item {
              margin-bottom: 20px;
            }
            .experience-item ul {
              list-style-type: disc;
              margin-left: 20px;
              margin-top: 8px;
            }
            .experience-item li {
              margin-bottom: 4px;
            }
        .company {
          font-weight: bold;
          font-size: 1.1rem;
        }
        .role {
          font-style: italic;
          color: #666;
        }
        .dates {
          color: #666;
          font-size: 0.9rem;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          background: #f3f4f6;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          display: inline-block;
        }
        .skill-tag:hover {
          background: #1f2937;
          color: white;
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .languages {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .language {
          font-weight: bold;
        }
        .print-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #1f2937;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          z-index: 1000;
        }
        .print-button:hover {
          background: #374151;
        }
        @media print {
          .cv-container {
            margin: 0;
          }
          .print-button {
            display: none;
          }
        }
      `}</style>
      
      <button className="print-button" onClick={() => window.print()}>
        {contactText.printButton}
      </button>

      <div className="cv-content">
        <div className="header">
          <div className="flex items-center gap-6 mb-4">
            <img 
              src="/elchin photo-cut.png" 
              alt={cvData.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="name">{cvData.name}</div>
              <div className="title">{cvData.title[lang]}</div>
            </div>
          </div>
          <div className="contact">
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" />{cvData.contacts.email}</span>
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" />{cvData.contacts.phone}</span>
            <span className="flex items-center gap-1"><Globe className="h-4 w-4" />{cvData.contacts.site}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{cvData.contacts.location}</span>
          </div>
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            {contactText.about}
          </div>
          <p>{cvData.about[lang]}</p>
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            {contactText.services}
          </div>
          <div className="skills">
            {services.map((service, index) => (
              <span key={index} className="skill-tag">{service}</span>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            {contactText.skills}
          </div>
          <div className="skills">
            {cvData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <PenTool className="h-5 w-5" />
            {contactText.softSkills}
          </div>
          <div className="skills">
            {softSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            {contactText.experience}
          </div>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="company">{exp.company}</div>
              <div className="role">{exp.role}</div>
              <div className="dates">{exp.dates}</div>
              <p className="mb-2 text-base">{exp.description[lang]}</p>
              <ul>
                {exp.bullets[lang].map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Languages className="h-5 w-5" />
            {contactText.languages}
          </div>
          <div className="languages">
            {languages.map((lang, index) => (
              <div key={index}>
                <span className="language">{lang.flag} {lang.name}:</span> {lang.level}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {contactText.contact}
          </div>
          <p>{contactText.contactDescription}</p>
          <p>
            <strong>Email:</strong> {cvData.contacts.email} |
            <strong>Telefon:</strong> {cvData.contacts.phone} |
            <strong>Webové stránky:</strong> {cvData.contacts.site}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVGenerator;
