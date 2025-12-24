import React, { forwardRef, useRef, useEffect, useState } from 'react';

// Import all images from the assets folder as URLs so Vite bundles them correctly.
const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,webp,svg}', { eager: true, as: 'url' })

const PortfolioGrid = forwardRef(function PortfolioGrid({ items, onSelect, onHover, isTransitioning }, ref) {
    const internalRef = useRef(null)
    // assign forwarded ref properly (works for object refs)
    const setRefs = (el) => {
        internalRef.current = el
        if (!ref) return
        if (typeof ref === 'function') ref(el)
        else ref.current = el
    }

    const itemRefs = useRef([])
    const [currentIndex, setCurrentIndex] = useState(0)

    // keep refs sized
    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, items.length)
    }, [items])

    // scroll one item to center
    const scrollToIndex = (index) => {
        const container = internalRef.current
        const el = itemRefs.current[index]
        if (!container || !el) return
        const left = el.offsetLeft - (container.offsetWidth - el.offsetWidth) / 2
        container.scrollTo({ left, behavior: 'smooth' })
        setCurrentIndex(index)
    }

    const prev = () => scrollToIndex(Math.max(0, currentIndex - 1))
    const next = () => scrollToIndex(Math.min(items.length - 1, currentIndex + 1))

    // update currentIndex while user scrolls (center-of-container based)
    useEffect(() => {
        const container = internalRef.current
        if (!container) return

        let raf = 0
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf)
            raf = requestAnimationFrame(() => {
                const center = container.scrollLeft + container.offsetWidth / 2
                let closest = 0
                let minDiff = Infinity
                itemRefs.current.forEach((el, idx) => {
                    if (!el) return
                    const itemCenter = el.offsetLeft + el.offsetWidth / 2
                    const diff = Math.abs(itemCenter - center)
                    if (diff < minDiff) {
                        minDiff = diff
                        closest = idx
                    }
                })
                setCurrentIndex(closest)
            })
        }

        container.addEventListener('scroll', onScroll, { passive: true })
        // initialize
        onScroll()
        return () => {
            container.removeEventListener('scroll', onScroll)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [items])

    return (
        <div className="relative">
            <button
                aria-label="Scroll left"
                onClick={prev}
                className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-20 bg-primary bg-opacity-75 text-beige rounded-full p-2 hidden lg:inline-flex text-5xl"
            >
                ‹
            </button>

            <div
                ref={setRefs}
                role="list"
                className={`flex gap-8 py-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
                onMouseLeave={() => onHover?.(null)}
            >
            {items.map((item, idx) => (
                <article
                key={item.id}
                ref={el => itemRefs.current[idx] = el}
                onClick={() => onSelect(item)}
                onMouseEnter={() => onHover(item)}
                onMouseLeave={() => onHover(null)}
                className="cursor-pointer bg-secondary shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-50 mb-8 md:mb-0 min-w-[330px] lg:min-w-[31.85%]"
                >
                    <div className="aspect-square overflow-hidden">
                            <img src={images[item.image] ?? item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-center text-beige font-heading text-3xl">{item.artist}</h3>
                        <p className="text-center text-beige mt-1 font-body">{item.title}</p>
                        <hr className="border-beige mt-4 w-14 mx-auto border-t-2" />
                        <p className="text-center text-beige mt-4 font-body text-sm">Released {item.releaseDate}</p>
                    </div>
                </article>
            ))}
            </div>

            <button
                aria-label="Scroll right"
                onClick={next}
                className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-20 bg-primary bg-opacity-75 text-beige rounded-full p-2 hidden lg:inline-flex text-5xl"
            >
                ›
            </button>
        </div>
    )
});

export default PortfolioGrid;
