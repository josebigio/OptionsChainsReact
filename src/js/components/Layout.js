import React from 'react';
import Cell from './Cell';

export default class Layout extends React.Component {
	componentWillMount() {
		console.log('mounted',this);
	}
	componentWillUnMount() {
		console.log('unmounting',this);
	}

	render() {

		const results = [
			{displayName:"Jose"},
			{displayName:"Rafael"},
			{displayName:"Leon"},
			{displayName:"Bigio"},
			{displayName:"Anton"}
		].map((cell, i)=>{
			return <Cell displayName={cell.displayName} key={i}/>
		});

		return (
			<div class="container" style={{backgroundColor:'white'}}>
    			<h1>Stock Lookup</h1>
    			<p class="lead">Look up any stock!!!</p>
    			<div class='row'>
    				<div class='col-sm-6'><input class='form-control' placeholder="Stock Name"></input></div>
      				<div class='col-sm-6'><button class='btn'>Search!</button></div>
    			</div>
    			<div class='row'>
    				<div class='col-sm-12' style={{backgroundColor:'white'}}>{results}</div>
    			</div>
    		</div>
		);
	}


}