import React from "react"

export default class Cell extends React.Component {

	render() {

		const { displayName } = this.props;

		return (
			<div>
				<h3>{displayName}</h3>
			</div>
		);
	}
}