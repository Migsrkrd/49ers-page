import React from 'react'

interface NewsItem {
  id: string
  category: string
  headline: string
  summary: string
  date: string
  featured?: boolean
}

const news: NewsItem[] = [
  {
    id: '1',
    category: 'OFFSEASON',
    headline: 'Brock Purdy Signs Record Extension, Commits to 49ers Through 2030',
    summary: 'The franchise quarterback inks a landmark deal, cementing his future in Santa Clara and signaling the organization\'s full commitment to a Super Bowl run.',
    date: 'Mar 15, 2026',
    featured: true,
  },
  {
    id: '2',
    category: 'DRAFT',
    headline: '49ers Select Elite Pass Rusher with 12th Overall Pick in 2026 NFL Draft',
    summary: 'General Manager John Lynch adds another weapon to an already formidable defensive front, pairing the rookie with All-Pro Nick Bosa.',
    date: 'Apr 24, 2026',
  },
  {
    id: '3',
    category: 'TRAINING CAMP',
    headline: 'Christian McCaffrey Returns to Full Practice, Cleared for Season Opener',
    summary: 'The All-Pro running back looked explosive in his first full-contact session, easing concerns after a late offseason procedure.',
    date: 'Aug 3, 2026',
  },
  {
    id: '4',
    category: 'ROSTER MOVE',
    headline: 'George Kittle Named Team Captain for Fifth Consecutive Season',
    summary: 'The All-Pro tight end continues to lead by example, earning the honor from teammates and coaching staff ahead of the 2026 campaign.',
    date: 'Sep 1, 2026',
  },
  {
    id: '5',
    category: 'COMMUNITY',
    headline: '49ers Foundation Launches $5M Youth Football Initiative Across Bay Area',
    summary: 'The organization expands its community footprint with new programs in underserved neighborhoods, aiming to reach 50,000 youth athletes.',
    date: 'Jul 20, 2026',
  },
  {
    id: '6',
    category: 'COACHING',
    headline: 'Kyle Shanahan Enters Season with Revamped Offensive Scheme',
    summary: 'The head coach previews a more dynamic passing attack built around Purdy\'s improved deep ball and a new crop of receiving weapons.',
    date: 'Aug 18, 2026',
  },
]

const categoryColors: Record<string, string> = {
  OFFSEASON: 'text-blue-400 bg-blue-900/30',
  DRAFT: 'text-purple-400 bg-purple-900/30',
  'TRAINING CAMP': 'text-green-400 bg-green-900/30',
  'ROSTER MOVE': 'text-yellow-400 bg-yellow-900/30',
  COMMUNITY: 'text-teal-400 bg-teal-900/30',
  COACHING: 'text-orange-400 bg-orange-900/30',
}

export default function NewsSection() {
  const featured = news.find(n => n.featured)
  const rest = news.filter(n => !n.featured)

  return (
    <section id="news" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#AA0000]" />
            <span className="font-oswald text-[#B3995D] text-sm tracking-[0.25em] font-medium">LATEST</span>
          </div>
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white tracking-tight">
            NEWS & UPDATES
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured story */}
          {featured && (
            <div className="lg:col-span-2 group relative rounded-2xl border border-[#AA0000]/20 bg-gradient-to-br from-[#AA0000]/10 via-[#0d0d0d] to-[#B3995D]/5 p-8 card-hover cursor-pointer overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#AA0000]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-oswald text-xs font-semibold tracking-wider px-3 py-1 rounded-full ${categoryColors[featured.category] ?? 'text-white/50 bg-white/10'}`}>
                    {featured.category}
                  </span>
                  <span className="font-oswald text-xs text-white/30 tracking-wide">{featured.date}</span>
                  <span className="font-oswald text-xs text-[#B3995D] bg-[#B3995D]/10 border border-[#B3995D]/20 px-2 py-0.5 rounded-full tracking-wider">
                    FEATURED
                  </span>
                </div>

                <h3 className="font-oswald font-bold text-2xl sm:text-3xl text-white leading-tight mb-4 group-hover:text-[#B3995D] transition-colors duration-200">
                  {featured.headline}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {featured.summary}
                </p>

                <div className="flex items-center gap-2 text-[#AA0000] group-hover:text-[#cc2222] transition-colors">
                  <span className="font-oswald font-semibold text-sm tracking-wider">READ MORE</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Side stories */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 3).map(item => (
              <div
                key={item.id}
                className="group rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/10 p-5 card-hover cursor-pointer transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-oswald text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${categoryColors[item.category] ?? 'text-white/50 bg-white/10'}`}>
                    {item.category}
                  </span>
                  <span className="font-oswald text-[10px] text-white/25 tracking-wide">{item.date}</span>
                </div>
                <h3 className="font-oswald font-semibold text-sm text-white leading-snug group-hover:text-[#B3995D] transition-colors duration-200">
                  {item.headline}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {rest.slice(3).map(item => (
            <div
              key={item.id}
              className="group rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/10 p-5 card-hover cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-oswald text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${categoryColors[item.category] ?? 'text-white/50 bg-white/10'}`}>
                  {item.category}
                </span>
                <span className="font-oswald text-[10px] text-white/25 tracking-wide">{item.date}</span>
              </div>
              <h3 className="font-oswald font-semibold text-sm text-white leading-snug group-hover:text-[#B3995D] transition-colors duration-200 mb-2">
                {item.headline}
              </h3>
              <p className="text-white/35 text-xs leading-relaxed line-clamp-2">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
