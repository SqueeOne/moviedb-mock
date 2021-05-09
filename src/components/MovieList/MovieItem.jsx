import React from "react";

// Component used to display each movie in the list
const MovieItem = ({ props }) => {
  // Switcher for background color of the popularity badge
  const popularityBadgeCSS =
    props.vote_average * 10 < 50
      ? "flex flex-row justify-center items-center w-11 h-11 text-center rounded-full bg-red-700 shadow-md text-sm font-bold border-2 border-red-500"
      : props.vote_average * 10 > 50 && props.vote_average * 10 < 70
      ? "flex flex-row justify-center items-center w-11 h-11 text-center rounded-full bg-yellow-600 shadow-md text-sm font-bold border-2 border-yellow-400"
      : "flex flex-row justify-center items-center w-11 h-11 text-center rounded-full bg-green-700 shadow-md text-sm font-bold border-2 border-green-500";

  return (
    <div
      key={props.id}
      className="relative bg-white w-full md:w-1/4 lg:w-1/5 h-96 mb-8 shadow-lg rounded-2xl overflow-hidden border border-gray-300 flex flex-col space-y-2"
    >
      {/* Make sure movie object has an image, if not, replace with gray background */}
      {props.poster_path ? (
        <img
          className="h-2/3 object-cover opacity-80 hover:opacity-100"
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt={props.title ? props.title : props.name}
        />
      ) : (
        <div className="h-2/3 object-cover bg-gray-700 opacity-80 hover:opacity-100"></div>
      )}

      <div className="absolute w-full top-56 flex flex-row justify-center">
        <div className={popularityBadgeCSS}>
          <p className="text-white">
            {/* Multiply by 10 to get percentage */}
            {parseInt(props.vote_average * 10)}
            <span className="text-xs font-light">%</span>
          </p>
        </div>
      </div>
      <div className="px-2">
        <h2 className="relative pt-4 font-bold text-gray-700 text-sm">
          {/* Some response objects have "name" instead of "title" */}
          {props.title ? props.title : props.name}
        </h2>
        <p className="text-gray-500 font-light text-sm">
          {props.release_date ? props.release_date : props.first_air_date}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
