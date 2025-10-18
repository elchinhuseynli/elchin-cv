import React from "react";
import { Mail, Phone, MapPin, Globe, Linkedin, Download, Briefcase, Code2, PenTool, Rocket, Languages, Building2 } from "lucide-react";

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
    description: string[];
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
      company: "Česká zemědělská univerzita v Praze (ČZU)",
      role: "Senior Web Developer",
      dates: "2024 – současnost",
      description: [
        "Vytváření responzivních, přístupných webových aplikací s důrazem na výkonnost a bezpečnost.",
        "Navrhování virtualizované architektury, datových modelů a struktury aplikace.",
        "Analýza požadavků, wireframing & prototypování, UI/UX testování a iterace.",
        "Příprava vizuální identity projektu (barvy, typografie, ikonografie).",
        "Poskytování grafické podpory – šablony prezentací, pozvánky a interní materiály."
      ]
    },
    {
      company: "Flex Digital Agency s.r.o.",
      role: "Zakladatel · Kreativní ředitel · Web Developer",
      dates: "2020 – současnost",
      description: [
        "Vedení agentury napříč strategií, financemi a plánováním projektů.",
        "Kompletní weby & e‑commerce (WordPress, Webflow, Next.js); vlastní moduly, integrace, GSAP animace.",
        "Brandové identity, loga a designové systémy pro lokální i mezinárodní klienty (realitní sektor, pohostinství, veřejný sektor).",
        "Automatizace workflow & integrace (Monday.com → Mailchimp, webhooks, CRM).",
        "Infrastruktura (VPS, Docker, Coolify, Cloudflare); dlouhodobá údržba, bezpečnost & výkonnost.",
        "Koordinace týmu (design, vývoj, copy) a komunikace s klienty (objevování, návrhy, prezentace).",
        "Digitální marketingové strategie (SEO, PPC, sociální sítě, analytika)."
      ]
    },
    {
      company: "SUAS Group a.s.",
      role: "Vedoucí grafik & web designér",
      dates: "2021 – 2024",
      description: [
        "Nové korporátní identity pro dceřiné společnosti; kompletní škála tiskových & digitálních materiálů (billboardy, katalogy, časopisy).",
        "Responzivní weby (Webflow, WordPress, HTML/CSS/JS, PHP) s interaktivními funkcemi a animacemi.",
        "Kompatibilita napříč prohlížeči, optimalizace výkonnosti & bezpečnosti; integrace třetích stran API (mapy, formuláře, dynamická data).",
        "Technická podpora, správa obsahu a přispívání ke skupinové marketingové/komunikační strategii."
      ]
    },
    {
      company: "Art de Suisse s.r.o.",
      role: "Vedoucí marketingu & rozvoje značky",
      dates: "2014 – 2021",
      description: [
        "Vedení marketingu pro luxusní hodinky & šperky; akce, VIP prezentace a mezinárodní partnerství (CH/FR/DE/UK/IT).",
        "Digitální & OOH kampaně v souladu s luxusními brandovými směrnicemi; vlastnictví rozpočtu a analýza ROI.",
        "Vlastnictví vizuálního stylu: grafický design, produktová fotografie a finální tisk/produkce."
      ]
    },
    {
      company: "AZSIĞORTA ASC",
      role: "Manažer prodeje",
      dates: "2009 – 2010",
      description: [
        "Rozvoj prodejních strategií a správa vztahů s klienty na ázerbájdžánském trhu.",
        "Analýza trhu a identifikace nových obchodních příležitostí.",
        "Koordinace prodejního týmu a dosahování stanovených cílů."
      ]
    },
    {
      company: "AXA MBASK OJSC",
      role: "Obchodní zástupce",
      dates: "2008 – 2009",
      description: [
        "Získávání nových klientů a správa stávajících vztahů na pojišťovacím trhu.",
        "Prezentace pojišťovacích produktů a služeb potenciálním klientům.",
        "Plnění prodejních kvót a dosahování stanovených cílů."
      ]
    },
    {
      company: "Ateshgah Insurance Group",
      role: "Pojišťovací upisovatel",
      dates: "2006 – 2008",
      description: [
        "Hodnocení a posuzování pojišťovacích rizik pro různé typy pojistných smluv.",
        "Stanovování pojistných podmínek a sazeb na základě analýzy rizik.",
        "Spolupráce s pojišťovacími makléři a klienty při sjednávání pojistných smluv."
      ]
    }
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
      description: [
        "Built responsive, accessible web apps with a focus on performance and security.",
        "Designed virtualized architecture, data models and application structure.",
        "Requirements analysis, wireframing & prototyping, UI/UX testing and iteration.",
        "Prepared project visual identity (color, typography, iconography).",
        "Provided graphic support – presentation templates, invitations and internal assets."
      ]
    },
    {
      company: "Flex Digital Agency s.r.o.",
      role: "Founder · Creative Director · Web Developer",
      dates: "2020 – present",
      description: [
        "Agency leadership across strategy, finance and project planning.",
        "End‑to‑end websites & e‑commerce (WordPress, Webflow, Next.js); custom modules, integrations, GSAP animations.",
        "Brand identities, logos and design systems for local & international clients (real estate, hospitality, public sector).",
        "Workflow automation & integrations (Monday.com → Mailchimp, webhooks, CRM).",
        "Infrastructure (VPS, Docker, Coolify, Cloudflare); long‑term maintenance, security & performance.",
        "Team coordination (design, dev, copy) and client communications (discovery, proposals, presentations).",
        "Digital marketing strategies (SEO, PPC, social, analytics)."
      ]
    },
    {
      company: "SUAS Group a.s.",
      role: "Lead Graphic & Web Designer",
      dates: "2021 – 2024",
      description: [
        "New corporate identities for subsidiaries; full range of print & digital assets (billboards, catalogues, magazines).",
        "Responsive websites (Webflow, WordPress, HTML/CSS/JS, PHP) with interactive features and animations.",
        "Cross‑browser compatibility, performance & security optimization; 3rd‑party API integrations (maps, forms, dynamic data).",
        "Technical support, content ops and contribution to group marketing/communication strategy."
      ]
    },
    {
      company: "Art de Suisse s.r.o.",
      role: "Head of Marketing & Brand Development",
      dates: "2014 – 2021",
      description: [
        "Led marketing for luxury watches & jewelry; events, VIP presentations and international partnerships (CH/FR/DE/UK/IT).",
        "Digital & OOH campaigns aligned with luxury brand guidelines; budget ownership and ROI analysis.",
        "Owned the visual style: graphic design, product photography and final print/production."
      ]
    },
    {
      company: "AZSIĞORTA ASC",
      role: "Sales Manager",
      dates: "2009 – 2010",
      description: [
        "Developed sales strategies and managed client relationships in the Azerbaijani market.",
        "Market analysis and identification of new business opportunities.",
        "Sales team coordination and achievement of set targets."
      ]
    },
    {
      company: "AXA MBASK OJSC",
      role: "Sales Representative",
      dates: "2008 – 2009",
      description: [
        "Client acquisition and relationship management in the insurance market.",
        "Presentation of insurance products and services to potential clients.",
        "Meeting sales quotas and achieving set targets."
      ]
    },
    {
      company: "Ateshgah Insurance Group",
      role: "Insurance Underwriter",
      dates: "2006 – 2008",
      description: [
        "Evaluated and assessed insurance risks for various types of insurance policies.",
        "Determined policy terms and rates based on risk analysis.",
        "Collaborated with insurance brokers and clients in policy negotiations."
      ]
    }
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
          <div className="name">{cvData.name}</div>
          <div className="title">{cvData.title[lang]}</div>
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
              <ul>
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
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
