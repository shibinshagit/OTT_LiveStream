"use client"

import PremiumHeroSection from "@/components/organisms/PremiumHeroSection"
import PremiumContentGrid from "@/components/organisms/PremiumContentGrid"
import PremiumCategoriesSection from "@/components/organisms/PremiumCategoriesSection"
import PremiumContinueWatching from "@/components/organisms/PremiumContinueWatching"
import PremiumFeaturedSection from "@/components/organisms/PremiumFeaturedSection"
import Footer from "@/components/organisms/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <PremiumHeroSection />
      <div className="relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 pointer-events-none" />

        <div className="relative px-4 md:px-6 lg:px-8 space-y-12 pb-16">
          <PremiumContinueWatching />
          <PremiumFeaturedSection />
          <PremiumContentGrid title="Trending Now" category="trending" />
          <PremiumContentGrid title="New Releases" category="new" />
          <PremiumCategoriesSection />
          <PremiumContentGrid title="Popular Movies" category="movies" />
          <PremiumContentGrid title="Exclusive Web Series" category="series" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
