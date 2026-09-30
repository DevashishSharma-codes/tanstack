import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-neutral-800">

      {/* 1. Aceternity-Style Top Navigation */}
      <nav className="h-16 border-b border-neutral-800/80 px-6 lg:px-12 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-md z-50">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold tracking-tight text-lg hover:opacity-90 transition">
          <span className="text-xl">▲</span>
          <span>TMBD</span>
        </Link>

        {/* Right Nav Links */}
        <div className="flex items-center gap-6 text-sm text-neutral-400 font-medium">
          <Link to="/movies" className="hover:text-white transition">Trending</Link>
          <Link to="/liked" className="hover:text-white transition">Favs</Link>
        </div>
      </nav>

      {/* 2. Hero & Showcase Grid Container */}
      <main className="relative flex-1 flex items-center overflow-hidden min-h-[calc(100vh-64px)] px-6 lg:px-12 py-12">

        {/* Right Side / Background Showcase Grid (Aceternity UI Cards) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] grid grid-cols-1 md:grid-cols-2 gap-5 p-6 opacity-40 lg:opacity-90 overflow-hidden pointer-events-none lg:pointer-events-auto select-none">

          {/* Card 1: Laptop Showcase style */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-neutral-700 transition shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
              <span>Cinema stream interface</span>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 font-sans">4K Ultra HD</span>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/10] group">
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
                alt="Stranger Things"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Trending Sci-Fi & Mystery</p>
                  <h4 className="text-sm font-bold text-white">Stranger Things: Upside Down</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI interface card */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-neutral-700 transition shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
              <span>Framed hero & ratings</span>
              <span className="text-amber-400 text-xs font-semibold flex items-center gap-1">★ 9.5 / 10</span>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/10] group">
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
                alt="Breaking Bad"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Top Rated Drama</p>
                  <h4 className="text-sm font-bold text-white">Breaking Bad: The Legacy</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Design studio showcase */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-neutral-700 transition shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
              <span>Curated Crime & Mystery</span>
              <span className="text-neutral-500 text-[10px]">Season 4</span>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/10] group">
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/498/1245275.jpg"
                alt="True Detective"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">HBO Original</p>
                  <h4 className="text-sm font-bold text-white">True Detective: Night Country</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Fey cards showcase */}
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-neutral-700 transition shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
              <span>Epic Fantasy Saga</span>
              <span className="bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded-full border border-purple-500/20 font-sans">Top Pick</span>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/10] group">
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
                alt="Game of Thrones"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Fantasy & Adventure</p>
                  <h4 className="text-sm font-bold text-white">Game of Thrones: Iron Throne</h4>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dramatic Left-to-Right Fade Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 lg:via-black/85 to-transparent pointer-events-none" />

        {/* Left Hero Content */}
        <div className="relative z-10 max-w-2xl space-y-6">

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-3.5 py-1.5 rounded-full text-xs text-neutral-300 backdrop-blur-sm">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              📁 Changelog
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">80+ new shows & movies</span>
            <ArrowRight size={12} className="text-neutral-400" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            The React movie library for cinema lovers.
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
            200+ production-ready shows, blocks and trending templates built with React, Tailwind CSS and TVMaze API. Search, discover, and save favorites at lightning speed.
          </p>

          {/* CTA Buttons (Redirects to /movies) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/movies"
              className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition text-sm shadow-md"
            >
              Browse Movies
            </Link>
            <Link
              to="/liked"
              className="bg-neutral-900/80 border border-neutral-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-neutral-800 transition text-sm backdrop-blur-sm"
            >
              Saved Favorites
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-6 space-y-2">
            <p className="text-xs text-neutral-400 font-medium">
              Trusted by 120,000+ movie fans, critics and creators
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=64&h=64&fit=crop&crop=face" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face" alt="User" />
              </div>
              <div className="flex text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>

    </div>
  )
}

export default LandingPage

