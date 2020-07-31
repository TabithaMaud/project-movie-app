import React, { Component } from 'react';

class Home extends Component {
	componentDidMount() {
		this.props.updateId('home');
	}
	render() {
		return (
			<div>
				<h1>Movie Creds</h1>
				<p>"Wait... what else were they in?"</p>
			</div>
		);
	}
}

export default Home;
