import React, { Component } from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    render() {
       const inventory = this.props.inventory.map((product, i) => {
            return ( 
                <Product key={i} product={product} /> 
            )
       })
        
        return (
            <div>
                {inventory} 
            </div>
        )
    }
}   

export default Dashboard