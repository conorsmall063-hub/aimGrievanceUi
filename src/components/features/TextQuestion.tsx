import { Textarea } from "@/components/ui/textarea"
import { FieldDescription } from "@/components/ui/field"
import type { TextQuestion as TextQuestionType } from "@/form"

type TextQuestionProps = {
  question: TextQuestionType
  questionNumber: number
  onChange?: (value: string) => void
}

export const TextQuestion = ({ question, questionNumber, onChange }: TextQuestionProps) => {
  return (
    <div className="mb-4 grid w-full gap-2">
      <FieldDescription>{questionNumber}. {question.question}</FieldDescription>
      <Textarea
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={question.prompt}
      />
    </div>
  )
}
