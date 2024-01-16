import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actiontype"



const initialState = {
    token:"",
    msg:"",
    isAuth:false,
    loading:false,
    error:false
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGINREQUEST : return{ ...state,loading:true}
        case LOGINSUCCESS : return {...state,loading:false,msg:action.payload.msg,token:action.payload.token,isAuth:true}
        case LOGINFAILURE : return{...state,loading:false,error:true}
        default : return state
    }
}