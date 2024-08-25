import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css"; // Import the CSS

const API_KEY = "3ddbd679";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching the movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h1>Movie Details</h1>
      <div className="movie-details">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-info">
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <span>Genre:</span> {movie.Genre}
          </p>
          <p>
            <span>Director:</span> {movie.Director}
          </p>
          <p>
            <span>Actors:</span> {movie.Actors}
          </p>
          <p>
            <span>Plot:</span> {movie.Plot}
          </p>
          <div className="movie-rating">
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
