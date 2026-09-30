import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Search, Film, Menu, X } from "lucide-react"
import { Link } from 'react-router-dom'

const Navbar = ({ toggleSidebar }) => {
    const { search, setSearch } = useContext(MovieContext)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <header className="relative flex justify-between items-center px-4 sm:px-6 py-4 bg-black text-white sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="md:hidden">
                    <Menu size={24} />
                </button>

                <Link to="/" className="flex items-center gap-2">
                    <Film />
                    <span className="text-xl">Tmbd</span>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <button onClick={() => setShowSearch(true)} className="sm:hidden">
                    <Search size={20} />
                </button>
                <div className="hidden sm:flex items-center gap-2">
                    <Search size={20} />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        className="bg-black border border-gray-600 rounded-full px-4 py-2 outline-none"
                    />
                </div>
            </div>

            {/* MOBILE SEARCH OVERLAY */}
            {showSearch && (
                <div className="absolute inset-0 bg-black flex items-center gap-2 px-4 sm:hidden z-50">
                    <Search size={20} className="text-gray-400" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        autoFocus
                        className="flex-1 bg-black border border-gray-600 rounded-full px-4 py-1.5 text-sm outline-none"
                    />
                    <button onClick={() => setShowSearch(false)}>
                        <X size={20} />
                    </button>
                </div>
            )}
        </header>
    )
}

export default Navbar