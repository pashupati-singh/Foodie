import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS, SIGNUPFAILURE, SIGNUPREQUEST, SIGNUPSUCCESS } from "./actiontype"



const initialState = {
    name:"",
    msg:"",
    loading:false,
    error:false
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case SIGNUPREQUEST : return{ ...state,loading:true}
        case SIGNUPSUCCESS : return {...state,loading:false,msg:action.payload.msg,name:action.payload.name}
        case SIGNUPFAILURE : return{...state,loading:false,error:true}
        default : return state
    }
}