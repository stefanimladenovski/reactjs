import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
// import logger from "redux-logger"
export const store = configureStore({
    reducer : {
        counter: counterReducer
    },
    // middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(logger)
})