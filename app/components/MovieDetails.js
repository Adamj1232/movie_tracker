import React from 'react'

const MovieDetails = (movie) => {
  console.log(movie);
  const { title, poster_path, overview } = movie
  return (
    <article className="movie-card">
      <h2>{ title }</h2>
      <img
        src={`https://image.tmdb.org/t/p/w150${poster_path}`}
        alt={`movie poster of ${title}`}
      />
      <p>{ overview }</p>
    </article>
  )
}

export default MovieDetails