const SET_SORT_BY = "SET_SORT_BY"
const SET_CATEGORY = "SET_CATEGORY"


const initialState = {
    category: null,
    sortBy: {
        type: "popular",
        order: 'desc'
    }
}

export const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export const setSortBy = (payload) =>({type: SET_SORT_BY,payload})
export const setCategory = (payload) =>({type: SET_CATEGORY, payload})

export default filters;

