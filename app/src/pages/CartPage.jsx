import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartGetFunction } from '../Redux/CartRedux/action'
import style from "../css/Cart.module.css"
import Image from "../Image/foodies.png"
import { StepperFun } from './Stepper'
import { CartListPage } from './CartListPage'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Button } from '@mui/material'

export const CartPage = () => {
   const {cart} = useSelector((store)=>store.cartReducer)
   const dispatch = useDispatch()
   const {token} = useSelector((store)=>store.authReducer)
   const [totalAmount, setTotalAmount] = useState(0);
   const [final, setFinal] = useState(0);

  
   useEffect(() => {
    calculateTotalAmount();
  }, [cart]);

  const calculateTotalAmount = () => {
    const amount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(amount);
    setFinal(amount+40)
  };

   

      const FetchData = async () =>{
          dispatch(cartGetFunction(token))
      }
  useEffect(()=>{
    FetchData()
  },[token])


  return (
    <div>

   <div className={style.nav}> 
    <img src={Image} alt="err" />
    <div className={style.stepper}>

   <StepperFun />
    </div>
   </div>
    
    <div className={style.container}>
    <div className={style.container1}>


    {cart.map((item) => (
      <div key={item._id} className={style.productcard}>
        <CartListPage {...item} />
  </div>
  ))}

</div>

<div className={style.container2}>
   
   <div>
    <p style={{fontWeight:"bold" , textAlign:"left"}}>COUPONS</p>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> <LocalOfferIcon /><p style={{textAlign:"left", fontSize:"20px",fontFamily:"fantasy"}}>Apply Coupons</p></div>
      <Button variant="contained">Apply</Button>
    </div>
    <p style={{textAlign:"left",marginTop:"-10px"}}>100₹ OFF on this order</p>
   </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",fontFamily: "Gill Sans, sans-serif"}}>
    <div>Total Price Rs.</div>
    <div>{totalAmount.toFixed(2)}₹</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div>Coupon Discount  Rs.</div>
    <div>-100₹</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div>Delivery Charge Rs.</div>
    <div>60₹</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", marginTop:"20px"}}>
    <div>Final Amount Rs.</div>
    <div>{final.toFixed(2)}</div>
  </div>
  <Button variant="contained" color='secondary' style={{width:"100%" , marginTop:"15px"}}>Place Order</Button>

</div>
    </div>
  </div>
  )
}

