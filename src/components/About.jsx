import { useRef } from 'react'
import useParallax from '../hooks/useParallax'
import heroImage from '/src/assets/images/forest-bg.webp'
import imageNeil from '/src/assets/images/neil.webp'

function About() {
    const ref = useRef(null)
    const style = useParallax(ref, 0.3) // tune speed: 0 = static, 0.2 = subtle
    
    return (
        <section ref={ref} className="relative bg-cover bg-center bg-no-repeat overflow-hidden" id="about">
            {/* Parallax Background */}
                <div
                aria-hidden
                className="absolute -inset-32 bg-center bg-cover -z-10 pointer-events-none"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    transform: style.transform,
                    willChange: 'transform'
                }}
                />
            <div className="lg:flex container mx-auto justify-center items-center gap-16 py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="p-8">
                        <h2 className="text-4xl mb-4 text-beige font-heading">About Me</h2>
                        <p className="text-lg leading-relaxed text-beige font-body mb-4">
                           My name is Neil Schneider and I'm a drummer of over 20 years, with a burning passion for music. I graduated in Audio Engineering at The New School of Radio and Television in Albany, NY and have had 15 years of audio engineering experience since. I specialize in many genres of music but I have a specific focus on Black Metal and Extreme Metal.
                        </p>
                        <p className="text-lg leading-relaxed text-beige font-body mb-4">
                           I utilise various bits of software and hardware to ensure your music sounds as professional as possible without breaking the bank. Notable artists I have worked with include Blackbraid, Mossgiver, and Woe Bather to name a few.
                        </p>
                        <p className="text-lg leading-relaxed text-beige font-body mb-4">
                            I am also available for other services such as audio editing/quantizing, cleaning up audio, and MIDI drum programming. Contact me below if you have any questions or to discuss custom pricing.
                        </p>
                        <p className="text-lg leading-relaxed text-beige font-body mb-8">
                            I hope to work with you and your vision for your next project!
                        </p>
                        <a href="mailto:neilschneideraudio@gmail.com" className="font-heading text-beige px-6 py-3 border-beige border-2 rounded hover:bg-beige hover:text-primary transition transition-all ease-in-out duration-300 text-lg">Get in Touch</a>
                    </div>
                </div>
                <div className="container mx-auto px-8">
                    <img src={imageNeil} alt="Portrait of Neil Schneider" className="rounded-lg shadow-lg w-full mx-auto" />
                </div>
            </div>
        </section>
    );
}

export default About
