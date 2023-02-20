import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <h1>Friends Database</h1>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends List</Link>
            <Link to="/friends/add">Add Friend</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Header;