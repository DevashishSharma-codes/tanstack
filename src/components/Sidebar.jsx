import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Heart } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white h-screen p-4 border-r border-neutral-900">
      <Link to="/movies" className="flex items-center gap-2 mb-4 hover:text-gray-300">
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link to="/liked" className="flex items-center gap-2 hover:text-gray-300">
        <Heart size={20} />
        <span>Liked Movies</span>
      </Link>
    </aside>
  )
}

export default Sidebar