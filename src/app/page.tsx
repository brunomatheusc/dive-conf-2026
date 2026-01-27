import Hero from '@/components/Hero'
import Speakers from '@/components/Speakers'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Speakers />
      <Footer />
    </main>
  )
}
