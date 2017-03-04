export default function reducer(state={
    xYData: {},
    title:"",
    fetching: false,
    error: null,
    show: false
  }, action) {

    switch (action.type) {
      case "FETCHING_STOCK_DATA":
        return {...state, fetching: true, show: false}
        break;
      case "FOUND_STOCK_DATA_SUCCESS":
        return {...state, fetching: false, xYData: getXYDataFromStockData(action.payload.apiResponce), error: null, show:true, name:action.payload.name}
        break;
      case "FOUND_STOCK_DATA_ERROR":
        return {...state, fetching: false, error: action.payload.apiResponce, show:false}
        break;
      case "MODAL_DISMISSED":
        return {...state, show:false}
        break;
    }

    return state
}

function getXYDataFromStockData(stockData) {
  console.log('getXYDataFromStockData');
  let xArray = [];
  let yArray = [];
  try {
    stockData.calls.forEach(function(call) {
      xArray.push(parseFloat(call.strike));
      yArray.push(parseFloat(call.p));      
    });
  }
  catch(err) {
    xArray=[];
    yArray=[];
  }
  return {x:xArray,y:yArray};
 
}