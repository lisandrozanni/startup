import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

import './Equipo.css';

class Equipo extends Component {
	state = {
		equipos: [],
		fav: { value: 'like' }
	}

	// When you give "like ♥" to a team, it stays saved even if you restart the browser

	componentDidMount() {
		const localFavs = localStorage.getItem(this.props.nombre);
		
		if (localFavs) {
			this.setState({
				fav: JSON.parse(localFavs)
			})
		}
	}

	setFav() {
		const fav = { ...this.state.fav };
		fav.value = fav.value === 'like' ? 'like_selected' : 'like';
		
		this.setState({
				fav
		});
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.nombre, JSON.stringify(this.state.fav));
	}

	render() {
		return (
			<div>
				<img 
					className="team-logo" 
					src={this.props.logo} 
					alt={this.props.nombre} 
				/>
				<p onClick={this.setFav.bind(this)} className={this.state.fav.value}><Glyphicon glyph="glyphicon glyphicon-heart" /></p>
			</div>
		);
	}
}

export default Equipo;
