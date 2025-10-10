import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userInput, lastGeneration, userFeedback } = await request.json()
        let prompt
        if (!lastGeneration) {
            prompt = `You are a creative assistant that generates motivational quotes for posters. Generate exactly 3 quotes based on the user preferences below.

IMPORTANT: Return ONLY the 3 quotes, one per line, with no numbering, no explanations, no introduction, and no extra text.

User Preferences:
- Interests: ${userInput.interests}
- Hurdles: ${userInput.hurdles}
- Poster Purpose: ${userInput.posterPurpose}
- Quote Feel: ${userInput.quoteFeel}
- Text Type: ${userInput.textType}`;
        } else {
            prompt = `You previously generated these 3 quotes:

${lastGeneration.quotes.join('\n')}

The user wants to refine them with this feedback: "${userFeedback}"

Generate 3 NEW improved quotes based on this feedback. Remember the original preferences:
- Interests: ${userInput.interests}
- Hurdles: ${userInput.hurdles}
- Poster Purpose: ${userInput.posterPurpose}
- Quote Feel: ${userInput.quoteFeel}
- Text Type: ${userInput.textType}

IMPORTANT: Return ONLY the 3 new quotes, one per line, with no numbering, no explanations, and no extra text.`;
        }

        const { text } = await generateText({
            model: google('gemini-2.5-flash'),
            prompt
        })
        return NextResponse.json({ quotes: text })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Error generating quotes" }, { status: 500 })
    }
}