import React, {useState} from "react"

function Login() {
    const initCredentials = {
        user: "",
        pword: ""
    }

    const [credentials, setCredentials] = useState(initCredentials);

    function onSubmit() {
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
                <input type="text" name="user" placeholder="Username..." onChange={onChange}/>
            </label>
            <label>
                <input type="password" name="pword" placeholder="Password..." onChange={onChange}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Login;