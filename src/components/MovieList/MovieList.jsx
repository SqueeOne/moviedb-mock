import React from "react";
import MovieItem from "./MovieItem";

// Genereic component for displayning movies.
// Receives list of movies and a callback function to handle loading the next set of 20 movies.
const MovieList = ({ movieList, handleLoadMoreMovies, listType }) => {
  return (
    <div className="bg-white flex flex-row flex-wrap pt-4 justify-between">
      {movieList.map((movie) => (
        <MovieItem key={movie.id} props={movie} />
      ))}

      <button
        className="focus:outline-none w-full h-16 bg-blue-400 rounded-2xl text-white font-bold text-xl mb-4"
        onClick={() => handleLoadMoreMovies(listType)}
      >
        Load More
      </button>
    </div>
  );
};

export default MovieList;
