import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
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

	getMovies = (results) => {
		this.setState({ movies: results });
		this.props.history.push('/searchresults');
	};

	render() {
		console.log(this.state.movies);
		return (
			<div>
				<main>
					<Route path='/' exact component={Home} />

					<SearchBar movies={this.state.movies} getMovies={this.getMovies} />

					<Route
						path='/searchresults'
						render={(renderProps) => {
							return (
								<SearchResults
									movies={this.state.movies}
									getMovies={this.getMovies}
								/>
							);
						}}
					/>
					<Route path='/:actor' component={ActorFilmsList} />
					<Route path='/:movie' component={MovieActorsList} />
				</main>
			</div>
		);
	}
}

export default withRouter(App);
