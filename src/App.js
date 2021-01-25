import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navigation from "./components/Nav"
import Home from "./views/Home"
import US from "./views/US"
import EU from "./views/EU"
import Global from "./views/Global"

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/US" component={US} />
                <Route path="/EU" component={EU} />
                <Route path="/Global" component={Global} />
            </Switch>
        </Router>
    )
}

export default App
