"use client"
import "../stylesheets/friend-element-component.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Felement({friend}) {


//da friend er nøglen til hvert objekt i friends arrayet så betyder det at komponenten Felement modtag hver ven som et objekt 
//fx 
//friend = { id: "abc-123", username: "hoppe23" }
//friend = { id: "def-456", username: "joppederhopper" }
    return (

        <div className="friend-element-con">

            <div className="friend-icon"></div>
            <div className="friend-name-con">

                <p>{friend.username}</p>
                
            </div>


        </div>


    )
}