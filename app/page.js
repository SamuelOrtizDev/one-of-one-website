import { CTASection } from "@/components/Home/CTASection/CTASection";
import { Faq } from "@/components/Home/FAQ/Faq";
import { Hero } from "@/components/Home/Hero/Hero";
import { StepsCTA } from "@/components/Home/StepsCTA/StepsCTA";
import { Testimonials } from "@/components/Home/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Testimonials/>
      <StepsCTA/>
      <CTASection/>
      <Faq/>
    </>
  );
}
