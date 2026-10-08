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
  const [events, setEvents] = useState<EventItem[]>([]);

  // Værdier fra de forskellige filter-inputs
  const [budgetinput, setBudgetinput] = useState("");
  const [groupinput, setGroupinput] = useState("");
  const [interestinput, setInterestinput] = useState("");
  const [distanceinput, setDistanceinput] = useState("");

  
  const [showfilterbox, setShowfilterbox] = useState(false)

 
  const [showbudgetinput, setShowbudgetinput] = useState(false)
  const [showgroupinput, setShowgroupinput] = useState(false)
  const [showinterestinput, setShowinterestinput] = useState(false)
  const [showdistanceinput, setShowdistanceinput] = useState(false)

  

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

                {showbudgetinput && (
                  <div className="nær-event-budget-input-wrapper">
                    <input className="nær-event-budget-search-input" placeholder="indtast budget" value={budgetinput} onChange={(e) => setBudgetinput(e.target.value)} />
                    {budgetinput && <span className="nær-event-budget-currency">kr</span>}
                  </div>
                )}

                {showgroupinput && (
                  <div className="nær-event-budget-input-wrapper">
                    <input className="nær-event-budget-search-input" placeholder="gruppestørrelse" value={groupinput} onChange={(e) => setGroupinput(e.target.value)} />
                    {groupinput && <span className="nær-event-budget-currency">pers.</span>}
                  </div>
                )}

                {showinterestinput && (
                  <div className="nær-event-budget-input-wrapper">
                    <input className="nær-event-budget-search-input" placeholder="indtast interesse" value={interestinput} onChange={(e) => setInterestinput(e.target.value)} />
                  </div>
                )}

                {showdistanceinput && (
                  <div className="nær-event-budget-input-wrapper">
                    <input className="nær-event-budget-search-input" placeholder="indtast afstand" value={distanceinput} onChange={(e) => setDistanceinput(e.target.value)} />
                    {distanceinput && <span className="nær-event-budget-currency">km</span>}
                  </div>
                )}




              </div>


              <div className="nær-event-btn-con">

                <button id="nær-event-search-btn" onClick={event_response}>Søg efter alle events</button>

                {(showbudgetinput &&

                  <button id="nær-event-search-btn" onClick={filterSearch}>søg med filter</button>


                )}


              </div>


              {/* Filtre-knap + boks der åbner under den */}
              <div className="nær-event-filtre-con">

                <button
                  id="nær-event-filter-popup-btn"
                  className={showfilterbox ? "filter-valg-aktiv" : ""}
                  onClick={() => setShowfilterbox(!showfilterbox)}
                >
                  Filtre
                </button>

                {showfilterbox && (
                  <div className="nær-event-filter-valg-con">

                    <button
                      id="nær-event-search-btn"
                      className={showbudgetinput ? "filter-valg-aktiv" : ""}
                      onClick={() => setShowbudgetinput(!showbudgetinput)}
                    >
                      Budget filter
                    </button>

                    <button
                      id="nær-event-search-btn"
                      className={showgroupinput ? "filter-valg-aktiv" : ""}
                      onClick={() => setShowgroupinput(!showgroupinput)}
                    >
                      Gruppestørrelse filter
                    </button>

                    <button
                      id="nær-event-search-btn"
                      className={showinterestinput ? "filter-valg-aktiv" : ""}
                      onClick={() => setShowinterestinput(!showinterestinput)}
                    >
                      Interesser filter
                    </button>

                    <button
                      id="nær-event-search-btn"
                      className={showdistanceinput ? "filter-valg-aktiv" : ""}
                      onClick={() => setShowdistanceinput(!showdistanceinput)}
                    >
                      Afstand filter
                    </button>

                  </div>
                )}

              </div>

            </div>


            <Eventmap onLocationSelect={setEventlocation} mode="search" events={events} />
          </div>

          
        </main>
      </div>
    </div>
  );
}