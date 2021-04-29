import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import noImage from "../images/no-image.jpeg";

class Movie extends Component {
  render() {
    return (
      <div className="listMovie">
        <Link to={"/movie/" + this.props.id}>
          {" "}
          <img
            src={
              this.props.poster
                ? this.props.imageUrl + this.props.poster
                : noImage
            }
            alt={this.props.title}
            key={this.props.id}
          />
        </Link>
        <div className="resultInfo">
          <h2>
            {this.props.title}{" "}
            {this.props.character && <span>{this.props.date}</span>}
          </h2>
          {!this.props.character && <p>{this.props.date}</p>}
          {this.props.character && <p>As {this.props.character}</p>}
        </div>
      </div>
    );
  }
}

export default Movie;
