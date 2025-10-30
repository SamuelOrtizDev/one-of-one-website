import { Hero } from "@/components/About/Hero/Hero";
import dynamic from "next/dynamic";

export const metadata = {
    title: "OneOfOne Posters - Meet our history",
    description: "Turn fleeting inspiration and priceless memories into your timeless masterpiece. Create custom wellness posters with quotes and imagery that set the perfect tone for your day. Premium quality prints in just 5 easy steps.",
    keywords: "custom posters, wellness posters, inspirational quotes, motivational prints, personalized wall art, daily reminders, custom quotes, home decor, mindfulness art",
    openGraph: {
        title: "OneOfOne Posters - Meet our history",
        description: "Craft your inspiration with custom posters. Where words meet timeless imagery to create daily reminders of your goals.",
        url: "https://www.oneofoneposters.com/about",
        siteName: "OneOfOne Posters",
        type: "website",
        images: [
            {
                url: "https://www.oneofoneposters.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "OneOfOne Posters - Custom Wellness Posters"
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
        canonical: "https://www.oneofoneposters.com/about"
    },
};

const GetStarted = dynamic(() =>
    import("@/components/Home/GetStarted/Main").then(mod => ({ default: mod.GetStarted }))
);

const CuriousAboutCourse = dynamic(() =>
    import("@/components/About/CuriousAboutCourse/Main").then(mod => ({ default: mod.CuriousAboutCourse }))
);

const TheSpark = dynamic(() =>
    import("@/components/About/TheSpark/Main").then(mod => ({ default: mod.TheSpark }))
);

const YouAreOneOfOne = dynamic(() =>
    import("@/components/About/YouAreOneOfOne/Main").then(mod => ({ default: mod.YouAreOneOfOne }))
);

const Quotes = dynamic(() =>
    import("@/components/About/Quotes/Main").then(mod => ({ default: mod.Quotes }))
);

const TheTeam = dynamic(() =>
    import("@/components/About/TheTeam/Main").then(mod => ({ default: mod.TheTeam }))
);

export default function About() {
    return (
        <>
            <Hero />
            <CuriousAboutCourse />
            <TheSpark />
            <YouAreOneOfOne/>
            <Quotes/>
            <TheTeam/>
            <GetStarted />
        </>
    )
}