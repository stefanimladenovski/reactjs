import {useDispatch, useSelector} from "react-redux"
import { sayHello } from "../actions/HelloAction"



export const Hello = () => {

    const dispatch = useDispatch()
    const  {greeting} = useSelector( state => state.HelloReducer)  // isto e i state.HelloReducer.greeting ama const greeting ke bide bez {}

    return (
        <div>
            <h1>{greeting}</h1>
            <button
            onClick={() => dispatch(sayHello())}>
                CLICK ME for HELLO
            </button>
        </div>
    )
}