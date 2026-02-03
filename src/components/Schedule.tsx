'use client';

interface ScheduleItem {
  time: string;
  event: string;
}

interface DaySchedule {
  day: string;
  date: string;
  items: ScheduleItem[];
}

const schedule: DaySchedule[] = [
  {
    day: 'Sexta-Feira',
    date: '13/02',
    items: [
      { time: '19h00', event: 'Check-In' },
      { time: '20h00', event: 'Sessão #1' }
    ]
  },
  {
    day: 'Sábado',
    date: '14/02',
    items: [
      { time: '09h00', event: 'Check-In' },
      { time: '10h00', event: 'Sessão #2' },
      { time: '14h00', event: 'Gincana' },
      { time: '19h30', event: 'Check-In' },
      { time: '20h00', event: 'Sessão #3' },
      { time: '23h00', event: 'Night In Glory' }
    ]
  },
  {
    day: 'Domingo',
    date: '15/02',
    items: [
      { time: '09h30', event: 'Check-In' },
      { time: '10h00', event: 'Sessão #4' },
      { time: '14h00', event: 'Gincana' },
      { time: '19h30', event: 'Check-In' },
      { time: '20h00', event: 'Sessão #5' },
      { time: '23h00', event: 'Dive Flow' }
    ]
  },
  {
    day: 'Segunda-Feira',
    date: '16/02',
    items: [
      { time: '09h30', event: 'Check-In' },
      { time: '10h00', event: 'Sessão #6' },
      { time: '14h00', event: 'Encerramento da Gincana' },
      { time: '19h30', event: 'Check-In' },
      { time: '20h00', event: 'Sessão #7' },
      { time: '22h00', event: 'Encerramento' }
    ]
  }
];

export default function Schedule() {
  return (
    <section id="cronograma" className="relative py-20 sm:py-24">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-gray-400">Cronograma da</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Conferência
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira a programação completa do evento
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/30 transition-all duration-500"
            >
              {/* Day Header */}
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {daySchedule.day}
                </h3>
                <p className="text-lg text-gray-400">{daySchedule.date}</p>
              </div>

              {/* Schedule Items */}
              <div className="space-y-4">
                {daySchedule.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-20 sm:w-24 text-right">
                      <span className="text-lg sm:text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-purple-300 transition-colors flex-shrink-0" />
                      <span className="text-base sm:text-lg text-gray-300 group-hover:text-white transition-colors">
                        {item.event}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

