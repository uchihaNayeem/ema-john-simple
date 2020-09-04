import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

  const [cart, setCart] = useState([])

  const removeProduct = (productKey) => {
    console.log('remove clicked', productKey);
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey)

  }

  useEffect(()=>{
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart)
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product
    });
    setCart(cartProducts);
  }, [])
  return (
    <div className="twin-container">
      {/* <h1>cart Items: {cart.length}</h1> */}

      <div>
      {
        cart.map(pd => <ReviewItem
          key={pd.key}
          removeProduct = {removeProduct}
          product={pd}></ReviewItem>)
      }

      </div>
      <div className="">

      </div>

      
    </div>
  );
};

export default Review;