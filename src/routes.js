import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './index.css'

import Evolucao from './pages/evolucao/evolucao.js';
import Objetivos from './pages/objetivos/objetivos.js';
import homeConta from './pages/homeConta';


const Routes = () => {
	return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={homeConta} />
						<Route path="/evolucao" component={Evolucao} />
						<Route path="/objetivos" component={Objetivos} />

					</Switch>
				</div>
			</Router>);
};

export default Routes;
