import {useDispatch, useSelector} from "react-redux"
import {increment, decrement} from "../actions/CounterAction"
import { useState } from "react"

// use the payload to increment by 12
// increment(12)
// decrement(12)

export const Counter = () => {

    const dispatch = useDispatch()
    const  {counter} = useSelector( state => state.CounterReducer)  // isto e i state.HelloReducer.greeting ama const greeting ke bide bez {}

    const [magicNumber, setMagicNumber] = useState(0)

    return (
        <div>
            <br /> <hr />
            <p>COUNTER : {counter}</p>
            <input 
                value={magicNumber}
                onChange={(e) => setMagicNumber(Number(e.target.value))}
                type="number"
                placeholder="Incr / Decrby Number" />
            <button
            onClick={() => dispatch(increment(magicNumber))}>+</button>
            <button onClick={() => dispatch(decrement(magicNumber))}>-</button>
        </div>
    )
}