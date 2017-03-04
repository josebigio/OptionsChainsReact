import React from 'react';
import Cell from './Cell';
import Graph from './Graph'
import { lookupStocks, stockSelected } from '../actions/stockActions'
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';


@connect((store)=>{
	return {
		stocks:store.stocksReducer.stocks,
		fetching:store.stocksReducer.fetching,
		error:store.stocksReducer.error,
		showModal:store.stocksReducer.showModal
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

	onStockSelected(stockName) {
		console.log('onStockSelected ' + stockName);
		this.props.dispatch(stockSelected(stockName));
	}

	render() {

		const { fetching, stocks } = this.props;
		const loadingVisibility = fetching ? 'visible' : 'hidden'; 
		const results = stocks.map((stock, i)=>{
			return <Cell displayName={stock.companyName} subTitle={stock.stockName} key={i} onStockSelected={this.onStockSelected.bind(this)}/>
		});

		return (
			<Grid>
    			<h1>Stock Lookup</h1>
    			<Row className='show-grid'>
    				<Col sm={9}><input class='form-control' id='layout_input' placeholder="Stock Name" onChange={this.inputChanged.bind(this)}></input></Col>
      				<Col sm={3}><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style={{visibility:loadingVisibility}}/></Col>
    			</Row>
    			<Row>
    				<Col sm={12}>{results}</Col>
    				<Col sm={12}><Graph/></Col>
    			</Row>
    		</Grid>
		);
	}


}