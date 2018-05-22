import React, { Component } from "react";
import Account from "./comps/Account.jsx";
import HomePage from "./comps/HomePage.jsx";
import Main from "./comps/Main.jsx";
import Nav from "./comps/Nav.jsx";
import Transaction from "./comps/Transaction.jsx";



class App extends Component {
    render() {
        return (
            <div className="App">
              <Account />
              <HomePage />
              <Main />
              <Nav />
              <Transaction />
            </div>
        );
    }
}
export default App;