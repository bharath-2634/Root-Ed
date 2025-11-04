import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminReducer from "./admin-slice";
import postReducer from "./post-slice";


const store = configureStore({
    reducer : {
        auth : authReducer,
        admin : adminReducer,
        posts : postReducer
    }
})

export default store