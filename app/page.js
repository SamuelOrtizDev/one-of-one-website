import { CTASection } from "@/components/Home/CTASection/CTASection";
import { Faq } from "@/components/Home/FAQ/Faq";
import { Hero } from "@/components/Home/Hero/Hero";
import { StepsCTA } from "@/components/Home/StepsCTA/StepsCTA";
import { Testimonials } from "@/components/Home/Testimonials/Testimonials";

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

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <StepsCTA />
      <CTASection />
      <Faq />
    </>
  );
}
