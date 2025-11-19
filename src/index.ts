import 'dotenv/config'

import { runLLM } from './llm'
import { runAgent } from './agent'
import { addMessages, getMessages } from './memory'
import z from 'zod'

// Get user message from command line argument e.g npm start "Hello"
const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

async function main() {
  const weatherTool = {
    name: 'get_weather',
    description: `use this to get the weather.`,
    parameters: z.object({
      reasoning: z.string().describe('why did you pick this tool?'),
    }),
  }

  const response = await runAgent({ userMessage, tools: [weatherTool] })
  console.log(response)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
