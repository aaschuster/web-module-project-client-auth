import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axiosWithAuth from "./axiosWithAuth";


function FriendsList() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.error(err));
    }, [])
    if (localStorage.getItem("token")) {
        return (
            <div>
                {friends.map(friend => (
                    <p key={friend.id}> - {friend.name} - {friend.email} </p>
                ))}
            </div>
        )
    }
    return <Redirect to="/login"/>

}

export default FriendsList;