"use client"
import "../stylesheets/event-create.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'



export default function Home() {
  const router = useRouter();

  const Group_create = async () => {
    const response = await fetch("/api/create_group/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        Group_name: groupname,
        Group_description: groupdescription,
        Group_participants: selectedparticipants,
        Group_owner: user?.id
        
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Fejl ved oprettelse:", data.error);
      return;
    }

    console.log("Gruppe oprettet :):", data);
    alert("gruppe er nu oprettet")
    router.push("/frontpage");
  };





  const [groupname, setGroupname] = useState("")
  const [groupdescription, setGroupdescription] = useState("")

  const [showparticipants, setShowparticipants] = useState(false)
  const [selectedparticipants, setSelectedparticipants] = useState("")
  

  type User = {
    mail: string;
    username: string;
    password: string;
    id: string;
  } | null;

  const [user, setUser] = useState<User>(null);

  const Get_user = async () => {



    const response2 = await fetch("/api/who_logged_in/")
    const user = await response2.json()
    console.log("USER:", user);
    setUser(user);

  }

  useEffect(() => {

    Get_user();
  }, []);



  return (
    <div className="event-create-page">
      <Navbar />

      <main className="event-create-container">



        <div className="event-create-content">


          <div className="event-create-content-row">
            <h1 id="event-create-heading">Opret Gruppe</h1>


            <h2 id="event-create-subheading">Gruppe overskrift</h2>
            <input className="event-create-small-input" placeholder="Gruppe overskrift" onChange={(e) => (setGroupname(e.target.value))}></input>

            <h2 id="event-create-subheading">Gruppe beskrivelse</h2>
            <textarea className="event-create-textarea-input" placeholder="Gruppe beskrivelse" onChange={(e) => (setGroupdescription(e.target.value))}></textarea>

          
          <h2 id="event-create-subheading">Hvem må deltage i gruppen</h2>
            <input id="event-participant-input" className="event-create-small-input" placeholder={selectedparticipants} onClick={() => (setShowparticipants(!showparticipants))}></input>

            {showparticipants && (
              <div className="input-list-con">
                <div className="input-list-item" onClick={() => setSelectedparticipants("Alle")}><p>Alle</p></div>
                <div className="input-list-item" onClick={() => setSelectedparticipants("Kun venner")}><p>Kun venner </p></div>
                <div className="input-list-item" onClick={() => setSelectedparticipants("Specifik bruger")}><p>Specifik bruger</p></div>

              </div>
            )}

            <div className="event-create-event-btn" onClick={Group_create}><p>Opret gruppe</p></div>

          </div>


        </div>
      </main>
    </div>
  );
}