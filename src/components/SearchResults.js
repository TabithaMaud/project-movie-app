import React, { Component } from 'react';
import Movie from './Movie';
import { Route, Link, Redirect } from 'react-router-dom';

class SearchResults extends Component {
	// confirmCast = (movies) => {
	// 	this.props.movies.results.filter(movie => movie.
	// }

	render() {
		return (
			<main>
				{this.props.movies.map((movie) => {
					if (movie.poster_path && movie.overview && movie.popularity > 3) {
						return (
							<Movie
								poster={movie.poster_path}
								imageUrl={'https://image.tmdb.org/t/p/w200'}
								title={movie.title}
								date={movie.release_date}
								key={movie.id}
								id={movie.id}
							/>
						);
					}
				})}
			</main>
		);
	}
}

export default SearchResults;
