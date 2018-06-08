import React, { Component } from 'react';
import { Grid, Button, Glyphicon, Collapse, Well } from 'react-bootstrap';

import './Jugador.css';

class Jugador extends Component {

	constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

	render() {
		return (
			<Grid>
				<img
					className="picture"
					src={this.props.foto}
					alt={this.props.nombre}
				/>
				<div>
					<p className="name">{this.props.nombre}</p>
				</div>
				<div>
					<Button onClick={() => this.setState({ open: !this.state.open })}>
						<Glyphicon glyph="glyphicon glyphicon-list-alt" /> More info
					</Button>
					<Collapse in={this.state.open}>
						<div>
							<Well>
								<p><Glyphicon glyph="glyphicon glyphicon-minus" /> Age: {this.props.edad}<br />
									<Glyphicon glyph="glyphicon glyphicon-minus" /> Nick: {this.props.apodo}<br />
									<Glyphicon glyph="glyphicon glyphicon-minus" /> Position: {this.props.posicion}
								</p>
							</Well>
						</div>
					</Collapse>
				</div>
				<br />
			</Grid>
		);
	}
}

export default Jugador;
