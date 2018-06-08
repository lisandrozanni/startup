import React from "react";
import { Grid, Glyphicon } from 'react-bootstrap';

import './NotFound.css'

const NotFound = () => (
	<Grid bsClass="error-404 text-center">
		<p>Error 404 <Glyphicon glyph="glyphicon glyphicon-exclamation-sign" /></p>
		<p>Page not found</p>
	</Grid>
);

export default NotFound;
