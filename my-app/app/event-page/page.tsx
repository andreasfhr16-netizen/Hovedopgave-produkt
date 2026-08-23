import Image from "next/image";
import "../stylesheets/event-page.css";
import Navbar from "../components/navbar"
import Estatistics from "../components/event-statistics"
import Felement from "../components/friend-element"

export default function Home() {
  return (
    <div className="event-page">

      <Navbar />

      <main>
        <div className="event-page-con">
          <div className="event-page-statistics-con">


            <div className="event-created-by-con">

              <div className="event-created-by-header">
                <h1>Oprettet af </h1>
              </div>

              <div className="event-created-by-block">


                <div className="event-created-by-heading-row">
                  <h1 id="event-group-heading">Dansesalen 50+</h1>
                </div>

                <div className="event-member-row">
                  <div className="event-group-member-item">
                    <h2>Medlemmer</h2>
                    <h3>566</h3>
                    <div className="event-group-member-item-underline"></div>
                  </div>

                  <div className="event-group-member-item">
                    <h2>Medlemmer online</h2>
                    <h3>6</h3>
                    <div className="event-group-member-item-underline"></div>
                  </div>


                </div>
                <div className="event-group-created-by-row-divider">

                </div>

                <div className="event-group-creater-row">
                  <div className="event-creator-header">
                    <h1>Ejet af</h1>
                  </div>

                  <div className="event-creator-item">

                  </div>

                </div>

                <div className="event-group-created-by-row-divider">

                </div>
                <div className="event-created-by-group-btn-row">

                  <div className="event-created-by-group-btn">
                    <a>Besøg gruppe</a>
                  </div>

                </div>

              </div>

            </div>

            <Estatistics />
            <div className="event-statistics-tags-con">

              <div className="event-statistics-tags-header">
                <h1>Tags</h1>
              </div>

              <div className="event-statistics-tag-content">

                <div className="event-statistics-tag-content-row">

                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>

                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>

                </div>

                <div className="event-statistics-tag-content-row">

                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>

                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>
                  <div className="event-statistics-tag-item"></div>


                </div>

              </div>

            </div>

          </div>

          <div className="event-content-con2">

            <div className="event-main-content-con">

              <div className="event-description-heading">

                <h1 id="event-page-description-heading">Event beskrivelse</h1>

              </div>

              <div className="event-description-text-con">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <br></br>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="event-description-heading">

                <h1 id="event-page-description-heading">Disse venner deltager også i eventen</h1>

              </div>

              <div className="event-friend-component-con">

                <Felement />
                <Felement />
                <Felement />


              </div>

            </div>

            <div className="event-side-content-con">



            </div>

          </div>



        </div>




      </main>
    </div>
  );
}