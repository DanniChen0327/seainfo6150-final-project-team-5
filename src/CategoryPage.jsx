import React from 'react'
import PropTypes from 'prop-types'
import dishes from "./data/dishes.json"
import Category from "./Category.jsx"
import styles from "./CategoryPage.module.css"

const CategoryPage = (props) => {
    var dishArray = new Array();
    for( let i in dishes){
        if(dishes[i].category == props.category){
            dishArray.push(dishes[i]);
        }
    }
    return(
    <ul className={styles.cateUl}>
    
    {dishArray.map(dish => (
        <li className={styles.cateli} key={dish.name}><Category dish = {dish}/></li>

    ))}
    </ul>
    );

    
    
};

CategoryPage.propTypes = {
    dish: PropTypes.array.isRequired
};

export default CategoryPage