import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Actor extends Component {
	render() {
		return (
			<div>
				<Link to={`/actor/${this.props.cast.id}`}>
					<img
						src={
							this.props.cast.profile_path
								? this.props.imageUrl + this.props.cast.profile_path
								: 'https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'
						}
						alt={this.props.cast.name}
						key={this.props.cast.id}
					/>
				</Link>
				<h1>{this.props.cast.name}</h1>
				<p>{`as ${this.props.cast.character}`}</p>
			</div>
		);
	}
}

export default Actor;
