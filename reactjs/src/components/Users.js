import { useOutletContext } from "react-router-dom"

export const Users = ({users}) => { 

   const {users: users2} = useOutletContext()
    return ( <>
    <h3>This is Users component</h3>
    {/* <li><Link to={"/users/1"}>User 1</Link></li>
    <li><Link to={"/users/2"}>User 2</Link></li>
    <li><Link to={"/users/new"}>New User </Link></li> */}

    {users.map(user => <li>{user.name}</li> )}
    {/* {users.map(users2 => <li>{user.name}</li> )} */}

    {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    
    </>)
}