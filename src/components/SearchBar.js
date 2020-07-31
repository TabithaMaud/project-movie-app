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

		const success = (res) => (res.ok ? res.json() : Promise.resolved({}));

		const page1 = fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=1`
		).then(success);
		const page2 = fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=2`
		).then(success);
		return Promise.all([page1, page2]).then(([page1, page2]) => {
			let results = page1.results.concat(page2.results);
			results.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
			this.props.getMovies(results);
		});
	};

	render() {
		return (
			<div className='searchbar'>
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
