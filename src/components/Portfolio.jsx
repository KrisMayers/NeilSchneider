import { useState, useRef } from 'react'
import portfolioData from '../data/portfolioData'
import PortfolioFilter from './PortfolioFilter'
import PortfolioGrid from './PortfolioGrid'
import PortfolioModal from './PortfolioModal'

function Portfolio() {
    const [filter, setFilter] = useState('album')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [preloadItem, setPreloadItem] = useState(null)
    const gridRef = useRef(null) // optional: to reset scroll

    const filteredItems = portfolioData
        .filter(i => i.type === filter)
        .sort((a, b) => new Date(b.release) - new Date(a.release))

    const changeFilter = (newFilter) => {
        if (newFilter === filter) return
        setIsTransitioning(true)
        setTimeout(() => {
        setFilter(newFilter)
        if (gridRef.current) gridRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(false)))
        }, 500)
    }

    return (
        <section className="bg-primary py-16" id="portfolio">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl mb-12 text-beige font-heading text-center">Portfolio</h2>

                <PortfolioFilter filter={filter} setFilter={changeFilter} />

                <PortfolioGrid
                ref={gridRef}         
                items={filteredItems}
                onSelect={setSelectedItem}
                onHover={setPreloadItem}
                isTransitioning={isTransitioning}
                />

                <PortfolioModal item={selectedItem} preloadItem={preloadItem} onClose={() => setSelectedItem(null)} />
            </div>
        </section>
    )
}

export default Portfolio
