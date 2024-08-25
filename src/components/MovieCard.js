import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; // For styling

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
