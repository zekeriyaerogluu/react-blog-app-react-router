import React, { Component } from "react";
import Header from "../components/header";
import Articles from "../components/articles";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Anasayfa"
          subheading="Bloğuma hoşgeldiniz"
          imageName="home-bg.jpg"
        />
        <Articles />
      </div>
    );
  }
}
