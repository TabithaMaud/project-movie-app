import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import ActorFilmsList from './components/ActorFilmsList';
import MovieActorsList from './components/MovieActorsList';

const key = process.env.REACT_APP_MOVIE_API_KEY;
const url = `https://api.themoviedb.org/3/`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			cast: [],
		};
	}

	setMovies = (newMovies) => {
		this.setState({ movies: newMovies });
	};

	render() {
		console.log(this.state.movies);
		return (
			<div>
				<main>
					<Route path='/' component={Home} />
					<SearchBar movies={this.state.movies} setMovies={this.setMovies} />
					<Route
						path='/searchresults'
						component={SearchResults}
						movies={this.state.movies}
					/>
					<Route path='/:actor' component={ActorFilmsList} />
					<Route path='/:movie' component={MovieActorsList} />
				</main>
			</div>
		);
	}
}

export default App;
