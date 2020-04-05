import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from 'Routes/Home'
import Header from 'Components/Header'

export default () => (
    <Router>
        <Header />
        <Route path="/" exact component={Home} />
    </Router>
)