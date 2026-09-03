"use client"
import "../stylesheets/frontpage.css";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { logout } from "../api/delete_cookie/route";



export default function Navbar({ }) {

  const [user, setUser] = useState(null);




  const Get_user = async () => {


//kalder api ruten og henter data om hvem der er logget ind
    const response2 = await fetch("/api/who_logged_in/")
    const user = await response2.json()
    console.log("USER:", user);
    setUser(user);

  }

  useEffect(() => {

    Get_user();
  }, []);


  let userloggedin;
  if (user?.mail) {
    userloggedin = true;
  } else {
    userloggedin = false;
  }

  return (
    <div className={"navbar-con"}>
      {/*Indhold baseret på state fx (hvis state userloggedin = false fremvis normal nav) hvis state userloggedin = true fremvis logged-in nav  */}
      {/*Gem logg ind oplysninger fx hvem er logget ind  */}
      {/*Gem derefter nav tilstand i state*/}
      <div className={"home-btn"}>
        <Link href="/frontpage">
          Hjem
        </Link>
      </div>

      {userloggedin && (
        <>
          <p id="login-heading">Logget ind som: {user?.username}</p>

          <div className={"navbar-item"}>

            <div className={"navbar-btn"}>
              <Link href="/frontpage" onClick={logout}>
                Log ud
              </Link>
            </div>
          </div>
        </>


      )}

      {!userloggedin && (

        <>
          <div className={"navbar-item"}>

            <div className={"navbar-btn"}>
              <Link href="/login-panel">
                Log ind
              </Link>
            </div>
          </div>

          <div className={"navbar-item"}>

            <div className={"navbar-btn"}>
              <Link href="/signup-panel">
                Opret bruger
              </Link>
            </div>
          </div>
        </>

      )}




    </div>
  );
}