import { useState } from 'react'
import { Calendar, Users, Mail, Phone, Send } from 'lucide-react'

function Reservations() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: Number(form.guests) })
      })
      if (!res.ok) throw new Error('Failed to create reservation')
      setStatus('✅ Reservation request received! We will confirm shortly.')
      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section id="reserve" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Book a Table</h2>
      <form onSubmit={submit} className="bg-slate-800/50 border border-blue-500/10 rounded-xl p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">Name</label>
            <div className="relative">
              <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Email</label>
            <div className="relative">
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Phone</label>
            <div className="relative">
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Guests</label>
            <div className="relative">
              <input type="number" min="1" max="20" name="guests" value={form.guests} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Date</label>
            <div className="relative">
              <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Time</label>
            <div className="relative">
              <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
        </div>
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          <Send className="w-5 h-5" /> Submit
        </button>
        {status && <p className="mt-4 text-blue-100">{status}</p>}
      </form>
    </section>
  )
}

export default Reservations
