import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userInput, lastGeneration, userFeedback } = await request.json()
        const basePrompt = `Generate a poster with background image based on the following specifications:

        Art Style: ${userInput.artStyle}
        Color Palette: ${userInput.colorPalette}
        Overall Feeling: ${userInput.feeling}

        User Context:
        - Interests: ${userInput.interests.join('. ')}
        - Hurdles/Challenges: ${userInput.hurdles}
        - Poster Purpose: ${userInput.posterPurpose}
        - Quote Tone: ${userInput.quoteFeel}

        Technical Requirements:
        - High resolution, professional quality
        - Detailed and smooth design suitable as a backdrop
        - Balanced visual hierarchy that doesn't compete with text overlay
        - Professional lighting and color grading
        - No watermarks, signatures, or distracting elements
        - Aspect ratio: ${userInput.orientation === 'portrait' ? '3:4 (portrait)' : '4:3 (landscape)'}
        - Exclude from image: ${userInput.exclusions.join('. ')}

        Overlay Text: "${userInput.posterQuote}"
        - Typography must be highly legible and complement the art style
        - Text placement should follow the composition principles specified
        - Ensure strong contrast between text and background for maximum readability

        Generate a complete, ready-to-use poster image with the background and overlay text harmoniously integrated.`;

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