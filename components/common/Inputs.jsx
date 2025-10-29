'use client'
import { useState } from "react"

export function Input({ type = "text", name, label, required = false }) {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className='relative group w-full'>
            <input value={inputValue} onChange={handleChange} className='w-full focus:outline-none bg-transparent px-1 py-3 border-b border-white/50' type={type} name={name} id={name} required={required} />
            <label htmlFor={name} className={`absolute left-2 top-3 transition-all ease-in-out duration-300 ${inputValue ? '-translate-y-6 text-xs text-white/60' : 'group-focus-within:-translate-y-6 group-focus-within:text-xs group-focus-within:text-white/60'}`}>
                {
                    required ? <>{label} <span className="text-gold-200">*</span></> : label
                }
            </label>
        </div>
    )

}

export function TextArea({ name, label, required = false }) {

    const [count, setCount] = useState('');

    const handleChange = (e) => {
        setCount(e.target.value)
    }

    return (
        <div className='relative group w-full'>
            <textarea maxLength='1000' value={count} onChange={handleChange} className='w-full h-[49px] resize-none outline-none transition-all ease-in-out duration-300 focus:h-[100px] bg-transparent px-1 py-3 border-b border-white/50' name={name} id={name} required={required} />
            <label htmlFor={name} className={`absolute left-2 top-3 duration-300 transition-all ${count ? '-translate-y-6 text-xs text-white/60' : 'group-focus-within:-translate-y-6 group-focus-within:text-xs group-focus-within:text-white/60'}`}>
                {
                    required ? <>{label} <span className="text-gold-200">*</span></> : label
                }
            </label>
            <span className="flex justify-end">
                <p className="text-white/60">{count.length}/1000</p>
            </span>
        </div>
    )
}