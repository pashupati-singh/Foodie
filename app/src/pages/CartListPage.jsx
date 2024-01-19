

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import style from "../css/Cart.module.css"

export const CartListPage = ({_id,image,food,description,price,quantity,}) => {
    const [number,setNum] = useState(1);
   
  const handleQuantityChange = (productId, newQuantity) => {
      setNum()
  };



  return (
    <div className={style.productcard}>
        <img className={style.productimage} src={image} alt={food} style={{ width: '100px' }} />
        <div>
        <h3 className={style.productdetails}>{food}</h3>
        <p className={style.productdetails}>Description: {description}</p>
        <p className={style.productdetails}>Price: {price}₹</p>
        <p className={style.productdetails}>Quantity: {quantity}</p>
        </div>
        <div style={{display:"grid" , gridTemplateRows:"repeat(3,1fr)"}}>
        <button  className={style.quantitybuttons} disabled={number <= 1} onClick={() => handleQuantityChange(_id,  - 1)}>
          -
        </button>
        <button disabled>{number}</button>
        <button className={style.quantitybutton} onClick={() => handleQuantityChange(_id, + 1)}>
          +
        </button>
      </div>
    </div>
  )
}
