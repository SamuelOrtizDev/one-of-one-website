'use client'
import { SadFileIcon, UploadIcon, X } from "@/components/common/Icons";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function Step2({ setUserChoice, userChoice }) {

    const image = userChoice.imageUrl

    const [isDragging, setIsDragging] = useState(null)
    const [isNotImage, setIsNotImage] = useState(false)
    const inputRef = useRef()

    const validateImage = (file) => {
        if (!file) return true

        const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
        if (!validImageTypes.includes(file.type)) {
            return false
        }

        return true
    }

    const handleDragOver = e => {
        e.preventDefault()
        if (!image) {
            setIsDragging(true)
        }
    }

    const handleDragLeave = e => {
        e.preventDefault()
        if (!image) {
            setIsDragging(false)
        }
    }

    const handleDrop = e => {
        e.preventDefault()

        if (image) return

        setIsDragging(false)
        const droppedFile = e.dataTransfer.files[0]
        upload(droppedFile)
    }

    const handleRemove = () => {
        upload(null)
    }

    const upload = async (imageUrl) => {
        setIsNotImage(false)

        if (imageUrl && !validateImage(imageUrl)) {
            setIsNotImage(true)
            return
        }

        setUserChoice(prev => ({
            ...prev,
            imageUrl: imageUrl
        }));
    }

    useEffect(() => {
        if (isNotImage) {
            const timer = setTimeout(() => {
                setIsNotImage(false)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [isNotImage])

    const handleQuoteChange = (e) => {
        setUserChoice(prev => ({
            ...prev,
            imageDescription: e.target.value
        }));
    };

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Make It Even More <span className="text-blue-200">Yours</span></h3>
            <p><strong>Step 2.</strong> Upload your image</p>

            <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`relative ${isDragging && !image ? "bg-blue-100/50 text-blue-200" : "bg-[#F8F8F8]"} border-2 rounded-xl border-dashed border-blue-100 w-full max-w-xl min-h-[300px] flex flex-col items-center justify-center gap-4 md:mt-4`}>
                {
                    (!image && !isDragging && !isNotImage) &&
                    <>
                        <span className="text-blue-200 scale-200">
                            <UploadIcon />
                        </span>
                        <h3 className="font-bold text-xl md:text-2xl">Drop your image here</h3>
                        <p>or</p>

                        <input type="file" accept="image/*" hidden onChange={(e) => {
                            upload(e.target.files[0])
                        }} ref={inputRef} />

                        <button onClick={() => inputRef.current.click()} className="rounded-full bg-blue-100/20 font-bold text-blue-200 px-3 py-1 cursor-pointer transition-colors hover:bg-blue-200 hover:text-white">Choose a file</button>
                        <small className="text-center">Note: upload images with a minimum of 1920px to ensure high quality</small>
                    </>
                }

                {
                    (isDragging && !image) &&
                    <p className="font-bold text-xl">Drop your image here!!</p>
                }

                {
                    image &&
                    <span className="flex justify-start items-start w-full h-full p-8">
                        <div className="relative">
                            <img src={URL.createObjectURL(image)} alt="image" className="w-auto max-h-[200px]" />

                            <button onClick={handleRemove} className="rounded-full grid place-items-center w-8 h-8 bg-red-200 absolute -top-4 -right-4 cursor-pointer"><X /></button>
                        </div>
                    </span>
                }

                {
                    (isNotImage) &&
                    <>
                        <span className="text-red-500 scale-200">
                            <SadFileIcon />
                        </span>
                        <p className="font-bold text-xl">Drop images Only</p>
                        <small>use files with .jpg, .jpeg or .png extension</small>
                    </>
                }
            </div>

            <strong className="mt-4">What if I can't find the image I have in mind?</strong>
            <p>Please describe your perfect background illustration below, and we will generate it for you! You can choose your favorite option through your confirmation email.</p>

            <textarea value={userChoice.imageDescription} onChange={handleQuoteChange} name="image Description" id="imageDesc" placeholder="Type" className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl min-h-[100px]" />
        </motion.div>
    );
}