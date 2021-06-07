import React from "react";
import Movie from "./Movie";

function FavPage({ favorites }) {
  return (
    <div>
      favs
      {favorites.map((film) => {
        return (
          <Movie
            poster={film.poster_path}
            imageUrl={"https://image.tmdb.org/t/p/w200"}
            title={film.title}
            date={film.release_date}
            key={film.id}
            id={film.id}
            character={film.character}
          />
        );
      })}
    </div>
  );
}

export default FavPage;
