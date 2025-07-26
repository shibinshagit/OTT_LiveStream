"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Plus, Info, Volume2, VolumeX, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PremiumHeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const featuredContent = [
    {
      title: "The Crown",
      description:
        "Follow the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      genre: ["Drama", "Historical", "Biography"],
      rating: "U/A 16+",
      year: "2023",
      duration: "55m",
      imdbRating: 8.7,
      thumbnail: "/images/tablet-streaming.jpg",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1106329_1080p_4k_3840x2160%20%281%29-JXGnLJnkjqob8fCxaaNYs9f6ZKgReg.mp4",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      genre: ["Sci-Fi", "Horror", "Drama"],
      rating: "U/A 16+",
      year: "2023",
      duration: "50m",
      imdbRating: 8.7,
      thumbnail: "/images/young-man-movie-night.jpg",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1106329_1080p_4k_3840x2160%20%281%29-JXGnLJnkjqob8fCxaaNYs9f6ZKgReg.mp4",
    },
  ]

  const currentContent = featuredContent[currentSlide]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          src={currentContent.video}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />

        {/* Premium gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
      </div>

      {/* Slide indicators */}
      <div className="absolute top-6 right-6 z-20 flex space-x-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-500 w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Premium badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 text-sm font-semibold shadow-lg">
                ✨ Featured
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white bg-black/30 backdrop-blur-sm px-3 py-2">
                {currentContent.rating}
              </Badge>
              <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium text-sm">{currentContent.imdbRating}</span>
              </div>
            </div>

            {/* Title with premium styling */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                {currentContent.title}
              </span>
            </h1>

            {/* Metadata with enhanced styling */}
            <div className="flex items-center space-x-6 text-gray-300">
              <span className="font-medium">{currentContent.year}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{currentContent.duration}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex space-x-3">
                {currentContent.genre.map((g, index) => (
                  <span key={g} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Description with better typography */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light">
              {currentContent.description}
            </p>

            {/* Premium action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handlePlayVideo}
              >
                <Play className="mr-3 h-6 w-6 fill-current" />
                {isPlaying ? "Pause" : "Play Now"}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Plus className="mr-3 h-6 w-6" />
                My List
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Info className="mr-3 h-6 w-6" />
                More Info
              </Button>
            </div>

            {/* Audio control */}
            <div className="flex items-center space-x-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/10 rounded-full w-12 h-12 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </Button>
              <span className="text-gray-400 text-sm">Click to {isMuted ? "unmute" : "mute"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  )
}
