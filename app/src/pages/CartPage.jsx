import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartGetFunction } from '../Redux/CartRedux/action'
import style from "../css/Cart.module.css"

export const CartPage = () => {
   const {cart} = useSelector((store)=>store.cartReducer)
   const dispatch = useDispatch()
   const {token} = useSelector((store)=>store.authReducer)
   const [totalAmount, setTotalAmount] = useState(0);
   
//   console.log(cart);
      const FetchData = async () =>{
        // console.log(token);
          dispatch(cartGetFunction(token))
      }
  useEffect(()=>{
    FetchData()
  },[token])

  useEffect(() => {
    calculateTotalAmount();
  }, [cart]);

  const calculateTotalAmount = () => {
    const amount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(amount);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // You need to dispatch an action to update the quantity in the cart
    // This is just a placeholder; you should replace it with the actual action
    // dispatch(updateCartQuantityAction(productId, newQuantity));
  };

  return (
    <div className={style.container}>
    <h1>Cart Page</h1>
    {cart.map((item) => (
      <div key={item._id} className={style.productcard}>
        <img className={style.productimage} src={item.image} alt={item.food} style={{ width: '100px' }} />
        <h3 className={style.productdetails}>{item.food}</h3>
        <p className={style.productdetails}>Description: {item.description}</p>
        <p className={style.productdetails}>Price: {item.price}₹</p>
        <p className={style.productdetails}>Quantity: {item.quantity}</p>
        <button className={style.quantitybuttons} onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>
          Decrease Quantity
        </button>
        <button className={style.quantitybutton} onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>
          Increase Quantity
        </button>
      </div>
    ))}
    <p className={style.totalamount}>Total Amount: ${totalAmount}</p>
  </div>
  )
}
