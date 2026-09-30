import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  const [likedMovies, setLikedMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('likedMovies')) || []
  })

  const toggleLikedMovie = (movie) => {
    let updated
    if (likedMovies.some((item) => item.id === movie.id)) {
      updated = likedMovies.filter((item) => item.id !== movie.id)
    } else {
      updated = [...likedMovies, movie]
    }

    setLikedMovies(updated)
    localStorage.setItem('likedMovies', JSON.stringify(updated))
  }

  return (
    <MovieContext.Provider value={{ search, setSearch, likedMovies, toggleLikedMovie }}>
      {children}
    </MovieContext.Provider>
  )
}
