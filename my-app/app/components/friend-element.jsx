"use client"
import "../stylesheets/friend-element-component.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Felement() {


    const [user, setUser] = useState(null);
     const [friends, setFriends] = useState([])

    const Get_user = async () => {


        //kalder api ruten og henter data om hvem der er logget ind
        const response2 = await fetch("/api/who_logged_in/")
        const user = await response2.json()
        console.log("USER:", user);
        setUser(user);

    }

    //henter venner fra check_friend ruten baseret på id af loggede ind bruger
    const Get_friends = async (userId) => {
        const response = await fetch("/api/check_friends/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                user_id: userId,
            }),
        });

        //logger listen af venner efter respons
        const friendlist = await response.json();
        console.log("brugerens liste af venner", friendlist);
        setFriends(friendlist.data)
    }

    useEffect(() => {
        Get_user();


    }, []);

    useEffect(() => {

        if (user?.id) {
            Get_friends(user.id);
        }



    }, [user])

   



    return (

        <div className="friend-element-con">

            <div className="friend-icon"></div>
            <div className="friend-name-con">

                <>

{/*betyder det at hver vens navn skrivers i p tag  */}
                    {friends.map((friend) => (

                        <p key={friend.id}>{friend.username}</p>

                    ))}

                </>



            </div>


        </div>


    )
}