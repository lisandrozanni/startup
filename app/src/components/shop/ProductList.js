import React, { Component } from 'react';
import { Panel, Image, Button, Glyphicon } from 'react-bootstrap';
import store from '../../store';
import { addToCart } from '../../actionCreators';

import './ProductList.css';

class ProductList extends Component {
	constructor() {
		super();
		this.addToCart = this.addToCart.bind(this);

		this.state = {
			products: [
				{ id: 1, name: "Ball", price: 85, image: "https://http2.mlstatic.com/pelota-futbol-D_Q_NP_710631-MLA26534253069_122017-X.webp" },
				{ id: 2, name: "Shirt", price: 99, image: "https://http2.mlstatic.com/camisetas-clubes-extranjeros-D_Q_NP_788868-MLA26607271469_012018-X.webp" },
				{ id: 3, name: "Booties", price: 150, image: "https://http2.mlstatic.com/botines-D_Q_NP_932371-MLA26170584818_102017-X.webp" },
				{ id: 4, name: "Gloves", price: 70, image: "https://http2.mlstatic.com/guantes-arquero-reusch-D_Q_NP_927037-MLA25888073579_082017-X.webp" }
			]
		}
	}

	render() {
		return (
			<Panel bsStyle="primary">
				<Panel.Heading>
					<Panel.Title componentClass="h3">Product List</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					{this.state.products.map(product =>
						<div key={product.id}>
							<Image 
								src={product.image} 
								alt={product.name} 
								thumbnail 
							/>
							<div>
								<p className="product-name">{product.name}</p>
								<p>
									<Button bsStyle="primary" onClick={() => this.addToCart(product)} disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="glyphicon glyphicon-shopping-cart" /></Button>
								</p>
							</div>
						</div>
					)}
				</Panel.Body>
			</Panel>
		);
	}

	addToCart(product) {
		store.dispatch(addToCart(product));
	}
}

export default ProductList;
