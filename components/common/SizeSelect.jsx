'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function SizeSelect({ setUserChoice, userChoice }) {

    const baseSizes = [
        { width: 12, height: 16 },
        { width: 16, height: 20 },
        { width: 18, height: 24 },
        { width: 24, height: 36 },
    ];

    const formatSize = (width, height) => `${width}" × ${height}"`;

    const getSizeOptions = (orientation) => {
        return baseSizes.map(size => {
            if (orientation === 'landscape') {
                return formatSize(size.height, size.width);
            } else {
                return formatSize(size.width, size.height);
            }
        });
    };

    const sizeOptions = getSizeOptions(userChoice.orientation);

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        setUserChoice(prev => ({
            ...prev,
            size: sizeOptions[0]
        }));
    }, [userChoice.orientation])

    return (
        <span className="relative">
            <div ref={dropdownRef} onClick={() => setIsOpen(!isOpen)} className="text-blue-200">
                <button className="flex items-center gap-4 px-4 py-3 rounded-md bg-[#F3F3F3] cursor-pointer">
                    {userChoice.size ? userChoice.size : sizeOptions[0]}
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown />
                    </motion.span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 bg-[#F3F3F3] w-full shadow-lg border border-blue-200/20 rounded-lg mt-2 z-10">
                            {sizeOptions.map(size => (
                                <li
                                    key={size}
                                    onClick={() => {
                                        setUserChoice(prev => ({
                                            ...prev,
                                            size: size
                                        }));
                                        setIsOpen(false);
                                    }}
                                    className="cursor-pointer px-3 py-2 hover:bg-blue-100/15"
                                >
                                    {size}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </span>
    )
}