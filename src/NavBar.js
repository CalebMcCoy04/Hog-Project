import {NavLink} from "react-router-dom"

function NavBar(){

    return(
        <div>
            <h1 className="main-h1"> The National Hog Encyclopedia</h1>

            <NavLink to="/">
                <h2>Home</h2>
            </NavLink>
            <NavLink to="/HogsContainer">
                <h2 className="hogs-container-h2">Hogs</h2>
            </NavLink>

            <NavLink to="/HogSearch">
                <h2 className="hogs-search-h2">Hog Search</h2>
            </NavLink>
            <NavLink to="/HogsForm">
                <h2 className="hogs-form-h2">Add a Hog</h2>
            </NavLink>
            
        </div>
    )
}
export default NavBar