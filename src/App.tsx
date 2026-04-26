import { Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "@/pages/LandingPage"
import GrievancePortal from "@/pages/GrievancePortal"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from './locales/en.json'
import tagalogTranslation from './locales/tagalog.json'
import hindiTranslation from './locales/hindi.json'
import mandarinTranslation from './locales/mandarin.json'
import tonganTranslation from './locales/tongan.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      tagalog: { translation: tagalogTranslation },
      hindi: { translation: hindiTranslation },
      mandarin: { translation: mandarinTranslation },
      tongan: { translation: tonganTranslation }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  })

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/form" element={<GrievancePortal />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
