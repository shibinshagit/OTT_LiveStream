"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface PremiumContentGridProps {
  title: string
  category: string
}

export default function PremiumContentGrid({ title, category }: PremiumContentGridProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const content = [
    {
      id: 1,
      title: "Stranger Things",
      thumbnail: "/images/young-man-movie-night.jpg",
      type: "series",
      rating: "U/A 16+",
      year: "2023",
      duration: "45m",
      imdbRating: 8.7,
      genre: ["Sci-Fi", "Horror"],
    },
    {
      id: 2,
      title: "The Batman",
      thumbnail: "/images/tablet-streaming.jpg",
      type: "movie",
      rating: "U/A 13+",
      year: "2022",
      duration: "2h 56m",
      imdbRating: 7.8,
      genre: ["Action", "Crime"],
    },
    {
      id: 3,
      title: "Money Heist",
      thumbnail: "/images/laptop-streaming.jpg",
      type: "series",
      rating: "U/A 16+",
      year: "2023",
      duration: "50m",
      imdbRating: 8.3,
      genre: ["Crime", "Drama"],
    },
    {
      id: 4,
      title: "Dune",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2021",
      duration: "2h 35m",
      imdbRating: 8.0,
      genre: ["Sci-Fi", "Adventure"],
    },
    {
      id: 5,
      title: "The Witcher",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 18+",
      year: "2023",
      duration: "60m",
      imdbRating: 8.2,
      genre: ["Fantasy", "Action"],
    },
    {
      id: 6,
      title: "Spider-Man",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2021",
      duration: "2h 28m",
      imdbRating: 8.4,
      genre: ["Action", "Adventure"],
    },
  ]

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`content-${category}`)
    if (container) {
      const scrollAmount = 400
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount

      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="space-y-6 group">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
        </div>

        <div className="hidden md:flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Content Carousel */}
      <div
        id={`content-${category}`}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {content.map((item, index) => (
          <Card
            key={item.id}
            className="flex-shrink-0 w-64 md:w-72 bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group/card cursor-pointer"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover/card:scale-110"
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

              {/* Rating badge */}
              <Badge
                variant="secondary"
                className="absolute top-3 left-3 bg-black/70 text-white text-xs backdrop-blur-sm"
              >
                {item.rating}
              </Badge>

              {/* IMDB Rating */}
              <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs font-medium">{item.imdbRating}</span>
              </div>

              {/* Hover controls */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
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
                <h3 className="font-semibold text-white text-lg line-clamp-1 group-hover/card:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <span>{item.year}</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span>{item.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.genre.map((g) => (
                    <Badge
                      key={g}
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400 transition-colors"
                    >
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
