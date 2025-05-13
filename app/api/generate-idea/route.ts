import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

export async function POST(req: Request) {
  try {
    const { interests, skills, problemArea } = await req.json()

    const result = await generateObject({
      model: openai("gpt-4o"),
      system:
        "You are an expert startup advisor and business strategist. Generate innovative, viable startup ideas based on the user's interests, skills, and problem areas.",
      prompt: `Generate a startup idea based on the following:
        Interests: ${interests}
        Skills: ${skills}
        Problem Area: ${problemArea}
        
        Create a detailed, innovative, and viable startup concept that leverages the user's background.`,
      schema: z.object({
        startupIdea: z.object({
          name: z.string().describe("A catchy, memorable name for the startup"),
          tagline: z.string().describe("A short, compelling tagline"),
          description: z.string().describe("A concise description of the startup concept (2-3 sentences)"),
          longDescription: z.string().describe("A detailed explanation of the concept (1-2 paragraphs)"),
          problemStatement: z.string().describe("The problem this startup solves"),
          solution: z.string().describe("How the startup solves this problem"),
          targetAudience: z.string().describe("The primary customer segments"),
          valueProposition: z.string().describe("The unique value offered to customers"),
          businessModel: z.string().describe("How the startup will generate revenue"),
          keyFeatures: z.array(z.string()).describe("List of 3-5 key features or offerings"),
          competitiveAdvantage: z.string().describe("What makes this startup unique compared to competitors"),
          initialSteps: z.array(z.string()).describe("List of 3-5 first steps to launch this startup"),
        }),
      }),
    })

    return Response.json(result.startupIdea)
  } catch (error) {
    console.error("Error generating startup idea:", error)
    return Response.json({ error: "Failed to generate startup idea" }, { status: 500 })
  }
}
