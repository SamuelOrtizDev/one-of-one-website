import { PrimaryCTA } from "@/components/common/Buttons";
import SectionLayout from "@/components/common/SectionLayout";

export function CTASection() {
    return (
        <SectionLayout>
            <article className="mx-auto max-w-4xl grid grid-cols-2 gap-8 place-items-center">
                <div>
                    <h2 className="text-blue-200 font-bold text-2xl md:text-4xl">Ready to get started?</h2>
                    <p className="mt-2 text-blue-200">Create your inspiration</p>
                </div>
                <PrimaryCTA />
            </article>
        </SectionLayout>
    )
}