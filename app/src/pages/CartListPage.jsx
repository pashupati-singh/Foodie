

import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import style from "../css/Cart.module.css"
import { Button, Rating } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export const CartListPage = ({_id,image,food,description,quantity,price,rating,handlingDelete}) => {
    const [number,setNum] = useState(quantity);
    const {cart} = useSelector((store)=>store.cartReducer)
    const [cartItems,setCartItems] = useState(cart)
    const {token} = useSelector((store)=>store.authReducer)
   
    const getTotalAmount = () => {
      return "heelo"
      // cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    const handleIncrease = (itemId) => {
      setNum(number+1)
      console.log(itemId);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
            item._id === itemId ? { ...item, quantity: item.quantity + 1 }: item
        )
      );
      // console.log(cartItems);
    };

      
    const handleDecrease = (itemId) => {
      setNum(number-1)
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };

    useEffect(()=>{
      console.log(getTotalAmount());
    },[number])

  const handleDelete = () =>{
    handlingDelete(_id,token)
  }


  return (

    <>
    <div className={style.productcard}>
        <img className={style.productimage} src={image} alt={food} style={{ width: '100px' }} />
        <div>
        <h3 className={style.productdetails}>{food}</h3>
        <p className={style.productdetails}>Description: {description}</p>
        <p className={style.productdetails}>Price: {price}₹</p>
        <p className={style.productdetails}>Quantity: {quantity}</p>
        <Rating style={{marginLeft:"-80px"}}  className={style.productdetails} name="Rating" value={rating} />

        </div>
        <div style={{display:"grid" , gridTemplateRows:"repeat(3,1fr)"}}>
        <button onClick={() => handleIncrease(_id)}>+</button>
        <h3>{quantity}</h3>
          <button onClick={() => handleDecrease(_id)}>-</button>
      </div>
      <div >
        
        <Button onClick={handleDelete} color='error' variant="text" style={{marginRight:"-15px"}} ><CancelIcon /></Button>
     </div>
    </div>
 
</>
  )
}
