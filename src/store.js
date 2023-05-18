import {createStore} from "redux";
import reducer from "./reducer";
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"

const middleware = [thunk]


const store = createStore(reducer,applyMiddleware(...middleware));

export default store
