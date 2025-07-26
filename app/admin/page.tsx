"use client"

import { useState } from "react"
import {
  Users,
  Video,
  TrendingUp,
  DollarSign,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = {
    totalUsers: 125430,
    activeSubscriptions: 98765,
    totalContent: 2847,
    monthlyRevenue: 45678900,
  }

  const recentContent = [
    {
      id: 1,
      title: "The Batman",
      type: "Movie",
      status: "Published",
      views: 125430,
      uploadDate: "2024-01-15",
      duration: "2h 56m",
    },
    {
      id: 2,
      title: "Stranger Things S5",
      type: "Series",
      status: "Draft",
      views: 0,
      uploadDate: "2024-01-14",
      duration: "8 episodes",
    },
    {
      id: 3,
      title: "Money Heist",
      type: "Series",
      status: "Published",
      views: 89234,
      uploadDate: "2024-01-13",
      duration: "5 seasons",
    },
  ]

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      plan: "Premium",
      status: "Active",
      joinDate: "2024-01-10",
      lastActive: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      plan: "Family",
      status: "Active",
      joinDate: "2024-01-08",
      lastActive: "2024-01-15",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      plan: "Basic",
      status: "Cancelled",
      joinDate: "2024-01-05",
      lastActive: "2024-01-12",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Admin Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400">Manage your OTT-Demo platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="mr-2 h-4 w-4" />
                Add Content
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 mb-8">
            <TabsTrigger value="overview" className="data-[state=active]:bg-red-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-red-600">
              Content
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-red-600">
              Users
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-red-600">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-green-400">+12.5% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Active Subscriptions</CardTitle>
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.activeSubscriptions.toLocaleString()}</div>
                  <p className="text-xs text-green-400">+8.2% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Content</CardTitle>
                  <Video className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalContent.toLocaleString()}</div>
                  <p className="text-xs text-blue-400">+45 new this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Monthly Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">₹{(stats.monthlyRevenue / 100000).toFixed(1)}L</div>
                  <p className="text-xs text-green-400">+15.3% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Content</CardTitle>
                <CardDescription className="text-gray-400">Latest uploads and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Title</TableHead>
                      <TableHead className="text-gray-300">Type</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Views</TableHead>
                      <TableHead className="text-gray-300">Upload Date</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentContent.map((item) => (
                      <TableRow key={item.id} className="border-gray-700">
                        <TableCell className="text-white font-medium">{item.title}</TableCell>
                        <TableCell className="text-gray-300">{item.type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={item.status === "Published" ? "default" : "secondary"}
                            className={
                              item.status === "Published" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                            }
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{item.views.toLocaleString()}</TableCell>
                        <TableCell className="text-gray-300">{item.uploadDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-800 border-gray-700">
                              <DropdownMenuItem className="text-white">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            {/* Content Management Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Content Management</h2>
                <p className="text-gray-400">Upload and manage your video content</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="mr-2 h-4 w-4" />
                Upload Content
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search content..." className="pl-10 bg-gray-800 border-gray-700 text-white" />
              </div>
              <Button variant="outline" className="border-gray-700 text-gray-300 bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Content Table */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Content</TableHead>
                      <TableHead className="text-gray-300">Type</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Views</TableHead>
                      <TableHead className="text-gray-300">Duration</TableHead>
                      <TableHead className="text-gray-300">Upload Date</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentContent.map((item) => (
                      <TableRow key={item.id} className="border-gray-700">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-16 h-12 bg-gray-700 rounded overflow-hidden">
                              <img
                                src={`/placeholder.svg?height=48&width=64&query=${item.title} thumbnail`}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium text-white">{item.title}</div>
                              <div className="text-sm text-gray-400">ID: {item.id}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{item.type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={item.status === "Published" ? "default" : "secondary"}
                            className={
                              item.status === "Published" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                            }
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{item.views.toLocaleString()}</TableCell>
                        <TableCell className="text-gray-300">{item.duration}</TableCell>
                        <TableCell className="text-gray-300">{item.uploadDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-800 border-gray-700">
                              <DropdownMenuItem className="text-white">
                                <Eye className="mr-2 h-4 w-4" />
                                Preview
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            {/* Users Management Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">User Management</h2>
                <p className="text-gray-400">Manage user accounts and subscriptions</p>
              </div>
            </div>

            {/* Search Users */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users by name or email..."
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            {/* Users Table */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">User</TableHead>
                      <TableHead className="text-gray-300">Plan</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Join Date</TableHead>
                      <TableHead className="text-gray-300">Last Active</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} className="border-gray-700">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">{user.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-medium text-white">{user.name}</div>
                              <div className="text-sm text-gray-400">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              user.plan === "Family"
                                ? "border-yellow-500 text-yellow-400"
                                : user.plan === "Premium"
                                  ? "border-red-500 text-red-400"
                                  : "border-gray-500 text-gray-400"
                            }`}
                          >
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={user.status === "Active" ? "default" : "secondary"}
                            className={user.status === "Active" ? "bg-green-600 text-white" : "bg-red-600 text-white"}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{user.joinDate}</TableCell>
                        <TableCell className="text-gray-300">{user.lastActive}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-800 border-gray-700">
                              <DropdownMenuItem className="text-white">
                                <Eye className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Suspend User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Analytics & Reports</h2>
              <p className="text-gray-400">Track platform performance and user engagement</p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Watch Time</CardTitle>
                  <CardDescription className="text-gray-400">Total hours watched this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">2.4M</div>
                  <div className="text-sm text-green-400">+18% from last month</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Top Content</CardTitle>
                  <CardDescription className="text-gray-400">Most watched this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white">The Batman</span>
                      <span className="text-gray-400">45K views</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Stranger Things</span>
                      <span className="text-gray-400">38K views</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Money Heist</span>
                      <span className="text-gray-400">32K views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Growth</CardTitle>
                  <CardDescription className="text-gray-400">Monthly recurring revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">₹45.6L</div>
                  <div className="text-sm text-green-400">+15.3% growth</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
