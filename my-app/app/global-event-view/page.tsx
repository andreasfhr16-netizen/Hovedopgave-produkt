import Navbar from "../components/navbar";
import Epreview from "../components/event-preview";
import "../stylesheets/global-event-page.css";


export default function Home() {
  return (
    <div className="global-event-page">

      <Navbar />

      <main className="find-event-con">

        <div className="find-event-field">

          <input className="find-event-search-input" placeholder="Søg efter gruppe"></input>

          <div className="find-event-search-input-btn-row">

            <div className="find-event-search-input-btn">
              <p id="find-event-search-input-btn-text">Event tags</p>
            </div>

            <div className="find-event-search-input-btn">
              <p id="find-event-search-input-btn-text">Filtersøgning</p>
            </div>

          </div>
        </div>

        <div className="find-event-content">
          <div className="find-event-heading-row">
            <h1>Nye events</h1>

          </div>
          <div className="event-component-con">

            <Epreview />

           

          </div>

          <div className="find-event-heading-row">
            <h1>Events for dine interesser</h1>

          </div>
          <div className="event-component-con">

            <Epreview />

            
            
          </div>



        </div>


      </main>
      <div className="find-event-footer">

      </div>

    </div>
  );
}