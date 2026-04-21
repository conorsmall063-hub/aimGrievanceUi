import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel, FieldDescription } from "@/components/ui/field"
import NavbarCustom from "@/components/custom/navbarCustom"
import { useState } from "react"
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next";

import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
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
      <NavbarCustom></NavbarCustom>
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FieldDescription>{t('chosenLanguage')}</FieldDescription>
          <div className="flex gap-2 pb-4">
          <Button onClick = {() => i18n.changeLanguage('en')}>English</Button>
          <Button onClick= {() => i18n.changeLanguage('ta')}>Tagalog</Button>
          <Button onClick= {() => i18n.changeLanguage('ta')}>हिंदी </Button>
          <Button onClick= {() => i18n.changeLanguage('ta')}>普通话</Button>
          <Button onClick= {() => i18n.changeLanguage('ta')}>lea faka-Tonga</Button>
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
              onChange={text => setText(text.target.value) }
              placeholder={t('ten')} />
          </div>

          <FieldLabel>{t('sectionTwo.Header')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>7. {t('sectionTwo.questionOne')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionTwo.promptOne')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>8. {t('sectionTwo.questionTwo')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>9. {t('sectionTwo.questionThree')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionTwo.promptThree')} />
          </div>


          <FieldLabel>{t('section3')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>10. {t('one3')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('two3')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>11. {t('three3')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>

          <FieldLabel>{t('section4')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>12. {t('one4')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('two4')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>13. {t('three4')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>14. {t('four4')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('five4')} />
          </div>


          <FieldLabel>{t('section5')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>15. {t('one5')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>16. {t('two5')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('three5')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>17. {t('four5')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>18. {t('five5')}</FieldDescription>
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
