import { useParams } from "react-router-dom"

export const User = () => { 
    const {id} = useParams()
    return (<>
    <h3>This is User component ID =&gt;  {id}</h3>
      
    </>)
}

//=&gt ova znaci =>