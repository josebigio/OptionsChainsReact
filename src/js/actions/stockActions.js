import axios from "axios";

const requestURL = 'http://options-chain.herokuapp.com/api/look_up';

export function lookupStocks(name) {
	console.log('lookupStocks');
	return function(dispatch) {
		dispatch({type:'SEARCHING_STOCKS'});
		if(name === '') {
			dispatch({type:'FOUND_STOCKS_SUCCESS',payload:[]});
		}
		else {
			axios.get(requestURL,{params:{name:name}})
				.then((response)=>{
					dispatch({type:'FOUND_STOCKS_SUCCESS',payload:response.data.data});
				}).catch((error)=>{
					dispatch({type:'FOUND_STOCKS_ERROR',payload:error});
				});
		}	
	}
};
