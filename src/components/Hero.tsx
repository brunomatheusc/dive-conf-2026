'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

export default function Hero() {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=5514997735931&text=Ol%C3%A1%21+Quero+me+inscrever+na+Dive+Movement+Conf%E2%80%9926.&type=phone_number&app_absent=0'
  const googleMapsLink = 'https://maps.google.com/?q=Av.+Chiquinho+Antunes,+400,+Paranapanema+SP'

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32">

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Date and Location Badge */}
          <div className="hidden flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">Av. Chiquinho Antunes, 400</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-gray-400 font-light">Dive Movement</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {"Conf'26"}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light italic">
            Até que todos mergulhem mais fundo.
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Uma conferência focada em compartilhar experiências e avanços no desenvolvimento espiritual
            da juventude, com as mentes mais brilhantes da nossa comunidade.
          </p>

          {/* Inscrições Section - Texto destacado */}
          <div className="mb-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 mb-3 tracking-tight">
              INSCRIÇÕES
            </p>
            <p className="text-6xl sm:text-7xl md:text-8xl font-black text-yellow-400 tracking-tight">
              R$ 30
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/50"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold"
              >
                Inscrever-se
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold"
              >
                <MapPin className="w-5 h-5" />
                Como Chegar
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
    </section>
  )
}
