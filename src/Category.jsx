import React from 'react'
import PropTypes from 'prop-types'
import styles from './Category.module.css'

const Category = props => {
    return <div>
        
        <section className = {styles.category}>
            
            <h1 className = {styles.dishTitle}>{props.dish.name}</h1>
            
            <div className = {styles.image}>
                <img src={props.dish.img.url}/>
            </div>
            <div className = {styles.summary}>
                <h2 className = {styles.summaryTitle}>Summary</h2>
                <p>{props.dish.summary}</p>
            </div>
            
            
        </section>

        
        
    </div>
}
Category.propTypes = {
    dish: PropTypes.object.isRequired
};
export default Category