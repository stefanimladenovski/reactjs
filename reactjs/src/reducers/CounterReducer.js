const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    //sekogas go vrakja celiot state
    switch(action.type) {
        case "INCREMENT" :
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "DECREMENT" :
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default :
            return state
    }
}

export default CounterReducer