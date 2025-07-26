"use client"

import { useState } from "react"
import { Search, Star, Calendar, Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [sortBy, setSortBy] = useState("popularity")

  const genres = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Adventure",
    "Animation",
  ]

  const movies = [
    {
      id: 1,
      title: "The Batman",
      thumbnail: "/images/young-man-movie-night.jpg",
      type: "movie",
      rating: "U/A 13+",
      year: "2022",
      duration: "2h 56m",
      genre: ["Action", "Crime", "Drama"],
      imdbRating: 7.8,
      description:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    },
    {
      id: 2,
      title: "Dune",
      thumbnail: "/images/tablet-streaming.jpg",
      type: "movie",
      rating: "U/A 13+",
      year: "2021",
      duration: "2h 35m",
      genre: ["Sci-Fi", "Adventure", "Drama"],
      imdbRating: 8.0,
      description:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding.",
    },
    {
      id: 3,
      title: "Spider-Man: No Way Home",
      thumbnail: "/images/laptop-streaming.jpg",
      type: "movie",
      rating: "U/A 13+",
      year: "2021",
      duration: "2h 28m",
      genre: ["Action", "Adventure", "Sci-Fi"],
      imdbRating: 8.4,
      description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.",
    },
    {
      id: 4,
      title: "Top Gun: Maverick",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2022",
      duration: "2h 11m",
      genre: ["Action", "Drama"],
      imdbRating: 8.3,
      description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
    },
    {
      id: 5,
      title: "Black Panther: Wakanda Forever",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2022",
      duration: "2h 41m",
      genre: ["Action", "Adventure", "Drama"],
      imdbRating: 6.7,
      description: "The people of Wakanda fight to protect their home from intervening world powers.",
    },
    {
      id: 6,
      title: "Avatar: The Way of Water",
      thumbnail: "/placeholder.svg?height=300&width=200",
      type: "movie",
      rating: "U/A 13+",
      year: "2022",
      duration: "3h 12m",
      genre: ["Sci-Fi", "Adventure", "Action"],
      imdbRating: 7.6,
      description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
    },
  ]

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre =
      selectedGenre === "all" || movie.genre.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
    const matchesYear = selectedYear === "all" || movie.year === selectedYear
    return matchesSearch && matchesGenre && matchesYear
  })

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Movies</h1>
        <p className="text-gray-400">Discover amazing movies from around the world</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search movies..."
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

          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all" className="text-white">
                All Years
              </SelectItem>
              <SelectItem value="2023" className="text-white">
                2023
              </SelectItem>
              <SelectItem value="2022" className="text-white">
                2022
              </SelectItem>
              <SelectItem value="2021" className="text-white">
                2021
              </SelectItem>
              <SelectItem value="2020" className="text-white">
                2020
              </SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-36 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="popularity" className="text-white">
                Popularity
              </SelectItem>
              <SelectItem value="rating" className="text-white">
                Rating
              </SelectItem>
              <SelectItem value="year" className="text-white">
                Year
              </SelectItem>
              <SelectItem value="title" className="text-white">
                Title
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
          {filteredMovies.length} movie{filteredMovies.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="space-y-3">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={movie.thumbnail || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-64 md:h-72 object-cover"
                />

                {/* Rating Badge */}
                <Badge variant="secondary" className="absolute top-2 left-2 bg-black/70 text-white text-xs">
                  {movie.rating}
                </Badge>

                {/* IMDB Rating */}
                <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/70 rounded px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{movie.imdbRating}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                    <Play className="h-6 w-6 text-white fill-current" />
                  </Button>
                </div>
              </div>

              {/* Movie Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-sm line-clamp-2">{movie.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  <span>{movie.year}</span>
                  <Clock className="h-3 w-3" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {movie.genre.slice(0, 2).map((g) => (
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
          Load More Movies
        </Button>
      </div>
    </div>
  )
}
