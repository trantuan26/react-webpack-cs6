import React, { Component } from "react";
import Account from "./comps/Account.jsx";
import HomePage from "./comps/HomePage.jsx";
import Main from "./comps/Main.jsx";
import Nav from "./comps/Nav.jsx";
import Transaction from "./comps/Transaction.jsx";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require('foundation-sites/dist/css/foundation.min.css');



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="menu">
                        <li className="menu-text">
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Nav</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={Account} />
                    <Route path="/topics" component={Nav} />
                </div>
            </Router>
        );
    }
}
export default App;