import React from "react";
import { useSearchParams } from "react-router-dom";
import CVGenerator from "../components/CVGenerator";

// Import the shared data from App.tsx
// We'll need to export this from App.tsx
const CVPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get('lang') as "cz" | "en") || "en";
  
  return <CVGenerator lang={lang} />;
};

export default CVPage;
