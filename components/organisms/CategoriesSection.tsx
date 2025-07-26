"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All", count: 1250 },
    { id: "action", label: "Action", count: 180 },
    { id: "comedy", label: "Comedy", count: 95 },
    { id: "drama", label: "Drama", count: 220 },
    { id: "thriller", label: "Thriller", count: 150 },
    { id: "romance", label: "Romance", count: 85 },
    { id: "horror", label: "Horror", count: 65 },
    { id: "sci-fi", label: "Sci-Fi", count: 120 },
    { id: "documentary", label: "Documentary", count: 75 },
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white">Browse by Category</h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`${
              activeCategory === category.id
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            } transition-colors duration-200`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
            <span className="ml-2 text-xs opacity-70">({category.count})</span>
          </Button>
        ))}
      </div>

      {/* Language Filter */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {["Hindi", "English", "Punjabi", "Tamil", "Telugu", "Bengali"].map((lang) => (
            <Button
              key={lang}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              {lang}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
