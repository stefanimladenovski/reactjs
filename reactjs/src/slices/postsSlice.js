import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    posts : [
        {
            userId: 1, 
            id : 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at.",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, recusandae."
        },
        {
            userId: 2, 
            id : 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at.",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, recusandae."
        }
    ],
    status : "idle",
    error : null
}
const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers(builder){
        builder
        .addCase(fetchPosts.fulfilled, (state, action) =>{
            state.status = "FULFILLED"
            state.posts = action.payload
        })
        .addCase(fetchPosts.pending, (state) =>{
            state.status = "LOADING"
        })
        .addCase(fetchPosts.rejected, (state, action) =>{
            state.status = "REJECTED"
            state.error = action.error.message
        })
    }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    return response.json()
})

export default postsSlice.reducer