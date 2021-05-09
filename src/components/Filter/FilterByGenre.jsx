import React, { useState } from "react";
import Genre from "./Genre";

const FilterByGenre = ({ allGenres, isLoading, handleSetAPIRequest }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Function that handles adding selected genres to state
  const handleAddSelectedGenre = (id) => {
    //If Genre id is not in state, add it, otherwise remove
    if (!selectedGenres.includes(id)) {
      setSelectedGenres((selectedGenres) => [...selectedGenres, id]);
    } else {
      setSelectedGenres((selectedGenres) =>
        selectedGenres.filter((genreID) => genreID !== id)
      );
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-300 shadow-lg flex flex-col space-y-3">
      <div className="w-full border-b border-gray-200 h-8">
        <h2 className="text-lg font-bold text-gray-500">Filters</h2>
      </div>
      <div className="w-full flex flex-col space-y-3">
        <h3 className="text-md text-gray-400">Genres</h3>
        <div className="flex flex-row flex-wrap">
          {!isLoading ? (
            Object.values(allGenres.genres).map((genre) => (
              <Genre
                key={genre.id}
                id={genre.id}
                name={genre.name}
                handleAddSelectedGenre={handleAddSelectedGenre}
              />
            ))
          ) : (
            <h2>...Loading</h2>
          )}
        </div>
        <button
          type="button"
          className="focus:outline-none bg-blue-400 text-white font-bold text-lg rounded-2xl py-2"
          onClick={() => handleSetAPIRequest(selectedGenres)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterByGenre;
