import { Button } from "@/components/ui/button"
import { FieldLabel } from "@/components/ui/field"
import { useState } from "react"
import type { TextQuestion } from "@/form"
import { useTranslation } from "react-i18next"
import { createGrievanceSurvey } from "@/data/grievanceSurvey"
import { TextQuestion as TextQuestionComponent } from "@/components/features/TextQuestion"
import { SiteHeader } from "@/components/features/SiteHeader"

const GrievancePortal = () => {
  const [_, setText] = useState("")
  const { t } = useTranslation()
  const survey = createGrievanceSurvey(t)
  let questionNumber = 1

  return (
    <div className="min-h-screen bg-background">

      <SiteHeader showBackButton title="AIM" subtitle="Grievance Portal" />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">


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