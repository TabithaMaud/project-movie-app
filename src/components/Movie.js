import React, { Component } from 'react';

class Movie extends Component {
	render() {
		return (
			<div>
				<img
					src={
						this.props.results !== null
							? this.props.imageUrl + this.props.results
							: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
					}
					alt={this.props.title}
				/>
				<h1>{this.props.title}</h1>
				<p>{this.props.date}</p>
			</div>
		);
	}
}

export default Movie;
