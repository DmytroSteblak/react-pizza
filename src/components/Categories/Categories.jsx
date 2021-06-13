import React from "react"
;

const Categories = React.memo(({activeCategory,items,onClickCategory}) => {


        return <div>
            <div className="categories">
                <ul>
                    <li
                        className={activeCategory === null ? "active" : ""}
                        onClick={() => onClickCategory(null)}>
                        Все
                    </li>
                    { items && items.map((item, index) => {
                        return (
                            <li key={index}
                                onClick={() => onClickCategory(index)}
                                className={activeCategory === index ? "active" : ""}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    }
)

export default Categories;