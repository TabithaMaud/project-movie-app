import React, { Component } from 'react';
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
				const date = new Date(json.birthday);
				json.birthday = date.toLocaleString('default', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				});
				let filmList = json.credits.cast;
				filmList.map((film) => {
					if (film.release_date) {
						return (film.release_date = film.release_date.slice(0, 4));
					}
				});
				filmList.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
				this.setState({ actorInfo: json });
				this.setState({ films: filmList });
			});
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<main>
				{
					<ActorDetails
						info={this.state.actorInfo}
						imageUrl={'https://image.tmdb.org/t/p/w200'}
					/>
				}
				<div className='actorMoviesList'>
					{this.state.films.map((film) => {
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
				</div>
			</main>
		);
	}
}

export default ActorFilmsList;
