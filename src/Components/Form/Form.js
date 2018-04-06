import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {

            productName: '',
            price: '',
            imageURL: '',

        }

        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(event) {
        this.setState( { [event.target.name]: event.target.value});
        console.log(this.state)
      }

    resetForm = () => this.setState(this.baseState)
    
    // createPost( text ) {
    //     const {name} = this.state.productName
    //     const {price} = this.state.price
    //     const {img} = this.state.imageURL
    //     axios.post('/api/product', { name, price, img}).then( results => {
          
    //     });
    //   }


    render() {
        return (
            <div>
               Product Name: <input type="text" name="productName" onChange={this.handleChange}/>
               Image URL: <input type="text" name="imageURL" onChange={this.handleChange}/>
               Price: <input type="text" name="price" onChange={this.handleChange}/>
               <button onClick={this.resetForm} type="button">Cancel</button>
               <button>Add to Inventory</button>
               
            </div>
            
        )
    }
}   

export default Form;