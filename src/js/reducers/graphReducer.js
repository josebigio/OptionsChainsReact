export default function reducer(state={
    xYData: {},
    title:"",
    fetching: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCHING_STOCK_DATA":
        return {...state, fetching: true}
        break;
      case "FOUND_STOCK_DATA_SUCCESS":
        console.log('reducer foundStocksSuccess',action.payload);
        return {...state, fetching: false, xYData: getXYDataFromStockData(action.payload), error: null}
        break;
      case "FOUND_STOCK_DATA_ERROR":
        return {...state, fetching: false, error: action.payload}
        break;
    }

    return state
}

function getXYDataFromStockData(stockData) {
  console.log('getXYDataFromStockData');
  let xArray = [];
  let yArray = [];
  stockData.calls.forEach(function(call) {
      xArray.push(parseFloat(call.strike));
      yArray.push(parseFloat(call.p));      
  });
  return {x:xArray,y:yArray};
}