"use client"

import { useState } from "react"
import { Play, Plus, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function PremiumFeaturedSection() {
  const [activeTab, setActiveTab] = useState("exclusive")

  const tabs = [
    { id: "exclusive", label: "OTT-Demo Exclusives", icon: "👑" },
    { id: "trending", label: "Trending This Week", icon: "🔥" },
    { id: "awards", label: "Award Winners", icon: "🏆" },
  ]

  const exclusiveContent = [
    {
      id: 1,
      title: "The Crown: Behind the Scenes",
      thumbnail: "/images/tablet-streaming.jpg",
      type: "Documentary",
      rating: 9.2,
      description: "An exclusive look into the making of the acclaimed series",
      badge: "OTT-Demo Original",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Stranger Things: The Phenomenon",
      thumbnail: "/images/young-man-movie-night.jpg",
      type: "Documentary",
      rating: 8.8,
      description: "Exploring the cultural impact of the hit series",
      badge: "Exclusive Content",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 3,
      title: "Director's Cut Collection",
      thumbnail: "/images/laptop-streaming.jpg",
      type: "Collection",
      rating: 9.0,
      description: "Uncut versions of your favorite films",
      badge: "Premium Only",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Featured Collections</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
        <p className="text-gray-400">Curated content just for you</p>
      </div>

      {/* Premium Tabs */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            className={`${
              activeTab === tab.id
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                : "border-gray-600/50 text-gray-300 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 hover:border-red-500/50 hover:text-white bg-gray-800/30 backdrop-blur-sm"
            } transition-all duration-300 px-6 py-3`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Featured Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exclusiveContent.map((item) => (
          <Card
            key={item.id}
            className="group cursor-pointer bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Premium gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Exclusive badge */}
              <Badge
                className={`absolute top-3 left-3 bg-gradient-to-r ${item.color} text-white backdrop-blur-sm shadow-lg`}
              >
                ✨ {item.badge}
              </Badge>

              {/* Rating */}
              <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">{item.rating}</span>
              </div>

              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-3">
                  <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-14 h-14">
                    <Play className="h-6 w-6 text-white fill-current" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 bg-transparent"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <CardContent className="p-5 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                    {item.type}
                  </Badge>
                  <Award className="h-4 w-4 text-yellow-500" />
                </div>

                <h3 className="font-semibold text-white text-lg group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
