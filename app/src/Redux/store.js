import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as authReducer} from "./AuthRedux/reducer";
import {reducer as signUpReducer} from "./signup/reducer"
import {reducer as foodReducer} from "./FoodRedux/reducer"
import {reducer as cartReducer} from "./CartRedux/reducer"
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({authReducer,signUpReducer,foodReducer,cartReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

