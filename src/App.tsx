
import LandingPage from "@/pages/LandingPage"
import GrievancePortal from "@/pages/GrievancePortal"
import { useState } from "react"

import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next";
import enTranslation from './locales/en.json';
import tagalogTranslation from './locales/tagalog.json';
import hindiTranslation from './locales/hindi.json';
import mandarinTranslation from './locales/mandarin.json';
import tonganTranslation from './locales/tongan.json';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      tagalog: { translation: tagalogTranslation },
      hindi: { translation: hindiTranslation },
      mandarin: { translation: mandarinTranslation },
      tongan: { translation: tonganTranslation }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  

  const [page, setPage] = useState<"landing" | "form">("landing")


  if (page === "landing") {
    return <LandingPage onSubmitGrievance={() => setPage("form")} />
  } else {
    return <GrievancePortal onSubmitGrievance={() => {}} />
  }

  
}

export default App
