"use client"

import { useState } from "react"
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface ContentCardProps {
  content: {
    id: number
    title: string
    thumbnail: string
    type: string
    rating: string
    year: string
    duration: string
  }
}

export default function ContentCard({ content }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // For the first few items, use the provided images
  const getRandomThumbnail = (id: number) => {
    const images = ["/images/young-man-movie-night.jpg", "/images/tablet-streaming.jpg", "/images/laptop-streaming.jpg"]
    return images[id % 3] || content.thumbnail
  }

  return (
    <div
      className="relative flex-shrink-0 w-48 md:w-56 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
        <img
          src={getRandomThumbnail(content.id) || "/placeholder.svg"}
          alt={content.title}
          className="w-full h-72 object-cover"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <Play className="h-6 w-6 text-white fill-current" />
            </Button>
          </div>
        </div>

        {/* Type badge */}
        <Badge variant="secondary" className="absolute top-2 left-2 bg-black/70 text-white text-xs">
          {content.type.toUpperCase()}
        </Badge>
      </div>

      {/* Content info */}
      <div className="mt-3 space-y-2">
        <h3 className="font-semibold text-white text-sm line-clamp-2">{content.title}</h3>
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <span>{content.year}</span>
          <span>•</span>
          <span>{content.rating}</span>
          <span>•</span>
          <span>{content.duration}</span>
        </div>
      </div>

      {/* Hover card for more details */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="absolute inset-0" />
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-gray-800 border-gray-700 text-white">
          <div className="space-y-3">
            <h4 className="font-semibold">{content.title}</h4>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>{content.year}</span>
              <span>•</span>
              <span>{content.rating}</span>
              <span>•</span>
              <span>{content.duration}</span>
            </div>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                <Play className="mr-1 h-4 w-4 fill-current" />
                Play
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                <Plus className="mr-1 h-4 w-4" />
                List
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
