import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// Function to list available models
export async function listAvailableModels() {
  try {
    const models = await genAI.listModels();
    console.log("Available models:");
    for (const model of models.models) {
      console.log(`- ${model.name}: ${model.displayName}`);
    }
    return models.models;
  } catch (error) {
    console.error("Error listing models:", error);
    return [];
  }
}

// Use gemini-2.0-flash (latest model available on free tier)
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

// Reusable chat function
export function startInterviewSession() {
  const chatSession = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "You are an AI interview assistant." }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 1000,
      temperature: 0.7,
    },
  });

  return chatSession;
}
