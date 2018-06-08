import React, { Component } from 'react';
import { Grid, PageHeader, Row, Col } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductList';

class App extends Component {
	render() {
		return (
			<Grid>
				<PageHeader>
					Shop <small>Buy our products at a fantastic price</small>
				</PageHeader>
				<Row>
					<Col sm={6}>
						<ProductList />
					</Col>
					<Col sm={6}>
						<ShoppingCart />
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
