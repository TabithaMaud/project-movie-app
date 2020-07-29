import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Movie from './Movie';

class SearchResults extends Component {
	render() {
		return (
			<main>
				{this.props.movies.results.map((movie) => {
					return (
						<Movie
							results={movie.poster_path}
							imageUrl={'https://image.tmdb.org/t/p/w200'}
							title={movie.title}
							date={movie.release_date}
						/>
					);
				})}
			</main>
		);
	}
}

export default SearchResults;
