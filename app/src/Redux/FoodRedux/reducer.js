import { FOOD_FAILURE, FOOD_REQUEST, FOOD_SUCCESS } from "./actionType"

const initialState={
    isLoading : false,
    isError:false,
    massage : "",
    data : [],
    text:"",
    totalPages:"",
    nextPage:"",
    previousPage:"",
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FOOD_REQUEST : return {...state,isLoading:true}
        case FOOD_SUCCESS : return {...state,data:action.payload}
        case FOOD_FAILURE : return {...state,isLoading:false,isError:true}
        default : return state
    }
}