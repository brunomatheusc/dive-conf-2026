'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const googleMapsLink = 'https://maps.google.com/?q=Paranapanema+SP' // Placeholder - você vai atualizar depois

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      {/* Top Bar - Date and Location */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <p className="text-sm text-white/80">
              13-16 de Fevereiro de 2026 / Paranapanema, SP
            </p>
            <Link
              href="#sobre"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              SOBRE
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="DIVE Logo"
                fill
                className="object-contain rounded"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                DIVE
              </span>

              <span className="text-xs text-white/70">
                {"MOVEMENT CONF'26"}
              </span>
            </div>
          </Link>

          {/* CTA Buttons - Right */}
          <div className="flex items-center gap-3">
            <Button
              className="bg-[#352A86] hover:bg-[#352A86]/80 font-semibold"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=5514997735931&text=Ol%C3%A1%21+Quero+me+inscrever+na+Dive+Movement+Conf%E2%80%9926.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold"
              >
                Inscreva-se <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white"
              asChild
            >
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Como Chegar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
