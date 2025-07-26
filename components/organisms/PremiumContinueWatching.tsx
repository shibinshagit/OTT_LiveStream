"use client"

import { Play, MoreHorizontal, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PremiumContinueWatching() {
  const continueWatchingItems = [
    {
      id: 1,
      title: "Breaking Bad",
      episode: "S3 E7 - One Minute",
      thumbnail: "/images/young-man-movie-night.jpg",
      progress: 65,
      timeLeft: "25 min left",
      totalDuration: "47 min",
    },
    {
      id: 2,
      title: "The Office",
      episode: "S2 E12 - The Injury",
      thumbnail: "/images/tablet-streaming.jpg",
      progress: 30,
      timeLeft: "18 min left",
      totalDuration: "22 min",
    },
    {
      id: 3,
      title: "Stranger Things",
      episode: "S4 E9 - The Piggyback",
      thumbnail: "/images/laptop-streaming.jpg",
      progress: 80,
      timeLeft: "12 min left",
      totalDuration: "85 min",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Continue Watching</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
        <p className="text-gray-400">Pick up where you left off</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {continueWatchingItems.map((item) => (
          <Card
            key={item.id}
            className="group cursor-pointer bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0">
                <Progress value={item.progress} className="h-1 bg-gray-700/50 rounded-none" />
              </div>

              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-16 h-16">
                  <Play className="h-8 w-8 text-white fill-current" />
                </Button>
              </div>

              {/* Time badge */}
              <Badge className="absolute top-3 right-3 bg-black/70 text-white backdrop-blur-sm">
                <Clock className="h-3 w-3 mr-1" />
                {item.timeLeft}
              </Badge>
            </div>

            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold text-white text-lg group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.episode}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{item.progress}% complete</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full" />
                    <span>{item.totalDuration}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
