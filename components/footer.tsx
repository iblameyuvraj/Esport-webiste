import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-purple-900/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              NEXUS<span className="text-white">GAMING</span>
            </h3>
            <p className="text-gray-400 mb-4">
              The ultimate esports tournament platform for competitive gamers around the world.
            </p>
            <div className="flex space-x-4">
              <Link href="https://wa.me/8769239710" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://instagram.com/iblameyuvrajj" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.in/yuvrajsoni2007" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
            NexusGaming. created by{" "}
            <a
              href="https://yuvraj.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Yuvraj Soni
            </a>
            </p>
        </div>
      </div>
    </footer>
  )
}
