import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './index.css'
import Home from './pages/home/home.js';
import Evolucao from './pages/evolucao/evolucao.js';
import Objetivos from './pages/objetivos/objetivos.js';
import homeConta from './pages/homeConta';


const Routes = () => {
	return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route path="/evolucao" component={Evolucao} />
						<Route path="/objetivos" component={Objetivos} />
						<Route path="/homeConta" component={homeConta} />
					</Switch>
				</div>
			</Router>);
};

export default Routes;
