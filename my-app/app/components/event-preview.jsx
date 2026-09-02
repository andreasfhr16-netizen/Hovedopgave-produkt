"use client"
import "../stylesheets/event-preview-component.css";
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Epreview(props) {

    const event_response = async () => {
        const response = await fetch("/api/get_events/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });

        const data = await response.json();
        console.log("Events modtaget:", data);

        //forbinder hentet data til events state
        setEvents(data);
    };
    const [get_events, setGet_events] = useState(true);

    const [events, setEvents] = useState([]);
    useEffect(() => {

        if (get_events === true) {
            event_response();
            setGet_events(false);
        }

    }, []);




    return (

        <>
        {/*map metode til at gå gennem hvert eventitem og returnere tekstinhold til komponentet, som bliver vist i popup'en når man klikker på en marker*/}
            {/*events på grund af setEvents holder al data fra events endpointet med events.map rammes hvert element af arrayet/*}
    //dette array er så den modatgede data som består af et event json objekt, som indeholder alle data for hvert event, som er registreret i supabase databasen*/}
            {/*dermed går vi her gennem hvert event objekt */}

    {events.map((eventitem) => {
                console.log("dette er eventitem:", eventitem);

            return (


            <div className="event-preview-con" key={eventitem.id || eventitem.Event_name}>

                <div className="event-preview-header-element">
                    <h2 id="event-preview-heading">{eventitem.Event_heading}</h2>
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

                        <p id="event-description-heading">Event beskrivelse</p>
                    </div>


                    <div className="event-description-info-row">
                        <p id="event-description-text">{eventitem.Event_description}</p>

                    
                    </div>


                    <div className="event-preview-btn-row">

                        <div className="event-preview-btn">
                            <p>Deltag</p>
                        </div>

                        <div className="event-preview-btn">
                            <p>Inviter til event</p>
                        </div>
                    </div>


                </div>

            </div>



                );
             })}

        </>
    );
}