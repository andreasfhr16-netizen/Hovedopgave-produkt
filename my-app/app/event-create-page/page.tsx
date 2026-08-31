"use client"
import "../stylesheets/event-create.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'



const Eventmap = dynamic(() => import('../components/leaflet-map'), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();

  const Event_create = async () => {
    const response = await fetch("/api/create_event/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        Event_heading: eventheading,
        Event_description: eventdescription,
        Event_location: eventlocation?.name,
        Event_start_date: selectedstartdate,
        Event_end_date: selectedenddate,
        Event_timezone: selectedtimezone,
        Event_attend_price: eventgebyrer,
        Event_participants: selectedparticipants
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Fejl ved oprettelse:", data.error);
      return;
    }

    console.log("Event oprettet :):", data);
    router.push("/frontpage");
  };


  type EventLocation = {
    lat: number;
    lng: number;
    name: string;
  };

  const [eventlocation, setEventlocation] = useState<EventLocation | null>(null);

  const [eventheading, setEventheading] = useState("")
  const [eventdescription, setEventdescription] = useState("")
  const [eventgebyrer, setEventgebyrer] = useState("")



  console.log(eventheading)
  console.log(eventdescription)

  const [showtimezones, setShowtimezones] = useState(false)
  const [selectedtimezone, setSelectedtimezone] = useState("")

  const [showparticipants, setShowparticipants] = useState(false)
  const [selectedparticipants, setSelectedparticipants] = useState("")

  const [selectedenddate, setSelectedenddate] = useState<string | null>(null);
  console.log(selectedenddate)

  const [selectedstartdate, setSelectedstartdate] = useState<string | null>(null);
  console.log(selectedstartdate)



  return (
    <div className="event-create-page">
      <Navbar />

      <main className="event-create-container">



        <div className="event-create-content">


          <div className="event-create-content-row">
            <h1 id="event-create-heading">Opret event</h1>


            <h2 id="event-create-subheading">Event overskrift</h2>
            <input className="event-create-small-input" placeholder="Event overskrift" onChange={(e) => (setEventheading(e.target.value))}></input>

            <h2 id="event-create-subheading">Event beskrivelse</h2>
            <textarea className="event-create-textarea-input" placeholder="Event beskrivelse" onChange={(e) => (setEventdescription(e.target.value))}></textarea>

            <h2 id="event-create-subheading">Event lokation</h2>
            <input className="event-create-small-input" placeholder={eventlocation ? eventlocation.name : "Vælg en lokation på kortet"}></input>

            <div className="event-create-map-con">

              <Eventmap onLocationSelect={setEventlocation} />

            </div>

          </div>


          <div className="event-create-content-row">

            <h2 id="event-create-subheading">Event dato</h2>
            <div className="event-create-dato-con">

              <DateTimePicker
                valueFormat="DD MMM YYYY hh:mm A"
                label="Start dato"
                placeholder="Start"
                classNames={{ input: 'event-create-dato-input' }}
                value={selectedstartdate}
                onChange={setSelectedstartdate}
              />

              <DateTimePicker
                valueFormat="DD MMM YYYY hh:mm A"
                label="Slut dato"
                placeholder="Slut"
                classNames={{ input: 'event-create-dato-input' }}
                value={selectedenddate}
                onChange={setSelectedenddate}
              />

            </div>

            <h2 id="event-create-subheading">Event tidszone</h2>
            <input id="pick-event-timezone-input" className="event-create-small-input" placeholder={selectedtimezone} onClick={() => setShowtimezones(!showtimezones)}></input>

            {showtimezones && (
              <div className="input-list-con">
                <div className="input-list-item" onClick={() => setSelectedtimezone("Western European Time (WET):")}><p>Western European Time (WET):</p></div>
                <div className="input-list-item" onClick={() => setSelectedtimezone("Central European Time (CET):")}><p>Central European Time (CET): </p></div>
                <div className="input-list-item" onClick={() => setSelectedtimezone("Eastern European Time (EET):")}><p>Eastern European Time (EET):</p></div>


              </div>
            )}

            <h2 id="event-create-subheading">Event gebyrer</h2>
            <textarea className="event-create-textarea-input" placeholder="Ingen gebyrer" onChange={(e) => (setEventgebyrer(e.target.value))}></textarea>

            <h2 id="event-create-subheading">Event tags</h2>
            <div className="event-create-tag-btn"><p>Vælg event kategori</p></div>

            <h2 id="event-create-subheading">Hvem må deltage i eventet</h2>
            <input id="event-participant-input" className="event-create-small-input" placeholder={selectedparticipants} onClick={() => (setShowparticipants(!showparticipants))}></input>

            {showparticipants && (
              <div className="input-list-con">
                <div className="input-list-item" onClick={() => setSelectedparticipants("Alle")}><p>Alle</p></div>
                <div className="input-list-item" onClick={() => setSelectedparticipants("Kun venner")}><p>Kun venner </p></div>
                <div className="input-list-item" onClick={() => setSelectedparticipants("Specifik gruppe")}><p>Specifik gruppe</p></div>
                <div className="input-list-item" onClick={() => setSelectedparticipants("Specifik bruger")}><p>Specifik bruger</p></div>

              </div>
            )}

            <div className="event-create-event-btn" onClick={Event_create}><p>opret event</p></div>

          </div>





        </div>
      </main>
    </div>
  );
}