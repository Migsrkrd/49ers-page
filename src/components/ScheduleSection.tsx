import React, { useState } from 'react'

interface Game {
  week: number
  date: string
  opponent: string
  location: 'HOME' | 'AWAY'
  time: string
  result?: string
  resultType?: 'W' | 'L' | 'T'
}

const schedule: Game[] = [
  { week: 1,  date: 'Sep 13, 2026', opponent: 'Los Angeles Rams',       location: 'HOME', time: '4:25 PM PT' },
  { week: 2,  date: 'Sep 20, 2026', opponent: 'Seattle Seahawks',       location: 'AWAY', time: '1:05 PM PT' },
  { week: 3,  date: 'Sep 27, 2026', opponent: 'Arizona Cardinals',      location: 'HOME', time: '1:05 PM PT' },
  { week: 4,  date: 'Oct 4, 2026',  opponent: 'Dallas Cowboys',         location: 'AWAY', time: '5:20 PM PT' },
  { week: 5,  date: 'Oct 11, 2026', opponent: 'Kansas City Chiefs',     location: 'HOME', time: '5:20 PM PT' },
  { week: 6,  date: 'Oct 18, 2026', opponent: 'Philadelphia Eagles',    location: 'AWAY', time: '10:00 AM PT' },
  { week: 7,  date: 'Oct 25, 2026', opponent: 'Green Bay Packers',      location: 'HOME', time: '1:05 PM PT' },
  { week: 8,  date: 'Nov 1, 2026',  opponent: 'BYE WEEK',               location: 'HOME', time: '—' },
  { week: 9,  date: 'Nov 8, 2026',  opponent: 'Minnesota Vikings',      location: 'AWAY', time: '10:00 AM PT' },
  { week: 10, date: 'Nov 15, 2026', opponent: 'Las Vegas Raiders',      location: 'HOME', time: '4:05 PM PT' },
  { week: 11, date: 'Nov 22, 2026', opponent: 'Los Angeles Chargers',   location: 'AWAY', time: '1:05 PM PT' },
  { week: 12, date: 'Nov 26, 2026', opponent: 'Detroit Lions',          location: 'HOME', time: '5:20 PM PT' },
  { week: 13, date: 'Dec 6, 2026',  opponent: 'Seattle Seahawks',       location: 'HOME', time: '1:05 PM PT' },
  { week: 14, date: 'Dec 13, 2026', opponent: 'Arizona Cardinals',      location: 'AWAY', time: '1:05 PM PT' },
  { week: 15, date: 'Dec 20, 2026', opponent: 'Baltimore Ravens',       location: 'HOME', time: '5:20 PM PT' },
  { week: 16, date: 'Dec 27, 2026', opponent: 'Los Angeles Rams',       location: 'AWAY', time: '1:05 PM PT' },
  { week: 17, date: 'Jan 3, 2027',  opponent: 'New Orleans Saints',     location: 'HOME', time: '1:05 PM PT' },
  { week: 18, date: 'Jan 10, 2027', opponent: 'Denver Broncos',         location: 'AWAY', time: '1:05 PM PT' },
]

const TEAM_COLORS: Record<string, string> = {
  'Los Angeles Rams': '#003594',
  'Seattle Seahawks': '#002244',
  'Arizona Cardinals': '#97233F',
  'Dallas Cowboys': '#003594',
  'Kansas City Chiefs': '#E31837',
  'Philadelphia Eagles': '#004C54',
  'Green Bay Packers': '#203731',
  'Minnesota Vikings': '#4F2683',
  'Las Vegas Raiders': '#000000',
  'Los Angeles Chargers': '#0080C6',
  'Detroit Lions': '#0076B6',
  'Baltimore Ravens': '#241773',
  'New Orleans Saints': '#D3BC8D',
  'Denver Broncos': '#FB4F14',
  'BYE WEEK': '#333333',
}

export default function ScheduleSection() {
  const [filter, setFilter] = useState<'ALL' | 'HOME' | 'AWAY'>('ALL')

  const filtered = schedule.filter(g =>
    filter === 'ALL' || g.location === filter || g.opponent === 'BYE WEEK'
  )

  return (
    <section id="schedule" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#AA0000]" />
            <span className="font-oswald text-[#B3995D] text-sm tracking-[0.25em] font-medium">2026–2027</span>
          </div>
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white tracking-tight mb-6">
            SEASON SCHEDULE
          </h2>

          {/* Filter tabs */}
          <div className="flex gap-2">
            {(['ALL', 'HOME', 'AWAY'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-oswald font-medium tracking-wider text-sm px-5 py-2 rounded transition-all duration-200 ${
                  filter === f
                    ? 'bg-[#AA0000] text-white'
                    : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule list */}
        <div className="space-y-2">
          {filtered.map((game) => {
            const isBye = game.opponent === 'BYE WEEK'
            const accentColor = TEAM_COLORS[game.opponent] ?? '#555'

            return (
              <div
                key={game.week}
                className={`group relative flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
                  isBye
                    ? 'border-white/5 bg-white/[0.02] opacity-50'
                    : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/10 cursor-pointer'
                }`}
              >
                {/* Left accent bar */}
                {!isBye && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  />
                )}

                {/* Week number */}
                <div className="w-12 text-center flex-shrink-0">
                  <div className="font-oswald font-bold text-lg text-white/20">
                    {isBye ? '—' : `W${game.week}`}
                  </div>
                </div>

                {/* Date */}
                <div className="w-32 flex-shrink-0 hidden sm:block">
                  <div className="font-oswald text-sm text-white/60 font-medium">{game.date}</div>
                </div>

                {/* Opponent */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {!isBye && (
                      <span className={`font-oswald text-xs font-semibold tracking-wider px-2 py-0.5 rounded ${
                        game.location === 'HOME'
                          ? 'bg-[#AA0000]/20 text-[#ff6666]'
                          : 'bg-white/10 text-white/50'
                      }`}>
                        {game.location === 'HOME' ? 'HOME' : 'AWAY'}
                      </span>
                    )}
                    <span className="font-oswald font-semibold text-base sm:text-lg text-white truncate">
                      {isBye ? 'BYE WEEK' : (game.location === 'AWAY' ? '@ ' : 'vs ') + game.opponent}
                    </span>
                  </div>
                  <div className="sm:hidden font-oswald text-xs text-white/40 mt-0.5">{game.date}</div>
                </div>

                {/* Time */}
                <div className="flex-shrink-0 text-right">
                  {game.result ? (
                    <span className={`font-oswald font-bold text-lg ${
                      game.resultType === 'W' ? 'text-green-400' :
                      game.resultType === 'L' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {game.result}
                    </span>
                  ) : (
                    <span className="font-oswald text-sm text-white/40">{game.time}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
