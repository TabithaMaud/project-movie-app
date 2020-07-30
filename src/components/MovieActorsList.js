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

	getId = () => {
		const arrHistory = this.props.history.split('');
		for (let i = arrHistory.length; i > 0; i--) {
			if (arrHistory[i] === '/') {
				return arrHistory.slice(i + 1, arrHistory.length).join('');
			}
		}
	};

	componentDidMount() {
		this.getId();
		const key = process.env.REACT_APP_MOVIE_API_KEY;
		const url = `https://api.themoviedb.org/3/movie/${this.getId()}?api_key=${key}&append_to_response=credits&page=1`;
		// URL GRABS MOVIE INFO AND CAST
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ cast: json.credits.cast });
				this.setState({ movieInfo: json.credits.cast });
				console.log(json);
			});
	}

	// HOW TO LIMIT RESULTS IN ARRAY RETURNED FROM API:

	// var film = this.props.data.slice(0, 5).map((item) => {
	// return <FilmItem key={item.id} film={item} />
	// });

	// return film;

	// If you do not neet the original array anymore, you could mutate the array with seting length to 5 and iterate then.

	render() {
		console.log(this.state.cast);
		return (
			<main>
				{this.state.cast.slice(0, 19).map((cast) => {
					return (
						<Actor
							cast={cast}
							key={cast.id}
							imageUrl={'https://image.tmdb.org/t/p/w200'}
						/>
					);
				})}
			</main>
		);
	}
}

export default MovieActorsList;
