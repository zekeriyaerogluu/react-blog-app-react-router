import React, { Component } from "react";
import Article from "./article";
import {getArticles} from "../services/articles";

export default class Articles extends Component {
  render() {
    var articlesObj = [];
    var articles    = getArticles();

    articles.forEach(element => {
        articlesObj.push(<Article key={element.id} data={element} />);
    });

    return (
      <div>
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {articlesObj}              
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
