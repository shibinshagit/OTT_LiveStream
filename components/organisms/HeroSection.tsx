"use client"

import { useState } from "react"
import { Play, Plus, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const featuredContent = {
    title: "The Crown",
    description:
      "Follow the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    genre: ["Drama", "Historical", "Biography"],
    rating: "U/A 16+",
    year: "2023",
    duration: "55m",
    thumbnail: "/images/tablet-streaming.jpg",
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img src="/images/tablet-streaming.jpg" alt={featuredContent.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-4 md:px-6 lg:px-8 max-w-2xl">
          <div className="space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-red-600 text-white">
                Featured
              </Badge>
              <Badge variant="outline" className="border-gray-400 text-gray-300">
                {featuredContent.rating}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{featuredContent.title}</h1>

            {/* Metadata */}
            <div className="flex items-center space-x-4 text-gray-300">
              <span>{featuredContent.year}</span>
              <span>•</span>
              <span>{featuredContent.duration}</span>
              <span>•</span>
              <div className="flex space-x-2">
                {featuredContent.genre.map((g) => (
                  <span key={g}>{g}</span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">{featuredContent.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                Play Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-gray-800 bg-transparent"
              >
                <Plus className="mr-2 h-5 w-5" />
                My List
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-gray-800">
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
