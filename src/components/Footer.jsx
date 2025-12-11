function Footer() {
  return (
    <footer className="bg-primary text-beige py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-xs font-body">
          © {new Date().getFullYear()} Neil Schneider. All rights reserved. Site made by Qwayl.
        </p>
      </div>
    </footer>
  )
}

export default Footer
