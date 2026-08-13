import React from 'react'

const stats = [
  { value: '6', label: 'NFC West Titles', sub: 'Last 5 Years' },
  { value: '5', label: 'Super Bowl', sub: 'Appearances' },
  { value: '75+', label: 'Years of', sub: 'Excellence' },
  { value: '#1', label: 'Levi\'s Stadium', sub: 'Capacity 68,500' },
]

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 bg-[#0d0d0d] border-y border-white/5">
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B3995D]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] px-8 py-10 text-center group hover:bg-[#AA0000]/10 transition-colors duration-300"
            >
              <div className="font-oswald font-bold text-5xl lg:text-6xl text-[#AA0000] mb-2 group-hover:text-[#cc2222] transition-colors">
                {stat.value}
              </div>
              <div className="font-oswald font-semibold text-white text-sm tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-white/40 text-xs tracking-wide">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B3995D]/50 to-transparent" />
    </section>
  )
}
