import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getData(this.state.userInput);
    event.target.reset();
    this.props.getUserInput(this.state.userInput);
  };

  getData = (searchString) => {
    const key = process.env.REACT_APP_MOVIE_API_KEY;

    const success = (res) => (res.ok ? res.json() : Promise.resolve({}));

    const page1 = fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=1`
    ).then(success);
    const page2 = fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=2`
    ).then(success);
    const page3 = fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=3`
    ).then(success);

    return Promise.all([page1, page2, page3]).then(([page1, page2, page3]) => {
      let results = page1.results.concat(page2.results);
      results = results.concat(page3.results);
      results.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
      this.props.getMovies(results);
    });
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            onChange={this.handleChange}
            placeholder="enter movie title"
          />
          <button type="submit">
            {" "}
            <div>SEARCH</div>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
