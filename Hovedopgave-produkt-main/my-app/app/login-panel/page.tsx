import "../stylesheets/login-panel.css";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="login-panel-page">
      <Navbar />

      <main className="login-site-container">

        <div className="login-panel-content">
          <h1 id="login-panel-heading">Log ind</h1>

          <div className="login-panel-field">
            <h2 id="login-panel-subheading">Mailadresse</h2>
            <input className="login-panel-input" placeholder=""></input>
          </div>

          <div className="login-panel-field">
            <h2 id="login-panel-subheading">Kodeord</h2>
            <input className="login-panel-input" type="password" placeholder=""></input>
             <Link href="/forgot-password" className="login-panel-forgot">
            Glemt kodeord?
          </Link>
          </div>

         

          <div className="login-panel-btn-row">
            <Link href="/signup-panel">
              <div className="login-panel-signup-btn"><p>Opret bruger</p></div>
            </Link>
            <div className="login-panel-login-btn"><p>Log ind</p></div>
          </div>

        </div>

      </main>
    </div>
  );
}