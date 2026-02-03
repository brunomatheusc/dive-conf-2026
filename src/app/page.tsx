import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Speakers from '@/components/Speakers'
import Schedule from '@/components/Schedule'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects - Continuidade em toda a página */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern - Continuidade em toda a página */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Speakers />
        <Schedule />
        <Footer />
      </div>

      <ScrollToTop />
    </main>
  )
}
