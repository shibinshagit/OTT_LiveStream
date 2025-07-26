"use client"

import { useState } from "react"
import { Search, Star, Calendar, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TVShowsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const genres = [
    "All",
    "Drama",
    "Comedy",
    "Action",
    "Thriller",
    "Sci-Fi",
    "Horror",
    "Romance",
    "Documentary",
    "Reality",
  ]

  const tvShows = [
    {
      id: 1,
      title: "Stranger Things",
      thumbnail: "/images/tablet-streaming.jpg",
      type: "series",
      rating: "U/A 16+",
      year: "2016-2025",
      seasons: 5,
      episodes: 42,
      genre: ["Sci-Fi", "Horror", "Drama"],
      imdbRating: 8.7,
      status: "Ongoing",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    },
    {
      id: 2,
      title: "The Crown",
      thumbnail: "/images/laptop-streaming.jpg",
      type: "series",
      rating: "U/A 16+",
      year: "2016-2023",
      seasons: 6,
      episodes: 60,
      genre: ["Drama", "Biography", "History"],
      imdbRating: 8.6,
      status: "Completed",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
    },
    {
      id: 3,
      title: "Wednesday",
      thumbnail: "/images/young-man-movie-night.jpg",
      type: "series",
      rating: "U/A 16+",
      year: "2022-Present",
      seasons: 2,
      episodes: 16,
      genre: ["Comedy", "Horror", "Mystery"],
      imdbRating: 8.1,
      status: "Ongoing",
      description: "Follows Wednesday Addams' years as a student at Nevermore Academy.",
    },
    {
      id: 4,
      title: "The Bear",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 18+",
      year: "2022-Present",
      seasons: 3,
      episodes: 28,
      genre: ["Comedy", "Drama"],
      imdbRating: 8.7,
      status: "Ongoing",
      description: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
    },
    {
      id: 5,
      title: "House of the Dragon",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 18+",
      year: "2022-Present",
      seasons: 2,
      episodes: 18,
      genre: ["Action", "Adventure", "Drama"],
      imdbRating: 8.4,
      status: "Ongoing",
      description: "An internal succession war within House Targaryen at the height of its power.",
    },
    {
      id: 6,
      title: "The Last of Us",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "series",
      rating: "U/A 18+",
      year: "2023-Present",
      seasons: 2,
      episodes: 19,
      genre: ["Action", "Adventure", "Drama"],
      imdbRating: 8.8,
      status: "Ongoing",
      description: "Joel and Ellie, a pair connected by a harsh world, are forced to endure brutal circumstances.",
    },
  ]

  const filteredShows = tvShows.filter((show) => {
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre =
      selectedGenre === "all" || show.genre.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
    const matchesStatus = selectedStatus === "all" || show.status.toLowerCase() === selectedStatus.toLowerCase()
    return matchesSearch && matchesGenre && matchesStatus
  })

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">TV Shows</h1>
        <p className="text-gray-400">Binge-watch the best TV series and shows</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          />
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-3">
          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre.toLowerCase()} className="text-white">
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all" className="text-white">
                All Status
              </SelectItem>
              <SelectItem value="ongoing" className="text-white">
                Ongoing
              </SelectItem>
              <SelectItem value="completed" className="text-white">
                Completed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2">
          {genres.slice(1).map((genre) => (
            <Button
              key={genre}
              variant={selectedGenre === genre.toLowerCase() ? "default" : "outline"}
              size="sm"
              className={`${
                selectedGenre === genre.toLowerCase()
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              } transition-colors duration-200`}
              onClick={() => setSelectedGenre(genre.toLowerCase())}
            >
              {genre}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          {filteredShows.length} TV show{filteredShows.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* TV Shows Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
        {filteredShows.map((show) => (
          <div key={show.id} className="space-y-3">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={show.thumbnail || "/placeholder.svg"}
                  alt={show.title}
                  className="w-full h-64 md:h-72 object-cover"
                />

                {/* Status Badge */}
                <Badge
                  variant="secondary"
                  className={`absolute top-2 left-2 text-xs ${
                    show.status === "Ongoing" ? "bg-green-600 text-white" : "bg-blue-600 text-white"
                  }`}
                >
                  {show.status}
                </Badge>

                {/* IMDB Rating */}
                <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/70 rounded px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{show.imdbRating}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <Play className="h-6 w-6 text-white fill-current" />
                  </Button>
                </div>
              </div>

              {/* Show Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-sm line-clamp-2">{show.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  <span>{show.year}</span>
                </div>
                <div className="text-xs text-gray-400">
                  {show.seasons} Season{show.seasons > 1 ? "s" : ""} • {show.episodes} Episodes
                </div>
                <div className="flex flex-wrap gap-1">
                  {show.genre.slice(0, 2).map((g) => (
                    <Badge key={g} variant="outline" className="text-xs border-gray-600 text-gray-400">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
          Load More TV Shows
        </Button>
      </div>
    </div>
  )
}
