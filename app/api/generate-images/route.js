import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userInput, lastGeneration, userFeedback } = await request.json()
        const basePrompt = `Generate a poster with background image in ${userInput.artStyle} art style with a ${userInput.colorPalette} color palette that conveys a ${userInput.feeling} feeling. 

Technical requirements for background: high resolution, professional lighting, detailed composition, smooth and balanced design suitable as a backdrop. No watermarks, no distracting elements that would interfere with overlay text. The generated image MUST have this dimensions: ${userInput.orientation === 'portrait' ? 'portrait (9/16)' : 'landscape (16/9)'}${userInput.exclusions && userInput.exclusions.length > 0 ? `. Exclude: ${userInput.exclusions.join(', ')}` : ''}.

Poster quote to display as overlay text: "${userInput.posterQuote}"

Generate ONLY the poster image with the background and the overlay text. Make sure its on the desired dimensions with aspect-ratio.`;
        let prompt = basePrompt

        if (lastGeneration) {
            prompt = `You previously generated an image with this prompt: 
            ${basePrompt}
            
            The user wants to refine them with this feedback: 
            "${userFeedback}`
        }

        const { files } = await generateText({
            model: google('gemini-2.5-flash-image-preview'),
            prompt,
            providerOptions: {
                google: {
                    responseModalities: ['IMAGE'],
                    imageConfig: {
                        aspectRatio: userInput.orientation === 'portrait' ? "3:4" : "4:3"
                    }
                }
            }
        })
        return NextResponse.json({ image: files[0] || null, prompt })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error generating images" }, { status: 500 })
    }
}