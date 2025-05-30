export const evaluators = [
  {
    id: 1,
    name: "Relevance Quality Evaluator",
    description: "Evaluates the overall quality and relevance of chatbot responses.",
    prompt: "Evaluate the chatbot's response for relevance and quality.",
    temperature: 0.7,
    versions: [
      { version: 2, date: "2023-10-15", author: "Jane Smith" },
      { version: 1, date: "2023-09-30", author: "John Doe" },
    ],
    date: "2023-10-15",
  },
  {
    id: 2,
    name: "Empathy Analyzer",
    description: "Analyzes emotional intelligence and empathy in responses.",
    prompt: "Analyze the chatbot's response for empathy and support.",
    temperature: 0.7,
    versions: [
      { version: 1, date: "2023-10-12", author: "Jane Smith" },
    ],
    date: "2023-10-12",
  },
];