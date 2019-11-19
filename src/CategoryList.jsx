import React from 'react'
import PropTypes from 'prop-types'
import dishes from "./data/dishes.json";
import styles from './CategoryList.module.css'

const CategoryList = () => {
    return (
    
        <section>
            <div>
                <a href="/soup"><h1 className = {styles.h1Title1} href>Soup</h1></a>
                <img src="/images/MinestroneSoup.jpg"></img>
                
            </div>
            <div>
                <a href="/Chrismas Recipe"><h1 className = {styles.h1Title2} href>Chrismas</h1></a>
                <img src="/images/GiganticStandingSnowman.jpg"></img>
            </div>
            <div>
                <a href="/thanksgiving recipe"><h1 className = {styles.h1Title3}>Thanksgiving</h1></a>
                <img src="/images/thanksgiving.jpg"></img>
            </div>
            <div>
                <a href="/Dessert"><h1 className = {styles.h1Title4}>Dessert</h1></a>
                <img src="/images/QuickandEasyAppleTart.jpg"></img>
            </div>
            
            
        </section>
    );
    
    
};

CategoryList.propTypes = {
    dish: PropTypes.array.isRequired
};

export default CategoryList