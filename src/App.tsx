import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel, FieldDescription } from "@/components/ui/field"
import NavbarCustom from "@/components/custom/navbarCustom"
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
   const { t, i18n } = useTranslation();

  const [_, setText] = useState("")

  return (
    <>
      <section id="center">
      <NavbarCustom></NavbarCustom>
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FieldLabel className="py-2">{t('chosenLanguage')}</FieldLabel>
          <div className="flex gap-2 pb-4">
          <Button onClick = {() => i18n.changeLanguage('en')}>English</Button>
          <Button onClick= {() => i18n.changeLanguage('tagalog')}>Tagalog</Button>
          <Button onClick= {() => i18n.changeLanguage('hindi')}>हिंदी </Button>
          <Button onClick= {() => i18n.changeLanguage('mandarin')}>普通话</Button>
          <Button onClick= {() => i18n.changeLanguage('tongan')}>lea faka-Tonga</Button>
          </div>

          <FieldLabel>{t('sectionOne.header')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>1. {t('sectionOne.questionOne')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionOne.promptOne')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>2. {t('sectionOne.questionTwo')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>3. {t('sectionOne.questionThree')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>4. {t('sectionOne.questionFour')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionOne.promptFour')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>5. {t('sectionOne.questionFive')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionOne.promptFive')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>6. {t('sectionOne.questionSix')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionOne.promptSix')} />
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


          <FieldLabel>{t('sectionThree.Header')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>10. {t('sectionThree.questionOne')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionThree.promptOne')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>11. {t('sectionThree.questionTwo')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>

          <FieldLabel>{t('sectionFour.Header')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>12. {t('sectionFour.questionOne')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionFour.promptOne')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>13. {t('sectionFour.questionTwo')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>14. {t('sectionFour.questionThree')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionFour.promptThree')} />
          </div>


          <FieldLabel>{t('sectionFive.Header')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>15. {t('sectionFive.questionOne')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>16. {t('sectionFive.questionTwo')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('sectionFive.promptTwo')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>17. {t('sectionFive.questionThree')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>18. {t('sectionFive.questionFour')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>




          <div className="flex">
          <div className="ml-auto pt-2">
            <Button onClick={() => {}}>Submit Form</Button>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
