import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";

const RootReducer = combineReducers({
    user: UserSlice,
})
export default RootReducer;