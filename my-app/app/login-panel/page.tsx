"use client"
import "../stylesheets/login-panel.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();

 
  const [loginmail, setLoginmail] = useState("")
  const [loginpassword, setLoginpassword] = useState("");

  const Login = async () => {
    const response = await fetch("/api/login/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        password: loginpassword,
        mail: loginmail,
      }),
    });
    //med await venter den på en respons fra api og hvis denne response er ok fortsætter den uden om if-statement
    const data = await response.json();

    if (!response.ok) {
      console.error("Fejl ved oprettelse:", data.error);
      return;
    }

    const response2 = await fetch("/api/who_logged_in/")
    const user = await response2.json()
    console.log("USER:", user);
    router.push("/frontpage");


  };



  return (
    <div className="login-panel-page">
      <Navbar />

      <main className="login-site-container">

        <div className="login-panel-content">
          <h1 id="login-panel-heading">Log ind</h1>

          <div className="login-panel-field">
            <h2 id="login-panel-subheading">Mailadresse</h2>
            <input className="login-panel-input" placeholder="" onChange={(e) => (setLoginmail(e.target.value))}></input>
          </div>

          <div className="login-panel-field">
            <h2 id="login-panel-subheading">Kodeord</h2>
            <input className="login-panel-input" type="password" placeholder="" onChange={(e) => (setLoginpassword(e.target.value))}></input>
            <Link href="/forgot-password" className="login-panel-forgot">
              Glemt kodeord?
            </Link>
          </div>



          <div className="login-panel-btn-row">
            <Link href="/signup-panel">
              <div className="login-panel-signup-btn"><p>Opret bruger</p></div>
            </Link>
            <div className="login-panel-login-btn" onClick={Login}><p>Log ind</p></div>
          </div>

        </div>

      </main>
    </div>
  );
}