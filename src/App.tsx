import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FieldLabel, FieldDescription } from "@/components/ui/field"
import { useState } from "react"

function App() {

  const [_, setText] = useState("")

  return (
    <>
      <section id="center">
   <div className="grid w-full gap-2">
    <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea 
        onChange={text => setText(text.target.value) }
        placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
      </section>
    </>
  )
}

export default App
