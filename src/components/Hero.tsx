'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Hexagonal Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg rotate-45 opacity-80 blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg rotate-45" />
                </div>
              </div>
              <span className="relative z-10 text-4xl font-bold text-white">DIVE</span>
            </div>
          </div>

          {/* Date and Location Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">Av. Chiquinho Antunes</span>
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/50"
            >
              Inscrever-se
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              <MapPin className="mr-2 w-5 h-5" />
              Como Chegar
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Price Card */}
            <div className="group relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-sm text-gray-400 mb-2">Investimento</p>
                <p className="text-3xl font-bold text-yellow-400">R$ 30</p>
                <p className="text-xs text-gray-500 mt-1">Inscrições abertas</p>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="group relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Horários
                </p>
                <p className="text-sm text-gray-300">Sexta: 20h</p>
                <p className="text-sm text-gray-300">Domingo: 19h30</p>
                <p className="text-sm text-gray-300">Sábado DIVE: 20h</p>
              </div>
            </div>

            {/* Link Card */}
            <div className="group relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-sm text-gray-400 mb-2">Links</p>
                <a
                  href="https://linktr.ee/pibvcd25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  linktr.ee/pibvcd25
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
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
