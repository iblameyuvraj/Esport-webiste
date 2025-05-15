"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Plus, ImageIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Game {
  id: number
  title: string
  image: string
  description: string
  players: string
  prize: string
}

export default function AdminPage() {
  const router = useRouter()

  // Initial games data
  const initialGames: Game[] = [
    {
      id: 1,
      title: "League of Legends",
      image: "/images/game-lol.jpg",
      description:
        "Compete in 5v5 team battles in this strategic MOBA game. Show off your skills and climb the ranks in our League of Legends tournaments.",
      players: "5v5",
      prize: "$10,000",
    },
    {
      id: 2,
      title: "Counter-Strike 2",
      image: "/images/game-cs2.jpg",
      description:
        "Test your aim and tactical prowess in this premier first-person shooter. Join our CS2 tournaments and prove you're the best.",
      players: "5v5",
      prize: "$15,000",
    },
    {
      id: 3,
      title: "Valorant",
      image: "/images/game-valorant.jpg",
      description:
        "Combine precise gunplay with unique agent abilities in this tactical shooter. Our Valorant tournaments offer intense competition.",
      players: "5v5",
      prize: "$12,000",
    },
    {
      id: 4,
      title: "Dota 2",
      image: "/images/game-dota2.jpg",
      description:
        "Master the complexity of this legendary MOBA. Our Dota 2 tournaments feature the highest level of strategic gameplay.",
      players: "5v5",
      prize: "$20,000",
    },
  ]

  const [games, setGames] = useState<Game[]>(initialGames)
  const [newGame, setNewGame] = useState({
    title: "",
    image: "",
    description: "",
    players: "5v5", // Default value
    prize: "$5,000", // Default value
  })
  const [errors, setErrors] = useState({
    title: "",
    image: "",
    description: "",
  })
  const [successMessage, setSuccessMessage] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem("adminAuthenticated")
      if (adminAuth !== "true") {
        router.push("/admin/login")
      } else {
        setIsAuthenticated(true)
      }
    }

    checkAuth()
  }, [router])

  // Load games from localStorage on component mount
  useEffect(() => {
    if (isAuthenticated) {
      try {
        const savedGames = localStorage.getItem("esportsGames")
        if (savedGames) {
          setGames(JSON.parse(savedGames))
        } else {
          // If no saved games, initialize with default games and save to localStorage
          localStorage.setItem("esportsGames", JSON.stringify(initialGames))
        }
      } catch (error) {
        console.error("Error loading games from localStorage:", error)
      }
    }
  }, [isAuthenticated])

  const validateForm = () => {
    let valid = true
    const newErrors = {
      title: "",
      image: "",
      description: "",
    }

    if (!newGame.title.trim()) {
      newErrors.title = "Game name is required"
      valid = false
    }

    if (!newGame.image.trim()) {
      newErrors.image = "Image URL is required"
      valid = false
    }

    if (!newGame.description.trim()) {
      newErrors.description = "Game description is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewGame({
      ...newGame,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleAddGame = () => {
    if (validateForm()) {
      const newId = games.length > 0 ? Math.max(...games.map((game) => game.id)) + 1 : 1

      const gameToAdd: Game = {
        id: newId,
        title: newGame.title,
        image: newGame.image,
        description: newGame.description,
        players: newGame.players,
        prize: newGame.prize,
      }

      const updatedGames = [...games, gameToAdd]
      setGames(updatedGames)

      // Save updated games to localStorage
      localStorage.setItem("esportsGames", JSON.stringify(updatedGames))

      // Reset form
      setNewGame({
        title: "",
        image: "",
        description: "",
        players: "5v5",
        prize: "$5,000",
      })

      // Show success message
      setSuccessMessage("Game added successfully!")
      setTimeout(() => setSuccessMessage(""), 3000)
    }
  }

  const handleRemoveGame = (id: number) => {
    const updatedGames = games.filter((game) => game.id !== id)
    setGames(updatedGames)

    // Save updated games to localStorage
    localStorage.setItem("esportsGames", JSON.stringify(updatedGames))

    setSuccessMessage("Game removed successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/admin/login")
  }

  // If not authenticated, show nothing (will redirect in useEffect)
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Admin Dashboard
          </h1>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/30" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {successMessage && (
          <Alert className="mb-6 bg-green-900/30 border-green-500/50 text-green-400">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Game Form */}
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                Add New Game
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill in the details to add a new game to the tournaments list
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Game Name</Label>
                <Input
                  id="title"
                  name="title"
                  value={newGame.title}
                  onChange={handleInputChange}
                  placeholder="Enter game name"
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  value={newGame.image}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Game Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newGame.description}
                  onChange={handleInputChange}
                  placeholder="Enter game description"
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white min-h-[100px]"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="players">Player Format</Label>
                <Input
                  id="players"
                  name="players"
                  value={newGame.players}
                  onChange={handleInputChange}
                  placeholder="e.g., 5v5, Solo/Duo"
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prize">Prize Pool</Label>
                <Input
                  id="prize"
                  name="prize"
                  value={newGame.prize}
                  onChange={handleInputChange}
                  placeholder="e.g., $10,000"
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleAddGame}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Game
              </Button>
            </CardFooter>
          </Card>

          {/* Games List */}
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                Manage Games
              </CardTitle>
              <CardDescription className="text-gray-400">
                View and remove games from the tournaments list
              </CardDescription>
            </CardHeader>
            <CardContent>
              {games.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-300">Game</TableHead>
                        <TableHead className="text-gray-300">Image</TableHead>
                        <TableHead className="text-gray-300">Format</TableHead>
                        <TableHead className="text-gray-300">Prize</TableHead>
                        <TableHead className="text-gray-300 w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {games.map((game) => (
                        <TableRow key={game.id} className="border-gray-700">
                          <TableCell className="font-medium">{game.title}</TableCell>
                          <TableCell>
                            <div className="relative h-10 w-16 overflow-hidden rounded">
                              {game.image ? (
                                <div
                                  className="h-full w-full bg-cover bg-center"
                                  style={{ backgroundImage: `url(${game.image})` }}
                                />
                              ) : (
                                <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                                  <ImageIcon className="h-5 w-5 text-gray-500" />
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{game.players}</TableCell>
                          <TableCell>{game.prize}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveGame(game.id)}
                              className="text-red-500 hover:text-red-400 hover:bg-red-900/20"
                            >
                              <Trash2 className="h-5 w-5" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No games available. Add your first game using the form.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
