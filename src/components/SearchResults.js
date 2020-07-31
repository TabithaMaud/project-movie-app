import React, { Component } from 'react';
import Movie from './Movie';
import './SearchResults.css';

class SearchResults extends Component {
	render() {
		return (
			<main className='searchResults'>
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
