const initialState = {
    greeting: "Hi !"
}

const HelloReducer = (state = initialState, action) => {
    //sekogas go vrakja celiot state
    switch(action.type) {
        case "SAY_HELLO" :
            return {
                ...state,
                greeting: action.payload //"HELLO WORLD !!!"
            }
        default :
            return state
    }
}

export default HelloReducer