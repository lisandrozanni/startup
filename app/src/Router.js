import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jugadores from './components/jugadores/Jugadores';
import FavoriteTeam from './components/favorite-team/FavoriteTeam';
import Shop from './components/shop/Shop';
import Calendario from './components/calendario/Calendario';
import NotFound from './components/common/not-found/NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/jugadores' component={Jugadores} />
			<Route path='/favorite-team' component={FavoriteTeam} />
			<Route path='/shop' component={Shop} />
			<Route path='/calendario' component={Calendario} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Router;
