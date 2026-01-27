'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const speakers = [
  {
    name: 'FHOP MUSIC',
    role: 'Ministério de Adoração',
    category: 'music',
    tags: ['MÚSICA', 'ADORAÇÃO']
  },
  {
    name: 'Pr. Nivaldo Nassiff',
    role: 'Preletor',
    category: 'speaker',
    tags: ['PALESTRA', 'MINISTRAÇÃO']
  },
  {
    name: 'Armando Filho',
    role: 'Cantor',
    category: 'music',
    tags: ['MÚSICA', 'CANTOR']
  },
  {
    name: 'Davi Silva',
    role: 'Adorador',
    category: 'music',
    tags: ['MÚSICA', 'ADORAÇÃO']
  },
  {
    name: 'Mateus Brito',
    role: 'Pastor e Cantor Gospel',
    category: 'speaker',
    tags: ['PALESTRA', 'MÚSICA']
  },
  {
    name: 'DJ Drinão',
    role: 'DJ Gospel Animador',
    category: 'music',
    tags: ['MÚSICA', 'DJ']
  },
  {
    name: 'Erick Mathias',
    role: 'One Sounds',
    category: 'music',
    tags: ['MÚSICA', 'ADORAÇÃO']
  },
  {
    name: 'Pr. Reuel Silva',
    role: 'Líder de Louvor e Pastor - MEVAM',
    category: 'speaker',
    tags: ['PALESTRA', 'LOUVOR']
  }
]

export default function Speakers() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-black to-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-gray-400">Nossos</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Convidados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça os palestrantes e artistas que estarão conosco nesta conferência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-black/60 border border-white/10 hover:border-white/30 transition-all duration-300 rounded-2xl"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <Image
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${speaker.name}`}
                  alt={speaker.name}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <CardContent className="p-6 space-y-3">
                {/* Name */}
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {speaker.name}
                </h3>

                {/* Confirmed Label */}
                <p className="text-sm text-gray-400 font-normal">
                  Presença Confirmada
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {speaker.role}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  {speaker.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-white/90 flex items-center gap-1.5"
                    >
                      {tagIndex > 0 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
