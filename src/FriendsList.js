import React, {useEffect, useState} from "react";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";


function FriendsList () {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then( res => {
                setFriends(res.data);
                console.log(res.data);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            {friends.map( friend => (
                <p key={friend.id}> - {friend.name} - {friend.email} </p>
            ))}
        </div>
    )
}

export default FriendsList;