import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/home/home.js';
import Evolucao from './pages/evolucao/evolucao.js';
import Objetivos from './pages/objetivos/objetivos.js';


const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/evolucao" component={Evolucao} />
                    <Route path="/objetivos" component={Objetivos} />
                </Switch>
            </div>
        </Router>);
};

export default Routes;