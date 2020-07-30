import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
		};
	}

	handleChange = (event) => {
		this.setState({ userInput: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.userInput);
		event.target.reset();
	};

	getData = (searchString) => {
		const key = process.env.REACT_APP_MOVIE_API_KEY;
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=1`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				let results = json.results;
				results.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
				this.props.getMovies(results);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						required
						type='text'
						onChange={this.handleChange}
						placeholder='enter movie title'
					/>
					<button type='submit'>
						{' '}
						<div>search</div>
					</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
