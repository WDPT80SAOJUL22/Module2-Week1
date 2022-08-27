import movieData from '../movies-data.json'
import {useState} from 'react'

const MovieList = () => {

  const [movies, setMovies] = useState(movieData)

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie)=> movie._id !== movieId)
    setMovies(filteredMovies)
  }

  return (
    <div>
        <h2>MovieList</h2>
        {movies.map(movie => {
            return (
                <div key= {movie._id}>
                    <h3>{movie.title}</h3>
                    <p>Director: {movie.director}</p>
                    <p>Rating: {movie.IMDBRating}</p>
                    <button onClick={()=> {deleteMovie(movie._id)}}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default MovieList