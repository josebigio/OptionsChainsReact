import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"


import Main from "./pages/Main"
// import store from "./store"

const app = document.getElementById('app')

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);
ReactDOM.render(
	<Provider store={store}>
  		<Main />
  	</Provider>
, app);