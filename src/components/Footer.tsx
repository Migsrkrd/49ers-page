import React from 'react'

const footerLinks = {
  Team: ['Roster', 'Coaching Staff', 'Front Office', 'Practice Squad'],
  Schedule: ['2026 Season', 'Preseason', 'Playoffs', 'Super Bowl LXI'],
  Stadium: ['Levi\'s Stadium', 'Directions', 'Parking', 'Accessibility'],
  Community: ['49ers Foundation', 'Youth Football', 'Events', 'Volunteer'],
}

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Top CTA band */}
      <div className="bg-[#AA0000] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-oswald font-bold text-3xl sm:text-4xl text-white mb-3 tracking-tight">
            JOIN THE FAITHFUL
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Get exclusive access to tickets, merchandise, and behind-the-scenes content from Levi's Stadium.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 font-oswald text-sm focus:outline-none focus:border-white/50 transition-colors"
            />
            <button className="font-oswald font-semibold tracking-wider text-sm px-6 py-3 bg-[#B3995D] hover:bg-[#c9b070] text-[#0a0a0a] rounded transition-colors whitespace-nowrap">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 2L4 10V22C4 30.5 11 37.5 20 40C29 37.5 36 30.5 36 22V10L20 2Z" fill="#AA0000"/>
                  <path d="M20 5L7 12V22C7 29.5 12.5 35.5 20 38C27.5 35.5 33 29.5 33 22V12L20 5Z" fill="#8B0000"/>
                  <text x="20" y="26" textAnchor="middle" fill="#B3995D" fontSize="14" fontWeight="700" fontFamily="Oswald, sans-serif">SF</text>
                </svg>
              </div>
              <div>
                <div className="font-oswald font-bold text-white text-sm leading-none">SAN FRANCISCO</div>
                <div className="font-oswald text-[#B3995D] text-xs tracking-[0.2em]">49ERS</div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
              Levi's Stadium<br />
              4900 Marie P DeBartolo Way<br />
              Santa Clara, CA 95054
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-oswald font-semibold text-white text-sm tracking-wider mb-4">{category.toUpperCase()}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/35 hover:text-[#B3995D] text-xs transition-colors duration-200 font-oswald tracking-wide">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-oswald tracking-wide">
            © 2026 San Francisco 49ers. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(link => (
              <a key={link} href="#" className="text-white/20 hover:text-white/50 text-xs font-oswald tracking-wide transition-colors">
                {link}
              </a>
            ))}
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: 'Twitter/X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            ].map(social => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#AA0000]/30 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 text-white/40 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
