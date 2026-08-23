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

              <div className="event-practical-info-con">

                <div className="event-practical-info-heading-row">
                  <h1>Praktisk information</h1>
                </div>

                <div className="event-practical-info-columns-row">

                  <div className="event-practical-info-content-column1">

                    <div className="event-practical-info-calender-heading">
                      <h1>Kalender</h1>
                    </div>

                    <div className="event-practical-info-calender-con">
                      <div className="event-practical-info-calender-item">
                        <p>19 oktober kl 12</p>
                        <p>Hvidovre (GMT+2)</p>
                      </div>
                      <div className="event-practical-info-calender-item">
                        <p>19 oktober kl 12</p>
                        <p>Hvidovre (GMT+2)</p>
                      </div>
                    </div>

                    <div className="event-practical-info-fees-con">
                      <div className="event-practical-info-fees-heading">
                        <h1>Gebyrer</h1>
                      </div>
                      <div className="event-practical-info-fees-text">
                        <p>Øl - 35 kr</p>
                        <p>Dansesko - str 45 - 35 kr</p>
                      </div>
                    </div>

                  </div>

                  <div className="event-practical-info-content-column2">

                    <div className="event-practical-info-location-heading">
                      <h1>Event lokation</h1>
                    </div>

                    <div className="event-practical-info-location-map-con">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36041.065439590646!2d12.457654250000001!3d55.626956799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1787516483944!5m2!1sda!2sdk"
                        style={{ border: 0, width: "100%", height: "100%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>



        </div>




      </main>
    </div>
  );
}