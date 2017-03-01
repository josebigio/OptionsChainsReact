import React from 'react';
import Cell from './Cell';
import Graph from './Graph'
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
		const loadingVisibility = fetching ? 'visible' : 'hidden'; 
		const results = stocks.map((stock, i)=>{
			return <Cell displayName={stock.companyName} subTitle={stock.stockName} key={i}/>
		});

		return (
			<div class="container">
    			<h1>Stock Lookup</h1>
    			<p class="lead">Look up any stock!!!</p>
    			<div class='row'  style={{display:'flex',alignItems:'center'}}>
    				<div class='col-sm-6'><input class='form-control' id='layout_input' placeholder="Stock Name" onChange={this.inputChanged.bind(this)}></input></div>
      				<div class='col-sm-3'><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style={{visibility:loadingVisibility}}/></div>
    			</div>
    			<div class='row'>
    				<div class='col-sm-6'>{results}</div>
    				<div class='col-sm-6' style={{backgroundColor:'red'}}><Graph/></div>
    			</div>
    		</div>
		);
	}


}