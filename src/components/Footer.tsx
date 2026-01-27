'use client'

import { Instagram, Facebook, Youtube, MapPin, Clock, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black to-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Church Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PIB Vida com Deus
            </h3>
            <p className="text-gray-400 text-sm">Igreja Batista</p>
            <div className="space-y-2">
              <p className="text-white font-semibold">Juventude DIVE</p>
              <p className="text-gray-400 text-sm italic flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500" />
                Até que todos mergulhem mais fundo.
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              Horários de Culto
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Sexta-feira: <span className="text-purple-400">20h</span></p>
              <p className="text-gray-300">Domingo: <span className="text-purple-400">19h30</span></p>
              <p className="text-gray-300">Culto DIVE (Sábado): <span className="text-purple-400">20h</span></p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              Localização
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Av. Chiquinho Antunes</p>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 bg-white/5 hover:bg-white/10"
                asChild
              >
                <a 
                  href="https://maps.google.com/?q=Av.+Chiquinho+Antunes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver no mapa
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/juventude_dive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">@juventude_dive</span>
              </a>
              <a
                href="https://www.facebook.com/pibvidacomdeus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@pibvidacomdeus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-lg transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} PIB Vida com Deus - Juventude DIVE. Todos os direitos reservados.
            </p>
            <a
              href="https://linktr.ee/pibvcd25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
            >
              linktr.ee/pibvcd25
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
