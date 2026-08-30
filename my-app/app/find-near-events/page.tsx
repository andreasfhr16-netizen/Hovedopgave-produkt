"use client"
import dynamic from 'next/dynamic';
import Navbar from "../components/navbar";
import "../stylesheets/find-event-nær.css";
import { useState, useEffect } from "react";

// Leaflet kræver 'window', som ikke findes på serveren.
// ssr: false sikrer at komponenten kun renderes i browseren, aldrig server-side.

const Eventmap = dynamic(() => import('../components/leaflet-map'), {
  ssr: false,
});



export default function Home() {

  const [eventlocation, setEventlocation] = useState(null);

  return (
    <div className="find-event-nær-page">
      <Navbar />

      
        
      

      <div className="find-event-nær-con">
        <main>
          
          <div className="nær-event-con">
<input className="nær-event-search-input" placeholder="Søg efter event"></input>

            <Eventmap onLocationSelect={setEventlocation}/>
          </div>

          <p>test</p>
        </main>
      </div>
    </div>
  );
}