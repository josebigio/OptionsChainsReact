import React from "react"

export default class Cell extends React.Component {

	render() {

		const { displayName, subTitle } = this.props;

		return (
			<div class='row' style={{display:'flex',alignItems:'center'}}>
				<div class='col-sm-6' style={{display:'flex',alignItems:'center'}}><h4>{displayName}</h4></div>
				<div class='col-sm-2'><h4 style={{color:'grey'}}>{subTitle}</h4></div>
			</div>
		);
	}
}