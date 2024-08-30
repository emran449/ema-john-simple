import React, { useEffect, useState } from 'react';
import fakeData from './../../fakeData/products.JSON';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'

const Shop = () => {
    
  useEffect(()=>{
    fetch(`${fakeData}`)
  .then(response => response.json())
  .then(data => setfakeData1(data))
  },[])

const [fakeData1, setfakeData1]= useState([]);
const first10 = fakeData1.slice(0,10);
const products = first10;
const [cart, setCart] = useState([]);

const handleAddProduct = (product) => {
  console.log("product added", product);
  const newCart = [...cart, product];
  setCart(newCart);
}

    return (
        <div className='shop-container'>
           <div className="product-container">
           
            {
                products.map(pd => <Product 
                  product={pd}
                  handleAddProduct = {handleAddProduct}
                  ></Product>)
            }
            
           </div>
          <div className="cart-container">
          <Cart cart = {cart}></Cart>
          </div>  
        </div>
    );
};

export default Shop;