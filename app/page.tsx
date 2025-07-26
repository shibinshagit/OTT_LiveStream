"use client"
import { Provider } from "react-redux"
import { store } from "@/lib/store"
import MobileLayout from "@/components/organisms/MobileLayout"

export default function HomePage() {
  return (
    <Provider store={store}>
      <MobileLayout />
    </Provider>
  )
}
