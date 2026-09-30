
import { useContext, useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import SkeletonCard from './SkeletonCard'
import { useGetTrendingMovies } from '../Service/MovieService'
import { MovieContext } from '../context/MovieContext'


const MovieList = () => {
  const { search } = useContext(MovieContext);
  const { data: movies = [], isLoading, isError } = useGetTrendingMovies(search);
  const [visibleCount, setVisibleCount] = useState(10);

  //reset for search 

  useEffect(() => {
    setVisibleCount(10)
  }, [search])


  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      if (bottom) {
        setVisibleCount((prev) => prev + 10)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  if (isLoading) {
    return (
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <SkeletonCard count={10} />
        </div>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
        <p className="text-red-400">Failed to load movies. Please try again later.</p>
      </main>
    )
  }

  if (movies.length === 0) {
    return (
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
        <p className="text-gray-400">No data found</p>
      </main>
    )
  }

  const visibleMovies = movies.slice(0, visibleCount);
  const loadingMore = visibleCount < movies.length;
  return (
    <main className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {loadingMore && <SkeletonCard count={5}></SkeletonCard>}
      </div>
    </main>
  )
}

export default MovieList