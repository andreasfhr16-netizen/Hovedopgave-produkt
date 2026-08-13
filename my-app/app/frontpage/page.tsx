import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import "../stylesheet.css";

export default function Home() {
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
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

            </div>

            <div className="frontpage-intro-search-con">

              <div className="frontpage-intro-search-text">

                <div className="frontpage-search-btns-con">

                  <div className="frontpage-search-btns">

                    <a>hej</a>

                  </div>

                  <div className="frontpage-search-btns">

                    <a>hej2</a>

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
                  <p>Find gruppe</p>
                </div>

                <div className="frontpage-shortcut-btn">
                  <p>Find event nær dig</p>
                </div>

                <div className="frontpage-shortcut-btn">
                  <p>Venneliste</p>
                </div>

                <div className="frontpage-shortcut-btn">
                  <p>Opret event</p>
                </div>

              </div>

            </div>

          </div>





        </div>

<Image 
  src="/hovedopgave-waves-2.svg" 
  alt="wave decoration" 
  width={1903} 
  height={200}
  
/>
      </main>
    </div>
  );
}