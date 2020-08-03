import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home';

import SearchResults from './components/SearchResults';
import './components/SearchResults.css';

import SearchBar from './components/SearchBar';

import ActorFilmsList from './components/ActorFilmsList';
import './components/ActorFilmsList.css';

import MovieActorsList from './components/MovieActorsList';
import './components/MovieActorsList.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			cast: [],
			userInput: '',
		};
		// this.searchOptions = {
		// 	key: process.env.REACT_APP_MOVIE_API_KEY,
		// 	url: `https://api.themoviedb.org/3/`,
		// };
	}

	getMovies = (results) => {
		this.setState({ movies: results });
		this.props.history.push('/searchresults');
	};

	getUserInput = (input) => {
		this.setState({ userInput: input });
	};

	render() {
		console.log(this.props);
		return (
			<div className={'masterDiv'}>
				<header>
					<nav>
						<Link to='/'>
							<p className='homeLink'>MC</p>
						</Link>
						{this.props.location.pathname === '/searchresults' && (
							<div className={'searchBarLanding'}>
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
						path='/'
						exact
						render={() => {
							return <Home pageId={this.state.pageId} />;
						}}
					/>
					{this.props.location.pathname === '/' && (
						<div className={'searchBar'}>
							<SearchBar
								movies={this.state.movies}
								getMovies={this.getMovies}
								getUserInput={this.getUserInput}
							/>
						</div>
					)}
					<div className='results'>
						<Route
							path='/searchresults'
							render={(routerProps) => {
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
					</div>
				</main>
			</div>
		);
	}
}

export default withRouter(App);
