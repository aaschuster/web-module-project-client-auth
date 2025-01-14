import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axiosWithAuth from "./axiosWithAuth";

function FriendsList() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => setFriends(res.data))
            .catch(err => console.error(err));
    }, [])
    return (
        <div>
            {friends.map(friend => (
                <p key={friend.id}>{friend.name} - Age: {friend.age} - {friend.email} </p>
            ))}
        </div>
    )

}

export default FriendsList;