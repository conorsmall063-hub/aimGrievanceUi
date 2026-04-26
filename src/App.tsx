import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel, FieldDescription } from "@/components/ui/field"
import LandingPage from "@/pages/LandingPage"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next";
import enTranslation from './locales/en.json';
import tagalogTranslation from './locales/tagalog.json';
import hindiTranslation from './locales/hindi.json';
import mandarinTranslation from './locales/mandarin.json';
import tonganTranslation from './locales/tongan.json';
import type { Question, Survey } from "./form"

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
   const { t, i18n } = useTranslation();

  const [page, setPage] = useState<"landing" | "form">("landing")
  const [_, setText] = useState("")

  if (page === "landing") {
    return <LandingPage onSubmitGrievance={() => setPage("form")} />
  }

  const survey: Survey = {
    sections:[
      {
        title: t('sectionOne.header'),
        fields:[
          {
            type: "text",
            id: 'questionOne',
            question: t('sectionOne.questionOne'),
            value: 'string',
            prompt: t('sectionOne.promptOne')
          },
          {
            type: "text",
            id: 'questionOne',
            question: t('sectionOne.questionTwo'),
            value: 'string',
            prompt: ''
          },
          {
            type: "text",
            id: 'questionOne',
            question: t('sectionOne.questionThree'),
            value: 'string',
            prompt: ''
          },
          {
            type: "text",
            id: 'questionOne',
            question: t('sectionOne.questionFour'),
            value: 'string',
            prompt: t('sectionOne.promptFour'),
          },
          {
            type: "text",
            id: 'questionOne',
            question: t('sectionOne.questionFive'),
            value: 'string',
            prompt: t('sectionOne.promptFive'),
          },
          {
            type: "text",
            id: 'questionOne',
            question: t('sectionOne.questionSix'),
            value: 'string',
            prompt: t('sectionOne.promptSix'),
          },
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Branded header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-3 px-4 sm:px-6">
          <button
            onClick={() => setPage("landing")}
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
            Back
          </button>
          <span className="text-border">|</span>
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">AIM</span>
          <span className="text-xs text-muted-foreground">Grievance Portal</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">

        {/* Language selector card */}
        <div className="mb-6 rounded-xl border border-border bg-card p-4">
          <FieldLabel className="mb-3 block">{t('chosenLanguage')}</FieldLabel>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={() => i18n.changeLanguage('en')}>English</Button>
            <Button size="sm" variant="outline" onClick={() => i18n.changeLanguage('tagalog')}>Tagalog</Button>
            <Button size="sm" variant="outline" onClick={() => i18n.changeLanguage('hindi')}>हिंदी</Button>
            <Button size="sm" variant="outline" onClick={() => i18n.changeLanguage('mandarin')}>普通话</Button>
            <Button size="sm" variant="outline" onClick={() => i18n.changeLanguage('tongan')}>lea faka-Tonga</Button>
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-xl border border-border bg-card p-6">

          {survey.sections.map((section, id) => (
            <section key={id} className="mb-8">
              <div className="mb-4 border-l-4 border-primary pl-3">
                <FieldLabel>{section.title}</FieldLabel>
              </div>
              {section.fields.map((question: Question, key) => (
                <div key={key} className="mb-4 grid w-full gap-2">
                  <FieldDescription>{key + 1}. {question.question}</FieldDescription>
                  {"prompt" in question &&
                    <Textarea
                      onChange={text => setText(text.target.value)}
                      placeholder={question.prompt ? question.prompt : ''}
                    />
                  }
                </div>
              ))}
            </section>
          ))}

          <section className="mb-8">
            <div className="mb-4 border-l-4 border-primary pl-3">
              <FieldLabel>{t('sectionTwo.Header')}</FieldLabel>
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>7. {t('sectionTwo.questionOne')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} placeholder={t('sectionTwo.promptOne')} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>8. {t('sectionTwo.questionTwo')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>9. {t('sectionTwo.questionThree')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} placeholder={t('sectionTwo.promptThree')} />
            </div>
          </section>

          <section className="mb-8">
            <div className="mb-4 border-l-4 border-primary pl-3">
              <FieldLabel>{t('sectionThree.Header')}</FieldLabel>
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>10. {t('sectionThree.questionOne')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} placeholder={t('sectionThree.promptOne')} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>11. {t('sectionThree.questionTwo')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} />
            </div>
          </section>

          <section className="mb-8">
            <div className="mb-4 border-l-4 border-primary pl-3">
              <FieldLabel>{t('sectionFour.Header')}</FieldLabel>
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>12. {t('sectionFour.questionOne')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} placeholder={t('sectionFour.promptOne')} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>13. {t('sectionFour.questionTwo')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>14. {t('sectionFour.questionThree')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} placeholder={t('sectionFour.promptThree')} />
            </div>
          </section>

          <section className="mb-6">
            <div className="mb-4 border-l-4 border-primary pl-3">
              <FieldLabel>{t('sectionFive.Header')}</FieldLabel>
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>15. {t('sectionFive.questionOne')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>16. {t('sectionFive.questionTwo')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} placeholder={t('sectionFive.promptTwo')} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>17. {t('sectionFive.questionThree')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} />
            </div>
            <div className="mb-4 grid w-full gap-2">
              <FieldDescription>18. {t('sectionFive.questionFour')}</FieldDescription>
              <Textarea onChange={text => setText(text.target.value)} />
            </div>
          </section>

          <div className="flex justify-end border-t border-border pt-4">
            <Button onClick={() => {}}>Submit Form</Button>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
