import React, { useContext } from 'react'
import { Heart } from 'lucide-react'
import { MovieContext } from '../context/MovieContext'

const MovieCard = ({ movie }) => {
  const { likedMovies, toggleLikedMovie } = useContext(MovieContext)
  const isLiked = likedMovies.some((item) => item.id === movie?.id)

  return (
    <div className="bg-neutral-900 hover:bg-neutral-800 p-2 rounded-xl border border-gray-600 cursor-pointer group transition duration-200 hover:scale-105">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={movie?.image?.medium || movie?.image?.original || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=60'}
          alt={movie?.name || 'Movie Poster'}
          className="w-full aspect-[2/3] object-cover object-center rounded-lg shadow-md bg-neutral-800"
        />
        <button
          onClick={() => toggleLikedMovie(movie)}
          className="absolute cursor-pointer bottom-2 right-2 bg-black/60 p-2 rounded-full text-white"
        >
          <Heart size={20} fill={isLiked ? 'red' : 'white'} />
        </button>
      </div>

      <h3 className="mt-2 text-sm font-semibold text-white truncate">
        {movie?.name}
      </h3>

      <p className="text-xs text-gray-400 truncate">
        {movie?.genres?.join(', ')}
      </p>
    </div>
  )
}

export default MovieCard
