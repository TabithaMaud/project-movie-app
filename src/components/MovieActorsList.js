import React, { Component } from 'react';
import Movie from './Movie';
import Actor from './Actor';
import { Route, Link, Redirect } from 'react-router-dom';

class MovieActorsList extends Component {
	constructor() {
		super();
		this.state = {
			cast: [],
			movieInfo: [],
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		const key = process.env.REACT_APP_MOVIE_API_KEY;
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits&page=1`;
		// URL GRABS MOVIE INFO AND CAST
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ cast: json.credits.cast });
				this.setState({ movieInfo: json });
			});
	}

	render() {
		console.log(this.props.match.params.id);
		return (
			<main>
				<Movie
					poster={this.state.movieInfo.poster_path}
					imageUrl={'https://image.tmdb.org/t/p/w200'}
					title={this.state.movieInfo.title}
					date={this.state.movieInfo.release_date}
					key={this.state.movieInfo.id}
					id={this.state.movieInfo.id}
				/>
				{this.state.cast.slice(0, 19).map((cast) => {
					return (
						<Actor
							cast={cast}
							key={cast.id}
							imageUrl={'https://image.tmdb.org/t/p/w200'}
							match={this.props.match}
						/>
					);
				})}
			</main>
		);
	}
}

export default MovieActorsList;
