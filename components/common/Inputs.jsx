export function Input({name, label, placeholder, required = false, className, type = 'text'}) {
    return (
        <label className={`${className ? className : ""} flex flex-col gap-1`}>
            {required ? <div><span className="text-red-500">* </span>{label}</div> : label}
            <input type={type} placeholder={placeholder} name={name} id={name} required={required} className="outline-none rounded-bg px-4 py-2 bg-[#F8F8F8] border border-[#F8F8F8] focus:border-[#C9C9C9] rounded-xl" />
        </label>
    )
}