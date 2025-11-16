import 'dotenv/config'

import { runLLM } from './llm'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

async function main() {
  const response = await runLLM({
    messages: [{ role: 'user', content: userMessage }],
  })

  console.log(response)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
