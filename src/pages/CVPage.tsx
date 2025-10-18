import React from "react";
import { useSearchParams } from "react-router-dom";
import CVGenerator from "../components/CVGenerator";

const CVPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get('lang') as "cz" | "en") || "en";
  
  return <CVGenerator lang={lang} />;
};

export default CVPage;
