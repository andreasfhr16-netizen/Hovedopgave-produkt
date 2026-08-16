"use client"
import "../stylesheets/event-create.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

export default function Home() {
  return (
    <div className="event-create-page">
      <Navbar />

      <main className="event-create-container">



        <div className="event-create-content">


          <div className="event-create-content-row">
            <h1 id="event-create-heading">Opret event</h1>


            <h2 id="event-create-subheading">Event overskrift</h2>
            <input className="event-create-small-input" placeholder="Event overskrift"></input>

            <h2 id="event-create-subheading">Event beskrivelse</h2>
            <textarea className="event-create-textarea-input" placeholder="Event beskrivelse"></textarea>

            <h2 id="event-create-subheading">Event lokation</h2>
            <input className="event-create-small-input" placeholder="Event lokation"></input>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36041.065439590646!2d12.457654250000001!3d55.626956799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1786722753877!5m2!1sda!2sdk"
              width="600"
              height="400"
              style={{ border: 0, marginLeft: 20, marginTop: 20 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>


          <div className="event-create-content-row">

            <h2 id="event-create-subheading">Event dato</h2>
            <div className="event-create-dato-con">

              <DateTimePicker
                valueFormat="DD MMM YYYY hh:mm A"
                label="Start dato"
                placeholder="Start"
                classNames={{ input: 'event-create-dato-input' }}
              />

              <DateTimePicker
                valueFormat="DD MMM YYYY hh:mm A"
                label="Slut dato"
                placeholder="Slut"
                classNames={{ input: 'event-create-dato-input' }}

              />

            </div>

            <h2 id="event-create-subheading">Event tidszone</h2>
            <input className="event-create-small-input" placeholder="Tidszone"></input>

            <h2 id="event-create-subheading">Event gebyrer</h2>
            <input className="event-create-small-input" placeholder="Ekstra gebyrer"></input>

            <h2 id="event-create-subheading">Event tags</h2>
            <div className="event-create-tag-btn"><p>Vælg event kategori</p></div>

            <h2 id="event-create-subheading">Hvem må deltage i eventet</h2>
            <input className="event-create-small-input" placeholder="Ekstra gebyrer"></input>

            <div className="event-create-event-btn"><p>opret event</p></div>

          </div>





        </div>
      </main>
    </div>
  );
}