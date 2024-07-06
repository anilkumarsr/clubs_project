import React from "react";
import "./App.css";

const About = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container text-uppercase p-2">
          <a className="navbar-brand font-weight-bold text-white" href="#">
            Life @BMSIT&M
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-uppercase">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Clubs.html">
                  Clubs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="header-section">
        <div className="center-div">
          <h1 className="font-weight-bold text-uppercase">About Us</h1>
          <p className="text-capitalize">
            B.M.S. Institute of Technology (Autonomous) is a private engineering
            college in Yelahanka, Bangalore, India.
            <br /> It was started in 2002 by Bhusanayana Mukundadas Sreenivasaiah
            Institute of Technology (BMSIT) and is run by the B.M.S. Educational
            Trust. It is affiliated with Visvesvaraya Technological University
            and became autonomous in 2020.
          </p>
        </div>
      </section>
      <section className="services-offered" id="services-offered-div">
        <div className="container headings text-center">
          <h1 className="text-center font-weight-bold text-uppercase">BMSIT&M</h1>
          <p className="text-center text-capitalize">
            BMS Institute of Technology and Management
          </p>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 service-div">
              <div className="row">
                <div className="col-lg-10 col-10">
                  <p>
                    <img id="preview" className="img-fluid img-thumbnail" src="" alt="BMSIT&M" />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i className="fa-3x fa fa-building-o" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      BMSIT&M was founded by B S Narayana, son of educationist B M
                      Sreenivasaiah, and is managed by the B M S Educational Trust.
                      It is the sister institution of B M S College of Engineering, a
                      well established government aided engineering college in India.
                      B.M.S. Institute of Technology is recognized as a research
                      centre by Visvesvaraya Technological University. And Autonomous
                      in 2020 Initially, starting out with Eight disciplines of
                      engineering, And Four Disciplines of Masters Degree. The college
                      was granted the status of a Research Institution by the
                      Visvesvaraya Technological University in 2005.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 service-div">
              <br />
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#4169E1" }} className="fa-2x fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <a href="https://bmsit.ac.in/" target="_blank" rel="noopener noreferrer">
                      bmsit.ac.in
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#ff0000" }} className="fa-2x fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <span>principal@bmsit.in</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#87ceff" }} className="fa-2x fa fa-twitter-square" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <a href="https://twitter.com/bms-institute-of-technology-and-management" target="_blank" rel="noopener noreferrer">
                      bmsit_blr
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#00008B" }} className="fa-2x fa fa-facebook-official" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <a href="https://www.facebook.com/bmsit/" target="_blank" rel="noopener noreferrer">
                      bmsit_blr
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#e75480" }} className="fa-2x fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <a href="https://www.instagram.com/bmsit.official/?__d=1" target="_blank" rel="noopener noreferrer">
                      bmsitofficial_blr
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#00008B" }} className="fa-2x fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <a href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" target="_blank" rel="noopener noreferrer">
                      bmsit_blr
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#ff0000" }} className="fa-2x fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <a href="https://www.youtube.com/@bmsitmedia8115" target="_blank" rel="noopener noreferrer">
                      bmsit_blr
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#006400" }} className="fa-2x fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    <span>
                      Doddaballapur Main Road, Avalahalli, Yelahanka, Bangalore-560064
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr className="w-100" />
          <br />
        </div>
      </section>
    </div>
  );
};

export default About;
