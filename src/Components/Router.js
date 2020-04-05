import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home"

export default () => (
    <Router>
        <Route path="/" exact component={Home} />
    </Router>
)