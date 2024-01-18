import {  CARTFAILURE, CARTGETSUCCESS, CARTPOSTFAILURE, CARTPOSTREQUEST, CARTPOSTSUCCESS, CARTREQUEST, LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"



const initialState = {
    msg:"",
    cart : []
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CARTREQUEST : return{ ...state,loading:true}
        case CARTPOSTSUCCESS : return {...state,loading:false,msg:action.payload.msg}
        case CARTFAILURE : return{...state,loading:false,error:true}
        
        case CARTGETSUCCESS : return {...state,loading:false,cart:action.payload}
        
        default : return state
    }
}