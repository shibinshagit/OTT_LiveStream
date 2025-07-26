"use client"

import { Play, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ContinueWatching() {
  const continueWatchingItems = [
    {
      id: 1,
      title: "Breaking Bad",
      episode: "S3 E7 - One Minute",
      thumbnail: "/images/young-man-movie-night.jpg",
      progress: 65,
      timeLeft: "25 min left",
    },
    {
      id: 2,
      title: "The Office",
      episode: "S2 E12 - The Injury",
      thumbnail: "/images/tablet-streaming.jpg",
      progress: 30,
      timeLeft: "18 min left",
    },
    {
      id: 3,
      title: "Stranger Things",
      episode: "S4 E9 - The Piggyback",
      thumbnail: "/images/laptop-streaming.jpg",
      progress: 80,
      timeLeft: "12 min left",
    },
  ]

  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-white">Continue Watching</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {continueWatchingItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white fill-current" />
                </Button>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <Progress value={item.progress} className="h-1 bg-gray-700" />
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.episode}</p>
                  <p className="text-xs text-gray-500">{item.timeLeft}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
