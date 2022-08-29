import movieData from '../movies-data.json'
import { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {

  const [movies, setMovies] = useState(movieData)
  const [showMovies, setShowMovies] = useState(true)

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie)=> movie._id !== movieId)
    setMovies(filteredMovies)
  }

  return (
    <div>
        <h2>MovieList</h2>
        <button onClick={()=>{setShowMovies(!showMovies)}}>{showMovies? 'Hide' : 'Show'}</button>
        {showMovies &&
            movies.map(movie => <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie}/>)
        }
    </div>
  )
}

export default MovieList