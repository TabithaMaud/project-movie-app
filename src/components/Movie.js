import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Movie extends Component {
	render() {
		return (
			<div>
				<Link to={'/movie/' + this.props.id}>
					{' '}
					<img
						src={
							this.props.poster
								? this.props.imageUrl + this.props.poster
								: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
						}
						alt={this.props.title}
						key={this.props.id}
					/>
				</Link>
				<h1>{this.props.title}</h1>
				<p>{this.props.date}</p>
			</div>
		);
	}
}

export default Movie;
