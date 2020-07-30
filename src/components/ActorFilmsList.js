import React, { Component } from 'react';
import Actor from './Actor';
import Movie from './Movie';

class ActorFilmsList extends Component {
	constructor() {
		super();
		this.state = {
			films: [],
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		const key = process.env.REACT_APP_MOVIE_API_KEY;
		const url = `https://api.themoviedb.org/3/person/${id}/credits?api_key=${key}&page=1`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ films: json.cast });
			});
	}

	render() {
		console.log(this.props.match.params.id);
		console.log(this.state.films);
		return (
			<div>
				<main>
					{
						//MUST APPEND TO END OR URL TO GRAB PERSON INFO AND CREDITS
						/* <Actor
						cast={cast}
						key={cast.id}
						imageUrl={'https://image.tmdb.org/t/p/w200'}
						match={this.props.match}
					/> */
					}

					{this.state.films.slice(0, 19).map((film) => {
						return (
							<Movie
								poster={film.poster_path}
								imageUrl={'https://image.tmdb.org/t/p/w200'}
								title={film.title}
								date={film.release_date}
								key={film.id}
								id={film.id}
							/>
						);
					})}
				</main>
			</div>
		);
	}
}

export default ActorFilmsList;
