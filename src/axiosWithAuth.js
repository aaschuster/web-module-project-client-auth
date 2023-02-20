import axios from "axios"

function axiosWithAuth() {
    return (
        axios.create({
            baseURL: "http://localhost:9000/api",
            headers: { authorization: localStorage.getItem("token") }
        })
    )
}

export default axiosWithAuth;