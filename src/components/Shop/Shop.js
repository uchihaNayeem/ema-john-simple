import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
  // console.log(fakeData)
  
  let firstTen = fakeData.slice(0,10);
  const [products, setProduct] = useState(firstTen)
  // console.log(products);
  return (
    <div className="shop-container">

      <div className="product-container">
        
        
        {
          products.map(product => <Product product={product}></Product>)
        }
        
      </div>
      <div className="cart-container">
        <h3>This is cart</h3>
      </div>
      
      
    </div>
  );
};

export default Shop;