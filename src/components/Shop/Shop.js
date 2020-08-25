import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
  // console.log(fakeData)

  let firstTen = fakeData.slice(0, 10);
  const [products, setProduct] = useState(firstTen);
  const [cart, setCart] = useState([])


  const handleAddProduct = (product) => {
    
    const newCart = [...cart, product]
    setCart(newCart);
  }
  // console.log(products);
  return (
    <div className="shop-container">

      <div className="product-container">


        {
          products.map(product => <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>)
        }

      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>


    </div>
  );
};

export default Shop;