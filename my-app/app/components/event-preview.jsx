"use client";

import "../stylesheets/event-preview-component.css";
import { useState, useEffect } from "react";

export default function Epreview({ event }) {




    //navngiver parameteren / værdien den får til eventId og det den modtag er et langt event-id 
    //deltager i en event ved at sende post request med bruger id og event id
    const join_event = async (eventId) => {
        const response = await fetch("/api/add_event_participant/", {
            method: "POST",
            headers: {


                "content-type": "application/json",
            },
            body: JSON.stringify({
                user_id: user?.id,
                selected_event: eventId,
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Fejl ved deltagelse:", result.error);
            return;
        }


        setJoinedevent(true)
        console.log("jeg er den valgte event id", eventId)
    }

    const [joinedevent, setJoinedevent] = useState(false)

    //returnere alle de events brugeren er medlem af hved at sende userid som parameter 
    const Get_joined_events = async (userId) => {
        const response3 = await fetch("/api/check_joined_events/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                user_id: userId,
            }),
        });

        const events_joined = await response3.json();
        console.log("Jeg har deltaget i følgende events", events_joined)
        //console.log("og jeg er", events_joined.data[0].participant_id)


        //skal løbe igennem hvert objekts participants_id 


        //sammenligner hvert objekts event_id key fra data array og sammenligner med nuværedne id af event 
        const event_joined = events_joined.data.some(
            (element) => element.event_id === event.id
        );


        //ved brug af some returneres en boolean dermed er event_joined varaiblen true eller false hvis den hentede event matcher
        //den event bruger kigger på / kan se


        //hvis event er deltaget i ændres state som styre knap tekst
        if (event_joined)
            setJoinedevent(true)

    }


    //kører først ved rendering af komponent
    const [user, setUser] = useState(null);


    const Get_user = async () => {



        const response2 = await fetch("/api/who_logged_in/")
        const user = await response2.json()
        console.log("Jeg er:", user.username);
        setUser(user);

    }

    useEffect(() => {

        Get_user();

    }, []);

    //kører først når bruger er modtaget dermed kan man undgå at prøve at hente deltagede events før bruger login
    useEffect(() => {
        if (user?.id) {
            Get_joined_events(user.id);
        }
    }, [user]);


    console.log("Event modtaget i Epreview:", event);

    return (
        <div
            className="event-preview-con"
            key={event.id || event.Event_name}
        >
            <div className="event-preview-header-element">
                <h2 id="event-preview-heading">
                    {event.Event_heading}
                </h2>
            </div>

            <div className="event-preview-tag-row-con">
                <div className="tag-row-heading">
                    <h2>Tags</h2>
                </div>

                <div className="event-preview-tag-element-con">
                    <div className="event-preview-tag-element"></div>
                    <div className="event-preview-tag-element"></div>
                    <div className="event-preview-tag-element"></div>
                    <div className="event-preview-tag-element"></div>
                </div>
            </div>

            <div className="event-description-con">
                <div className="event-description-heading-row">
                    <p id="event-description-heading">
                        Event beskrivelse
                    </p>
                </div>

                <div className="event-description-info-row">
                    <p id="event-description-text">
                        {event.Event_description}
                    </p>
                </div>

                <div className="event-preview-btn-row">

                    {!joinedevent && (

                        <div className="event-preview-btn" onClick={() => {
//join_event funktionen modtag id af nuværende event som parameter og sender videre
                            join_event(event.id);
                        }}>


                            <p>Deltag</p>
                        </div>

                    )}

                    {joinedevent && (

                        <p>Du er deltaget</p>

                    )}

                    <div className="event-preview-btn">
                        <p>Inviter til event</p>
                    </div>
                </div>
            </div>
        </div>
    );
}