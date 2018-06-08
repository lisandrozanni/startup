import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import Equipo from './../equipo/Equipo';
import Stadium from './../../../assets/stadium.png';

import './Juego.css';

class Juego extends Component {
	render() {
		return (
			<div className="juegos text-center">
				{/* Equipo local */}
				<div className="card-game">
					<div className="logo-score">
						<Equipo nombre={this.props.localNombre} logo={this.props.localLogo} />
						<div className="score-game">
							{this.props.localAnotaciones}
						</div>
					</div>
				</div>

				<div className="info-game">
					<Image src={Stadium} alt={this.props.estadio} />
					<p>{this.props.estadio}<br />
						{this.props.fecha}<br />
						{this.props.hora}
					</p>
				</div>

				{/* Equipo visitante */}
				<div className="card-game">
					<div className="logo-score">
						<div className="score-game">
							{this.props.visitanteAnotaciones}
						</div>
						<Equipo nombre={this.props.visitanteNombre} logo={this.props.visitanteLogo} />
					</div>
				</div>
			</div>
		);
	}
}

export default Juego;
