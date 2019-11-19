import React, { Component } from "react";
import styles from './Home.module.css'
import Card from './commonComponents/Card'



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.reRender.bind(this)
        this.state = {
            width: document.body.clientWidth
        };
    }

    componentDidMount() {
        this.screenChange();
    }
  
    componentWillUnmount() {
        window.removeEventListener('resize',this.reRender);

    }

    screenChange() {
        window.addEventListener('resize', this.reRender);
    }

    render() {
        if (this.state.width < 500) {
            return (
            <div>
                <p>screen width : {this.state.width}</p>
                <p>code point 1</p>
                <p><a href="#">Thanks Giving Category</a></p>
                <p><a href="#">Dessert Menu Category</a></p>
                <p><a href="#">Chinese Food Category</a></p>
                <p><a href="#">Soup Category</a></p>
            </div>
            );
        } else if (this.state.width < 800) {
            return (
                <div>
                    <p>screen width : {this.state.width}</p>
                    <p>code point 2</p>
                    <Card imgUrl="/images/treefrog.jpg" desc="1001" link="/detail/1001"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="1002" link="/detail/1002"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="1003" link="/detail/1003"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="1004" link="/detail/1004"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="1005" link="/detail/1005"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="1006" link="/detail/1006"/>
                    <Card imgUrl="/images/treefrog.jpg" desc="3001" link="/detail/3001"/>
                </div>
                );
        } else {
            return (
                <div>
                <p>screen width : {this.state.width}</p>
                <p>code point 3</p>
                <div className={styles.GridContainer}>
                
                <div className={styles.big_grid_1}>
                    <h1>Soup</h1>
                    <a href ="/soup"><img src="/images/treefrog.jpg" href></img></a>
                </div>
                <div><a href="/detail/1001"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1002"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1003"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1004"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1005"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/1006"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/3001"><img src="/images/treefrog.jpg" href></img></a></div>
                <div><a href="/detail/3002"><img src="/images/treefrog.jpg" href></img></a></div>
                <div className={styles.big_grid_2}>
                    <h1>Thanksgiving</h1>
                    <a href ="/thanksgiving recipe"><img src="/images/treefrog.jpg" href></img></a>
                </div> 
                </div>
                </div>
            );
        }
        
    }

    reRender = () => {
        console.log("rerender to size" + document.body.clientWidth)
        this.setState({width: document.body.clientWidth});
        // render()
    }
}