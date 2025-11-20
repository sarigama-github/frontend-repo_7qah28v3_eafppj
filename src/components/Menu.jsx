import { useEffect, useState } from 'react'
import { ChefHat, Leaf, Flame } from 'lucide-react'

function Menu() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/menu`)
        if (!res.ok) throw new Error('Failed to load menu')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [])

  const categories = Array.from(new Set(items.map(i => i.category)))

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Our Menu</h2>
      {loading && <p className="text-blue-200 text-center">Loading...</p>}
      {error && <p className="text-red-300 text-center">{error}</p>}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(cat => (
            <div key={cat} className="bg-slate-800/50 border border-blue-500/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-5 h-5 text-blue-300" />
                <h3 className="text-xl font-semibold text-white">{cat}</h3>
              </div>
              <ul className="space-y-4">
                {items.filter(i => i.category === cat).map(item => (
                  <li key={item.id} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-medium flex items-center gap-2">
                        {item.name}
                        {item.is_vegetarian && <Leaf className="w-4 h-4 text-green-400" />}
                        {item.is_spicy && <Flame className="w-4 h-4 text-orange-400" />}
                      </p>
                      {item.description && <p className="text-blue-200/80 text-sm mt-1">{item.description}</p>}
                    </div>
                    <span className="text-blue-100 font-semibold">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Menu
