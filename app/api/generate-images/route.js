import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userInput, lastGeneration, userFeedback } = await request.json()
        const basePrompt = `Generate an image in ${userInput.artStyle} art style with a ${userInput.colorPalette} color palette that conveys a ${userInput.feeling} feeling. Technical details: high resolution, 16/9 aspect-ratio, professional lighting, detailed composition. No text, no watermarks${userInput.exclusions && userInput.exclusions.length > 0 ? userInput.exclusions.map(item => `, ${item}`).join('') : ''}.`;
        let prompt = basePrompt
        
        if (lastGeneration) {
            prompt = `You previously generated an image with this prompt: 
            ${prompt}
            
            The user wants to refine them with this feedback: 
            "${userFeedback}`
        }

        const { files } = await generateText({
            model: google('gemini-2.5-flash-image-preview'),
            prompt,
            providerOptions: {
                google: {
                    responseModalities: ['IMAGE']
                }
            }
        })
        return NextResponse.json({ image: files[0] || null, prompt })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error generating images" }, { status: 500 })
    }
}