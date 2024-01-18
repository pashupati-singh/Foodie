import {CARTFAILURE, CARTGETSUCCESS,CARTPOSTSUCCESS, CARTREQUEST } from "./actiontype"
import axios from 'axios'


export const cartProductAddFunction = (obj,token) => (dispatch) =>{
    dispatch({type:CARTREQUEST})
    axios.post("http://localhost:8080/cart/addCart",obj,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
    }).then((res)=>{
        alert("added");
        dispatch({type:CARTPOSTSUCCESS,payload:res.data})
    })
    .catch((err)=>dispatch({type:CARTFAILURE}))

} 

export const cartGetFunction = (token) => (dispatch) =>{
    dispatch({ type: CARTREQUEST });

    axios.get(`http://localhost:8080/cart`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log(res.data);
        dispatch({ type: CARTGETSUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: CARTFAILURE }));
}