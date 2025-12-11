export default function PortfolioFilter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      <button
        onClick={() => setFilter('album')}
        className={`px-6 py-3 font-heading rounded text-lg transition-colors ${
          filter === 'album'
            ? 'bg-secondary text-beige'
            : 'bg-secondary bg-opacity-50 text-beige hover:bg-opacity-75'
        }`}
      >
        Albums
      </button>

      {/* <button
        onClick={() => setFilter('ep')}
        className={`px-6 py-2 font-heading text-lg transition-colors ${
          filter === 'ep'
            ? 'bg-primary text-beige'
            : 'bg-primary bg-opacity-50 text-beige hover:bg-opacity-75'
        }`}
      >
        EPs
      </button> */}

      <button
        onClick={() => setFilter('single')}
        className={`px-6 py-3 rounded font-heading text-lg transition-colors ${
          filter === 'single'
            ? 'bg-secondary text-beige'
            : 'bg-secondary bg-opacity-50 text-beige hover:bg-opacity-75'
        }`}
      >
        Singles
      </button>
    </div>
  )
}
