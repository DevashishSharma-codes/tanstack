import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { MovieContext } from '../context/MovieContext'

const LikedMovies = () => {
  const { likedMovies, search } = useContext(MovieContext)

  //  Filter movies based on search


  const filteredMovies = likedMovies.filter((movie) => {
    const name = movie.name || movie.title || ''
    return name.toLowerCase().includes(search.toLowerCase())
  })

  let message = ''

  if (likedMovies.length === 0) {
    message = 'No Movies Liked'
  } else if (filteredMovies.length === 0) {
    message = 'No matching liked movies found'
  }

  return (
    <main className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Liked Movies</h2>


      {message ? (
        <p className="text-gray-400">{message}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}

export default LikedMovies