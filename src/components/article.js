import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Article extends Component {
  render() {
    return (
      <div key={this.props.data.id}>
        <div className="post-preview">
          <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to={`yazi/${this.props.data.id}`} key={this.props.data.id}>
            <h2 className="post-title">{this.props.data.title}</h2>
            <h3 className="post-subtitle">
              {this.props.data.content.substring(1, 100) + "..."}
            </h3>
          </NavLink>
          <p className="post-meta">
            Yazar
            <a href="#"> {this.props.data.author} </a>
          </p>
        </div>
      </div>
    );
  }
}
