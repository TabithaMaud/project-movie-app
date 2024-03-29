import React, { Component } from "react";
import Actor from "./Actor";
import MovieDetails from "./MovieDetails";

class MovieActorsList extends Component {
  constructor() {
    super();
    this.state = {
      cast: [],
      movieInfo: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const key = process.env.REACT_APP_MOVIE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.release_date) {
          json.release_date = json.release_date.slice(0, 4);
        }
        this.setState({ cast: json.credits.cast });
        this.setState({ movieInfo: json });
      });

    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.state.movieInfo);
    return (
      <main>
        <MovieDetails
          movie={this.state.movieInfo}
          imageUrl={"https://image.tmdb.org/t/p/w200"}
          favorites={this.props.favorites}
          getFavorites={this.props.getFavorites}
        />
        <div className="movieActorsList">
          {this.state.cast.map((cast) => {
            return (
              <Actor
                cast={cast}
                key={cast.id}
                imageUrl={"https://image.tmdb.org/t/p/w200"}
                match={this.props.match}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default MovieActorsList;
