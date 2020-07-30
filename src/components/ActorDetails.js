import React, { Component } from 'react';

class ActorDetails extends Component {
	render() {
		//IMAGE
		//NAME
		//BIRTHDAY AND PLACE
		//BIO
		return (
			<div>
				<img
					src={
						this.props.info.profile_path
							? this.props.imageUrl + this.props.info.profile_path
							: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
					}
					alt={this.props.info.name}
				/>
				<h2>{this.props.info.name}</h2>
				<p>{`Born ${this.props.info.birthday} in ${this.props.info.place_of_birth}`}</p>
				<p>{this.props.info.biography}</p>
			</div>
		);
	}
}

export default ActorDetails;
