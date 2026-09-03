"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import "../stylesheets/frontpage.css";
import {useEffect} from "react";

export default function Home() {
  const Get_user = async () => {

    const response2 = await fetch("/api/who_logged_in/")
    const user = await response2.json()
    console.log("USER:", user);

  }

  useEffect(() => {
    Get_user();
  }, []);

  return (
    <div className="site-container">
      <main>
        <Navbar />

        <div className="frontpage-content-con">
          <div className="frontpage-content">

            <div className="frontpage-intro-text-con">

              <div id="frontpage-intro-text">

                <h1>Velkommen til Event Planner</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

            </div>

            <div className="frontpage-intro-search-con">

              <div className="frontpage-intro-search-text">

                <div className="frontpage-search-btns-con">

                  <div className="frontpage-search-btns">

                    <a>Event tags</a>

                  </div>

                  <div className="frontpage-search-btns">

                    <a>Filtersøgning</a>

                  </div>

                </div>

              </div>

              <input className="frontpage-search-input" placeholder="Søg efter event"></input>

            </div>

            <div className="frontpage-shortcuts-con">

              <div id="frontpage-shortcut-heading">
                <p>Genveje</p>

              </div>

              <div className="frontpage-shortcuts-btn-con">

                <div className="frontpage-shortcut-btn">
                  <Link href="/find-group">
                    Find gruppe
                  </Link>
                </div>

                <div className="frontpage-shortcut-btn">
                  <Link href="/find-near-events">
                    Find event nær dig
                  </Link>
                </div>

                <div className="frontpage-shortcut-btn">
                  <Link href="/social-view-page">
                    Venneliste
                  </Link>
                </div>

                <div className="frontpage-shortcut-btn">

                  <Link href="/event-create-page">
                    Opret event
                  </Link>
                </div>

              </div>

            </div>

          </div>





        </div>

        <div className="wave-container">
          <Image
            src="/hovedopgave-waves-2.svg"
            alt="wave decoration"
            width={1903}
            height={200}
            className="wave-svg"
          />
        </div>
      </main>
    </div>
  );
}