import { Link, Outlet } from "react-router-dom"

const users = [
    {name: "Ane"},
    {name: "Kosta"},
    {name: "Bibi"},
    {name: "Riko"},
  ]

export const UserLayout = () => {

    return <>
    <h3>User Layout</h3>
        <ul>
           <li><Link to={"/users/1"}>User 1</Link></li>
           <li><Link to={"/users/2"}>User 2</Link></li>
           <li><Link to={"/users/new"}>New User </Link></li>
        </ul>

        <Outlet context={users}/>
    </>
}