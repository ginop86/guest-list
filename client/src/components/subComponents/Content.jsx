
//will contain newevent.js(form), addguestform.js(form), eventinfo.js(top info bar), and user list
import React, { PropTypes, Component } from 'react';
import { hashHistory, Route, Router } from "react-router"
import Attendee from './Attendee.jsx';

import AddGuestForm from "./AddGuestForm.jsx";
import AddEventForm from "./AddEventForm.jsx";
import EventInfo from "./EventInfo.jsx";
import FourZeroFour from "./FourZeroFour.jsx";


//currentEvent, createNewEvent, venueInfo
//const Content = (props) => {
class Content extends React.Component {
	
	constructor(props){
		super(props)
	}
	
	

	//const Handler = PAGES[props.page] || FourZeroFour;
	render () {
		return (
			<div className="row content" style={{paddingRight:"0px", marginRight:"0px"}}>
				<div className="content grey darken-3 " >
				
					<div className="col s12 m12 l12 valign-wrapper" style={{padding: '0'}} >
					
					{this.props.children}
					{/*stuff		s	*/}

					</div>
				</div>
			</div>
		);
	}
}


export default Content;
