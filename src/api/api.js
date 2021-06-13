import * as axios from "axios";


// axios.get(`/pizzas`, {
//     params: {
//         category: category,
//         _sort: sortBy.type,
//         _order: sortBy.order
//     }
// }).then(({data}) => {
//
// })


export const PizzaAPI = {
    getUsers(category,sort,order){
        return axios.get("/pizzas",{
            params:{
                category,
                _sort: sort,
                _order: order
            }
        }).then(({data}) => {
            return data
        })
    }
}