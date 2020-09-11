import * as React from 'react'
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom'
import Home from "./home";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Redirect to="/" />
        </Switch>
    </Router>
)