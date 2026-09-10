"use client"
import dynamic from 'next/dynamic';
import Navbar from "../components/navbar";
import "../stylesheets/find-event-nær.css";
import { useState, useEffect } from "react";

type EventItem = {
  id: string;
  Event_lat: number;
  Event_lng: number;
  Event_heading?: string;
  Event_description?: string;
  Event_entry_price?: string;
  [key: string]: any;
};

type EventLocation = {
  lat: number;
  lng: number;
  name: string;
};

type EventMapProps = {
  onLocationSelect: (location: EventLocation | null) => void;
  mode: "view" | "search";
  events: EventItem[];
};

// Typet dynamic import - ingen ref-typer nødvendige mere
const Eventmap = dynamic<EventMapProps>(() => import('../components/leaflet-map'), {
  ssr: false,
});

export default function Home() {
  const [eventlocation, setEventlocation] = useState<EventLocation | null>(null);
  const [budgetinput, setBudgetinput] = useState("");
  const [events, setEvents] = useState<EventItem[]>([]);

  const [showbudgetinput, setShowbudgetinput] = useState(false)

  // Hent alle events ved load

  const event_response = async () => {
    try {
      const response = await fetch("/api/get_events/", {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error("Kunne ikke hente events:", err);
    }
  };



  const send_budget_events = async (budgetinput: string) => {
    //tag string værdi af budgetinput og laver om til float data type
    const budgetinputnr = parseFloat(budgetinput)
    const response = await fetch("/api/get_budget_events/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ Event_entry_price: budgetinputnr }),
    });

    const data = await response.json();

    setEvents(data);


    console.log("du har modtaget alle dine søgede events", data)
  }




  const budget_events_get = async () => {
    try {
      const response = await fetch("/api/get_budget_events/", {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error("Kunne ikke hente budget-events:", err);
    }
  };

  // Almindeligt funktionskald - ingen ref involveret
  const filterSearch = () => {
    send_budget_events(budgetinput);
  };

  return (
    <div className="find-event-nær-page">
      <Navbar />

      <div className="find-event-nær-con">
        <main>
          <div className="nær-event-con">

            <div className="nær-event-søgefelt-con">


              <div className="search-input-con">

                <input className="nær-event-search-input" placeholder="Søg efter event" />

                {(showbudgetinput &&

                  <input className="nær-event-budget-search-input" placeholder="indtast budget" value={budgetinput} onChange={(e) => setBudgetinput(e.target.value)} />

                )}




              </div>


              <div className="nær-event-btn-con">

                <button id="nær-event-search-btn" onClick={event_response}>Søg efter alle events</button>

                {(showbudgetinput &&

                  <button id="nær-event-search-btn" onClick={filterSearch}>søg med filter</button>

                )}


                {(!showbudgetinput &&

                  <button id="nær-event-search-btn" onClick={(e) => { setShowbudgetinput(!showbudgetinput) }}>Anvend budget filter</button>

                )}


              </div>

            </div>





            <Eventmap onLocationSelect={setEventlocation} mode="search" events={events} />
          </div>

          <p>test</p>
        </main>
      </div>
    </div>
  );
}