'use client'
import { getProducts } from "@/lib/getProduct";
import { useState, useEffect } from "react";
import findProductVariant from "@/lib/findProductVariant";
import { checkout } from "@/lib/checkout";
import { createPermanentImageURL } from "@/lib/createPermanentImageURL";
import { Loader } from "@/components/common/Icons";
import { quotePositions } from "@/const/quotePositions";
import { fontOptions } from "@/const/fonts";
import { frameColors } from "@/const/frameColor";
import { ArrowRight } from "@/components/common/Icons";
import { Input } from "@/components/common/Inputs";
import { SubmissionForm } from "../SubmisionForm";

export function FinalStep({ userChoice, setStep, setIsFinalStep }) {

    const selectedQuotePosition = userChoice.bestFit ? null : quotePositions.find(quote => quote.value === userChoice.quotePosition)
    const selectedFont = fontOptions.find(font => font.name === userChoice.font)
    const selectedFrameColor = frameColors.find(color => color.color === userChoice.frameColor)

    const [textColor, setTextColor] = useState('text-white');
    const [imageUrl, setImageUrl] = useState('');
    const [variant, setVariant] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const analyzeImageBrightness = (imageSrc) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            try {
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;

                let totalBrightness = 0;
                const pixelCount = pixels.length / 4; // 4 values per pixel (RGBA)

                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];

                    // Fórmula para calcular brillo percibido
                    const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
                    totalBrightness += brightness;
                }

                const averageBrightness = totalBrightness / pixelCount;

                // Si el brillo promedio es mayor a 128 (escala 0-255), es imagen clara
                setTextColor(averageBrightness > 128 ? 'text-black' : 'text-white');

            } catch (error) {
                console.log('No se pudo analizar la imagen, usando texto blanco por defecto');
                setTextColor('text-white');
            }
        };

        img.onerror = () => {
            setTextColor('text-white'); // Fallback
        };

        img.src = imageSrc;
    };

    useEffect(() => {
        if (userChoice.imageUrl) {
            const url = URL.createObjectURL(userChoice.imageUrl);
            setImageUrl(url);
            analyzeImageBrightness(url);

            // Cleanup
            return () => URL.revokeObjectURL(url);
        }
    }, [userChoice.imageUrl]);

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
                    size: userChoice.size,
                    frame: userChoice.frame,
                    material: userChoice.material
                });

                const chosenVariant2 = findProductVariant(products.group2, {
                    size: userChoice.size,
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
            const PermanentImage = userChoice.imageUrl ? await createPermanentImageURL(userChoice.imageUrl) : null

            const checkoutOrder = {
                imageUrl: PermanentImage,
                imageDescription: userChoice.imageDescription,
                quote: userChoice.quote,
                quotePosition: userChoice.quotePosition,
                orientation: userChoice.orientation,
                font: userChoice.font,
                fontColor: userChoice.fontColor,
                frameColor: userChoice.frameColor,
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

    const previousStep = () => {
        console.log('egh');
        setStep(5)
        setIsFinalStep(false)
    }

    if (userChoice.imageDescription.trim() !== "" || userChoice.bestFit) return <SubmissionForm userChoice={userChoice} />

    return (
        <div className="flex flex-col justify-center lg:flex-row gap-8 md:gap-12 text-[#072E3F] mx-auto max-w-6xl">

            {
                userChoice.imageUrl &&
                <div
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        border: `8px solid ${userChoice.frame ? selectedFrameColor.value : 'transparent'}`
                    }}
                    className={`${userChoice.orientation === "landscape"
                        ? "aspect-[4/3] w-full lg:h-[380px] lg:w-auto"
                        : userChoice.orientation === "portrait"
                            ? "aspect-[3/4] w-full lg:w-[380px] h-auto"
                            : "aspect-square w-full lg:w-[380px] h-auto"
                        } bg-cover bg-center rounded-xl p-6 flex ${selectedFont.className} ${selectedQuotePosition ? selectedQuotePosition.position : "justify-center items-center"}`}
                >
                    <p className={`font-bold text-3xl ${textColor}`}>{userChoice.quote}</p>
                </div>
            }


            <article className="flex flex-col gap-6 md:gap-8">
                <span className="flex flex-col gap-2">
                    <h3 className="font-bold text-2xl md:text-4xl">Your Inspiration is <span className="text-blue-200">Created!</span></h3>
                    <p className="text-wrap">Here's a preview, if it looks amazing to you... go to checkout</p>
                </span>

                <ul className="flex flex-col gap-2">
                    <li><strong className="font-bold text-blue-200">Quote:</strong> {userChoice.quote}</li>
                    {
                        userChoice.imageDescription.trim() !== "" &&
                        <li><strong className="font-bold text-blue-200">Image Description:</strong> {userChoice.imageDescription}</li>
                    }
                    <li><strong className="font-bold text-blue-200">Orientation:</strong> {userChoice.orientation}</li>
                    <li><strong className="font-bold text-blue-200">Quote Position:</strong> {userChoice.quotePosition}</li>
                    <li><strong className="font-bold text-blue-200">Font:</strong> {userChoice.font}</li>
                    <li><strong className="font-bold text-blue-200">Font Color:</strong> {userChoice.fontColor}</li>
                    <li><strong className="font-bold text-blue-200">Material:</strong> {userChoice.material}</li>
                    <li><strong className="font-bold text-blue-200">Size:</strong> {userChoice.size}</li>
                    <li><strong className="font-bold text-blue-200">Frame:</strong> {userChoice.frame ? "Yes" : "No"}</li>
                    {userChoice.frame && <li><strong className="font-bold text-blue-200">Frame Color:</strong> {userChoice.frameColor}</li>}
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