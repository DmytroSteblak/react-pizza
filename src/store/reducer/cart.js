const ADD_PIZZA_CART = "ADD_PIZZA_CART"
const CLEAR_PIZZA = "CLEAR_PIZZA"
const REMOVE_PIZZA = "REMOVE_PIZZA"


const initialState = {
    items: {},
    totalPrise: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)



export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrise: getTotalPrice(currentPizzaItems)
                }
            }
            const totalCount = Object.keys(newItems).reduce((sum,key) => newItems[key].items.length + sum,0)
            const totalPrise = Object.keys(newItems).reduce((sum,key) => newItems[key].totalPrise + sum,0)


            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrise,
            }
        }
        case CLEAR_PIZZA:{
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrise: 0
            }
        }
        case REMOVE_PIZZA:{
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrise
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return{
                ...state,
                items: newItems,
                totalPrise: state.totalPrise - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        default:
            return state;
    }
}

export const addPizzaToCart = (payload) => ({type: ADD_PIZZA_CART, payload})
export const clearPizza = () => ({type: CLEAR_PIZZA})
export const removePizza = (payload) => ({type: REMOVE_PIZZA,payload})


export default cart;

