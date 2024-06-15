

import React from 'react'
import {   useSelector } from 'react-redux';
import style from "../css/Cart.module.css"
import { Button, Rating } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export const CartListPage = ({_id,image,food,description,quantity,price,rating,handlingDelete,handleUpdate}) => {
    const {token} = useSelector((store)=>store.authReducer)
   

  
    const handleQuantity = (_id,value) => {
      const obj = {_id,value}
      handleUpdate(obj,token)
    };

    



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
        <button onClick={() => handleQuantity(_id,+1)}>+</button>
        <h3>{quantity}</h3>
          <button disabled = {quantity<=1} onClick={() => handleQuantity(_id,-1)}>-</button>
      </div>
      <div >
        
        <Button onClick={handleDelete} color='error' variant="text" style={{marginRight:"-15px"}} ><CancelIcon /></Button>
     </div>
    </div>
 
</>
  )
}
