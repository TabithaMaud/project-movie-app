import React, { useEffect } from "react";
import Movie from "./Movie";

function FavPage({ getFavorites, favorites }) {
  useEffect(() => {
    if (localStorage.getItem("myFavMovies")) {
      // const data = ;
      getFavorites(JSON.parse(localStorage.getItem("myFavMovies")));
    }
  }, []);

  const removeFav = (fav) => {
    const data = favorites;
    data.splice(data.indexOf(fav), 1);
    getFavorites(data);
    localStorage.setItem("myFavMovies", JSON.stringify(data));
  };

  return (
    <div className="actorMoviesList">
      {favorites.map((film) => {
        return (
          <div>
            <Movie
              poster={film.poster_path}
              imageUrl={"https://image.tmdb.org/t/p/w200"}
              title={film.title}
              date={film.release_date}
              key={film.id}
              id={film.id}
              character={film.character}
            />
            <button onClick={() => removeFav(film)}>Remove From Favs</button>
          </div>
        );
      })}
    </div>
  );
}

export default FavPage;
