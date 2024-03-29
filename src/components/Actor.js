import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import noImage from "../images/no-image.jpeg";

class Actor extends Component {
  render() {
    return (
      <div className="actorResult">
        {!this.props.cast && <h2>Sorry - No Cast Available</h2>}
        <Link to={`/actor/${this.props.cast.id}`}>
          <img
            src={
              this.props.cast.profile_path
                ? this.props.imageUrl + this.props.cast.profile_path
                : noImage
            }
            alt={this.props.cast.name}
            key={this.props.cast.id}
          />
        </Link>
        <div className="resultInfo">
          <h2>{this.props.cast.name}</h2>
          {this.props.cast.character && (
            <p>{`as ${this.props.cast.character}`}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Actor;
