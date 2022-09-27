import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import todosReducer from "./slices/todosSlice"
import postsReducer from "./slices/postsSlice"
// import logger from "redux-logger"

//redux extention working by default
export const store = configureStore({
    reducer : {
        counter: counterReducer,
        todos: todosReducer,
        posts: postsReducer
    },    //reduserot tuka e vo sklop so akciite ili so slice
    // middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(logger)
})