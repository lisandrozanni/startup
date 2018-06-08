import React, { Component } from 'react';
import { Grid, PageHeader, Glyphicon, Row, Col } from 'react-bootstrap';

import Equipo from '../common/equipo/Equipo';

class FavoriteTeam extends Component {
	state = {
		equipos: []
	}

	componentDidMount() {
		fetch('https://api-mi-liga.now.sh/api/equipos')
			.then(response => response.json())
			.then(equipos => {
				this.setState({
					equipos: equipos
				})
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<Grid >
				<PageHeader>
					Best teams <small>Click on the icon <Glyphicon glyph="glyphicon glyphicon-heart" /> to choose favorite teams</small>
				</PageHeader>
				<Row bsClass="text-center">
					<Col>
						{
							this.state.equipos.map((equipo, index) => {
								return <Equipo
									key={index}
									nombre={equipo.nombre}
									logo={require('./../../assets/logos/' + equipo.logo)}
								/>
							})
						}
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default FavoriteTeam;
