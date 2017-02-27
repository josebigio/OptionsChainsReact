import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from 'axios';

import reducer from "./reducers";

const middleware = applyMiddleware(thunk, logger());
console.log('reducer',reducer);
export default createStore(reducer, middleware);
