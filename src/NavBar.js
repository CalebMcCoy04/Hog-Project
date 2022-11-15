import {NavLink} from "react-router-dom"

function NavBar(){

    return(
        <>
            <h1>Home Page</h1>

            <NavLink to="/">
                <h3>Home</h3>
            </NavLink>

            <NavLink to="/HogSearch">
                <h4>Hog Search</h4>
            </NavLink>
        </>
    )
}
export default NavBar