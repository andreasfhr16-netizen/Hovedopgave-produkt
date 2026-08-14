import "../stylesheets/event-create.css";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="event-create-page">
      <Navbar />

      <main className="event-create-container">


        <div className="event-create-content">


          <div className="event-create-content-row">
            <h1 id="event-create-heading">Opret event</h1>
          </div>


          <div className="event-create-content-row">
            <a>hej2</a>
          </div>


        </div>
      </main>
    </div>
  );
}