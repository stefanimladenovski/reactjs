import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset, incrementBy } from "../slices/counterSlice"
export const Counter = () => {
    
    const {count} = useSelector(state => state.counter)  // ili state = state.counter.count ama const count bez zagradi   ili state.reducer.initialstate   state e ustvari store
    const dispatch = useDispatch()

    const inputRef = useRef(null)
    // console.log(inputRef.current.value)

    return  <div>
        <p>Counter : {count}</p>
        <div>
            <button
            onClick={() => dispatch(increment())}
            >+</button>
            <button
            onClick={() => dispatch(decrement())}
            >-</button>
            <button
            onClick={() => dispatch(reset())}
            >RESET</button>

            <div>
                <input type="number" ref={inputRef} />
                <button
                    onClick={() => {
                        const inputValue = inputRef.current.value
                        //console.log("inputRef.current.value", inputValue)
                        dispatch(incrementBy(inputValue))
                    }}
                >incrementBy </button>
            </div>
        </div>
    </div>
}