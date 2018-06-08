import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						League
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem href="/jugadores">
							<Glyphicon glyph="glyphicon glyphicon-user"/> Players
						</NavItem>
						<NavItem href="../../favorite-team">
							<Glyphicon glyph="glyphicon glyphicon-star"/> Vote favorite Team
						</NavItem>
						<NavItem href="../../shop">
							<Glyphicon glyph="glyphicon glyphicon-shopping-cart"/> Shop
						</NavItem>
						<NavItem href="/calendario">
							<Glyphicon glyph="glyphicon glyphicon-calendar"/> Calendar
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);  
	}
}

export default Header;
