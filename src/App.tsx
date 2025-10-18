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
  const [lang, setLang] = React.useState<"cz" | "en">("en"); // Default to English
  
  // Auto-detect browser language on mount
  React.useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('cs') || browserLang.startsWith('cz')) {
      setLang('cz');
    } else {
      setLang('en'); // Default to English
    }
  }, []);

  // Load saved preference on mount (overrides auto-detection)
  React.useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === 'cz' || saved === 'en') setLang(saved);
  }, []);
  
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
    location: "Prague, Czech Republic",
    roles: {
      cz: "Senior Web Developer",
      en: "Senior Web Developer",
    },
    dates: "2024 – present",
    bullets: {
      cz: [
        "Vývoj responzivních a přístupných webových aplikací se zaměřením na výkon a bezpečnost.",
        "Návrh a realizace architektury virtualizovaného prostředí; datové modely a aplikační struktura.",
        "Analýza požadavků odborného týmu, wireframy, prototypy, testování UI/UX a iterace.",
        "Příprava vizuální identity projektu (barvy, typografie, ikonografie).",
        "Grafická podpora týmu – prezentační šablony, pozvánky, interní materiály.",
      ],
      en: [
        "Built responsive, accessible web apps with a focus on performance and security.",
        "Designed virtualized architecture, data models and application structure.",
        "Requirements analysis, wireframing & prototyping, UI/UX testing and iteration.",
        "Prepared project visual identity (color, typography, iconography).",
        "Provided graphic support – presentation templates, invitations and internal assets.",
      ],
    },
  },
  {
    company: "Flex Digital Agency s.r.o.",
    location: "Karlovy Vary, Czech Republic",
    roles: {
      cz: "Zakladatel · Kreativní ředitel · Webový vývojář",
      en: "Founder · Creative Director · Web Developer",
    },
    dates: "2020 – present",
    bullets: {
      cz: [
        "Kompletní řízení a rozvoj agentury; strategie, finance a projektové plánování.",
        "Tvorba moderních webů a e‑shopů (WordPress, Webflow, Next.js); vlastní moduly, integrace a animace (GSAP).",
        "Vizuální identity, logotypy a brand manuály pro CZ i zahraniční klienty (real estate, hospitality, veřejný sektor).",
        "Automatizace procesů a integrace (Monday.com → Mailchimp, webhooky, CRM napojení).",
        "Správa infrastruktury (VPS, Docker, Coolify, Cloudflare) a dlouhodobá údržba, bezpečnost a výkon.",
        "Koordinace týmu (design, vývoj, copy) a end‑to‑end komunikace s klienty (analýzy, nabídky, prezentace).",
        "Digitální marketingové strategie (SEO, PPC, sociální sítě, analytika).",
      ],
      en: [
        "Agency leadership across strategy, finance and project planning.",
        "End‑to‑end websites & e‑commerce (WordPress, Webflow, Next.js); custom modules, integrations, GSAP animations.",
        "Brand identities, logos and design systems for local & international clients (real estate, hospitality, public sector).",
        "Workflow automation & integrations (Monday.com → Mailchimp, webhooks, CRM).",
        "Infrastructure (VPS, Docker, Coolify, Cloudflare); long‑term maintenance, security & performance.",
        "Team coordination (design, dev, copy) and client communications (discovery, proposals, presentations).",
        "Digital marketing strategies (SEO, PPC, social, analytics).",
      ],
    },
  },
  {
    company: "SUAS Group a.s.",
    location: "Sokolov, Czech Republic",
    roles: {
      cz: "Vedoucí grafického a webového designu",
      en: "Lead Graphic & Web Designer",
    },
    dates: "2021 – 2024",
    bullets: {
      cz: [
        "Nové CI pro dceřiné společnosti; komplexní tiskové a digitální materiály (billboardy, katalogy, časopisy).",
        "Vývoj responzivních webů (Webflow, WordPress, HTML/CSS/JS, PHP) s interaktivními prvky a animacemi.",
        "Cross‑browser kompatibilita, optimalizace výkonu a bezpečnosti; integrace třetích stran API (mapy, formuláře, dynamická data).",
        "Technická podpora, správa obsahu a spolupráce na marketingové/komunikační strategii skupiny.",
      ],
      en: [
        "New corporate identities for subsidiaries; full range of print & digital assets (billboards, catalogues, magazines).",
        "Responsive websites (Webflow, WordPress, HTML/CSS/JS, PHP) with interactive features and animations.",
        "Cross‑browser compatibility, performance & security optimization; 3rd‑party API integrations (maps, forms, dynamic data).",
        "Technical support, content ops and contribution to group marketing/communication strategy.",
      ],
    },
  },
  {
    company: "Art de Suisse s.r.o.",
    location: "Karlovy Vary, Czech Republic",
    roles: {
      cz: "Head of Marketing & Brand Development",
      en: "Head of Marketing & Brand Development",
    },
    dates: "2014 – 2021",
    bullets: {
      cz: [
        "Vedení marketingu pro luxusní hodinky a šperky; eventy, VIP prezentace a mezinárodní spolupráce (CH/FR/DE/UK/IT).",
        "Reklamní kampaně (digitál + OOH) v souladu s image značek; rozpočty a vyhodnocování výkonu (ROI).",
        "Zodpovědnost za vizuální styl: grafický design, produktová fotografie a finální tisk/produkce.",
      ],
      en: [
        "Led marketing for luxury watches & jewelry; events, VIP presentations and international partnerships (CH/FR/DE/UK/IT).",
        "Digital & OOH campaigns aligned with luxury brand guidelines; budget ownership and ROI analysis.",
        "Owned the visual style: graphic design, product photography and final print/production.",
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
    "Git": "/logos/git.png",
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
  "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Webflow", "WordPress", "Figma", "API Integrations", "Docker", "Git", "Cloudflare", "Vite", "Astro",
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
  location: string;
  roles: { cz: string; en: string };
  dates: string;
  bullets: { cz: string[]; en: string[] };
  lang: "cz" | "en";
}> = ({ company, location, roles, dates, bullets, lang }) => (
  <Card className="border-muted/40">
    <CardHeader>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <div>
          <CardTitle className="text-lg">{company}</CardTitle>
          <CardDescription className="flex items-center gap-2 mt-1 text-sm"><Building2 className="h-4 w-4" />{location}</CardDescription>
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

// --- FEATURED PROJECTS -------------------------------------------------------
const featuredProjects = [
  { title: "Bieneberg – Web pro poskytovatele topenářských a instalatérských služeb", category: "Technické služby", link: "https://flexagency.cz/work/bieneberg-web-pro-poskytovatele-topenarskych-a-instalaterskych-sluzeb/", image: "/projects/bieneberg.jpg", blurb: "Kompletní digitální prezentace – logotyp, identita a prezentační web." },
  { title: "Císařské lázně – Nový web pro kulturní a návštěvní prostor", category: "Veřejný sektor", link: "https://flexagency.cz/work/cisarske-lazne-novy-web-pro-kulturni-a-navstevni-prostor-v-karlovych-varech/", image: "/projects/cisarske-lazne.jpg", blurb: "Informačně bohatý web reflektující novou identitu objektu." },
  { title: "Carlsbad Reality – Modernizace webu pro developera", category: "Real Estate", link: "https://flexagency.cz/work/carlsbad-reality-modernizace-webu-pro-realitni-developera/", image: "/projects/carlsbad-reality.jpg", blurb: "Moderní web s filtrem a mapovými cenami." },
  { title: "Institut lázeňství a balneologie – Redesign", category: "Výzkum", link: "https://flexagency.cz/work/institut-lazenstvi-a-balneologie-redesign-webu-pro-verejnou-vyzkumnou-instituci/", image: "/projects/i-lab.jpg", blurb: "Vícejazyčný web pro veřejnou instituci." },
  { title: "JASLEIN s.r.o. – Identita a web", category: "Doprava", link: "https://flexagency.cz/work/jaslein-s-r-o-kompletni-vizualni-identita-a-prezentacni-web-pro-dopravni-spolecnost/", image: "/projects/jaslein.jpg", blurb: "Logo, identita a prezentační web s náborem." },
  { title: "Sansei Royal Thai Massage – Nový web", category: "Wellness", link: "https://flexagency.cz/work/sansei-royal-thai-massage-novy-web-pro-thajsky-masazni-salon/", image: "/projects/sansei.jpg", blurb: "Elegantní a funkční web pro prémiové služby." },
  { title: "Pohyb jsou lázně – EMS 2025", category: "Veřejný sektor", link: "https://flexagency.cz/work/web-pohyb-jsou-lazne/", image: "/projects/pohyb-jsou-lazne.jpg", blurb: "Dynamický landing page pro město Karlovy Vary." },
  { title: "Villa Julius – Web a identita", category: "Hospitality", link: "https://flexagency.cz/work/webove-stranky-a-vizualni-identita-pro-villa-julius/", image: "/projects/villa-julius.jpg", blurb: "Kompletní vizuální identita a vícejazyčný web." },
  { title: "Karlovarská sůl – Nový vizuální styl a web", category: "FMCG", link: "https://flexagency.cz/work/karlovarska-sul-novy-vizualni-styl-a-web-pro-tradicni-cesky-produkt/", image: "/projects/karlovarska-sul.jpg", blurb: "Rebranding tradiční značky a nový web." },
  { title: "Art de Suisse – Online katalog butiků", category: "Luxury Retail", link: "https://flexagency.cz/work/art-de-suisse-katalog-pro-sit-butiku-luxusnich-hodinek-a-sperku/", image: "/projects/art-de-suisse.jpg", blurb: "Online katalog pro prémiový retail." },
];

const categories = ["All", "Real Estate", "Luxury Retail", "Wellness", "Hospitality", "Veřejný sektor", "Výzkum", "Doprava", "FMCG", "Technické služby"] as const;

type Category = typeof categories[number];

const FeaturedGrid: React.FC<{ lang: "cz" | "en" }> = ({ lang }) => {
  const [active, setActive] = React.useState<Category>("All");
  const filtered = active === "All" ? featuredProjects : featuredProjects.filter(p => p.category === active);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <GalleryVerticalEnd className="h-4 w-4"/>
        {categories.map((c) => (
          <Button key={c} size="sm" variant={active === c ? "default" : "secondary"} onClick={() => setActive(c as Category)} className="rounded-2xl">
            {c}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Card key={p.title} className="group overflow-hidden border-muted/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
            <div className="aspect-[16/10] bg-muted/30 overflow-hidden relative">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-wide group-hover:text-primary transition-colors duration-200">{p.category}</CardDescription>
              <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors duration-200">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{p.blurb}</p>
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
              <TabsTrigger value="cz">🇨🇿 CZ</TabsTrigger>
              <TabsTrigger value="en">🇬🇧 EN</TabsTrigger>
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
