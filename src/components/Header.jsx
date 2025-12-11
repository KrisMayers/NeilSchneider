function Header() {
  return (
    <header className="bg-primary text-beige py-4 shadow-md lg:fixed w-full z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold flex items-center gap-2 uppercase mx-auto md:ml-0 md:mr-auto">
          Neil Schneider
        </h1>
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-beige hover:opacity-80 transition-opacity font-heading">Home</a>
          <a href="#portfolio" className="text-beige hover:opacity-80 transition-opacity font-heading">Portfolio</a>
          <a href="#about" className="text-beige hover:opacity-80 transition-opacity font-heading">About</a>
          <a href="mailto:neilschneideraudio@gmail.com" className="text-beige hover:opacity-80 transition-opacity font-heading">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
