import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "@/store/slices/authSlice";


const rootReducer = combineReducers({
    auth: authSlice,
});

export default rootReducer

