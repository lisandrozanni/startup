import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import './index.css';

import Header from './components/common/header/Header';
import Router from './Router';

const Root = () => {
	return (
		<div>
			<Header />
			<div>
				<Router />
			</div>
		</div>
	)
}

render(
	<Provider store={store}>
		<Root />
	</Provider>, 
	document.getElementById('root')
);