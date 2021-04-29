import React, { Component } from 'react';
import noImage from '../images/no-image.jpeg';

class ActorDetails extends Component {
	render() {
		console.log(this.props.info.biography && this.props.info.biography.length);
		return (
			<section className='movieDetails'>
				<img
					src={
						this.props.info.profile_path
							? this.props.imageUrl + this.props.info.profile_path
							: noImage
					}
					alt={this.props.info.name}
				/>
				<div className='actorOverview'>
					<h1>{this.props.info.name}</h1>
					<p>
						{`Born ${this.props.info.birthday}`}{' '}
						{this.props.info.place_of_birth &&
							`in ${this.props.info.place_of_birth}`}
					</p>
					<div className='panel-wrapper'>
						{this.props.info.biography &&
						this.props.info.biography.length > 670 ? (
							<div>
								<a href='#show' className='show btn' id='show'>
									Read More
								</a>
								<a href='#hide' className='hide btn' id='hide'>
									Show Less
								</a>
								<div className='panel'>{this.props.info.biography}</div>
								<div className='fade'></div>
							</div>
						) : (
							<div className='panel'>{this.props.info.biography}</div>
						)}
					</div>
				</div>
			</section>
		);
	}
}

export default ActorDetails;
