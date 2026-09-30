import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MovieHomePage from './pages/MovieHomePage'
import { MovieProvider } from './context/MovieContext'

export default function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-black text-white selection:bg-neutral-800">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MovieHomePage />} />
          <Route path="/liked" element={<MovieHomePage />} />
        </Routes>
      </div>
    </MovieProvider>
  )
}



