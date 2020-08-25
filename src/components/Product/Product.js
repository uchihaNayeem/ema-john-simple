import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'


const Product = (props) => {
  console.log(props.product)
  const { img, name, seller, stock, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className='product-name'>{name}</h4>

        <p><small>By: {seller}</small></p>
        <p><small>{price}</small></p>
        <p><small>By:Only {stock} left in stock-order soon</small></p>
        <button onClick={() => props.handleAddProduct(props.product)} className='my-btn'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>


      </div>
    </div>
  );
};

export default Product;