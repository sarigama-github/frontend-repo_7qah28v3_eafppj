import { useState } from 'react'
import { Mail, User, MessageSquare, Send } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('✅ Message sent! We will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Contact Us</h2>
      <form onSubmit={submit} className="bg-slate-800/50 border border-blue-500/10 rounded-xl p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 border border-blue-500/20 focus:outline-none focus:ring focus:ring-blue-500/30" />
        </div>
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          <Send className="w-5 h-5" /> Send
        </button>
        {status && <p className="mt-4 text-blue-100">{status}</p>}
      </form>
    </section>
  )
}

export default Contact
