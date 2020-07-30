import React, { Component } from 'react';

class Actor extends Component {
	render() {
		return (
			<div>
				<img
					src={
						this.props.cast.profile_path !== null
							? this.props.imageUrl + this.props.cast.profile_path
							: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
					}
					alt={this.props.cast.name}
					key={this.props.cast.id}
				/>
				<h1>{this.props.cast.name}</h1>
			</div>
		);
	}
}

export default Actor;
