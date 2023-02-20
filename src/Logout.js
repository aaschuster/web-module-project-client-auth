import React, {useEffect} from "react"
import { useHistory } from "react-router-dom";
import axiosWithAuth from "./axiosWithAuth";

function Logout() {
    const history = useHistory();
    useEffect( () => {
        axiosWithAuth().post("/logout");
        localStorage.removeItem("token");
        history.push("/");
    }, [])

    return (
        <div>Logging out...</div>
    )
}

export default Logout;