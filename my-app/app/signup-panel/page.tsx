import "../stylesheets/opret-bruger-panel.css";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="opret-bruger-page">
      <Navbar />

      <main className="opret-bruger-site-container">

        <div className="opret-bruger-content">
          <h1 id="opret-bruger-heading">Opret bruger</h1>

          <div className="opret-bruger-field">
            <h2 id="opret-bruger-subheading">Brugernavn</h2>
            <input className="opret-bruger-input" placeholder=""></input>
            <p
            style={{color: "black"}}
            >*Det navn som fremvises på din brugerprofil</p>
          </div>

          <div className="opret-bruger-field">
            <h2 id="opret-bruger-subheading">Mailadresse</h2>
            <input className="opret-bruger-input" placeholder=""></input>
          </div>

          <div className="opret-bruger-field">
            <h2 id="opret-bruger-subheading">Kodeord</h2>
            <input className="opret-bruger-input" type="password" placeholder=""></input>
          </div>



          <div className="opret-bruger-btn-row">
            <div className="opret-bruger-login-btn"><p>Har du allerede en bruger?</p></div>

            <Link href="/signup-panel">
              <div className="opret-bruger-signup-btn"><p>Opret bruger</p></div>
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}