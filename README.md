## Two types of Agents

1. **Conversational Agents**: These agents are designed to interact with users in a natural language format. They can understand and respond to user queries, provide information, and assist with various tasks through conversation.

1. **Transactional Agents**: These agents are focused on completing specific tasks or transactions. They can perform actions such as booking appointments, processing orders, or managing schedules based on user inputs.

### Differences b/w Agent vs Assistant

Not all agents are assistants, but all assistants can be considered agents. Here are some key differences:

- **Functionality**: Assistants are typically designed to help users with a wide range of tasks through conversation, while agents may have more specialized functions focused on specific tasks or transactions.
- **Interaction**: Assistants often engage in ongoing dialogues with users, whereas agents may operate in a more task-oriented manner, completing specific actions without extensive interaction.
- **Complexity**: Agents may have more complex capabilities, such as integrating with external systems or performing multi-step processes, while assistants may be more straightforward in their interactions.
- **Tool Access**: Some agents have access to various tools and can perform actions autonomously, while assistants may rely more on user input and guidance.
- **Looping Capability**: Agents can often run on a loop, continuously processing information and making decisions, whereas assistants may operate in a more linear fashion based on user prompts.
- **Memory**: Assistants may have memory capabilities to retain context over a conversation, while agents may not always have this feature.
- **Use Cases**: Assistants are often used for general support and information retrieval, while agents may be employed for specific applications like customer service, automation, or data processing.
- **Examples**: Examples of assistants include virtual personal assistants like Siri or Alexa, while examples of agents include chatbots designed for customer service or automated systems for managing workflows.
- **User Experience**: The user experience with assistants is often more conversational and user-friendly, while agents may focus more on efficiency and task completion.
- **Adaptability**: Assistants may adapt to user preferences and behaviors over time, while agents may be more rigid in their operations based on predefined rules or algorithms.
- **Integration**: Agents may be integrated into larger systems or platforms to perform specific functions, while assistants may operate as standalone applications or services.
- **Autonomy**: Agents may have a higher degree of autonomy in decision-making and action-taking, while assistants may require more user input and direction.
- **Context Awareness**: Assistants may be more context-aware, understanding the nuances of user interactions, while agents may focus on specific tasks without broader context.
- **Customization**: Assistants may offer more customization options for users to tailor their experience, while agents may have fixed functionalities based on their design.


## 1. What is an LLM?

### Basic Definition

- A Large Language Model is a deep learning model trained on vast amounts of text data
- It learns patterns in language to predict the next most likely token (word/character) in a sequence
- Modern LLMs can understand and generate human-like text across multiple domains and tasks

### Key Characteristics

- Transformer architecture-based
- Trained on hundreds of billions of tokens
- Uses attention mechanisms to understand context
- Can handle various tasks without task-specific training

## 2. Technical Foundation

### Architecture Overview

- Based on the Transformer architecture (2017)
- Key components:
    - Self-attention layers
    - Feed-forward neural networks
    - Layer normalization
    - Positional encoding

### Training Process

- Pre-training phase:
    - Massive dataset ingestion
    - Next-token prediction objective
    - Gradient descent optimization
- Fine-tuning phase (optional):
    - Task-specific training
    - Instruction tuning
    - RLHF (Reinforcement Learning from Human Feedback)

## 3. How LLMs Work

### Token Processing

- Text is broken down into tokens (subwords/characters)
- Typical context windows: 2K to 128K tokens
- Token limits affect model's "memory" and processing capability

### Pattern Recognition

- Models learn statistical patterns in language
- Can recognize:
    - Grammar and syntax
    - Factual knowledge
    - Logical relationships
    - Domain-specific patterns

### Inference Process

1. Input text tokenization
2. Token embedding
3. Processing through transformer layers
4. Token probability distribution generation
5. Next token selection

## 4. Types of LLMs

### Base Models

- GPT series (OpenAI)
- Claude (Anthropic)
- Llama (Meta)
- Features: Raw completion capabilities

### Instruction-Tuned Models

- ChatGPT
- Claude
- Features: Better at following instructions and maintaining conversation

### Domain-Specific Models

- CodeLlama (coding)
- Med-PaLM (medical)
- Features: Specialized knowledge and capabilities

## 5. Practical Considerations

### Limitations

- Hallucinations and factual errors
- Context window constraints
- Computational requirements
- Potential biases

### Best Practices

- Clear and specific prompting
- Temperature and sampling settings
- Context management
- Error handling and validation

### Resource Requirements

- Memory usage
- GPU/CPU requirements
- Latency considerations
- Scaling factors

## 6. Integration Patterns

### API Integration

- REST APIs
- WebSocket connections
- Batch processing
- Streaming responses

### Common Use Cases

- Text generation
- Analysis and understanding
- Classification
- Translation
- Code generation

## Additional Resources

- ["Attention Is All You Need" paper (original Transformer paper)](https://arxiv.org/abs/1706.03762)
- [Hugging Face documentation](https://huggingface.co/docs)
- [OpenAI API documentation](https://platform.openai.com/docs/api-reference/introduction)
- [Anthropic Claude documentation](https://docs.anthropic.com/en/docs/welcome)


## what is LangChain?

- LangChain is a framework that you can use to build AI applications, whether it's agents. 
- These retrieval mechanisms, input sources, everything you need to build a production ready AI integration in your product.
- LangChain strives to be that. Originally created in Python, there is a TypeScript implementation. In my opinion, I think LangChain's value today is not that high. I think it was really good if you were a Python developer back in the 3.5 days with OpenAI because OpenAI's API was still being developed and they were still trying to figure it out and there wasn't really cool things right now.
- Like tool calling and structured outputs, and providing OpenAI a schema. You can do a schema now, as you'll see, and today we'll use that. They didn't have that back then, so LangChain filled that void. If you want to get something back in a very specific JSON format, LangChain had a way to do that.
- It would basically just call your thing or repeat and repeat until it did it or have another LLM check it for you, but you don't have to do those things anymore. So I feel like the value is not there. I don't know, I'll probably use LangChain for like a month a couple years ago, and I've never used it again.



# 3. Memory

# Memory in Chat Applications

## What is Chat Memory?

- Collection of previous messages in the conversation
- Enables context retention across interactions
- Allows for coherent back-and-forth dialogue
- Critical for multi-step tasks and references

### Message Types in Memory

- **System Messages**: Instructions guiding the LLM's behavior
- **User Messages**: Inputs from the human user
- **Assistant Messages**: Responses generated by the LLM
- **Tool Messages**: Outputs from external functions/tools called by the LLM

```js
// System message - Sets behavior
{
  role: 'system',
  content: 'You are a helpful assistant...'
}

// User messages - Human inputs
{
  role: 'user',
  content: 'What's the weather like?'
}

// Assistant messages - LLM responses
{
  role: 'assistant',
  content: 'Let me check the weather for you',
  tool_calls: [...]
}

// Tool messages - Function results
{
  role: 'tool',
  content: '{"temp": 72, "conditions": "sunny"}',
  tool_call_id: 'call_123'
}
```

## Why Memory Matters

### Context Awareness

- Understand references to previous messages
- Remember user preferences
- Track progress on tasks
- Maintain conversation coherence

### Examples of Context

```js
User: "What's the weather like?"
Assistant: "It's 72° and sunny"
User: "What about tomorrow?"
// Needs memory to know we're talking about weather
```

### Task Continuity

- Remember steps completed
- Track information gathered
- Maintain state between function calls
- Handle multi-turn interactions

## Memory Limitations

### Token Limits

- LLMs have fixed context windows
- Older messages may need removal
- Important context can be lost
- Balancing detail vs. length

### Important Considerations

- Most recent messages often most relevant
- System message always needed
- Tool responses provide key information
- Some conversations need more history than others

## Message Management Strategies

### What to Keep

- System instructions
- Recent messages
- Critical information
- Current task context


### What to Remove

- Old, resolved queries
- Redundant information
- Irrelevant chat
- Completed task steps

### Priority Order

1. System message (always)
2. Current task messages
3. Recent context
4. Reference information


### Could things like RAG be used to help with this?

Yes, RAG, yeah.RAG stands for Retrieval Augmented Generation.
It's a fancy word for, I won't get into too much detail.But basically, it allows the AI to go search for the most relevant parts of a previous conversation according to the user message, and bring just those parts in.
Yes, that can help if you build a good rack pipeline, and that is a multi billion dollar company of just figuring out how to do rack.

If there's one flashlight app of AI right now It's trying to figure out how to do RAG good.And every day there's two white papers that come out,and it's like, this is the best way to do RAG now.And it's like impossible to keep up.It is literally sent out a tweet a week ago, or maybe two weeks ago and was like,

### why is no one making RAG as a service?

This is so hard, and everyone needs it, this should just be a thing, and it just really isn't.Cuz it really is very hard.I had to spend like a month on our app figuring out our garbage implementation of it today.So like it's quite difficult, but when it works well, you're right.It will do that, yeah.

