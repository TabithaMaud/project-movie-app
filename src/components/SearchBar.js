import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import SearchResults from './SearchResults';

//LIMITS RESPONSE SIZE -> &page=1

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
			userInput: '',
		};
	}

	handleChange = (event) => {
		this.setState({ userInput: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.userInput);
	};

	getData = (searchString) => {
		const key = process.env.REACT_APP_MOVIE_API_KEY;
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchString}&page=1`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				this.props.getMovies(json);
				// this.setState({ results: json });
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
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
