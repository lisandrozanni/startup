import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from '../../actionCreators';
import { connect } from 'react-redux';

const ShoppingCart = ({ cart, removeFromCart }) => {
	return (
		<Panel bsStyle="primary">
			<Panel.Heading>
				<Panel.Title componentClass="h3">Shopping Cart</Panel.Title>
			</Panel.Heading>
				<Table>
					<tbody>
						{cart.map(product =>
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>${product.price}</td>
								<td><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="glyphicon glyphicon-trash" /></Button></td>
							</tr>
						)}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="3">
								Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
							</td>
						</tr>
					</tfoot>
				</Table>
		</Panel>
	)
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart(product) {
			dispatch(removeFromCart(product));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
