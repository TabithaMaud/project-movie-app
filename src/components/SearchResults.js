import React, { Component } from 'react';
import Movie from './Movie';
import './SearchResults.css';

class SearchResults extends Component {
	render() {
		return (
			<div>
				<h1 className='h1Title'>Results for "{this.props.userInput}"</h1>
				<main className='searchResults'>
					{this.props.movies.map((movie) => {
						if (movie.poster_path && movie.overview && movie.popularity > 3) {
							movie.release_date = movie.release_date.slice(0, 4);
							return (
								<Movie
									poster={movie.poster_path}
									imageUrl={'https://image.tmdb.org/t/p/w400'}
									title={movie.title}
									date={movie.release_date}
									key={movie.id}
									id={movie.id}
								/>
							);
						}
					})}
				</main>
			</div>
		);
	}
}

export default SearchResults;
