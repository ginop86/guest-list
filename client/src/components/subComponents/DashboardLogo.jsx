import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DashboardLogo = ({venueName}) => {
	return (
		
		<div className="row grey grey darken-3" style={{borderBottomStyle:"solid", borderColor: "white", borderWidth: "1px" }}>
		<div className="logo-bar" >
			
				<div className="col s12 m12 l12 valign-wrapper" style={{padding: '0'}}>
					<h3 className="hoverable center-align"><Link to={'/'}>{venueName}</Link></h3>
					<Link className="waves-effect waves-teal btn-flat center-align" to={'/dash/add-event'}>Button</Link>
				</div>
			</div>
		</div>
	);
}

export default DashboardLogo;
