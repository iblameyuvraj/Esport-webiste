import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Trophy, Gamepad2, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cta.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              DOMINATE THE ARENA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Join the ultimate esports experience and compete with the best players around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 rounded-md group"
                asChild
              >
                <Link href="/games">
                  PLAY NOW
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            LEVEL UP YOUR GAMING EXPERIENCE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group">
              <Trophy className="h-12 w-12 mb-4 text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-bold mb-2">Competitive Tournaments</h3>
              <p className="text-gray-400">
                Participate in high-stakes tournaments with substantial prize pools and gain recognition in the esports
                community.
              </p>
            </div>

            <div className="bg-gray-900/80 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group">
              <Gamepad2 className="h-12 w-12 mb-4 text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-bold mb-2">Multiple Game Titles</h3>
              <p className="text-gray-400">
                Choose from a wide variety of popular game titles and compete in your favorite esports disciplines.
              </p>
            </div>

            <div className="bg-gray-900/80 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/70 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group">
              <Users className="h-12 w-12 mb-4 text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="text-gray-400">
                Connect with gamers from around the world, form teams, and build your network in the esports industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/images/cta-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              READY TO COMPETE?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of players already competing in our tournaments. Register now and start your esports
              journey!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 rounded-md px-8 py-6 text-lg"
              asChild
            >
              <Link href="/games">BROWSE TOURNAMENTS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
