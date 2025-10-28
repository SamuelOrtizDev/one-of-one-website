export default function SectionLayout({ children, className, containerClasses, style, noMargin = false, noPadding = false, id, noOverflow = true  }) {
    return (
        <div id={id} style={style} className={`${containerClasses ? containerClasses : ''} bg-cover bg-center`}>
            <section className={`${noMargin ? "" : "mx-auto max-w-[1400px] px-7 md:px-[72px]"} ${noOverflow ? 'overflow-x-hidden' : ''} ${className ? className : ""} ${noPadding ? "" : "py-12 md:py-20" }`}>
                {children}
            </section>
        </div>
    )
}