import React from 'react';

const MovieCard = ({movie}) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w150${movie.poster_path}`} alt={`movie poster of ${movie.title}`}/>
    </div>
  )
}

export default MovieCard;
