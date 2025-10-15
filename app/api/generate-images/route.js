import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userInput, lastGeneration, userFeedback } = await request.json()
        let prompt

        if (!lastGeneration) {
        }
        prompt = `Generate an image in ${userInput.artStyle} art style with a ${userInput.colorPalette} color palette that conveys a ${userInput.feeling} feeling. Technical details: high resolution, professional lighting, detailed composition. No text, no watermarks${userInput.exclusions && userInput.exclusions.length > 0 ? userInput.exclusions.map(item => `, ${item}`).join('') : ''}.`;

        const { files } = await generateText({
            model: google('gemini-2.5-flash-image-preview'),
            prompt,
            providerOptions: {
                google: {
                    responseModalities: ['IMAGE']
                }
            }
        })
        return NextResponse.json({ images: files[0] || null })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error generating images" }, { status: 500 })
    }
}