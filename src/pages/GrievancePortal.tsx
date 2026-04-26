import { Button } from "@/components/ui/button"
import { FieldLabel } from "@/components/ui/field"
import { useState } from "react"
import type { TextQuestion } from "@/form"
import { useTranslation } from "react-i18next"
import { createGrievanceSurvey } from "@/data/grievanceSurvey"
import { TextQuestion as TextQuestionComponent } from "@/components/features/TextQuestion"

type greivencePortalProps = {
  onSubmitGrievance?: () => void
}

const GrievancePortal = ({ onSubmitGrievance }: greivencePortalProps) => {
  const [_, setText] = useState("")
  const { t, i18n } = useTranslation()
  const survey = createGrievanceSurvey(t)
  let questionNumber = 1

  return (
    <div className="min-h-screen bg-background">

      {/* Branded header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-3 px-4 sm:px-6">
          {/* <button
            onClick={() => setPage("landing")}
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          > */}
            {/* <ChevronLeft className="size-4" />
            Back
          </button> */}
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

          {survey.sections.map((section, sectionId) => (
            <section key={sectionId} className="mb-8">
              <div className="mb-4 border-l-4 border-primary pl-3">
                <FieldLabel>{section.title}</FieldLabel>
              </div>
              {section.fields.map((field) => {
                const currentNumber = questionNumber
                questionNumber++
                return (
                  field.type === 'text' && (
                    <TextQuestionComponent
                      key={field.id}
                      question={field as TextQuestion}
                      questionNumber={currentNumber}
                      onChange={(value) => setText(value)}
                    />
                  )
                )
              })}
            </section>
          ))}

          <div className="flex justify-end border-t border-border pt-4">
            <Button onClick={() => {}}>Submit Form</Button>
          </div>
        </div>

      </main>
    </div>
  )
}

export default GrievancePortal