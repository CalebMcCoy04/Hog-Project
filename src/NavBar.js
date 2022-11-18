import {NavLink} from "react-router-dom"

function NavBar(){

    return(
        <div className="navbar-div">
            <h1 className="main-h1"> The National Hog Encyclopedia</h1>

            <NavLink to="/">
                <a className="hogs"><span className="nav-span">Home</span></a>
            </NavLink>
            <NavLink to="/HogsContainer">
                <a className="hogs"><span className="nav-span">Hogs</span></a>
            </NavLink>

            <NavLink to="/HogSearch">
                <a className="hogs"><span className="nav-span">Hog Search</span></a>
            </NavLink>
            <NavLink to="/HogsForm">
                <a className="hogs"><span className="nav-span">Add a Hog</span></a>
            </NavLink>
         
        </div>
    )
}
export default NavBar