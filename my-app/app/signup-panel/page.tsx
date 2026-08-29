"use client"
import "../stylesheets/opret-bruger-panel.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
const router = useRouter();



  const Signup = async () => {
    const response = await fetch("/api/signup/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: signupname,
        password: signuppassword,
        mail: signupmail,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Fejl ved oprettelse:", data.error);
      return;
    }
    
    console.log("Bruger oprettet:", data);
    router.push("/login-panel");
  };







  const [signupname, setSignupname] = useState("");
  const [signupmail, setSignupmail] = useState("")
  const [signuppassword, setSignuppassword] = useState("");

  // const signuptest = async () => {
  {
    signupname.length > 1 && (

      console.log("Indtastede brugernavn: ", signupname)


    )
  }

  {
    signupmail.length > 1 && (


      console.log("Indtastede mailadresse: ", signupmail)


    )
  }


  {
    signuppassword.length > 1 && (


      console.log("Indtastede password: ", signuppassword)

    )
  }

  // const SignUpNavn = document.getElementById("opret-bruger-input-navn").value
  // console.log(SignUpNavn)

  //}



  return (


    <div className="opret-bruger-page">
      <Navbar />

      <main className="opret-bruger-site-container">

        <div className="opret-bruger-content">
          <h1 id="opret-bruger-heading">Opret bruger</h1>

          <div className="opret-bruger-field">

            <h2 id="opret-bruger-subheading">Brugernavn</h2>
            <input onChange={(e) => (setSignupname(e.target.value))} className="opret-bruger-input" placeholder=""></input>

            <p
              style={{ color: "black" }}
            >*Det navn som fremvises på din brugerprofil</p>
          </div>

          <div className="opret-bruger-field">
            <h2 id="opret-bruger-subheading">Mailadresse</h2>
            <input className="opret-bruger-input" onChange={(e) => { setSignupmail(e.target.value) }} placeholder=""></input>
          </div>

          <div className="opret-bruger-field">
            <h2 id="opret-bruger-subheading">Kodeord</h2>
            <input className="opret-bruger-input" type="password" onChange={(e) => (setSignuppassword(e.target.value))} placeholder=""></input>
          </div>



          <div className="opret-bruger-btn-row">
            <div className="opret-bruger-login-btn"><p>Har du allerede en bruger?</p></div>

            <Link href="/signup-panel">
              <div className="opret-bruger-signup-btn" onClick={Signup}><p>Opret bruger</p></div>
            </Link>
          </div>

        </div>

      </main>
    </div>


  );
}

