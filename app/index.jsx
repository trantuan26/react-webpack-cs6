import React from "react";
import ReactDOM from "react-dom";
import Favicon from 'react-favicon';

import App from "./app.jsx";

ReactDOM.render(
    <div>
        {/*<Favicon url="http://localhost:3000/github.ico" />*/}
        <App />
    </div>
    , document.getElementById("root"));