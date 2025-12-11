import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faDrum, faHeadphones, faSliders, faTag } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function PortfolioModal({ item, onClose }) {

    const[isVisible, setIsVisible] =  useState(false);

    // Change item = fade in
    useEffect(() => {
        if (item) {
            setIsVisible(true);
        }
    }, [item]);

    // Close modal = fade out
    const handleClose = () => {
        setIsVisible(false)
        setTimeout(onClose, 500)
    }

    if (!item) return null

    return (
        <div className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-opacity duration-500 ease-in-out ${isVisible ? 'bg-opacity-90 opacity 100' : 'bg-opacity-0 opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={handleClose}></div>
            <div className={`bg-secondary max-w-3xl w-full relative transform transition-all duration-500 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-beige transition-all duration-300 hover:text-lightBeige z-10"
                >
                <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>

                <div className="p-8 text-center bg-primary bg-opacity-50">
                    <h3 className="text-3xl text-beige font-heading">{item.artist}</h3>
                    <p className="text-lg text-beige mt-1">{item.title}</p>
                    <p className="text-lg uppercase text-beige mt-4 mb-8 bg-beige text-primary font-bold inline-block px-3 py-1 shadow-full rounded-full"><FontAwesomeIcon icon={faTag} size="1x" style={{ color: "#0a090b" }} /> {item.genre}</p>
                    <iframe
                        src={item.bandcampEmbed}
                        style={{
                        border: '0',
                        maxWidth: '650px',
                        margin: '0 auto',
                        width: '100%',
                        height: '450px'
                        }}
                        seamless
                        title={`${item.title} player`}
                        loading="lazy"
                    >
                    </iframe>
                </div>

                <div className="px-8 pb-8 text-center bg-primary bg-opacity-50">
                    <p className="text-beige">My credits for this release:</p>
                    <div className="flex justify-center gap-8 mt-8">
                        {item.mixing && (
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faSliders} size="2x" rotation="270" style={{ color: "#d9c3b0" }} />
                            <span className="text-beige mt-2 text-sm">Mixing</span>
                        </div>
                        )}
                        {item.mastering && (
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faHeadphones} size="2x" style={{ color: "#d9c3b0" }} />
                            <span className="text-beige mt-2 text-sm">Mastering</span>
                        </div>
                        )}
                        {item.drums && (
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faDrum} size="2x" style={{ color: "#d9c3b0" }} />
                            <span className="text-beige mt-2 text-sm">Drums</span>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
