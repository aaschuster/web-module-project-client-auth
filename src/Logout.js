import React, {useEffect} from "react"
import { useHistory } from "react-router-dom";
import axiosWithAuth from "./axiosWithAuth";

function Logout() {
    const history = useHistory();
    useEffect( () => {
        axiosWithAuth().post("/logout")
            .then(res=>localStorage.removeItem("token"))
            .catch(err=>console.error(err));
        history.push("/");
    }, [])

    return (
        <div>Logging out...</div>
    )
}

export default Logout;