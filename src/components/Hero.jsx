import { Utensils, Phone, Calendar, Star } from 'lucide-react'

function Hero({ onReserveClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-white mb-6 border border-white/20">
          <Star className="w-4 h-4 text-yellow-300" />
          <span className="text-sm">Locally sourced • Seasonal menu</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Welcome to Blue Flame Bistro
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Modern cuisine with a coastal twist. Join us for dinner, drinks, and unforgettable evenings.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onReserveClick} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            <Calendar className="w-5 h-5" /> Book a Table
          </button>
          <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20">
            <Phone className="w-5 h-5" /> Call us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
