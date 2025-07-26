"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PremiumCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All", count: 1250, icon: "🎬", color: "from-red-500 to-pink-500" },
    { id: "action", label: "Action", count: 180, icon: "💥", color: "from-orange-500 to-red-500" },
    { id: "comedy", label: "Comedy", count: 95, icon: "😄", color: "from-yellow-500 to-orange-500" },
    { id: "drama", label: "Drama", count: 220, icon: "🎭", color: "from-purple-500 to-pink-500" },
    { id: "thriller", label: "Thriller", count: 150, icon: "🔥", color: "from-red-600 to-red-500" },
    { id: "romance", label: "Romance", count: 85, icon: "💕", color: "from-pink-500 to-rose-500" },
    { id: "horror", label: "Horror", count: 65, icon: "👻", color: "from-gray-600 to-gray-500" },
    { id: "sci-fi", label: "Sci-Fi", count: 120, icon: "🚀", color: "from-blue-500 to-cyan-500" },
    { id: "documentary", label: "Documentary", count: 75, icon: "📚", color: "from-green-500 to-emerald-500" },
  ]

  const languages = [
    { id: "hindi", label: "Hindi", flag: "🇮🇳" },
    { id: "english", label: "English", flag: "🇺🇸" },
    { id: "punjabi", label: "Punjabi", flag: "🇮🇳" },
    { id: "tamil", label: "Tamil", flag: "🇮🇳" },
    { id: "telugu", label: "Telugu", flag: "🇮🇳" },
    { id: "bengali", label: "Bengali", flag: "🇮🇳" },
  ]

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Browse by Category</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
        <p className="text-gray-400">Discover content tailored to your taste</p>
      </div>

      {/* Premium Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
              activeCategory === category.id
                ? "bg-gradient-to-br " + category.color + " border-transparent shadow-lg"
                : "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 backdrop-blur-sm"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <CardContent className="p-6 text-center space-y-3">
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="space-y-1">
                <h3
                  className={`font-semibold transition-colors ${
                    activeCategory === category.id ? "text-white" : "text-white group-hover:text-red-400"
                  }`}
                >
                  {category.label}
                </h3>
                <Badge
                  variant="secondary"
                  className={`text-xs ${
                    activeCategory === category.id ? "bg-white/20 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {category.count} titles
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Language Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <Button
              key={lang.id}
              variant="outline"
              className="border-gray-600/50 text-gray-300 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 hover:border-red-500/50 hover:text-white bg-gray-800/30 backdrop-blur-sm transition-all duration-300"
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
