import dynamic from "next/dynamic";

const GetStarted = dynamic(() =>
    import("@/components/Home/GetStarted/Main").then(mod => ({ default: mod.GetStarted }))
);

export default function About() {
    return (
        <>
            <GetStarted/>
        </>
    )
}