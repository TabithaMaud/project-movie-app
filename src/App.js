import React, { Component, useState } from "react";
import "./App.css";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import Home from "./components/Home";

import SearchResults from "./components/SearchResults";
import "./components/SearchResults.css";

import SearchBar from "./components/SearchBar";

import ActorFilmsList from "./components/ActorFilmsList";
import "./components/ActorFilmsList.css";

import MovieActorsList from "./components/MovieActorsList";
import "./components/MovieActorsList.css";

import FavPage from "./components/FavPage";

import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      cast: [],
      userInput: "",
      favorites: [],
    };
  }

  getMovies = (results) => {
    this.setState({ movies: results });
    this.props.history.push("/searchresults");
  };

  getUserInput = (input) => {
    this.setState({ userInput: input });
  };

  getFavorites = (favs) => {
    this.setState({ favorites: favs });
  };

  render() {
    return (
      <div className={"masterDiv"}>
        <header>
          <nav>
            <Link to="/">
              <img className="homeLink" src={logo} />
            </Link>
            <Link to="/favorites">Favs</Link>
            {this.props.location.pathname !== "/" && (
              <div className="searchBarLanding">
                <SearchBar
                  movies={this.state.movies}
                  getMovies={this.getMovies}
                  getUserInput={this.getUserInput}
                />
              </div>
            )}
          </nav>
        </header>
        <main>
          <Route
            path="/"
            exact
            render={() => {
              return <Home pageId={this.state.pageId} />;
            }}
          />
          {this.props.location.pathname === "/" && (
            <div className="searchBar">
              <SearchBar
                movies={this.state.movies}
                getMovies={this.getMovies}
                getUserInput={this.getUserInput}
              />
            </div>
          )}

          {this.props.location.pathname === "/" && <div className="home"></div>}

          <div className="results">
            <Route
              path="/searchresults"
              render={() => {
                return (
                  <SearchResults
                    movies={this.state.movies}
                    getMovies={this.getMovies}
                    userInput={this.state.userInput}
                  />
                );
              }}
            />
            <Route
              path="/movie/:id"
              render={(routerProps) => {
                return (
                  <MovieActorsList
                    movies={this.state.movies}
                    match={routerProps.match}
                    history={this.props.location.pathname}
                    favorites={this.state.favorites}
                    getFavorites={this.getFavorites}
                  />
                );
              }}
            />
            <Route
              path="/actor/:id"
              render={(routerProps) => {
                return <ActorFilmsList match={routerProps.match} />;
              }}
            />
            <Route
              path="/favorites"
              render={() => {
                return (
                  <FavPage
                    favorites={this.state.favorites}
                    getFavorites={this.getFavorites}
                  />
                );
              }}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
