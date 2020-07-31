import React, { Component } from 'react';

class MovieDetails extends Component {
	render() {
		return (
			<section className='movieDetails'>
				<img
					src={
						this.props.poster
							? this.props.imageUrl + this.props.poster
							: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
					}
					alt={this.props.title}
					key={this.props.id}
				/>
				<div className='movieOverview'>
					<h1>{this.props.title}</h1>
					<p>{this.props.date}</p>
					<p>{this.props.overview}</p>
				</div>
			</section>
		);
	}
}

export default MovieDetails;
