"use client"

import { useState, useEffect } from "react"
import { Home, Film, Tv, Play, Radio, User } from "lucide-react"
import Header from "@/components/organisms/Header"
import HomePage from "@/components/pages/HomePage"
import MoviesPage from "@/components/pages/MoviesPage"
import TVShowsPage from "@/components/pages/TVShowsPage"
import WebSeriesPage from "@/components/pages/WebSeriesPage"
import LivePage from "@/components/pages/LivePage"
import ProfilePage from "@/components/pages/ProfilePage"

const tabs = [
  { id: "home", label: "Home", icon: Home, component: HomePage },
  { id: "movies", label: "Movies", icon: Film, component: MoviesPage },
  { id: "tv-shows", label: "TV Shows", icon: Tv, component: TVShowsPage },
  { id: "web-series", label: "Web Series", icon: Play, component: WebSeriesPage },
  { id: "live", label: "Live", icon: Radio, component: LivePage },
  { id: "profile", label: "Profile", icon: User, component: ProfilePage },
]

export default function MobileLayout() {
  const [activeTab, setActiveTab] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || HomePage

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header
        showMobileMenu={isMobile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        isMobile={isMobile}
      />

      <main className={`${isMobile ? "pb-20" : ""}`}>
        <ActiveComponent />
      </main>

      {/* Bottom Navigation for Mobile/Tablet */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 z-50">
          <div className="grid grid-cols-6 h-16">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                    isActive ? "text-red-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "fill-current" : ""}`} />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      )}
    </div>
  )
}
