import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminReducer from "./admin-slice";
import contactReducer from "./contact-slice";


const store = configureStore({
    reducer : {
        auth : authReducer,
        admin : adminReducer,
        contact : contactReducer
    }
})

export default store