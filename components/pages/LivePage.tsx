"use client"

import { useState } from "react"
import { Radio, Users, Clock, Play, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LivePage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const liveChannels = [
    {
      id: 1,
      name: "OTT-Demo News",
      thumbnail: "/images/tablet-streaming.jpg",
      category: "News",
      viewers: 12500,
      isLive: true,
      description: "Breaking news and current affairs coverage 24/7",
      language: "Hindi",
    },
    {
      id: 2,
      name: "Sports Central",
      thumbnail: "/images/laptop-streaming.jpg",
      category: "Sports",
      viewers: 8900,
      isLive: true,
      description: "Live sports coverage and highlights",
      language: "English",
    },
    {
      id: 3,
      name: "Music Beats",
      thumbnail: "/images/young-man-movie-night.jpg",
      category: "Music",
      viewers: 5600,
      isLive: true,
      description: "Latest music videos and live performances",
      language: "Hindi",
    },
    {
      id: 4,
      name: "Comedy Club Live",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Entertainment",
      viewers: 3200,
      isLive: true,
      description: "Stand-up comedy and entertainment shows",
      language: "English",
    },
  ]

  const upcomingShows = [
    {
      id: 1,
      title: "IPL 2024 Final",
      thumbnail: "/placeholder.svg?height=150&width=250",
      startTime: "7:30 PM",
      date: "Today",
      category: "Sports",
      description: "The ultimate cricket showdown",
    },
    {
      id: 2,
      title: "Bollywood Awards Night",
      thumbnail: "/placeholder.svg?height=150&width=250",
      startTime: "8:00 PM",
      date: "Tomorrow",
      category: "Entertainment",
      description: "Celebrating the best of Bollywood",
    },
    {
      id: 3,
      title: "Tech Talk Live",
      thumbnail: "/placeholder.svg?height=150&width=250",
      startTime: "6:00 PM",
      date: "Dec 28",
      category: "Education",
      description: "Latest technology trends and innovations",
    },
  ]

  const categories = ["All", "News", "Sports", "Music", "Entertainment", "Education"]

  const filteredChannels =
    activeCategory === "all"
      ? liveChannels
      : liveChannels.filter((channel) => channel.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Live TV</h1>
        <p className="text-gray-400">Watch live channels and upcoming shows</p>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Radio className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold text-white">{liveChannels.length}</p>
                <p className="text-xs text-gray-400">Live Channels</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-white">30.2K</p>
                <p className="text-xs text-gray-400">Total Viewers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-white">{upcomingShows.length}</p>
                <p className="text-xs text-gray-400">Upcoming</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-gray-400">Available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger value="live" className="data-[state=active]:bg-red-600">
            Live Channels
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-red-600">
            Upcoming Shows
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category.toLowerCase() ? "default" : "outline"}
                size="sm"
                className={`${
                  activeCategory === category.toLowerCase()
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                } transition-colors duration-200`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Live Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredChannels.map((channel) => (
              <Card
                key={channel.id}
                className="bg-gray-800 border-gray-700 group cursor-pointer hover:border-red-500 transition-colors"
              >
                <div className="relative">
                  <img
                    src={channel.thumbnail || "/placeholder.svg"}
                    alt={channel.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />

                  {/* Live Badge */}
                  <div className="absolute top-2 left-2 flex items-center space-x-1 bg-red-600 rounded px-2 py-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-xs font-medium">LIVE</span>
                  </div>

                  {/* Viewers Count */}
                  <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/70 rounded px-2 py-1">
                    <Users className="h-3 w-3 text-white" />
                    <span className="text-white text-xs">{channel.viewers.toLocaleString()}</span>
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                    <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{channel.name}</h3>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {channel.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{channel.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{channel.language}</span>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Watch Live
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {/* Upcoming Shows */}
          <div className="space-y-4">
            {upcomingShows.map((show) => (
              <Card key={show.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-64 h-40 md:h-32">
                      <img
                        src={show.thumbnail || "/placeholder.svg"}
                        alt={show.title}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                      <Badge variant="secondary" className="absolute top-2 left-2 bg-blue-600 text-white text-xs">
                        {show.category}
                      </Badge>
                    </div>

                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">{show.title}</h3>
                        <p className="text-gray-400 text-sm">{show.description}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{show.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{show.startTime}</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        >
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              Load More Shows
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
