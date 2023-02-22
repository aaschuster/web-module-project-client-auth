import React, {useState} from "react"
import { Redirect } from "react-router-dom";

import axiosWithAuth from "./axiosWithAuth";

function AddFriend() {
    const initForm = {
        name: "",
        email: "",
        age: ""
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
        axiosWithAuth().post("/friends", 
            {
                id: new Date().getTime(),
                name: form.name,
                email: form.email,
                age: form.age
            }
        )
        .then( res => {
            console.log(res);
        }).catch(err => console.error(err));
        setForm(initForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <label> Name
                <input type="text" name="name" placeholder="Name..." onChange={onChange} value={form.name}/>
            </label>
            <label> Age
                <input type="text" name="age" placeholder="Age..." onChange={onChange} value={form.age}/>
            </label>
            <label> Email
                <input type="email" name="email" placeholder="Email..." onChange={onChange} value={form.email}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default AddFriend;