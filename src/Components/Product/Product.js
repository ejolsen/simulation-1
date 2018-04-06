import React from 'react'


function Product(props) {
  console.log(props)
    return <div className="product">{props.product.name}{props.product.price}{props.product.url}</div>;
  }

  export default Product