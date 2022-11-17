import {NavLink, } from "react-router-dom"

function NavBar(){

    return(
        <div className="navbar-div">
            <h1 className="main-h1"> The National Hog Encyclopedia</h1>

            <NavLink to="/">
                <h2 className="hogs">|  Home  |</h2>
            </NavLink>
            <NavLink to="/HogsContainer">
                <h2 className="hogs">|  Hogs |</h2>
            </NavLink>

            <NavLink to="/HogSearch">
                <h2 className="hogs">|  Hog Search  |</h2>
            </NavLink>
            <NavLink to="/HogsForm">
                <h2 className="hogs">|  Add a Hog  |</h2>
            </NavLink>
         
        </div>
    )
}
export default NavBar