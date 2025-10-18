import React from "react";
import { Mail, Phone, MapPin, Globe, Briefcase, Code2, PenTool, Languages, Building2, GraduationCap, Award } from "lucide-react";
import { cvData } from "../data/cvData";

interface CVGeneratorProps {
  lang: "cz" | "en";
}

const CVGenerator: React.FC<CVGeneratorProps> = ({ lang }) => {
  const isCzech = lang === "cz";
  
  // Dynamic text based on language
  const contactText = {
    about: isCzech ? "O mně" : "About",
    services: isCzech ? "Služby" : "Services", 
    skills: isCzech ? "Dovednosti" : "Skills",
    softSkills: isCzech ? "Měkké dovednosti" : "Soft Skills",
    experience: isCzech ? "Praxe" : "Experience",
    education: isCzech ? "Vzdělání" : "Education",
    certifications: isCzech ? "Certifikace" : "Certifications",
    languages: isCzech ? "Jazyky" : "Languages",
  };

  // Dynamic services and skills based on language
  const services = isCzech ? [
    "Webový design", "Webový vývoj", "Branding & vizuální identita", "WordPress vývoj", 
    "Webflow vývoj", "UX/UI design", "Digitální strategie", "SEO optimalizace", 
    "Email & marketingová automatizace", "Grafický design"
  ] : cvData.services;

  const skills = isCzech ? [
    "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Webflow", "WordPress", 
    "Figma", "API integrace", "Docker", "GitHub", "Cloudflare", "Vite", "Astro"
  ] : cvData.skills;

  const softSkills = isCzech ? [
    "Kreativní myšlení", "Projektové řízení", "Komunikace s klienty", "Týmová spolupráce",
    "Řešení problémů", "Strategické plánování", "Kontrola kvality", "Time management",
    "Efektivní komunikace a prezentace", "Kreativní řešení problémů",
    "Detailní orientace a zodpovědnost", "Klientská komunikace a konzultace",
    "Systematické plánování a delivery"
  ] : cvData.softSkills;

  const languages = isCzech ? [
    { flag: "🇷🇺", name: "Ruština", level: "Rodný nebo bilingvní" },
    { flag: "🇬🇧", name: "Angličtina", level: "Plně profesionální" },
    { flag: "🇨🇿", name: "Čeština", level: "Profesionální pracovní" }
  ] : [
    { flag: "🇷🇺", name: "Russian", level: "Native or Bilingual" },
    { flag: "🇬🇧", name: "English", level: "Full Professional" },
    { flag: "🇨🇿", name: "Czech", level: "Professional Working" }
  ];

  return (
    <div className="cv-container">
      <style>{`
        .cv-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: white;
        }
        
        .cv-content {
          background: white;
          padding: 0;
        }
        
        .header {
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 30px;
          margin-bottom: 30px;
        }
        
        .name {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        
        .title {
          font-size: 1.25rem;
          color: #6b7280;
          margin-bottom: 20px;
        }
        
        .contact {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.9rem;
          color: #6b7280;
        }
        
        .contact span {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .section {
          margin-bottom: 30px;
        }
        
        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 8px;
        }
        
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .skill-tag {
          background: #f3f4f6;
          color: #374151;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .skill-tag:hover {
          background: #e5e7eb;
          transform: translateY(-1px);
        }
        
        .experience-item {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f3f4f6;
        }
        
        .experience-item:last-child {
          border-bottom: none;
        }
        
        .company {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
        }
        
        .role {
          font-size: 1rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 4px;
        }
        
        .dates {
          font-size: 0.9rem;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 8px;
        }
        
        .experience-item ul {
          margin: 8px 0;
          padding-left: 0;
        }
        
        .experience-item li {
          margin-bottom: 4px;
          list-style-type: disc;
          margin-left: 20px;
        }
        
        .languages {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .language {
          font-weight: 500;
          color: #374151;
        }
        
        @media print {
          .cv-container {
            padding: 20px;
            max-width: none;
          }
          
          .section {
            break-inside: avoid;
          }
          
          .experience-item {
            break-inside: avoid;
          }
        }
      `}</style>

      <div className="cv-content">
        <div className="header">
          <div className="flex items-center gap-6 mb-4">
            <img 
              src="/elchin photo-cut.png" 
              alt={cvData.profile.name[lang]}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="name">{cvData.profile.name[lang]}</div>
              <div className="title">{cvData.profile.headline[lang]}</div>
            </div>
          </div>
          <div className="contact">
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" />{cvData.profile.contacts.email}</span>
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" />{cvData.profile.contacts.phone}</span>
            <span className="flex items-center gap-1"><Globe className="h-4 w-4" />{cvData.profile.contacts.site}</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{cvData.profile.contacts.address}</span>
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
            <Briefcase className="h-5 w-5" />
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
            {skills.map((skill, index) => (
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
          {cvData.experience.map((exp, index) => (
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
            <GraduationCap className="h-5 w-5" />
            {isCzech ? "Vzdělání" : "Education"}
          </div>
          {cvData.education.map((edu, index) => (
            <div key={index} className="experience-item">
              <div className="company">{edu.institution[lang]}</div>
              <div className="role">{edu.degree[lang]}</div>
              <div className="dates">{edu.dates}</div>
              <div className="text-sm text-muted-foreground">{edu.location}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-title flex items-center gap-2">
            <Award className="h-5 w-5" />
            {isCzech ? "Certifikace" : "Certifications"}
          </div>
          {cvData.certifications.map((cert, index) => (
            <div key={index} className="experience-item">
              <div className="flex items-start gap-3">
                <img 
                  src={cert.badge} 
                  alt={cert.name[lang]} 
                  className="w-12 h-12 rounded-lg object-contain bg-muted/30 p-1"
                />
                <div className="flex-1">
                  <div className="company">{cert.name[lang]}</div>
                  <div className="role">{cert.issuer} · {cert.date}</div>
                  <div className="text-sm text-muted-foreground mb-2">{cert.description[lang]}</div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    {isCzech ? "Zobrazit certifikát" : "View Certificate"}
                  </a>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default CVGenerator;