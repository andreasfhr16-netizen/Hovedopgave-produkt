import Navbar from "../components/navbar";
import "../stylesheets/find-group.css";
import Gpreview from "../components/group-preview"

export default function Home() {
  return (
    <div className="find-group-page">

      <Navbar />

      <main className="find-group-con">

        <div className="find-group-field">

          <input className="find-group-search-input" placeholder="Søg efter gruppe"></input>

          <div className="find-group-search-input-btn-row">

            <div className="find-group-search-input-btn">
              <p id="find-group-search-input-btn-text">Gruppe tags</p>
            </div>

            <div className="find-group-search-input-btn">
              <p id="find-group-search-input-btn-text">Filtersøgning</p>
            </div>

          </div>
        </div>

        <div className="find-group-content">
          <div className="find-group-heading-row">
            <h1>Anbefalede grupper</h1>

          </div>
          <div className="group-component-con">

            <Gpreview />

            <Gpreview />
          </div>

          <div className="find-group-heading-row">
            <h1>Dine venner er også medlem af disse grupper</h1>

          </div>
          <div className="group-component-con">

            <Gpreview />

            <Gpreview />

            <Gpreview />
          </div>



        </div>


      </main>
 <div className="find-group-footer">
        
      </div>

    </div>
  );
}