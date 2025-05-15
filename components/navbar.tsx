"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/40 backdrop-blur-md bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                NEXUS<span className="text-white">GAMING</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/games" className="text-gray-300 hover:text-purple-400 transition-colors">
              Games
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-purple-400 transition-colors">
              Terms and condition
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-300 hover:text-purple-400">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-purple-900/40">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/games"
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              href="/terms"
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms and conditions
            </Link>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
              asChild
            >
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                PLAY NOW
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
