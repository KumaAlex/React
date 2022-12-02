import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const moviesApi = "https://api.themoviedb.org/3/movie";
  const imagePath = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="movie-card">
      <Link to={`movies/${movie.id}`}>
        <img
          src={`${imagePath}/${movie.poster_path}`}
          alt="img"
          className="movie-card-img"
        />
      </Link>
      <Link className="movie-card-title" to={`movies/${movie.id} `}>
        {movie.original_title}
      </Link>
    </div>
  );
};

export default MovieCard;
