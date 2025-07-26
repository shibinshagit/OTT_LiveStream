"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { Search, Menu, Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { RootState } from "@/lib/store"
import AuthModal from "@/components/molecules/AuthModal"

interface HeaderProps {
  showMobileMenu?: boolean
  activeTab?: string
  setActiveTab?: (tab: string) => void
  tabs?: Array<{ id: string; label: string; icon: any; component: any }>
  isMobile?: boolean
}

export default function Header({
  showMobileMenu = true,
  activeTab,
  setActiveTab,
  tabs = [],
  isMobile = false,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className={`${showMobileMenu ? "md:hidden" : "hidden"}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent">
                DEMO MODE
              </div>
            </div>

            {/* Desktop Navigation - Only show when NOT mobile */}
            {!isMobile && tabs.length > 0 && (
              <nav className="hidden lg:flex items-center space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab?.(tab.id)}
                    className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                      activeTab === tab.id
                        ? "text-white bg-red-600"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            )}

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Search movies, shows..."
                      className="w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      autoFocus
                    />
                    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* Notifications */}
              {isAuthenticated && (
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              )}

              {/* User Menu */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700" align="end">
                    <DropdownMenuItem>Manage Profiles</DropdownMenuItem>
                    <DropdownMenuItem>Account Settings</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem>Watchlist</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem>Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={() => setShowAuthModal(true)} className="bg-red-600 hover:bg-red-700">
                  Sign In
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Navigation - Only show when mobile menu is open */}
          {isMenuOpen && showMobileMenu && isMobile && tabs.length > 0 && (
            <div className="lg:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab?.(tab.id)
                      setIsMenuOpen(false)
                    }}
                    className={`text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "text-white bg-red-600"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}
