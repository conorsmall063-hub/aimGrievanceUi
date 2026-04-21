import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel, FieldDescription } from "@/components/ui/field"
import NavbarCustom from "@/components/custom/navbarCustom"
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
          nine: 'Are there any children involved?',
          ten: '(Yes / No / Not sure - add details if known)',

          section2: ' Who Is Affected?',
          one2: 'Who is being exploited?',
          two2: '(e.g. yourself, someone you know, a group)',
          three2: 'How many people are experiencing this?',
          four2: 'How do you know about this situation?',
          five2: '(e.g. I saw it, I heard it, someone told me, I experienced it)',

          section3: 'Who’s Responsible',
          one3: 'Do you know who is responsible?',
          two3: '(e.g. name of employer, agent, landlord — include any details you know)',
          three3: 'What is the name of the business or organisation involved (if any)?',

          section4: 'Where and When',
          one4: 'Where is this happening?',
          two4: '(Address, city or region if known)',
          three4: 'what kind of work is involved',
          four4: 'When did this occur, and is it still happening?',
          five4: '(Ongoing / Happened in the past)',

          section5: 'Additional Info (Optional but Helpful)',
          one5: 'Who else might know about this?',
          two5: 'Has this been reported before?',
          three5: '(Yes / No / Not sure -  if yes, to who?)',
          four5: 'Would you like to upload any supporting files or photos?',
          five5: 'Is there anything else we should know to help us understand or respond to this situation?',

          section6: 'Privacy and Consent',
          one6: 'Do you wish to remain anonymous?',
          two6: '(Yes / No — We won’t collect any contact information unless you choose to share it. Providing contact details is optional, but it can help us get in touch to better understand your situation or connect you with support.)',
          three6: 'CAPTCHA / Bot Check',
          four6: '(Standard reCAPTCHA)',
        
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
      <NavbarCustom></NavbarCustom>
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
              onChange={text => setText(text.target.value) }
              placeholder={t('ten')} />
          </div>

          <FieldLabel>{t('section2')}</FieldLabel>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>7. {t('one2')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('two2')} />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>8. {t('three2')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) } />
          </div>
          <div className="grid w-full gap-2 py-2">
            <FieldDescription>9. {t('four2')}</FieldDescription>
            <Textarea 
              onChange={text => setText(text.target.value) }
              placeholder={t('five2')} />
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
