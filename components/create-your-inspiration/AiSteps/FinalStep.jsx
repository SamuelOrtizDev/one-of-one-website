'use client'
import { getProducts } from "@/lib/getProduct";
import { useState, useEffect } from "react";
import findProductVariant from "@/lib/findProductVariant";
import { checkout } from "@/lib/checkout";
import { createPermanentImageURL } from "@/lib/createPermanentImageURL";
import { Loader } from "@/components/common/Icons";
import frameColors from "@/const/frameColors";
import { ArrowRight } from "@/components/common/Icons";
import normalizeSize from "@/lib/normalizeSize";

export function FinalStep({ userChoice, previousStep }) {

    const selectedFrameColor = frameColors.find(color => color.color === userChoice.frameColor)
    const normalizedPosterSize = normalizeSize(userChoice.size, userChoice.orientation)

    const [variant, setVariant] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function getUserGroup() {
        const GROUP_KEY = 'userProductGroup';

        let userGroup = localStorage.getItem(GROUP_KEY);

        if (!userGroup) {
            userGroup = Math.random() < 0.5 ? 'group1' : 'group2';
            localStorage.setItem(GROUP_KEY, userGroup);
        }

        return userGroup;
    }

    useEffect(() => {
        const fetchAndMatch = async () => {
            try {
                const products = await getProducts();

                const userGroup = getUserGroup();

                const chosenVariant1 = findProductVariant(products.group1, {
                    size: normalizedPosterSize,
                    frame: userChoice.frame,
                    material: userChoice.material
                });

                const chosenVariant2 = findProductVariant(products.group2, {
                    size: normalizedPosterSize,
                    frame: userChoice.frame,
                    material: userChoice.material
                });

                const selectedVariant = userGroup === 'group1' ? chosenVariant1 : chosenVariant2;

                setVariant(selectedVariant);

            } catch (error) {
                console.error('❌ Error:', error);
            }
        };

        fetchAndMatch();
    }, []);

    const handleBuy = async () => {
        try {
            setIsLoading(true)
            const PermanentImage = userChoice.image ? await createPermanentImageURL(userChoice.image) : null

            const checkoutOrder = {
                imageUrl: PermanentImage,
                quote: userChoice.posterQuote,
                orientation: userChoice.orientation,
                frame: userChoice.frame,
                frameColor: userChoice.frame === true ? userChoice.frameColor : null,
            }

            const url = await checkout(variant.id, checkoutOrder);

            if (url) {
                window.location.href = url;
            } else {
                alert('Error creating checkout');
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col justify-center lg:flex-row gap-8 md:gap-12 text-[#072E3F] mx-auto max-w-6xl">

            {
                userChoice.image &&
                <div
                    style={{
                        backgroundImage: `url(${URL.createObjectURL(userChoice.image)})`,
                        backgroundSize: 'cover',
                        border: `8px solid ${userChoice.frame ? selectedFrameColor.value : 'transparent'}`
                    }}
                    className={`${userChoice.orientation === "landscape"
                        ? "aspect-[4/3] w-full lg:h-[380px] lg:w-auto"
                        : "aspect-[3/4] w-full lg:w-[380px] h-auto"} 
                        bg-cover bg-center rounded-xl p-6`}
                >
                </div>
            }


            <article className="flex flex-col gap-6 md:gap-8">
                <span className="flex flex-col gap-2">
                    <h3 className="font-bold text-2xl md:text-4xl">Your Inspiration is <span className="text-oBlue-200">Created!</span></h3>
                    <p className="text-wrap max-w-xl">If your quote is poorly visible against your background image, don't worry! Our graphic designer does a quality check on all ordered posters. You will receive the final poster preview within 24 hours</p>
                </span>

                <ul className="flex flex-col gap-2">
                    <li><strong className="font-bold text-oBlue-200">Quote:</strong> {userChoice.posterQuote}</li>
                    <li><strong className="font-bold text-oBlue-200">Orientation:</strong> {userChoice.orientation}</li>
                    <li><strong className="font-bold text-oBlue-200">Material:</strong> {userChoice.material}</li>
                    <li><strong className="font-bold text-oBlue-200">Size:</strong> {userChoice.size}</li>
                    <li><strong className="font-bold text-oBlue-200">Frame:</strong> {userChoice.frame ? "Yes" : "No"}</li>
                    {userChoice.frame && <li><strong className="font-bold text-oBlue-200">Frame Color:</strong> {userChoice.frameColor}</li>}
                </ul>

                <div className="flex items-center gap-3 mt-auto">
                    <button onClick={previousStep} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-100 group flex flex-row-reverse items-center gap-4 text-white h-fit">
                        Back
                        <span className="group-hover:-translate-x-1 transition-transform rotate-180">
                            <ArrowRight />
                        </span>
                    </button>

                    <button disabled={isLoading} onClick={handleBuy} className="rounded-full font-bold transition-color ease-in-out duration-300 cursor-pointer hover:brightness-125 md:px-8 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 flex items-center justify-between gap-4 text-white h-fit mt-auto disabled:saturate-0 disabled:cursor-not-allowed w-full">
                        Buy Now
                        <strong>{(variant && !isLoading) && `$${variant.price}`}</strong>
                        {isLoading && <span className="animate-spin"><Loader /></span>}
                    </button>
                </div>
            </article>
        </div >
    )
}