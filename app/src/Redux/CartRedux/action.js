import {CARTALLDATADELETE, CARTDELETESUCCESS, CARTFAILURE, CARTGETSUCCESS,CARTPOSTSUCCESS, CARTQUANTITY, CARTREQUEST } from "./actiontype"
import axios from 'axios'


export const cartProductAddFunction = (obj,token) => (dispatch) =>{
    dispatch({type:CARTREQUEST})
    axios.post("https://e-com-backend-xxz8.onrender.com/cart/addCart",obj,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
    }).then((res)=>{
        alert(res.data.msg);
        dispatch({type:CARTPOSTSUCCESS,payload:res.data})
    })
    .catch((err)=>dispatch({type:CARTFAILURE}))

} 

export const cartGetFunction = (token) => (dispatch) =>{
    dispatch({ type: CARTREQUEST });

    axios.get(`https://e-com-backend-xxz8.onrender.com/cart`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res) => {
        dispatch({ type: CARTGETSUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: CARTFAILURE }));
}

export const cartProductDeleteFunction = (_id,token) => (dispatch) =>{
    dispatch({type:CARTREQUEST})
  
    axios.delete(`https://e-com-backend-xxz8.onrender.com/cart/delete?_id=${_id}`,{
        headers:{
            'Content-Type' : "application/json",
            authorization  : `Bearer ${token}`
        }
    })
    .then((res)=>{
        alert(res.data.msg);
        dispatch({type:CARTDELETESUCCESS,payload:res.data.msg})
    })
    .catch((err)=>dispatch({type:CARTFAILURE}))

}

export const cartDataDelete = (token) => (dispatch) =>{
    dispatch({type:CARTREQUEST});
    axios.post(`https://e-com-backend-xxz8.onrender.com/cart/clearCart`,{
        headers:{
            'Content-Type' : "application/json",
            authorization  : `Bearer ${token}`
        }
    })
    .then((res)=>{
        alert(res.data)
        dispatch({type:CARTALLDATADELETE})
    })
    .catch((err)=>dispatch({type:CARTFAILURE}))
}



export const cartItemQuantity = (obj,token) => (dispatch) =>{
    dispatch({type:CARTREQUEST});
    axios.post(`http://localhost:8080/cart/quantity`,obj,{
        headers:{
            'Content-Type' : "application/json",
            authorization  : `Bearer ${token}`
        }
    })
    .then((res)=>{
        // alert(res.data.msg)
        dispatch({type:CARTQUANTITY})
    })
    .catch((err)=>{
        dispatch({type:CARTFAILURE})
    })
}