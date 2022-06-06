import React, { Component } from "react";
import Header from "../components/header";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header
          title="İletişim"
          subheading="Benimle iletişime geçin"
          imageName="contact-bg.jpg"
        />
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="my-5">
                  <form id="contactForm">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Adınız..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="name">Adınız</label>
                    </div>
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="E-Posta Adresiniz..."
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Telefon Numaranız..."
                      />
                      <label htmlFor="phone">Telefon Numarası</label>
                    </div>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Mesajınızı Yazını..."
                        style={{  height: "12rem" }}
                      ></textarea>
                      <label htmlFor="message">Mesaj</label>
                    </div>
                    <br />
                    <button
                      className="btn btn-primary text-uppercase disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Gönder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
