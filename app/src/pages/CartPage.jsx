import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartGetFunction, cartItemQuantity, cartProductDeleteFunction } from '../Redux/CartRedux/action'
import style from "../css/Cart.module.css"
import { CartListPage } from './CartListPage'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {  useNavigate } from 'react-router-dom'

export const CartPage = ({cartData}) => {
  const navigate = useNavigate();
   const {cart} = useSelector((store)=>store.cartReducer)
   const dispatch = useDispatch()
   const [totalAmount, setTotalAmount] = useState(0);
   const [final, setFinal] = useState(0);
   const { isAuth } = useSelector((store) => store.authReducer);
   const {token} = useSelector((store)=>store.authReducer)
   const [deleteFlag, setDeleteFlag] = useState(false);

   useEffect(() => {
    if(!isAuth){
      navigate("/login")
    }
    calculateTotalAmount();
    dispatch(cartGetFunction(token));
  }, [cart,isAuth,navigate,deleteFlag]);

  
 

  const calculateTotalAmount = () => {
    const amount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setFinal(amount-40)
    setTotalAmount(amount);
    cartData(amount-40)
  };

  const handleUpdate = (obj,token) => {
    dispatch(cartItemQuantity(obj,token))
    setDeleteFlag(!deleteFlag)
  }

  const handlingDelete = (_id,token) =>{
    dispatch(cartProductDeleteFunction(_id,token))
    setDeleteFlag(!deleteFlag)
  } 

  
  useEffect(() => {
   
       dispatch(cartGetFunction(token));
  
  }, [token,deleteFlag]); 
  

  return (
    <div>
    <div className={style.container}>
    <div className={style.container1}>


    {cart.map((item) => (
      <div key={item._id} className={style.productcard}>
        <CartListPage {...item} handlingDelete = {handlingDelete} handleUpdate = {handleUpdate}/>
  </div>
  ))}

</div>
{cart.length === 0?"Nothing Inside your cart":<div className={style.container2}>
   
   <div>
    <p style={{fontWeight:"bold" , textAlign:"left"}}>COUPONS</p>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"green"}}> <LocalOfferIcon /><p style={{textAlign:"left", fontSize:"20px",fontFamily:"fantasy"}}>Apply Coupons</p></div>
      
      
    </div>
    <p style={{textAlign:"left",marginTop:"-10px"}}>100₹ OFF on this order</p>
   </div>
   <hr />
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",fontFamily: "Gill Sans, sans-serif"}}>
    <div>Total Price Rs.</div>
    <div>{totalAmount.toFixed(2)}₹</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div>Coupon Discount  Rs.</div>
    <div >-100₹</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div>Delivery Charge Rs.</div>
    <div>60₹</div>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", marginTop:"20px"}}>
    <div>Final Amount Rs.</div>
    <div>{final.toFixed(2)}</div>
  </div>
  
</div>}
    </div>
  </div>
  )
}

