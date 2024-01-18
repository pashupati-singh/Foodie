import axios from "axios"
import { FOOD_FAILURE, FOOD_REQUEST, FOOD_SUCCESS } from "./actionType"


export const foodFunction  = (text) => (dispatch) => {
    dispatch({type:FOOD_REQUEST})
    axios.get(`http://localhost:8080/Product`).then((res)=>{
    // console.log(res.data)
    dispatch({type:FOOD_SUCCESS,payload:res.data})
}
    )
    .catch(()=>dispatch({type:FOOD_FAILURE}))
}