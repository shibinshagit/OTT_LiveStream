import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Content {
  id: string
  title: string
  description: string
  thumbnail: string
  type: "movie" | "series" | "live"
  genre: string[]
  language: string
  rating: string
  year: string
  duration: string
  cast: string[]
  crew: string[]
  trailer?: string
}

interface ContentState {
  featured: Content | null
  trending: Content[]
  newReleases: Content[]
  movies: Content[]
  series: Content[]
  watchlist: Content[]
  continueWatching: Array<{
    content: Content
    progress: number
    lastWatched: string
  }>
  isLoading: boolean
  error: string | null
}

const initialState: ContentState = {
  featured: null,
  trending: [],
  newReleases: [],
  movies: [],
  series: [],
  watchlist: [],
  continueWatching: [],
  isLoading: false,
  error: null,
}

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setFeatured: (state, action: PayloadAction<Content>) => {
      state.featured = action.payload
    },
    setTrending: (state, action: PayloadAction<Content[]>) => {
      state.trending = action.payload
    },
    setNewReleases: (state, action: PayloadAction<Content[]>) => {
      state.newReleases = action.payload
    },
    setMovies: (state, action: PayloadAction<Content[]>) => {
      state.movies = action.payload
    },
    setSeries: (state, action: PayloadAction<Content[]>) => {
      state.series = action.payload
    },
    addToWatchlist: (state, action: PayloadAction<Content>) => {
      const exists = state.watchlist.find((item) => item.id === action.payload.id)
      if (!exists) {
        state.watchlist.push(action.payload)
      }
    },
    removeFromWatchlist: (state, action: PayloadAction<string>) => {
      state.watchlist = state.watchlist.filter((item) => item.id !== action.payload)
    },
    updateProgress: (state, action: PayloadAction<{ contentId: string; progress: number }>) => {
      const existing = state.continueWatching.find((item) => item.content.id === action.payload.contentId)
      if (existing) {
        existing.progress = action.payload.progress
        existing.lastWatched = new Date().toISOString()
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const {
  setFeatured,
  setTrending,
  setNewReleases,
  setMovies,
  setSeries,
  addToWatchlist,
  removeFromWatchlist,
  updateProgress,
  setLoading,
  setError,
} = contentSlice.actions

export default contentSlice.reducer
