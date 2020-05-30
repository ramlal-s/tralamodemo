import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Upload from "./components/upload";
import Create from "./components/create";
import Loading from "./components/loading";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Create
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/upload">
                  image upload
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lazyloading">
                  Lazy Loading
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Create />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/lazyloading">
            <Loading />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
