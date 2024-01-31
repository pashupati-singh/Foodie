import {  ADDRESS_FAILURE, ADDRESS_GET_SUCCESS, ADDRESS_POST_SUCCESS, ADDRESS_REQUEST } from "./actiontype"



const initialState = {
    msg:"",
    address : [],
    
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ADDRESS_REQUEST : return{ ...state,loading:true}
        case ADDRESS_POST_SUCCESS : return {...state,loading:false,msg:action.payload.msg}
        case ADDRESS_FAILURE : return{...state,loading:false,error:true}
        
        case ADDRESS_GET_SUCCESS : return {...state,loading:false,address:action.payload}

        
        default : return state
    }
}