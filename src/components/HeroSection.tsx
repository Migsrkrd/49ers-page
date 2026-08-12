import React, { useState } from 'react'

export default function HeroSection() {
  const [showEventsModal, setShowEventsModal] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(179,153,93,1) 1px, transparent 1px), linear-gradient(90deg, rgba(179,153,93,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large decorative "49" */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden">
        <span
          className="font-oswald font-bold text-[28vw] leading-none text-white/[0.03]"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          49
        </span>
      </div>

      {/* Red diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#AA0000] via-[#B3995D] to-[#AA0000]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Season badge */}
        <div className="fade-in-up delay-100 inline-flex items-center gap-2 bg-[#AA0000]/20 border border-[#AA0000]/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#AA0000] animate-pulse" />
          <span className="font-oswald text-sm tracking-[0.2em] text-[#B3995D] font-medium">2026–2027 NFL SEASON</span>
        </div>

        {/* Main headline */}
        <h1 className="fade-in-up delay-200 font-oswald font-bold leading-none mb-4">
          <span className="block text-5xl sm:text-7xl lg:text-9xl text-white tracking-tight">
            SAN FRANCISCO
          </span>
          <span className="block text-6xl sm:text-8xl lg:text-[10rem] gold-shimmer tracking-tight">
            49ERS
          </span>
        </h1>

        {/* Tagline */}
        <p className="fade-in-up delay-300 font-oswald text-xl sm:text-2xl lg:text-3xl text-white/60 tracking-[0.15em] mb-12 font-medium">
          FAITHFUL TO THE BAY
        </p>

        {/* CTA buttons */}
        <div className="fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-oswald font-semibold tracking-wider text-base px-8 py-4 bg-[#AA0000] hover:bg-[#cc0000] text-white rounded transition-all duration-200 red-glow hover:scale-105 w-full sm:w-auto"
          >
            VIEW SCHEDULE
          </button>
          <button
            onClick={() => document.getElementById('roster')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-oswald font-semibold tracking-wider text-base px-8 py-4 bg-transparent border border-[#B3995D]/50 hover:border-[#B3995D] text-[#B3995D] hover:text-white hover:bg-[#B3995D]/10 rounded transition-all duration-200 w-full sm:w-auto"
          >
            MEET THE ROSTER
          </button>
          <button
            onClick={() => setShowEventsModal(true)}
            className="font-oswald font-semibold tracking-wider text-base px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white/60 hover:text-white hover:bg-white/5 rounded transition-all duration-200 w-full sm:w-auto"
          >
            SUBSCRIBE
          </button>
        </div>

        {/* Events Coming Soon Modal */}
        {showEventsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setShowEventsModal(false)}
          >
            <div
              className="relative bg-[#111] border border-[#B3995D]/40 rounded-lg px-10 py-10 max-w-sm w-full mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B3995D] to-transparent rounded-t-lg" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#AA0000]/20 border border-[#AA0000]/40 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#AA0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="font-oswald text-2xl font-bold text-white tracking-wider mb-2">EVENTS</h2>
              <p className="font-oswald text-[#B3995D] tracking-[0.2em] text-sm mb-1">COMING SOON</p>
              <p className="text-white/40 text-sm mt-3 leading-relaxed">
                Stay tuned — 2026–2027 season events will be announced here.
              </p>

              <button
                onClick={() => setShowEventsModal(false)}
                className="mt-7 font-oswald font-semibold tracking-wider text-sm px-7 py-3 bg-[#AA0000] hover:bg-[#cc0000] text-white rounded transition-all duration-200 red-glow"
              >
                GOT IT
              </button>
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="fade-in-up delay-500 mt-20 flex flex-col items-center gap-2 text-white/30">
          <span className="font-oswald text-xs tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
