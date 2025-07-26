"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentCard from "@/components/molecules/ContentCard"

interface ContentGridProps {
  title: string
  category: string
}

export default function ContentGrid({ title, category }: ContentGridProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  // Mock data - in real app, this would come from API
  const content = [
    {
      id: 1,
      title: "Stranger Things",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 16+",
      year: "2023",
      duration: "45m",
    },
    {
      id: 2,
      title: "The Batman",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2022",
      duration: "2h 56m",
    },
    {
      id: 3,
      title: "Money Heist",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 16+",
      year: "2023",
      duration: "50m",
    },
    {
      id: 4,
      title: "Dune",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2021",
      duration: "2h 35m",
    },
    {
      id: 5,
      title: "The Witcher",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 18+",
      year: "2023",
      duration: "60m",
    },
    {
      id: 6,
      title: "Spider-Man",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2021",
      duration: "2h 28m",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`content-${category}`)
    if (container) {
      const scrollAmount = 300
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount

      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        <div className="hidden md:flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => scroll("left")} className="text-gray-400 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="text-gray-400 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        id={`content-${category}`}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {content.map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </section>
  )
}
