import React, { Component } from 'react';
import noImage from '../images/no-image.jpeg';

class MovieDetails extends Component {
	render() {
		return (
			<section className='movieDetails'>
				<img
					src={
						this.props.poster
							? this.props.imageUrl + this.props.poster
							: noImage
					}
					alt={this.props.title}
					key={this.props.id}
				/>
				<div className='movieOverview'>
					<h1>{this.props.title}</h1>
					<p>{this.props.date}</p>
					<div>{this.props.overview}</div>
				</div>
			</section>
		);
	}
}

export default MovieDetails;
