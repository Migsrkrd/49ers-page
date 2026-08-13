import React from 'react'
import HeroSection from '@/components/HeroSection'
import ScheduleSection from '@/components/ScheduleSection'
import RosterSection from '@/components/RosterSection'
import StatsSection from '@/components/StatsSection'
import NewsSection from '@/components/NewsSection'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavBar />
      <main>
        <HeroSection />
        <StatsSection />
        <ScheduleSection />
        <RosterSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}

//hteahteah
