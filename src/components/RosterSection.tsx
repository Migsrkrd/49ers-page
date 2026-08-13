import React, { useState } from 'react'

interface Player {
  number: string
  name: string
  position: string
  group: 'OFFENSE' | 'DEFENSE' | 'SPECIAL TEAMS'
  height: string
  weight: string
  college: string
  experience: string
  highlight?: boolean
}

const roster: Player[] = [
  // Offense
  { number: '10', name: 'Brock Purdy',        position: 'QB', group: 'OFFENSE',       height: '6\'1"', weight: '220 lbs', college: 'Iowa State',    experience: '4th Year',  highlight: true },
  { number: '23', name: 'Christian McCaffrey', position: 'RB', group: 'OFFENSE',       height: '5\'11"', weight: '205 lbs', college: 'Stanford',      experience: '10th Year', highlight: true },
  { number: '19', name: 'Deebo Samuel',        position: 'WR', group: 'OFFENSE',       height: '5\'11"', weight: '215 lbs', college: 'South Carolina', experience: '8th Year' },
  { number: '15', name: 'Jauan Jennings',      position: 'WR', group: 'OFFENSE',       height: '6\'3"',  weight: '215 lbs', college: 'Tennessee',     experience: '7th Year' },
  { number: '85', name: 'George Kittle',       position: 'TE', group: 'OFFENSE',       height: '6\'4"',  weight: '250 lbs', college: 'Iowa',          experience: '10th Year', highlight: true },
  { number: '74', name: 'Spencer Burford',     position: 'OG', group: 'OFFENSE',       height: '6\'5"',  weight: '310 lbs', college: 'UTSA',          experience: '5th Year' },
  { number: '65', name: 'Aaron Banks',         position: 'OG', group: 'OFFENSE',       height: '6\'5"',  weight: '330 lbs', college: 'Notre Dame',    experience: '6th Year' },
  // Defense
  { number: '97', name: 'Nick Bosa',           position: 'DE', group: 'DEFENSE',       height: '6\'4"',  weight: '266 lbs', college: 'Ohio State',    experience: '8th Year',  highlight: true },
  { number: '93', name: 'Javon Hargrave',      position: 'DT', group: 'DEFENSE',       height: '6\'2"',  weight: '305 lbs', college: 'South Carolina State', experience: '11th Year' },
  { number: '55', name: 'Dre Greenlaw',        position: 'LB', group: 'DEFENSE',       height: '6\'0"',  weight: '237 lbs', college: 'Arkansas',      experience: '8th Year' },
  { number: '54', name: 'Fred Warner',         position: 'LB', group: 'DEFENSE',       height: '6\'3"',  weight: '230 lbs', college: 'BYU',           experience: '9th Year',  highlight: true },
  { number: '8',  name: 'Charvarius Ward',     position: 'CB', group: 'DEFENSE',       height: '6\'1"',  weight: '198 lbs', college: 'Middle Tennessee', experience: '9th Year' },
  { number: '26', name: 'Talanoa Hufanga',     position: 'S',  group: 'DEFENSE',       height: '6\'0"',  weight: '215 lbs', college: 'USC',           experience: '6th Year' },
  // Special Teams
  { number: '9',  name: 'Jake Moody',          position: 'K',  group: 'SPECIAL TEAMS', height: '6\'1"',  weight: '185 lbs', college: 'Michigan',      experience: '4th Year' },
  { number: '4',  name: 'Mitch Wishnowsky',    position: 'P',  group: 'SPECIAL TEAMS', height: '6\'2"',  weight: '215 lbs', college: 'Utah',          experience: '8th Year' },
]

const groups = ['ALL', 'OFFENSE', 'DEFENSE', 'SPECIAL TEAMS'] as const
type GroupFilter = typeof groups[number]

const positionColors: Record<string, string> = {
  QB: 'bg-red-900/40 text-red-300',
  RB: 'bg-orange-900/40 text-orange-300',
  WR: 'bg-yellow-900/40 text-yellow-300',
  TE: 'bg-amber-900/40 text-amber-300',
  OG: 'bg-lime-900/40 text-lime-300',
  OT: 'bg-lime-900/40 text-lime-300',
  C:  'bg-lime-900/40 text-lime-300',
  DE: 'bg-blue-900/40 text-blue-300',
  DT: 'bg-indigo-900/40 text-indigo-300',
  LB: 'bg-purple-900/40 text-purple-300',
  CB: 'bg-pink-900/40 text-pink-300',
  S:  'bg-rose-900/40 text-rose-300',
  K:  'bg-teal-900/40 text-teal-300',
  P:  'bg-cyan-900/40 text-cyan-300',
}

export default function RosterSection() {
  const [filter, setFilter] = useState<GroupFilter>('ALL')

  const filtered = roster.filter(p => filter === 'ALL' || p.group === filter)

  return (
    <section id="roster" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#AA0000]" />
            <span className="font-oswald text-[#B3995D] text-sm tracking-[0.25em] font-medium">2026–2027</span>
          </div>
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white tracking-tight mb-6">
            ROSTER
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {groups.map(g => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`font-oswald font-medium tracking-wider text-sm px-5 py-2 rounded transition-all duration-200 ${
                  filter === g
                    ? 'bg-[#AA0000] text-white'
                    : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Roster grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((player) => (
            <div
              key={player.number + player.name}
              className={`relative group rounded-xl border p-5 transition-all duration-200 card-hover ${
                player.highlight
                  ? 'border-[#B3995D]/30 bg-gradient-to-br from-[#B3995D]/10 to-transparent'
                  : 'border-white/5 bg-white/[0.03] hover:border-white/10'
              }`}
            >
              {player.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="font-oswald text-[10px] tracking-[0.2em] text-[#B3995D] bg-[#B3995D]/10 border border-[#B3995D]/20 px-2 py-0.5 rounded-full">
                    PRO BOWL
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Jersey number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#AA0000]/15 border border-[#AA0000]/20 flex items-center justify-center">
                  <span className="font-oswald font-bold text-2xl text-[#AA0000]">
                    #{player.number}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-oswald text-xs font-semibold tracking-wider px-2 py-0.5 rounded ${positionColors[player.position] ?? 'bg-white/10 text-white/60'}`}>
                      {player.position}
                    </span>
                  </div>
                  <h3 className="font-oswald font-bold text-lg text-white leading-tight truncate">
                    {player.name}
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5">{player.college} · {player.experience}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-2">
                <div>
                  <div className="text-white/30 text-xs mb-0.5">HEIGHT</div>
                  <div className="font-oswald text-sm text-white/70">{player.height}</div>
                </div>
                <div>
                  <div className="text-white/30 text-xs mb-0.5">WEIGHT</div>
                  <div className="font-oswald text-sm text-white/70">{player.weight}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
