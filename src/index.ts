import 'dotenv/config'

import { runLLM } from './llm'
import { getMessages } from './memory'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

async function main() {
  // Get the History from memory (not implemented in this snippet)
  const messages = await getMessages()

  const response = await runLLM({
    messages: [...messages, { role: 'user', content: userMessage }],
  })

  console.log(response)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
