export type ConversationStatus = "success" | "warning" | "default";

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
  time: string;
}

export interface Conversation {
  id: number;
  title: string;
  status: ConversationStatus;
  messageCount: number;
  time: string;
  updated: string;
  participants: string[];
  messages: ConversationMessage[];
}

export const conversations: Conversation[] = [
  {
    id: 1,
    title: "Vanished Support Cases",
    status: "success",
    messageCount: 12,
    time: "5 min",
    updated: "2025-05-30 19:15",
    participants: ["Persona: IT Specialist", "Goal: Resolve IT connection issues"],
    messages: [
      {
        role: "user",
        content: "Hi, I'm having trouble connecting to the VPN from home.",
        time: "19:10",
      },
      {
        role: "assistant",
        content: "I'm sorry to hear that. Let's troubleshoot this together. Can you tell me if you're seeing any error messages?",
        time: "19:11",
      },
      {
        role: "user",
        content: "Yes, it says 'Unable to connect. Check credentials.'",
        time: "19:12",
      },
      {
        role: "assistant",
        content: "Thanks for the information. Please check if your username and password are correct and try again.",
        time: "19:13",
      },
      {
        role: "user",
        content: "It worked! Thank you so much.",
        time: "19:14",
      },
      {
        role: "assistant",
        content: "You're welcome! Let me know if you need anything else.",
        time: "19:15",
      },
    ],
  },
  {
    id: 2,
    title: "Ecommerce Shopper",
    status: "success",
    messageCount: 10,
    time: "6 min",
    updated: "2025-05-30 18:42",
    participants: ["Persona: Shopper", "Goal: Purchase Product on Discount"],
    messages: [
      {
        role: "user",
        content: "Do you have any discounts on wireless headphones?",
        time: "18:36",
      },
      {
        role: "assistant",
        content: "Yes! We have a 20% discount on select wireless headphones this week.",
        time: "18:37",
      },
      {
        role: "user",
        content: "Great, can you show me the options?",
        time: "18:38",
      },
      {
        role: "assistant",
        content: "Here are some popular models: [list of products]",
        time: "18:39",
      },
      {
        role: "user",
        content: "I'll take the first one. How do I apply the discount?",
        time: "18:40",
      },
      {
        role: "assistant",
        content: "Add the item to your cart and use code WIRELESS20 at checkout.",
        time: "18:41",
      },
      {
        role: "user",
        content: "Done! Thanks for your help.",
        time: "18:42",
      },
    ],
  },
  {
    id: 3,
    title: "Install Failure",
    status: "warning",
    messageCount: 7,
    time: "2 min",
    updated: "2025-05-29 17:22",
    participants: ["Persona: Local Retail Staff", "Goal: Install Retail Device"],
    messages: [
      {
        role: "user",
        content: "The new POS terminal won't start after installation.",
        time: "17:20",
      },
      {
        role: "assistant",
        content: "Let's check the power connection and cables first.",
        time: "17:21",
      },
      {
        role: "user",
        content: "All cables are connected, but the screen stays black.",
        time: "17:21",
      },
      {
        role: "assistant",
        content: "Try holding the power button for 10 seconds.",
        time: "17:22",
      },
      {
        role: "user",
        content: "That worked! Thank you.",
        time: "17:22",
      },
    ],
  },
];