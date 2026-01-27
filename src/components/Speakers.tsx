'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const speakers = [
  {
    name: 'FHOP MUSIC',
    role: 'Ministério de Adoração',
    category: 'music',
    tags: ['MÚSICA', 'ADORAÇÃO'],
    image: "/images/speakers/fhop-music.jpg"
  },
  {
    name: 'Pr. Nivaldo Nassiff',
    role: 'Preletor',
    category: 'speaker',
    tags: ['PALESTRA', 'MINISTRAÇÃO'],
    image: "/images/speakers/nivaldo-nassiff.jpg"
  },
  {
    name: 'Armando Filho',
    role: 'Cantor',
    category: 'music',
    tags: ['MÚSICA', 'CANTOR'],
    image: "/images/speakers/armando-filho.jpg"
  },
  {
    name: 'Davi Silva',
    role: 'Adorador',
    category: 'music',
    tags: ['MÚSICA', 'ADORAÇÃO'],
    image: "/images/speakers/davi-silva.jpg"
  },
  {
    name: 'Mateus Brito',
    role: 'Pastor e Cantor',
    category: 'speaker',
    tags: ['PALESTRA', 'MÚSICA'],
    image: "/images/speakers/mateus-brito.jpg"
  },
  {
    name: 'DJ Drinão',
    role: 'DJ Gospel Animador',
    category: 'music',
    tags: ['MÚSICA', 'DJ'],
    image: "/images/speakers/dj-irinao.jpg"
  },
  {
    name: 'One Sounds',
    role: 'Ministério de Adoração',
    category: 'music',
    tags: ['MÚSICA', 'ADORAÇÃO'],
    image: "/images/speakers/one-sounds.jpg"
  },
  {
    name: 'Pr. Reuel Silva',
    role: 'Pastor e Cantor',
    category: 'speaker',
    tags: ['PALESTRA', 'LOUVOR'],
    image: "/images/speakers/reuel-silva.jpg"
  }
];

export default function Speakers() {
  return (
    <section className="relative py-0 sm:py-12">

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
                  // src="https://plus.unsplash.com/premium_photo-1682855223699-edb85ffa57b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  src={speaker.image}
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
                <p className="bg-yellow-400 px-2 py-1 rounded-full w-fit text-sm text-black font-normal">
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
