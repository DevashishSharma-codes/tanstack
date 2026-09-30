import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MovieList from '../components/MovieList'
import LikedMovies from '../components/LikedMovies'

const MovieHomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()

  return (
    <div>
      <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
      <div className="flex relative">
        <div
          className={`${
            showSidebar ? 'block' : 'hidden'
          } md:block absolute md:static z-40 bg-black`}
        >
          <Sidebar />
        </div>
        {location.pathname === '/liked' ? <LikedMovies /> : <MovieList />}
      </div>
    </div>
  )
}

export default MovieHomePage



