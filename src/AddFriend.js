import React, {useState} from "react"
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";

function AddFriend() {
    const initForm = {
        name: "",
        email: ""
    }

    const [form, setForm] = useState(initForm);

    function onChange (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit (e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <label> Name
                <input type="text" name="name" placeholder="Name..." onChange={onChange}/>
            </label>
            <label> Email
                <input type="email" name="email" placeholder="Email..." onChange={onChange}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default AddFriend;