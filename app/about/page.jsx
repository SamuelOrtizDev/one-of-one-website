import { Hero } from "@/components/About/Hero/Hero";
import dynamic from "next/dynamic";

const GetStarted = dynamic(() =>
    import("@/components/Home/GetStarted/Main").then(mod => ({ default: mod.GetStarted }))
);

const CuriousAboutCourse = dynamic(() =>
    import("@/components/About/CuriousAboutCourse/Main").then(mod => ({ default: mod.CuriousAboutCourse }))
);

export default function About() {
    return (
        <>
            <Hero />
            <CuriousAboutCourse/>
            <GetStarted />
        </>
    )
}