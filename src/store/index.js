import {combineReducers, createStore} from "redux";
import { authReducer } from "./auth/authReducer";
import { calculatorReducer } from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    auth: authReducer,       
})
 export const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log("STORE CHANGED", store.getState());
})