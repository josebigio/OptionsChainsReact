import React from 'react';
import Cell from './Cell';
import { lookupStocks } from '../actions/stockActions'
import { connect } from 'react-redux';


@connect((store)=>{
	return {
		stocks:store.stocksReducer.stocks,
		fetching:store.stocksReducer.fetching,
		error:store.stocksReducer.error
	};
})
export default class Layout extends React.Component {
	componentWillMount() {
		console.log('mounted',this);
	}
	componentWillUnMount() {
		console.log('unmounting',this);
	}

	searchClicked() {
		console.log('searchClicked');
	}

	inputChanged() {
		console.log('inputChanged');
		let input = document.getElementById('layout_input').value;
		this.props.dispatch(lookupStocks(input));
	}

	render() {

		const { fetching, stocks } = this.props;

		const results = stocks.map((stock, i)=>{
			return <Cell displayName={stock.companyName} key={i}/>
		});

		return (
			<div class="container" style={{backgroundColor:'white'}}>
    			<h1>Stock Lookup</h1>
    			<p class="lead">Look up any stock!!!</p>
    			<div class='row' style={{backgroundColor:'white'}}>
    				<div class='col-sm-6' style={{backgroundColor:'white'}}><input class='form-control' id='layout_input' placeholder="Stock Name" onChange={this.inputChanged.bind(this)}></input></div>
      				<div class='col-sm-3'><button class='btn' onClick={this.searchClicked.bind(this)}>Search!</button></div>
      				<div class='col-sm-3' style={{backgroundColor:'white'}}><h3>Loading: {fetching ? "Yeap" : "Nope"}</h3></div>
    			</div>
    			<div class='row'>
    				<div class='col-sm-12' style={{backgroundColor:'white'}}>{results}</div>
    			</div>
    		</div>
		);
	}


}