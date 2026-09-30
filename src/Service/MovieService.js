import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


export const getTrendingMovies = async (query = '') => {
  if (query) {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    console.log(response.data);
    return response.data.map((item) => item.show)
  }
  const response = await axios.get('https://api.tvmaze.com/shows')
  return response.data
}

//Query
export const useGetTrendingMovies = (search = '') => {
  return useQuery({
    queryKey: ['movies', search],
    queryFn: () => getTrendingMovies(search),
  })
}

export default useGetTrendingMovies