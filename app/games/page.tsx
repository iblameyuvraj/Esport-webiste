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
  id: number
  title: string
  image: string
  description: string
  players: string
  prize: string
}

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
  {
    id: 5,
    title: "Fortnite",
    image: "/images/game-fortnite.jpg",
    description:
      "Build, shoot, and survive in this battle royale phenomenon. Compete in solo, duo, or squad formats in our Fortnite tournaments.",
    players: "Solo/Duo/Squad",
    prize: "$8,000",
  },
  {
    id: 6,
    title: "Call of Duty: Warzone",
    image: "/images/game-warzone.jpg",
    description: "Drop in, gear up, and battle to be the last squad standing in this intense battle royale experience.",
    players: "Trios/Quads",
    prize: "$7,500",
  },
  {
    id: 7,
    title: "Rocket League",
    image: "/images/game-rocket-league.jpg",
    description:
      "Soccer meets driving in this high-powered hybrid. Show off your aerial skills and teamwork in our Rocket League tournaments.",
    players: "3v3",
    prize: "$5,000",
  },
  {
    id: 8,
    title: "Apex Legends",
    image: "/images/game-apex.jpg",
    description:
      "Choose your legend and battle for glory in this team-based battle royale shooter with unique character abilities.",
    players: "Trios",
    prize: "$6,000",
  },
]

export default function GamesPage() {
  const [gamesList, setGamesList] = useState<Game[]>(initialGames)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  // Try to load games from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedGames = localStorage.getItem("esportsGames")
        if (savedGames) {
          setGamesList(JSON.parse(savedGames))
        }
      } catch (error) {
        console.error("Error loading games from localStorage:", error)
        // If there's an error, fall back to initial games
        setGamesList(initialGames)
      }
    }
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
        </div>
      </section>
    </div>
  )
}
