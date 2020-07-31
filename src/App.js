import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import ActorFilmsList from './components/ActorFilmsList';
import MovieActorsList from './components/MovieActorsList';
import './components/SearchResults.css';

// const key = process.env.REACT_APP_MOVIE_API_KEY;
// const url = `https://api.themoviedb.org/3/`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			cast: [],
			pageId: 'home',
		};
		// this.searchOptions = {
		// 	key: process.env.REACT_APP_MOVIE_API_KEY,
		// 	url: `https://api.themoviedb.org/3/`,
		// };
	}

	//WHEN RETURNING TO HOME SCREEN RESET ID TO HOME
	// updateId = (newClass) => {
	// 	this.setState({ pageId: newClass });
	// };

	getMovies = (results) => {
		this.setState({ movies: results });
		this.props.history.push('/searchresults');
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
							<div className={'searchBar'}>
								<SearchBar
									movies={this.state.movies}
									getMovies={this.getMovies}
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
