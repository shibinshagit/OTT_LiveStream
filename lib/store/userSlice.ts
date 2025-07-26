import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UserProfile {
  id: string
  name: string
  avatar: string
  isKid: boolean
  preferences: {
    languages: string[]
    genres: string[]
  }
}

interface UserState {
  profiles: UserProfile[]
  activeProfile: UserProfile | null
  preferences: {
    language: string
    autoplay: boolean
    quality: "auto" | "low" | "medium" | "high" | "ultra"
    subtitles: boolean
  }
}

const initialState: UserState = {
  profiles: [],
  activeProfile: null,
  preferences: {
    language: "en",
    autoplay: true,
    quality: "auto",
    subtitles: false,
  },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<UserProfile[]>) => {
      state.profiles = action.payload
    },
    setActiveProfile: (state, action: PayloadAction<UserProfile>) => {
      state.activeProfile = action.payload
    },
    addProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profiles.push(action.payload)
    },
    updateProfile: (state, action: PayloadAction<{ id: string; updates: Partial<UserProfile> }>) => {
      const profile = state.profiles.find((p) => p.id === action.payload.id)
      if (profile) {
        Object.assign(profile, action.payload.updates)
      }
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter((p) => p.id !== action.payload)
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserState["preferences"]>>) => {
      state.preferences = { ...state.preferences, ...action.payload }
    },
  },
})

export const { setProfiles, setActiveProfile, addProfile, updateProfile, deleteProfile, updatePreferences } =
  userSlice.actions

export default userSlice.reducer
