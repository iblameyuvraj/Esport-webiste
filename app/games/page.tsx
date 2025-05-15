"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface Game {
  id: string
  title: string
  image: string
  description: string
  players: string
  prize: string
}

export default function GamesPage() {
  const [gamesList, setGamesList] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch games from the admin panel API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/games") // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json()
          setGamesList(data)
        } else {
          console.error("Failed to fetch games")
        }
      } catch (error) {
        console.error("Error fetching games:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/images/games-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              GAME TOURNAMENTS
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Browse our selection of competitive tournaments across popular game titles
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-gray-400">Loading tournaments...</p>
          ) : gamesList.length === 0 ? (
            <p className="text-center text-gray-400">No tournaments listed here.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gamesList.map((game) => (
                <Dialog key={game.id}>
                  <DialogTrigger asChild>
                    <Card className="bg-gray-900/80 border border-purple-500/30 hover:border-purple-500/70 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{
                            backgroundImage: `url(${game.image})`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                          {game.title}
                        </h3>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Players: {game.players}</span>
                          <span>Prize Pool: {game.prize}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border border-purple-500/50 text-white max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                        {game.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="relative h-64 overflow-hidden rounded-md mb-4">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${game.image})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    </div>
                    <DialogDescription className="text-gray-300 mb-4">{game.description}</DialogDescription>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800 p-4 rounded-md">
                        <p className="text-sm text-gray-400">Format</p>
                        <p className="text-lg font-semibold">{game.players}</p>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-md">
                        <p className="text-sm text-gray-400">Prize Pool</p>
                        <p className="text-lg font-semibold">{game.prize}</p>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                      asChild
                    >
                      <Link href="/register">
                        REGISTER NOW
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
