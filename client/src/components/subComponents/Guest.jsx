import React, { PropTypes, Component } from 'react';



const Guest = ({guest, headliner, supportOne, supportTwo, supportThree, updateTotalChecked, updateEvent}) => {
	return (
	
		
			<tr className="grey darken-4" style={{borderBottomStyle:"solid", borderColor: "#4527a0", borderWidth: "1px"}}>
				<td className="white-text text-blue-grey lighten-5 hoverable">{guest.name.toUpperCase()}</td>
				<td className="white-text text-blue-grey lighten-5">{guest.email}</td>
				<td className="white-text text-blue-grey lighten-5">{guest.affiliation}</td>
				<td className="white-text text-blue-grey lighten-5">{guest.phone}</td>
				<td className="white-text text-blue-grey lighten-5">{guest.plusOne}</td>
				<td>
					{guest.vip}
					{guest.allAccess}
					{guest.photoPass}
					{guest.pressPass}
				</td>
				<td>
					{guest.houseList && <p>House</p>}
					{guest.headlinerList && <p>{headliner}</p>}
					{guest.supportOneList && <p>{supportOne}</p>}
					{guest.supportTwoList && <p>{supportTwo}</p>}
					{guest.supportThreeList && <p>{supportThree}</p>}
				</td>
				<td>
					<a className="waves-effect waves-light btn deep-purple darken-3 hoverable" onClick={() => { updateTotalChecked(guest.plusOne + 1); updateEvent()}}>ENTERED</a>
				</td>
				<td>
					
	  				<a className="btn-floating btn-small waves-effect waves-light blue-grey lighten-2 hoverable" style={{margin:"3"}}><i className="material-icons">delete</i></a>
					
	 				<a className="btn-floating btn-small waves-effect waves-light blue-grey lighten-2 hoverable" style={{margin:"3"}}><i className="material-icons">shuffle</i></a>
				</td>
				<div class="divider"></div>
			</tr>
			
	);
}



export default Guest;