import dynamic from "next/dynamic";
import { Hero } from "@/components/Home/Hero/Hero";

export const metadata = {
  title: "OneOfOne Posters - Create Your Inspiration | Where Words Meet Timeless Imagery",
  description: "Turn fleeting inspiration and priceless memories into your timeless masterpiece. Create custom wellness posters with quotes and imagery that set the perfect tone for your day. Premium quality prints in just 5 easy steps.",
  keywords: "custom posters, wellness posters, inspirational quotes, motivational prints, personalized wall art, daily reminders, custom quotes, home decor, mindfulness art",
  openGraph: {
    title: "OneOfOne Posters - Create Your Inspiration",
    description: "Craft your inspiration with custom posters. Where words meet timeless imagery to create daily reminders of your goals.",
    url: "https://www.oneofoneposters.com",
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
    canonical: "https://www.oneofoneposters.com"
  },
};

const InspirationForEveryDay = dynamic(() =>
  import("@/components/Home/InspirationForEveryDay/Main").then(mod => ({ default: mod.InspirationForEveryDay }))
);

const HowItWorks = dynamic(() =>
  import("@/components/Home/HowItWorks/Main").then(mod => ({ default: mod.HowItWorks }))
);

const UniqueStories = dynamic(() =>
  import("@/components/Home/UniqueStories/Main").then(mod => ({ default: mod.UniqueStories }))
);

const ReadyToCreate = dynamic(() =>
  import("@/components/Home/ReadyToCreate/Main").then(mod => ({ default: mod.ReadyToCreate }))
);

const Finishes = dynamic(() =>
  import("@/components/Home/Finishes/Main").then(mod => ({ default: mod.Finishes }))
);

const Faq = dynamic(() =>
  import("@/components/Home/Faq/Main").then(mod => ({ default: mod.Faq }))
);

const GetStarted = dynamic(() =>
  import("@/components/Home/GetStarted/Main").then(mod => ({ default: mod.GetStarted }))
);

const StillHaveQuestions = dynamic(() =>
  import("@/components/Home/StillHaveQuestions/Main").then(mod => ({ default: mod.StillHaveQuestions }))
);

export default function Home() {
  return (
    <>
      <Hero />
      <InspirationForEveryDay />
      <Finishes />
      <UniqueStories />
      <Faq />
      <StillHaveQuestions/>
      <GetStarted/>
      {/* <HowItWorks />
      <ReadyToCreate /> */}
    </>
  );
}
