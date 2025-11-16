import 'dotenv/config'

import { runLLM } from './llm'
import { addMessages, getMessages } from './memory'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

async function main() {
  // Append the user message to memory
  await addMessages([{ role: 'user', content: userMessage }])

  // Get the History from memory (not implemented in this snippet)
  const messages = await getMessages()

  const response = await runLLM({
    messages,
  })

  // Output the response
  await addMessages([{ role: 'assistant', content: response.content }])
  console.log(response)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
