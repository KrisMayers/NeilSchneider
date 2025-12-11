import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

function App() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <Portfolio />
        <About />
        <Footer />
      </div>
    )
}

export default App