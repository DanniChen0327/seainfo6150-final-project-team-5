import React from 'react'
import dishes from "./data/dishes.json";
import DishDetail from "./DishDetail.jsx"

const DishDetailPage = (props) => {
    let dishMap=new Map();
    for(let i in dishes){
        dishMap.set(dishes[i].id,dishes[i]);
    };
    return (
        
        <DishDetail dish={dishMap.get(parseInt(props.id))}/>
    )
}

export default DishDetailPage
