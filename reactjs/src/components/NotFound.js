import { Link } from "react-router-dom"
export const NotFound = () => ( 
    <>
        <h1>404 file NOT FOUND</h1>
        <Link to={"/"}> Go to Dashboard </Link>
    </>
)