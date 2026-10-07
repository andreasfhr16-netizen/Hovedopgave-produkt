"use client";
import "../stylesheets/group-showcase.css";
import { useState, useEffect } from "react";

export default function Gpreview({ groupitem }) {

    const [joinedGroups, setJoinedGroups] = useState([]);
    const [user, setUser] = useState(null);



    const join_group = async (groupID, ownerID) => {
        const response = await fetch("/api/add_group_participant/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                user_id: user?.id,
                selected_group: groupID,
                owner_id: ownerID,
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Fejl ved deltagelse:", result.error);
            return;
        }


        setJoinedGroups((prev) => [...prev, groupID]);

    };







    const Get_joined_groups = async (userId) => {
        const response3 = await fetch("/api/check_joined_groups/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ user_id: userId }),
        });

        //joinedgroups er et array af objekter, hvor hvert objekt repræsenterer en gruppes id som bruger er medlem af. 
        const groups_joined = await response3.json();
        setJoinedGroups(
            groups_joined.data.map((el) => el.Group_id)
        );

        
        //går igennem hvert objekt i groups_joined.data array og udtrækker Group_id af hvert objekt/gruppe fundet
        console.log("Jeg har deltaget i følgende grupper", groups_joined.data.map((el) => el.Group_id));




    };





    const Get_user = async () => {
        const response2 = await fetch("/api/who_logged_in/");
        const data = await response2.json();
        console.log("USER:", data);
        setUser(data);
    };

    useEffect(() => {
        Get_user();
    }, []);

    useEffect(() => {
        if (user?.id) {
            Get_joined_groups(user.id);
        }
    }, [user]);

    return (
        <div className="group-component-con">
            {groupitem.map((group) => {
                const joinedgroup = joinedGroups.includes(group.Group_id);

                return (
                    <div className="group-showcase-con" key={group.Group_id}>

                        <div className="group-showcase-img-box"></div>

                        <div className="group-showcase-part2-con">

                            <div className="group-showcase-textbox">
                                <h2>{group.Group_name}</h2>
                                <p>{group.Group_description}</p>
                            </div>

                            <div className="group-showcase-btn-row">
                                {!joinedgroup && (
                                    <button
                                        className="group-showcase-btn1"
                                        onClick={() => join_group(group.Group_id, group.Group_owner)}
                                    >
                                        <p>Deltag i gruppe</p>
                                    </button>
                                )}

                                {joinedgroup && (
                                    <button className="group-showcase-btn1">
                                        <p>Du er deltaget i gruppen</p>
                                    </button>
                                )}

                                <button className="group-showcase-btn2">
                                    <p>Gå til gruppe</p>
                                </button>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}