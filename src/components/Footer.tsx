'use client'

import { Instagram, Facebook, Youtube, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Church Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-purple-400">
              PIB Vida com Deus
            </h3>
            <p className="text-sm text-gray-400">Igreja Batista</p>
            <p className="text-white font-medium">Juventude DIVE</p>
            <p className="text-sm text-gray-400 italic flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-pink-500" />
              Até que todos mergulhem mais fundo.
            </p>
          </div>

          {/* Schedule */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              Horários de Culto
            </h4>
            <div className="space-y-1.5 text-sm">
              <p className="text-gray-400">
                Sexta-feira: <span className="text-purple-400">20h</span>
              </p>
              <p className="text-gray-400">
                Domingo: <span className="text-purple-400">19h30</span>
              </p>
              <p className="text-gray-400">
                Culto DIVE (Sábado): <span className="text-purple-400">20h</span>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              Localização
            </h4>
            <p className="text-sm text-gray-400">Av. Chiquinho Antunes, 400</p>
            <a
              href="https://maps.google.com/?q=Av.+Chiquinho+Antunes,+400,+Paranapanema+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-white border border-white/20 hover:border-white/40 px-3 py-1.5 rounded transition-colors"
            >
              Ver no mapa
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Redes Sociais</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/juventude_dive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@juventude_dive</span>
              </a>
              <a
                href="https://www.facebook.com/pibvidacomdeus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@pibvidacomdeusparanapanema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} PIB Vida com Deus - Juventude DIVE. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
