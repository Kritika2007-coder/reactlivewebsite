import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./MovieList.css"; // For styling

const API_KEY = "3ddbd679";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'movie', 'series'

  // Fetch default movies when the component mounts
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error("Error fetching the default movies:", error);
      }
    };

    fetchDefaultMovies();
  }, []);

  const searchMovies = async () => {
    try {
      let url = `https://www.omdbapi.com/?s=${
        searchTerm || "avengers"
      }&apikey=${API_KEY}`;
      if (filter !== "all") {
        url += `&type=${filter}`;
      }

      const response = await axios.get(url);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching the movies:", error);
      setMovies([]);
    }
  };

  return (
    <div className="movie-list-container">
      <h1>Movie Search</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie or TV show..."
      />

      <button className="search-button" onClick={searchMovies}>
        Search
      </button>

      <div className="filters">
        <button
          onClick={() => {
            setFilter("all");
            searchMovies();
          }}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("movie");
            searchMovies();
          }}
          className={filter === "movie" ? "active" : ""}
        >
          Movies
        </button>
        <button
          onClick={() => {
            setFilter("series");
            searchMovies();
          }}
          className={filter === "series" ? "active" : ""}
        >
          TV Shows
        </button>
      </div>

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
