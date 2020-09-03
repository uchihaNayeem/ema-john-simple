import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
  // console.log(fakeData)

  let firstTen = fakeData.slice(0, 10);
  const [products, setProduct] = useState(firstTen);
  const [cart, setCart] = useState([])


  const handleAddProduct = (product) => {
    
    const newCart = [...cart, product]
    setCart(newCart);
    const sameProduct = newCart.filter(pd => pd.key === product.key );
    const count = sameProduct.length
    addToDatabaseCart(product.key, count);
  }
  // console.log(products);
  return (
    <div className="shop-container">

      <div className="product-container">


        {
          products.map(product => <Product
            key={product.key}
            showAddToCart={true}
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