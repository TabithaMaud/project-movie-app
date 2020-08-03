import React, { Component } from 'react';

class ActorDetails extends Component {
	render() {
		return (
			<section className='movieDetails'>
				<img
					src={
						this.props.info.profile_path
							? this.props.imageUrl + this.props.info.profile_path
							: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
					}
					alt={this.props.info.name}
				/>
				<div className='actorOverview'>
					<h1>{this.props.info.name}</h1>
					<p>{`Born ${this.props.info.birthday} in ${this.props.info.place_of_birth}`}</p>
					{/* {this.props.info.biography.length > 670 && ( */}
					<div className='panel-wrapper'>
						<a href='#show' className='show btn' id='show'>
							Read More
						</a>
						<a href='#hide' className='hide btn' id='hide'>
							Show Less
						</a>
						<div className='panel'>{this.props.info.biography}</div>
					</div>
					{/* )} */}
				</div>
			</section>
		);
	}
}

export default ActorDetails;
