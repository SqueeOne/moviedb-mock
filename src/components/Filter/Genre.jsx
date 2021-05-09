import React, { useState } from "react";

// Component that displays each genre in the Filters sidebar. Receives genre props and callback function
// for handling adding genre id's to the genre list in the main FilterableMovieList component.
const Genre = ({ id, name, handleAddSelectedGenre }) => {
  const [isSelected, setIsSelected] = useState(false);

  const buttonClass = !isSelected
    ? "bg-white border border-gray-600 hover:bg-blue-400 p-3 rounded-full text-gray-500 hover:text-white text-md mt-2 mr-2"
    : "border border-gray-600 bg-blue-400 p-3 rounded-full text-white text-md mt-2 mr-2";
  return (
    <div
      key={id}
      className={buttonClass}
      onClick={() => {
        handleAddSelectedGenre(id);
        setIsSelected(!isSelected);
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Genre;
