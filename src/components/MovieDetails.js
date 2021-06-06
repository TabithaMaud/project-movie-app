import React, { useState, useEffect } from "react";
import noImage from "../images/no-image.jpeg";

function MovieDetails({ movie, imageUrl, favorites, getFavorites }) {
  useEffect(() => {
    if (localStorage.getItem("myFavMovies")) {
      const data = JSON.parse(localStorage.getItem("myFavMovies"));
      getFavorites(data);
    }
  }, []);

  const handleClick = (event) => {
    if (!localStorage.getItem("myFavMovies")) {
      getFavorites([movie]);
      localStorage.setItem("myFavMovies", JSON.stringify([movie]));
    } else {
      let movieFound = false;
      let favs = favorites;
      favs.forEach((fav) => {
        if (fav.id === movie.id) {
          movieFound = true;
        }
      });
      if (!movieFound) {
        favs.push(movie);
        getFavorites(favs);
        localStorage.setItem("myFavMovies", JSON.stringify(favorites));
      }
    }
  };

  return (
    <section className="movieDetails">
      <img
        src={movie.poster_path ? imageUrl + movie.poster_path : noImage}
        alt={movie.title}
        key={movie.id}
      />
      <div className="movieOverview">
        <h1>{movie.title}</h1>
        <p>{movie.date}</p>
        <div>{movie.overview}</div>
        <button id={movie.id} onClick={handleClick}>
          Add to favs
        </button>
      </div>
    </section>
  );
}

export default MovieDetails;
