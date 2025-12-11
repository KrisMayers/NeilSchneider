import { useRef } from 'react'
import useParallax from '../hooks/useParallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import heroImage from '/src/assets/images/audio-bg.webp'

function Hero() {
  const ref = useRef(null)
  const style = useParallax(ref, 0.3) // tune speed: 0 = static, 0.2 = subtle

  return (
    <main ref={ref} className="relative py-12 bg-cover bg-center bg-no-repeat lg:h-[80vh] flex justify-center items-center lg:pt-16 overflow-hidden" id="home">
      {/* Parallax Background */}
      <div
        aria-hidden
        className="absolute -inset-2 bg-center bg-cover -z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: style.transform,
          willChange: 'transform'
        }}
      />
      {/* Content */}
      <div className="container mx-auto">
        <section className="p-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-5xl mb-4 text-beige font-heading">Professional Mixing &amp; Mastering</h2>
          <h3 className="text-lg md:text-xl leading-relaxed text-beige font-heading">High quality mixing and mastering services at affordable rates.</h3>
          <div className="md:flex gap-8 max-w-6xl mx-auto mt-8 mb-8 justify-center">
            <div className="container max-w-xl text-left bg-primary bg-opacity-50 p-6 rounded-lg text-beige drop-shadow-lg mb-8 md:mb-0">
              <div className="flex content-end mb-4">
                <h4 className="text-2xl">Mixing</h4>
                <FontAwesomeIcon icon={faSliders} size="2xl" rotation={270} style={{ color: "#d9c3b0", marginLeft: 'auto' }} />
              </div>
              <p className="mb-6 text-md font-body">Combine several, high-quality, multi-track WAV recordings (or stems) into one, balanced mix. This includes full equalization, dynamic range limiting, noise reduction, reverberation effect, slight editing, and slight adjustments to MIDI drum tracks.</p>
              <p className="text-2xl font-heading text-lightBeige text-center">Starting at $225 per song</p>
            </div>
            <div className="container max-w-xl text-left bg-primary bg-opacity-50 p-6 rounded-lg text-beige drop-shadow-lg">
              <div className="flex content-end mb-4">
                <h4 className="text-2xl">Mastering</h4>
                <FontAwesomeIcon icon={faHeadphones} size="2xl" style={{ color: "#d9c3b0", marginLeft: 'auto' }} />
              </div>
              <p className="mb-6 text-md font-body">Apply post-production processing and normalize loudness across your tracks. If you're unsure of the exact kind of mastering you'd like, send along examples of other work to use as reference. This is included for free if you are already using me for mixing!</p>
              <p className="text-2xl font-heading text-lightBeige text-center">Starting at $35 per song</p>
            </div>
          </div>
          <p className="text-center text-sm text-beige mb-12">Recording, composing and songwriting are not provided. Only completed tracks will be accepted.</p>
          <a href="mailto:neilschneideraudio@gmail.com" className="font-heading text-beige px-6 py-3 border-beige border-2 rounded hover:bg-beige hover:text-primary transition transition-all ease-in-out duration-300 text-lg">Enquire Now</a>
        </section>
      </div>
    </main>
  )
}

export default Hero
