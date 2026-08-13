import React, { useEffect, useState } from 'react'

const links = [
  { id: 'schedule', label: 'Schedule' },
  { id: 'roster', label: 'Roster' },
  { id: 'stats', label: 'Stats' },
  { id: 'news', label: 'News' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            {/* SF Shield SVG */}
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20 2L4 10V22C4 30.5 11 37.5 20 40C29 37.5 36 30.5 36 22V10L20 2Z" fill="#AA0000"/>
                <path d="M20 5L7 12V22C7 29.5 12.5 35.5 20 38C27.5 35.5 33 29.5 33 22V12L20 5Z" fill="#8B0000"/>
                <text x="20" y="26" textAnchor="middle" fill="#B3995D" fontSize="14" fontWeight="700" fontFamily="Oswald, sans-serif">SF</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="font-oswald text-lg font-bold text-white leading-none tracking-wide">SAN FRANCISCO</div>
              <div className="font-oswald text-xs font-semibold tracking-[0.2em] text-[#B3995D]">49ERS</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-oswald font-medium tracking-wider text-sm px-4 py-2 rounded transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-[#B3995D] bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('schedule')}
              className="ml-4 font-oswald font-semibold tracking-wider text-sm px-5 py-2 bg-[#AA0000] hover:bg-[#cc0000] text-white rounded transition-colors duration-200"
            >
              GET TICKETS
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#111]/95 backdrop-blur-md border-t border-white/10 py-4 px-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left font-oswald font-medium tracking-wider text-sm px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('schedule')}
              className="mt-2 w-full font-oswald font-semibold tracking-wider text-sm px-4 py-3 bg-[#AA0000] hover:bg-[#cc0000] text-white rounded transition-colors"
            >
              GET TICKETS
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
