import React from "react"

export default class Cell extends React.Component {

	logClick() {
		console.log('onClick');
	}

	onClick() {
		this.props.onStockSelected(this.props.subTitle);
	}

	render() {
		console.log(this.props);
		const { displayName, subTitle } = this.props;

		return (
			<div class='row' style={{display:'flex',alignItems:'center'}}>
				<div class='col-sm-8' style={{display:'flex',alignItems:'center'}}><h4 onClick={this.onClick.bind(this)}>{displayName}</h4></div>
				<div class='col-sm-4'><h4 style={{color:'grey'}}>{subTitle}</h4></div>
			</div>
		);
	}
}