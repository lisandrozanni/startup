import React, { Component } from 'react';
import { Grid, PageHeader, Row, Col } from 'react-bootstrap';

import Jugador from './../common/jugador/Jugador';

class Jugadores extends Component {
	state = {
		jugadores: []
	}

	componentDidMount() {
		fetch('https://api-mi-liga.now.sh/api/jugadores')
			.then(response => response.json())
			.then(jugadores => {
				this.setState({
					jugadores: jugadores
				})
			})
			.catch(error => console.log(error));
	}
	
	render() {
		return (
			<Grid>
				<PageHeader>
					List of players <small>See the info of the best players</small>
			  </PageHeader>
				<Row bsClass="text-center">
					<Col>
						{
							this.state.jugadores.map((jugador, index) => {
								return <Jugador
									key={index}
									nombre={jugador.nombre}
									edad={jugador.edad}
									apodo={jugador.apodo}
									posicion={jugador.posicion}
									foto={require('./../../assets/fotos/' + jugador.foto)} 
								/>
							})
						}
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Jugadores;
