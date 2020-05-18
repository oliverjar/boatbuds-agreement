import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateAgreement from "./components/create-agreement.component";
import EditAgreement from "./components/edit-agreement.component";
import AgreementsList from "./components/show-agreements.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://boatbuds.sharetribe.com/" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">BOATBUDS AGREEMENT</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Agreements</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Agreement</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={AgreementsList} />
          <Route path="/edit/:id" component={EditAgreement} />
          <Route path="/create" component={CreateAgreement} />
        </div>
      </Router>
    );
  }
}

export default App;
