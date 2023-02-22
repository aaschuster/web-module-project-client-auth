import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

function Login() {
    const initCredentials = {
        username: "",
        password: ""
    }

    const [credentials, setCredentials] = useState(initCredentials);
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        axios.post(
            "http://localhost:9000/api/login", credentials
        ).then(res => {
            localStorage.setItem("token", res.data.token);
            history.push("/friends");
        })
        .catch(err => console.error(err));
    }

    function onChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <label> Username
                <input type="text" name="username" placeholder="Username..." onChange={onChange}/>
            </label>
            <label> Password
                <input type="password" name="password" placeholder="Password..." onChange={onChange}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Login;