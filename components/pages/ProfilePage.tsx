"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import {
  User,
  Settings,
  Download,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  Edit,
  Plus,
  Play,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import type { RootState } from "@/lib/store"

export default function ProfilePage() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const [activeProfile, setActiveProfile] = useState("main")

  // Mock data for profiles
  const profiles = [
    {
      id: "main",
      name: "John Doe",
      avatar: "/placeholder.svg?height=80&width=80",
      isKid: false,
      watchTime: "2h 45m this week",
    },
    {
      id: "sarah",
      name: "Sarah",
      avatar: "/placeholder.svg?height=80&width=80",
      isKid: false,
      watchTime: "1h 20m this week",
    },
    {
      id: "kids",
      name: "Kids",
      avatar: "/placeholder.svg?height=80&width=80",
      isKid: true,
      watchTime: "45m this week",
    },
  ]

  const watchlist = [
    {
      id: 1,
      title: "The Batman",
      thumbnail: "/images/tablet-streaming.jpg",
      type: "Movie",
      addedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Stranger Things",
      thumbnail: "/images/young-man-movie-night.jpg",
      type: "Series",
      addedDate: "1 week ago",
    },
    {
      id: 3,
      title: "The Crown",
      thumbnail: "/images/laptop-streaming.jpg",
      type: "Series",
      addedDate: "3 days ago",
    },
  ]

  const continueWatching = [
    {
      id: 1,
      title: "Breaking Bad",
      thumbnail: "/images/laptop-streaming.jpg",
      episode: "S3 E7",
      progress: 65,
      timeLeft: "25 min left",
    },
    {
      id: 2,
      title: "The Office",
      thumbnail: "/images/young-man-movie-night.jpg",
      episode: "S2 E12",
      progress: 30,
      timeLeft: "18 min left",
    },
  ]

  const downloads = [
    {
      id: 1,
      title: "Dune",
      thumbnail: "/images/tablet-streaming.jpg",
      size: "2.1 GB",
      quality: "HD",
      downloadDate: "Yesterday",
    },
    {
      id: 2,
      title: "Spider-Man",
      thumbnail: "/images/young-man-movie-night.jpg",
      size: "1.8 GB",
      quality: "HD",
      downloadDate: "2 days ago",
    },
  ]

  if (!isAuthenticated) {
    return (
      <div className="px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-gray-400" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Sign in to continue</h2>
            <p className="text-gray-400">Access your profile, watchlist, and personalized recommendations</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">Sign In</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">My Profile</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
          <p className="text-gray-300 max-w-md">
            Your ultimate destination for movies, TV shows, and web series. Stream unlimited content in HD quality with
            multiple language support on OTT-Demo.
          </p>
        </div>
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>

      {/* Profile Selection */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Who's watching?</CardTitle>
          <CardDescription className="text-gray-400">Select a profile to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className={`flex flex-col items-center space-y-2 p-4 rounded-lg cursor-pointer transition-colors ${
                  activeProfile === profile.id ? "bg-red-600/20 border border-red-600" : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveProfile(profile.id)}
              >
                <Avatar className="w-16 h-16">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-white font-medium">{profile.name}</p>
                  {profile.isKid && (
                    <Badge variant="secondary" className="bg-blue-600 text-white text-xs mt-1">
                      Kids
                    </Badge>
                  )}
                  <p className="text-xs text-gray-400 mt-1">{profile.watchTime}</p>
                </div>
              </div>
            ))}

            {/* Add Profile Button */}
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg cursor-pointer hover:bg-gray-700 border-2 border-dashed border-gray-600">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <Plus className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-400 font-medium">Add Profile</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Premium Plan</p>
                <p className="text-gray-400 text-sm">Expires Dec 28, 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Watch Time</p>
                <p className="text-gray-400 text-sm">45h this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Downloads</p>
                <p className="text-gray-400 text-sm">{downloads.length} items</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="watchlist" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          <TabsTrigger value="watchlist" className="data-[state=active]:bg-red-600">
            My List
          </TabsTrigger>
          <TabsTrigger value="continue" className="data-[state=active]:bg-red-600">
            Continue Watching
          </TabsTrigger>
          <TabsTrigger value="downloads" className="data-[state=active]:bg-red-600">
            Downloads
          </TabsTrigger>
          <TabsTrigger value="account" className="data-[state=active]:bg-red-600">
            Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="watchlist" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">My Watchlist</h3>
            <p className="text-gray-400">{watchlist.length} items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchlist.map((item) => (
              <Card
                key={item.id}
                className="bg-gray-800 border-gray-700 group cursor-pointer hover:border-red-500 transition-colors"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                    <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                      <Play className="h-6 w-6 text-white fill-current" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{item.addedDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="continue" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Continue Watching</h3>
            <p className="text-gray-400">{continueWatching.length} items</p>
          </div>

          <div className="space-y-4">
            {continueWatching.map((item) => (
              <Card key={item.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-48 h-28">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                          <Play className="h-6 w-6 text-white fill-current" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.episode}</p>
                        <p className="text-gray-500 text-xs mt-1">{item.timeLeft}</p>
                      </div>

                      <div className="mt-3">
                        <Progress value={item.progress} className="h-2 bg-gray-700" />
                        <p className="text-xs text-gray-400 mt-1">{item.progress}% complete</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="downloads" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Downloaded Content</h3>
            <p className="text-gray-400">{downloads.length} items • 3.9 GB</p>
          </div>

          <div className="space-y-4">
            {downloads.map((item) => (
              <Card key={item.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-48 h-28">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>

                    <div className="flex-1 p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-gray-400 text-sm">{item.size}</span>
                          <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                            {item.quality}
                          </Badge>
                          <span className="text-gray-500 text-xs">{item.downloadDate}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          <Play className="mr-2 h-4 w-4 fill-current" />
                          Watch
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Settings */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Edit Profile</span>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Change Password</span>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Privacy Settings</span>
                  <Button variant="ghost" size="sm">
                    <Shield className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Subscription */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Subscription
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Manage Plan</span>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Payment Method</span>
                  <Button variant="ghost" size="sm">
                    <CreditCard className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Billing History</span>
                  <Button variant="ghost" size="sm">
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Notifications</span>
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Language</span>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Playback Settings</span>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Help Center</span>
                  <Button variant="ghost" size="sm">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Contact Support</span>
                  <Button variant="ghost" size="sm">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-400">Sign Out</span>
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
