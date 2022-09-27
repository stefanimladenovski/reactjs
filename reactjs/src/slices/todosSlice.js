import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "Learn Toolkit", completed: false},
    {id: "2", title: "Learn Slices", completed: true}
]

const todosSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        // NACIN 1
        // add(state, action) {
        //     state.push({
        //         id: nanoid(),
        //         title: action.payload.title,
        //         completed: false
        //     })  //vaka se dodava nov objekt vo array so .push
        // },
        //   NACIN 2
        add : {
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare({title}) {
                return {
                    payload : {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }
        },
        remove(state, action) { 
            //nacin 1
            // const index = state.findIndex ( todo => todo.id === action.payload)
            // state.splice(index, 1)

            //nacin 2
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleCompleted(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    } 
})

export const {add, remove, toggleCompleted} = todosSlice.actions
export default todosSlice.reducer