import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel, FieldDescription } from "@/components/ui/field"
import { useState } from "react"
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          chosenLanguage: 'Which is your prefered language?',
          one: 'What would you like to report?',
          two: '(Multi-select: Wage Theft, Excessive Work Hours, etc.)',
          three: 'Please describe what is happening.',
          four: 'What is different to what you were expecting?',
          five: 'Has anyone taken your passport, threatened you, or stopped you from leaving your job?',
          six: '(Examples: They keep your documents, don’t pay you, or scare you into staying)',
          seven: 'Are you, or someone else, being forced to live in unsafe or overcrowded housing?',
          eight: '(Yes / No / Not sure - add details if known)',
          nine: 'Are there any children involved?'


//           Who Is Affected?
// Who is being exploited?
// (e.g. yourself, someone you know, a group)
// How many people are experiencing this?
// How do you know about this situation?
// (e.g. I saw it, I heard it, someone told me, I experienced it)

// Who’s Responsible
// Do you know who is responsible?
// (e.g. name of employer, agent, landlord — include any details you know)
// What is the name of the business or organisation involved (if any)?
// (Text field)

// Where and When
// Where is this happening?
// (Address, city or region if known)
        
        },
        
      },
      fr: {
        translation: {
          key: 'hello from french 1'
        },
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
   const { t, i18n } = useTranslation();

  const [_, setText] = useState("")

  return (
    <>
      <section id="center">
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FieldDescription>{t('chosenLanguage')}</FieldDescription>
          <div className="flex gap-2 pb-4">
          <Button onClick = {() => i18n.changeLanguage('en')}>English</Button>
          <Button onClick= {() => i18n.changeLanguage('ta')}>Tagalog</Button>
          <Button onClick= {() => i18n.changeLanguage('hi')}>हिंदी </Button>
          <Button onClick= {() => i18n.changeLanguage('ma')}>普通话</Button>
          <Button onClick= {() => i18n.changeLanguage('to')}>lea faka-Tonga</Button>
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>1. {t('one')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('two')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>2. {t('three')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('four')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>3. {t('four')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>4. {t('five')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('six')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>5. {t('seven')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('eight')} />
          </div>

          <div className="grid w-full gap-2 py-2">
            <FieldDescription>6. {t('nine')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>

          <div className="flex">
          <div className="ml-auto pt-2">
            <Button>Submit Form</Button>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
