
const MovieCard = (props) => {
    const {movie} = props

    // const showOscar = (movie) => {
    //     if(movie.hasOscars){
    //         return <p>This movie has Oscar(s)!</p>
    //     }else{
    //         return <p>This movie has no Oscar</p>
    //     }
    // }

    return (
        <div key={movie._id}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            {movie.IMDBRating > 9 ? 
                <p style={{color:'green'}}>Rating: {movie.IMDBRating}</p> :
                <p>Rating: {movie.IMDBRating}</p>}
            {/* {showOscar(movie)} */}
            {movie.hasOscars && <p>This movie has Oscar(s)!</p>}
            <button onClick={() => { props.clickToDelete(movie._id) }}>Delete</button>
        </div>
    )
}

export default MovieCard