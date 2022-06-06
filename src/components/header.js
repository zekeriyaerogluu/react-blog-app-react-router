import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { title, subheading, imageName } = this.props;

    return (
      <header
        className="masthead"
        style={{ backgroundImage: `url(/images/${imageName})` }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>{title}</h1>
                <span className="subheading">{subheading}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
