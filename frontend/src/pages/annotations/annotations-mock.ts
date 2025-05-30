export type AnnotationStatus = "success" | "error";

export interface AnnotationListItem {
  id: number;
  conversation: string;
  status: AnnotationStatus;
  summary: string;
  author: string;
  date: string;
}

export interface AnnotationMessage {
  role: "user" | "assistant";
  content: string;
  time: string;
}

export interface AnnotationDetail {
  id: string;
  persona: string;
  goal: string;
  metric: string;
  metricDefinition: string;
  messages: AnnotationMessage[];
}

export const annotations: AnnotationListItem[] = [
  {
    id: 1,
    conversation: "conv-1",
    status: "success",
    summary: "Clear and helpful responses throughout",
    author: "John Doe",
    date: "2025-05-15 14:30",
  },
  {
    id: 2,
    conversation: "conv-2",
    status: "error",
    summary: "Responses were not relevant to user queries",
    author: "Jane Smith",
    date: "2025-05-15 13:45",
  },
  {
    id: 3,
    conversation: "conv-3",
    status: "success",
    summary: "Good problem resolution flow",
    author: "Mike Johnson",
    date: "2025-05-15 12:15",
  },
];

export const annotationDetail: AnnotationDetail = {
  id: "conv-173",
  persona: "Technical Support Seeker",
  goal: "Resolve WiFi Connection Issues",
  metric: "Handling Ambiguity",
  metricDefinition: "Does the AI ask follow-up questions when user input is unclear?",
  messages: [
    {
      role: "user",
      content: "Hi, I'm having trouble connecting to my WiFi network.",
      time: "9:24 AM",
    },
    {
      role: "assistant",
      content: "I'm sorry to hear that. Let's troubleshoot this together. Can you tell me if you see your WiFi network in the list of available networks?",
      time: "9:25 AM",
    },
    {
      role: "user",
      content: "Yes, I can see it, but when I try to connect it says 'unable to connect'",
      time: "9:27 AM",
    },
    {
      role: "assistant",
      content: "That's helpful information. Have you tried forgetting the network and then reconnecting? This often helps resolve connection issues.",
      time: "9:28 AM",
    },
  ],
};