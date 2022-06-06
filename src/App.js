import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <NavLink className="navbar-brand" to="/">
            Benim Bloğum
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
          >
            Menü
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/">
                  Anasayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-lg-3 py-3 py-lg-4"
                  to="hakkimda"
                >
                  Hakkımda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-lg-3 py-3 py-lg-4"
                  to="iletisim"
                >
                  İletişim
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hakkimda" element={<About />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="yazi">
          <Route path=":id" element={<Article />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 - Sayfa Bulunamadı</p>
            </main>
          }
        />
      </Routes>
      <footer className="border-top">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">
                Copyright &copy; Benim Bloğum 2022
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
