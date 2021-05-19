import React from "react"

// Components
import Header from "./Header"
import Work from "./Work"
import About from "./about"
import Footer from "./Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function IndexPage() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Route path="/work">
            <Work />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Footer />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

