"use client"

import { useState } from "react"
import { Search, Star, Calendar, Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WebSeriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [selectedGenre, setSelectedGenre] = useState("all")

  const languages = ["All", "Hindi", "English", "Punjabi", "Tamil", "Telugu", "Bengali", "Marathi"]
  const genres = ["All", "Drama", "Comedy", "Thriller", "Romance", "Action", "Horror", "Mystery", "Crime"]

  const webSeries = [
    {
      id: 1,
      title: "Scam 1992",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "web-series",
      rating: "U/A 16+",
      year: "2020",
      seasons: 1,
      episodes: 10,
      language: "Hindi",
      genre: ["Drama", "Biography", "Crime"],
      imdbRating: 9.5,
      platform: "Original",
      description:
        "The story of Harshad Mehta, a stockbroker who single-handedly took the stock market to dizzying heights.",
    },
    {
      id: 2,
      title: "The Family Man",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "web-series",
      rating: "U/A 16+",
      year: "2019-2021",
      seasons: 2,
      episodes: 19,
      language: "Hindi",
      genre: ["Action", "Drama", "Thriller"],
      imdbRating: 8.7,
      platform: "Original",
      description:
        "A working man from the National Investigation Agency tries to protect the nation while keeping his family happy.",
    },
    {
      id: 3,
      title: "Mumbai Diaries 26/11",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "web-series",
      rating: "U/A 16+",
      year: "2021",
      seasons: 1,
      episodes: 8,
      language: "Hindi",
      genre: ["Drama", "Thriller"],
      imdbRating: 8.1,
      platform: "Original",
      description: "Doctors and nurses at a government hospital work tirelessly during the 26/11 Mumbai attacks.",
    },
    {
      id: 4,
      title: "Arya",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "web-series",
      rating: "U/A 18+",
      year: "2023",
      seasons: 1,
      episodes: 8,
      language: "Tamil",
      genre: ["Action", "Crime", "Thriller"],
      imdbRating: 7.9,
      platform: "Original",
      description: "A young man's journey from a small town to becoming one of the most feared gangsters.",
    },
    {
      id: 5,
      title: "Rocket Boys",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "web-series",
      rating: "U/A 13+",
      year: "2022",
      seasons: 1,
      episodes: 8,
      language: "Hindi",
      genre: ["Biography", "Drama", "History"],
      imdbRating: 8.9,
      platform: "Original",
      description: "The story of India's greatest scientists, Dr. Homi J. Bhabha and Dr. Vikram Sarabhai.",
    },
    {
      id: 6,
      title: "Grahan",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "web-series",
      rating: "U/A 16+",
      year: "2021",
      seasons: 1,
      episodes: 8,
      language: "Hindi",
      genre: ["Drama", "Mystery", "Thriller"],
      imdbRating: 8.1,
      platform: "Original",
      description: "A police officer investigates a case that leads him to question his own father's past.",
    },
  ]

  const filteredSeries = webSeries.filter((series) => {
    const matchesSearch = series.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLanguage =
      selectedLanguage === "all" || series.language.toLowerCase() === selectedLanguage.toLowerCase()
    const matchesGenre =
      selectedGenre === "all" || series.genre.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
    return matchesSearch && matchesLanguage && matchesGenre
  })

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Web Series</h1>
        <p className="text-gray-400">Exclusive original web series and digital content</p>
      </div>

      {/* Featured Section */}
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/images/laptop-streaming.jpg" alt="Featured Web Series" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-8 max-w-2xl">
            <Badge className="bg-red-600 text-white mb-3">Featured Original</Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Scam 1992</h2>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              The story of Harshad Mehta, a stockbroker who single-handedly took the stock market to dizzying heights.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">9.5</span>
              </div>
              <span className="text-gray-300">2020</span>
              <span className="text-gray-300">10 Episodes</span>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch Now
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search web series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          />
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-3">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-36 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {languages.map((language) => (
                <SelectItem key={language} value={language.toLowerCase()} className="text-white">
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
        </div>

        {/* Language Tags */}
        <div className="flex flex-wrap gap-2">
          {languages.slice(1).map((language) => (
            <Button
              key={language}
              variant={selectedLanguage === language.toLowerCase() ? "default" : "outline"}
              size="sm"
              className={`${
                selectedLanguage === language.toLowerCase()
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              } transition-colors duration-200`}
              onClick={() => setSelectedLanguage(language.toLowerCase())}
            >
              {language}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{filteredSeries.length} web series found</p>
      </div>

      {/* Web Series Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
        {filteredSeries.map((series) => (
          <div key={series.id} className="space-y-3">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={series.thumbnail || "/placeholder.svg"}
                  alt={series.title}
                  className="w-full h-64 md:h-72 object-cover"
                />

                {/* Original Badge */}
                <Badge variant="secondary" className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                  {series.platform}
                </Badge>

                {/* Language Badge */}
                <Badge
                  variant="outline"
                  className="absolute top-2 right-2 border-gray-400 text-gray-300 text-xs bg-black/70"
                >
                  {series.language}
                </Badge>

                {/* IMDB Rating */}
                <div className="absolute bottom-2 right-2 flex items-center space-x-1 bg-black/70 rounded px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{series.imdbRating}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <Play className="h-6 w-6 text-white fill-current" />
                  </Button>
                </div>
              </div>

              {/* Series Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-sm line-clamp-2">{series.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  <span>{series.year}</span>
                  <Clock className="h-3 w-3" />
                  <span>{series.episodes} Episodes</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {series.genre.slice(0, 2).map((g) => (
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
          Load More Web Series
        </Button>
      </div>
    </div>
  )
}
