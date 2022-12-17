import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imagePath = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`${
            movie.poster_path !== null
              ? `${imagePath}/${movie.poster_path}`
              : "./default-movie.jpg"
          }`}
          alt="img"
          className="movie-card-img"
        />
      </Link>
      <Link className="movie-card-title" to={`/movies/${movie.id} `}>
        {movie.title}
      </Link>
    </div>
  );
};

export default MovieCard;
