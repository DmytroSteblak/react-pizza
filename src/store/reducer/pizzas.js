import * as axios from "axios";
import {PizzaAPI} from "../../api/api";

const SET_PIZZAS = "SET_PIZZAS"
const SET_LOADED = "SET_LOADED"


const initialState = {
    item: [],
    isLoading: false
}

export const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                item: action.payload,
                isLoading: true
            }
        case SET_LOADED:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export const setPizzas = (payload) => ({type: SET_PIZZAS, payload})
export const setLoaded = (payload) => ({type: SET_LOADED, payload})

export const fetchPizzas = (category, sortBy)  => async (dispatch) => {
    dispatch(setLoaded(false))
    let data = await PizzaAPI.getUsers(category,sortBy.type,sortBy.order)
    dispatch(setPizzas(data))
}


export default pizzas;

