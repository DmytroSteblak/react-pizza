import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import filters from "./reducer/filters";
import pizzas from "./reducer/pizzas";
import cart from "./reducer/cart";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    filters,
    pizzas,
    cart,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store