import {SIGNUPFAILURE, SIGNUPREQUEST, SIGNUPSUCCESS } from "./actiontype"



const initialState = {
    register : false,
    msg:"",
    loading:false,
    error:false
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case SIGNUPREQUEST : return{ ...state,loading:true, register : false}
        case SIGNUPSUCCESS : return {...state,loading:false,register:true,msg:action.payload.msg}
        case SIGNUPFAILURE : return{...state,loading:false,error:true, register : false}
        default : return state
    }
}