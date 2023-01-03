const ListMovie = (props)=>{
    const getMovies = props.movie
    return getMovies.map((movie,i)=>{
        return (
          <div className="movie-wrapper" key={i}>
            <div className="movie-title"> {movie.original_title}</div>
            <img className="movie-image" alt={movie.original_title} src={process.env.REACT_APP_BASEIMGURL+movie.backdrop_path}></img>
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
        )
      })
}


export default ListMovie