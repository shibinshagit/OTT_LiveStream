import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import contentSlice from "./contentSlice"
import userSlice from "./userSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    content: contentSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
