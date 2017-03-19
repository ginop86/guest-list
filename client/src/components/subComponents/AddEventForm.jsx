import React, { PropTypes, Component } from 'react';
import Auth from "../../modules/Auth";
import { Link } from 'react-router';

class AddEventForm extends Component {
	// constructor is called whenever a new instance of the class is created
	constructor(props) {
		// super is calling the parent's method "props" (i think to pass them down)
        super(props); 
		//console.log("props:", props);
		// add default values for optional fields, like 'support's, when setting the initial state
        this.state = {
            newEvent: {
				venue: "loading",
				supportOne: "none",
				supportTwo: "none",
				supportThree: "none",
				date: "04/01/2017",
				time: 2000,
				headlinerAllotment: 0,
				supportOneAllotment: 0,
				supportTwoAllotment: 0,
				supportThreeAllotment: 0
			},
			venueInfo: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
		this.processEventForm = this.processEventForm.bind(this);
		this.createNewEvent = this.createNewEvent.bind(this);
    }

	// lifecycle events
	componentDidMount(){
		//set the venueId in this prop's state.  make an AJAX-request to the server to get venue information related to this user and store the data in this component's state. 
        const xhr = new XMLHttpRequest();
        const queryUrl = "/api/venue/" + localStorage.getItem("userId");  // the request uses the userId stored in local storage 
        //console.log("query:", queryUrl);
        xhr.open("get", queryUrl);
        xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
        xhr.responseType = "json";
        xhr.addEventListener("load", () => {
            // success case 
            if (xhr.status === 200) {
                console.log("get-venue-info ajax response:", xhr.response.venue);
                // set the venueInfo state
                this.setState({
                    venueInfo: xhr.response.venue
                });
                // add the info to new newEvent.venue
				const newEvent = this.state.newEvent;
				newEvent.venue = xhr.response.venue._id;
				this.setState({
					newEvent
				});
            //fail case
            } else {
                console.log("get-user-info ajax response failed.")
            }
        });
        xhr.send();	
	}

	// event handler for input elements.  This takes the input and inserts it into the state using the 'name' of the element that triggered it as the key.
	handleInputChange(event){
		//console.log(event.target.value);
		const field = event.target.name;
        const newEvent = this.state.newEvent;
        newEvent[field] = event.target.value;
        this.setState({
            newEvent
        });
	}

	// this custom method will trigger when the submit button is clicked.  it will check the inputs for errors and then initiate the create event method to actually create the event.
	processEventForm(event) {
        // Prevent default action.  in this case, action is the form submission event.
        event.preventDefault();
		// do basic front-end checks to make sure form was filled out correctly
		const newEvent = this.state.newEvent;
		const venueId = this.state.venueInfo._id;
		//create the event
		this.createNewEvent(newEvent, venueId);
        
    }

	// this custom method will create the event in the database.  if successful, it redirects the user to the dashboard.
    createNewEvent(newEvent, venueId){
        // add the new event to the mongo database 
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/event");
        xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
				console.log("success! message:", xhr.response.message)
				alert("Event was successfully added :)");
                // redirect to the dash, and have the dash select the newly created event for display

                	//[ redirect goes here ]

            } else {
				console.log("there was an error in creating the event. error:", xhr.response.message)
				alert("Event could not be added.  Check the console logs :(");
			};
        });
        xhr.send(JSON.stringify(newEvent));
    }

	// render the component 
	render() {
		return (
			<div className=" row col s12 add-event-form" style={{paddingTop:'25px', borderTopStyle:"solid", borderColor: "black", borderWidth: "3px"}}>
				<div className="row grey darken-3">

					<div className="row" style={{paddingTop:"10px"}}>
							<h3 className="center-align">Add A New Event</h3>
					</div>

					<form action="/" onSubmit={this.processEventForm}>

						<div className="row" style={{paddingTop: "20px"}}>
							
							<div className="input-field col s8">
								<label htmlFor="headliner">Headliner*</label>
								<input  name="headliner"  type="text" className="validate" onChange={this.handleInputChange}></input>
								
							</div>
							
							<div className="input-field col s4">
								<input type="datetime-local" name="datetime-local" onChange={this.handleInputChange}></input>
								
							</div>
						
						</div>

						
						<div className="row" style={{paddingTop: "20px"}}>
							
							<div className="input-field col s4">
								<label htmlFor="supportOne">First Support</label>
								<input name="supportOne" type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>

							<div className="input-field col s4">
								<label htmlFor="supportTwo">Second Support</label>
								<input name="supportTwo"  type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>

							<div className="input-field col s4">
								<label htmlFor="supportThree">Third Support</label>
								<input name="supportThree"  type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>

						</div>

						<div className="row" style={{paddingTop: "20px"}}>
							
							<div className="input-field col s3">
								<label htmlFor="headlinerAllotment">Headliner Allotment</label>
								<input name="headlinerAllotment"  type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>
							<div className="input-field col s3">
								<label htmlFor="supportOneAllotment">First Support Allotment</label>
								<input name="supportOneAllotment"  type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>
							<div className="input-field col s3">
								<label htmlFor="supportTwoAllotment">Second Support Allotment</label>								
								<input name="supportTwoAllotment"  type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>
							<div className="input-field col s3">
								<label htmlFor="supportThreeAllotment">Third Support Allotment</label>
								<input name="supportThreeAllotment"  type="text" className="validate" onChange={this.handleInputChange}></input>
							</div>
						</div>

						<div className="row valign-wrapper" >
							<div className="col s6 right-align" >
								<Link className="waves-effect waves-teal btn-flat center-align" to={'/'}>Cancel</Link>
							</div>

							<div className="col s6 left-align" >
								<button type="submit" className="waves-effect waves-teal btn-flat center-align" >Submit</button>						
								{/* removed from button above because causing error onClick="tabColor()"*/}
							</div>
						</div>
						
					</form>

				</div>
			</div>
		);
	}
}



export default AddEventForm; 