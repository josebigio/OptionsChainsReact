export default function reducer(state={
    stocks: [],
    fetching: false,
    showModal: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SEARCHING_STOCKS":
        return {...state, fetching: true}
        break;
      case "FOUND_STOCKS_SUCCESS":
        console.log('reducer foundStocksSuccess',action.payload);
        return {...state, fetching: false, stocks: action.payload, error: null}
        break;
      case "FOUND_STOCKS_ERROR":
        return {...state, fetching: false, error: action.payload}
        break;
    }

    return state
}
