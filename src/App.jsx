import { useRef } from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import Contact from './components/Contact'

function App() {
  const reserveRef = useRef(null)

  const scrollToReserve = () => {
    reserveRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-blue-500/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-white font-extrabold text-xl tracking-tight">Blue Flame Bistro</a>
          <nav className="flex items-center gap-6 text-blue-100">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#reserve" className="hover:text-white">Reservations</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onReserveClick={scrollToReserve} />
        <div id="menu">
          <Menu />
        </div>
        <div ref={reserveRef} id="reserve">
          <Reservations />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="border-t border-blue-500/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-blue-200">
          <p>© {new Date().getFullYear()} Blue Flame Bistro. All rights reserved.</p>
          <p className="text-sm">123 Coastal Ave, Seaside City • Open Tue–Sun 5pm–11pm</p>
        </div>
      </footer>
    </div>
  )
}

export default App
