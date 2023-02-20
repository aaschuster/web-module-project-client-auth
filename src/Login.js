import React from "react"

function Login() {
    return (
        <form>
            <h2>Login</h2>
            <label> Username
                <input type="text" placeholder="Username..."/>
            </label>
            <label>
                <input type="password" placeholder="Password..."/>
            </label>
        </form>
    )
}

export default Login;