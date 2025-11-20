import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Reusable chat function
export async function startInterviewSession() {
  const chatSession = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "You are an AI interview assistant." }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 500,
      temperature: 0.7,
    },
  });

  return chatSession;
}
