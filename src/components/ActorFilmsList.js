import React, { Component } from 'react';
import Actor from './Actor';
import Movie from './Movie';
import ActorDetails from './ActorDetails';

class ActorFilmsList extends Component {
	constructor() {
		super();
		this.state = {
			films: [],
			actorInfo: [],
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		const key = process.env.REACT_APP_MOVIE_API_KEY;
		const url = `https://api.themoviedb.org/3/person/${id}?api_key=${key}&append_to_response=credits&page=1`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ actorInfo: json });
				this.setState({ films: json.credits.cast });
			});
	}

	render() {
		console.log(this.state.actorInfo);
		return (
			<div>
				<main>
					{
						<ActorDetails
							info={this.state.actorInfo}
							imageUrl={'https://image.tmdb.org/t/p/w200'}
						/>
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
