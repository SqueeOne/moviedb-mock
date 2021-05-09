import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterByGenre from "./Filter/FilterByGenre";
import MovieList from "./MovieList/MovieList";

// // API key is here only for development, otherwise it-s hidden in the .env file
// const API_KEY = "63d876ab894154767b72f8ee54b90147";

// Main component with state and logic
const FilterableMovieList = () => {
  // Appilcations main state
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [allGenres, setAllGenres] = useState({});
  const [isLoadingGenres, setIsLoadingGenres] = useState(true);
  const [isPopular, setIsPopular] = useState(false);

  // On page load, make 2 API calls. One to load all genres, and another to
  // load 1st page of popular movies.
  useEffect(() => {
    const fetchAllGenres = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
      );
      setAllGenres(result.data);
      setIsLoadingGenres(false);
    };
    const fetchPopularMovies = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
      );
      setFilteredMovieList(result.data.results);
      setIsPopular(true);
    };
    fetchAllGenres();
    fetchPopularMovies();
  }, []);

  // Make API call and load 1st page of movies filterd by a list of genres
  const handleSetAPIRequest = (genreList) => {
    setIsPopular(false);
    setSelectedGenres(genreList);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_MOVIEDB_API_KEY
        }&with_genres=${genreList.join()}&page=1`
      )
      .then((res) => res.data)
      .then((data) => {
        setFilteredMovieList(data.results);
        setCurrentPage(1);
      })
      .catch((err) => console.error(err));
  };

  // Make API call and load next page of movies. Loads 20 movies per page
  const handleLoadMoreMovies = (movieList) => {
    const apiRequest =
      // check to see if loading popular or filtered movies
      movieList === "popular"
        ? `https://api.themoviedb.org/3/trending/all/week?api_key=${
            process.env.REACT_APP_MOVIEDB_API_KEY
          }&page=${currentPage + 1}`
        : `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.REACT_APP_MOVIEDB_API_KEY
          }&with_genres=${selectedGenres.join()}&page=${currentPage + 1}`;
    axios
      .get(apiRequest)
      .then((res) => res.data)
      .then((data) => {
        // Append new results to the previous array
        setFilteredMovieList((filteredMovieList) => [
          ...filteredMovieList,
          ...data.results,
        ]);
        setCurrentPage(currentPage + 1);
      })
      .catch((err) => console.error(err));
  };

  const listType = isPopular ? "popular" : "genre";

  return (
    <div className="flex flex-col md:flex-row w-full justify-between space-x-3">
      <div className="w-full md:w-1/3 mx-2 mt-4">
        <FilterByGenre
          allGenres={allGenres}
          isLoading={isLoadingGenres}
          handleSetAPIRequest={handleSetAPIRequest}
        />
      </div>
      <div className="w-full md:w-2/3 justify-center">
        <MovieList
          movieList={filteredMovieList}
          handleLoadMoreMovies={handleLoadMoreMovies}
          listType={listType}
        />
      </div>
    </div>
  );
};

export default FilterableMovieList;
