import {ADDRESS_FAILURE, ADDRESS_GET_SUCCESS, ADDRESS_POST_SUCCESS, ADDRESS_REQUEST} from "./actiontype"
import axios from 'axios'


export const addressAddFunction = (obj,token) => (dispatch) =>{
    dispatch({type:ADDRESS_REQUEST})
    axios.post("http://localhost:8080/address/add",obj,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
    }).then((res)=>{
        alert("added");
        dispatch({type:ADDRESS_POST_SUCCESS,payload:res.data})
    })
    .catch((err)=>dispatch({type:ADDRESS_FAILURE}))

} 

export const addressGetFunction = (token) => (dispatch) =>{
    dispatch({ type: ADDRESS_REQUEST });

    axios.get(`http://localhost:8080/address`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res) => {
        dispatch({ type: ADDRESS_GET_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: ADDRESS_FAILURE }));
}
