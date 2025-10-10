import { AiMainFlow } from "@/components/create-your-inspiration/AiMainFlow";

export const metadata = {
    title: "Create Your Inspiration - Custom Poster Designer | OneOfOne Posters",
    description: "Design your perfect wellness poster in 5 easy steps. Choose your inspirational quote, select from timeless imagery, customize fonts, sizes, and materials. Create your daily motivation masterpiece now.",
    keywords: "create custom poster, poster designer, custom quote poster, inspirational poster maker, wellness poster creator, personalized wall art, design your poster, motivational poster builder, custom print designer",
    openGraph: {
        title: "Create Your Custom Inspiration Poster - OneOfOne Posters",
        description: "Design your perfect wellness poster in 5 easy steps. Choose quotes, images, fonts, and materials to create your daily motivation masterpiece.",
        url: "https://www.oneofoneposters.com/create-your-inspiration",
        siteName: "OneOfOne Posters",
        type: "website",
        images: [
            {
                url: "https://www.oneofoneposters.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Create Your Custom Inspiration Poster - Design Tool Preview"
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    },
    alternates: {
        canonical: "https://www.oneofoneposters.com/create-your-inspiration"
    },
    category: "Design Tool",
    classification: "Poster Creation Interface",
};

export default function CreatingPage() {
    return (
        <>
            <AiMainFlow/>
        </>
    )
}