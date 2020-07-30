import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import ActorFilmsList from './components/ActorFilmsList';
import MovieActorsList from './components/MovieActorsList';

// const key = process.env.REACT_APP_MOVIE_API_KEY;
// const url = `https://api.themoviedb.org/3/`;

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
		return (
			<div>
				<nav>
					<Link to='/'>
						<p>HOME</p>
					</Link>
				</nav>
				<main>
					<Route path='/' exact component={Home} />
					<SearchBar movies={this.state.movies} getMovies={this.getMovies} />
					<Route
						path='/searchresults'
						render={(routerProps) => {
							return (
								<SearchResults
									movies={this.state.movies}
									getMovies={this.getMovies}
									// match={routerProps.match}
								/>
							);
						}}
					/>
					<Route
						path='/movie/:id'
						render={(routerProps) => {
							return (
								<MovieActorsList
									movies={this.state.movies}
									match={routerProps.match}
									history={this.props.location.pathname}
								/>
							);
						}}
					/>
					<Route
						path='/actor/:id'
						render={(routerProps) => {
							return <ActorFilmsList match={routerProps.match} />;
						}}
					/>
				</main>
			</div>
		);
	}
}

export default withRouter(App);
