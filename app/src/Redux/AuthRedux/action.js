import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"
import axios from 'axios'


export const LoginFunction = (object) => (dispatch) =>{
    dispatch({type:LOGINREQUEST})
    axios.post("http://localhost:8080/users/login",object).then((res)=>dispatch({type:LOGINSUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:LOGINFAILURE}))

} 