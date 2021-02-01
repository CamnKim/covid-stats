import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navigation from "./components/Nav"
import Home from "./views/Home"
import US from "./views/US"
import About from './views/About'

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/US" component={US} />
                <Route path="/About" component={About} />
            </Switch>
        </Router>
    )
}

export default App
