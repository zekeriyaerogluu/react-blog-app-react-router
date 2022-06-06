import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import { getArticle } from "../services/articles";

export default function Article() {
  var params = useParams();
  var [singleArticle, setArticle] = useState(null);

  useEffect(() => {
    var article = getArticle(parseInt(params.id, 10));
    setArticle(article);
  });

  if (singleArticle) {
    return (
      <div>
        <Header
          title={singleArticle.title}
          subheading="Blog Detayları"
          imageName="home-bg.jpg"
        />
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                {singleArticle.content}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <Header
        title="Aradığınız yazı bulunamadı"
        subheading="Blog Detayları"
        imageName="home-bg.jpg"
      />
    </div>
  );
}
