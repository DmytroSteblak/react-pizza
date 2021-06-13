import React, {useCallback, useEffect} from "react"
import Categories from "../components/Categories/Categories";
import SortPopup from "../components/SortPopup/SortPopup";
import Pizzas from "../components/Pizzas/Pizzas";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../store/reducer/filters";
import {fetchPizzas} from "../store/reducer/pizzas";
import LoadingBlock from "../components/Pizzas/LoadingBlock";
import {addPizzaToCart} from "../store/reducer/cart";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'},
];


const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.item);
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoading);
    const {category, sortBy} = useSelector(({filters}) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectorType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }


    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClickCategory={onSelectCategory}
                            items={categoryNames}/>

                <SortPopup activePopup={sortBy.type}
                           onSelectorType={onSelectorType}
                           items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ?
                    items.map((item) => <Pizzas onClickAddPizza={handleAddPizzaToCart}
                                                {...item}
                                                addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                                                key={item.id}/>)
                    : Array(12).fill(0)
                        .map((_, i) => <LoadingBlock key={i}/>)}
            </div>
        </div>
    )
}

export default Home;

