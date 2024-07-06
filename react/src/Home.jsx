import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div className="header" id="topheader">
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
          <h1 className="font-weight-bold text-uppercase">BE THE ODD ONE TO BE THE NO.1</h1>
          <p className="text-capitalize">We believe in collaboration over competition</p>
          <div className="header-buttons">
            <a href="#header-extra-div">Why Join US ?</a>
            <a href="About.html">About US</a>
          </div>
        </div>
      </section>

      <section className="header-extradiv" id="header-extra-div">
        <div className="container headings text-center">
          <h1 className="text-center font-weight-bold text-capitalize">Why Join Us ?</h1>
          <p className="text-center text-capitalize">
            Not Convinced Yet? Want some more Reasons? <a href="reasontojoinclub.html"> Explore All </a>
          </p>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="extra-div col-lg-4 col-md-4 col-12">
              <a href="#">
                <i className="fa-3x fa fa-user" aria-hidden="true"></i>
              </a>
              <h2 className="text-uppercase">Learn more about yourself</h2>
              <p>
                Joining a club presents many opportunities to learn more about yourself. You will be able to discover your
                passion, your skills and experiment with areas of expertise. This self-awareness will be beneficial in your
                future career.
              </p>
            </div>
            <div className="extra-div col-lg-4 col-md-4 col-12">
              <a href="#">
                <i className="fa-3x fa fa-trophy" aria-hidden="true"></i>
              </a>
              <h2 className="text-uppercase">Develop soft skills</h2>
              <p>
                Soft skills allow us to effectively interact with others, like communication, attitude, and work ethics.
                Participating in club improves these skills. You will gain emotional intelligence as you develop new
                relationships.
              </p>
            </div>
            <div className="extra-div col-lg-4 col-md-4 col-12">
              <a href="#">
                <i className="fa-3x fa fa-users" aria-hidden="true"></i>
              </a>
              <h2 className="text-uppercase">Expand your Network</h2>
              <p>
                Joining a club enables you to connect to a peer groups who shares similar interests as you. This can be an
                amazing platform to meet potential employers. These connections will be invaluable for you in the near
                future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
