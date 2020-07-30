import React, { Component } from 'react';
import Movie from './Movie';
import { Route, Link, Redirect } from 'react-router-dom';

class SearchResults extends Component {
	render() {
		return (
			<main>
				{this.props.movies.results.map((movie) => {
					return (
						<Movie
							poster={movie.poster_path}
							imageUrl={'https://image.tmdb.org/t/p/w200'}
							title={movie.title}
							date={movie.release_date}
							key={movie.id}
							match={this.props.match}
							id={movie.id}
						/>
					);
				})}
			</main>
		);
	}
}

export default SearchResults;
