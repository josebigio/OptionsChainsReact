import axios from "axios";

const stockLookupUrl = 'http://options-chain.herokuapp.com/api/look_up';
// const stockDataLookupUrl = 'http://localhost:8183/api/option_chains';
const stockDataLookupUrl = 'http://options-chain.herokuapp.com/api/option_chains';
export function lookupStocks(name) {
	console.log('lookupStocks');
	return function(dispatch) {
		dispatch({type:'SEARCHING_STOCKS'});
		if(name === '') {
			dispatch({type:'FOUND_STOCKS_SUCCESS',payload:[]});
		}
		else {
			axios.get(stockLookupUrl,{params:{name:name}})
				.then((response)=>{
					dispatch({type:'FOUND_STOCKS_SUCCESS',payload:response.data.data});
				}).catch((error)=>{
					dispatch({type:'FOUND_STOCKS_ERROR',payload:error});
				});
		}	
	}
};

export function stockSelected(name) {
	console.log('displayStockData ' + name);
	return function(dispatch) {
		dispatch({type:'FETCHING_STOCK_DATA'});
		if(name === '') {
			dispatch({type:'FOUND_STOCKS_SUCCESS',payload:{name:name,apiResponce:[]}});
		}
		else {
			axios.get(stockDataLookupUrl,{params:{stock_name:name}})
				.then((response)=>{
					dispatch({type:'FOUND_STOCK_DATA_SUCCESS',payload:{name:name,apiResponce:response.data.data}});
				}).catch((error)=>{
					dispatch({type:'FOUND_STOCK_DATA_ERROR',payload:{name:name,apiResponce:error}});
				});
		}	
	}
};

export function modalDismissed() {
	return function(dispatch) {
		dispatch({type:'MODAL_DISMISSED'});
	}
}