"use client";
import Image from "next/image";
import "../stylesheets/user-profile.css"
import BrugerNavbar from "../components/user-profile-navbar.jsx"
import PEpreview from "../components/profile-event-preview.jsx";
import { useState } from "react"
import { useEffect } from "react";


export default function Home() {

  type User = {
    mail: string;
    username: string;
    password: string;
  } | null;

  const [user, setUser] = useState<User>(null);

  const [vispanel, setVisPanel] = useState(false);




  const Get_user = async () => {



    const response2 = await fetch("/api/who_logged_in/")
    const user = await response2.json()
    console.log("USER:", user);
    setUser(user);

  }

  useEffect(() => {

    Get_user();
  }, []);




  return (
    <div className="user-profile-page">
      <main>
        <BrugerNavbar />
        <div className="user-profile-page-con">
          <div className="page-side-content-con">
            <button onClick={() => setVisPanel(!vispanel)}>Vis/skjul</button>
            {/*når venstre side er "true" fx vispanel så frmvises penallet (vispanel sættes til true med state og knappe tryk) */}
            {vispanel && (

              <div className="page-side-content">
                <div className="page-side-content-item">
                  <p>Venner</p>
                </div>

                <div className="page-side-content-item">
                  <p>Grupper</p>
                </div>

                <div className="page-side-content-item">
                  <p>Events nær dig</p>
                </div>

                <div className="page-side-content-item">
                  <p>Event oversigt </p>
                </div>

                <div className="page-side-content-item">
                  <p>Find venner </p>
                </div>

              </div>

            )
            }


          </div>

          <div className="page-main-content-con">

            <div className="user-settings-section-con"></div>

            <div className="user-settings-section">

              <div className="user-settings-top-section-con">


                <div className="user-settings-section-heading">

                  <h1 id="user-settings-heading">Velkommen, {user?.username}</h1>

                </div>

                <div className="user-settings-top-section-first-settings-row">

                  <div className="user-settings-top-section-name-con">

                    <div className="user-settings-name-item"></div>

                    <div className="user-settings-name-btn">
                      <h1>Rediger profilbillede</h1>

                    </div>


                  </div>

                  <div className="user-settings-top-section-phone-number-con">

                    <div className="user-settings-phone-item">

                      <div className="user-settings-phone-item-number">
                        <h1>Tlf: +45 98 85 53 12</h1>
                      </div>

                      <div className="user-settings-phone-item-edit">
                        <p>Rediger</p>
                      </div>

                    </div>



                  </div>

                </div>

                <div className="user-settings-section-invis-divider"></div>

                <div className="user-settings-input-section-con">

                  <div className="user-settings-input-con">

                    <div className="user-settings-input-item-con">


                      <div className="user-settings-input-item">
                        <div className="user-settings-input-heading">
                          <h1>Brugernavn</h1>
                        </div>

                        <input className="user-settings-input" value={user?.username} readOnly></input>

                        <div className="user-settings-input-edit-text">
                          <h1>Rediger</h1>
                        </div>

                      </div>



                    </div>

                    <div className="user-settings-input-item-con">

                      <div className="user-settings-input-item">
                        <div className="user-settings-input-heading">
                          <h1>Kodeord</h1>
                        </div>

                        <input className="user-settings-input" value={user?.password} readOnly></input>

                        <div className="user-settings-input-edit-text">
                          <h1>Rediger</h1>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="user-settings-input-con">

                    <div className="user-settings-input-item-con">

                      <div className="user-settings-input-item">
                        <div className="user-settings-input-heading">
                          <h1>Mail</h1>
                        </div>

                        <input className="user-settings-input" value={user?.mail} readOnly></input>

                        <div className="user-settings-input-edit-text">
                          <h1>Rediger</h1>
                        </div>

                      </div>


                    </div>

                    <div className="user-settings-input-item-con">

                      <div className="user-settings-input-item">
                        <div className="user-settings-input-heading">
                          <h1>Tidszone</h1>
                        </div>

                        <input className="user-settings-input" ></input>

                        <div className="user-settings-input-edit-text">
                          <h1>Rediger</h1>
                        </div>

                      </div>

                    </div>

                  </div>



                </div>

              </div>


              <div className="user-settings-section-invis-divider"></div>

              <div className="user-setting-section-divider"></div>


            </div>

            <div className="user-profile-interests-section-con">
              <div className="user-profile-interests-section-heading-row">
                <h1>Interesser</h1>
              </div>
              <div className="user-profile-interests-section-btn-con">

                <div className="user-profile-interests-section-btn">

                  <h1>Tilføj +</h1>
                </div>



              </div>

              <div className="user-profile-interests-created-con">


                <div className="user-profile-interests-created-row">


                </div>


                <div className="user-profile-interests-created-row">


                </div>


              </div>

            </div>

            <div className="user-settings-section-invis-divider"></div>

            <div className="user-profile-social-calendar-section">

              <div className="user-profile-social-calendar-section-heading">
                <h1>Kalender</h1>
                <div className="user-profile-social-calendar-section-subheading">
                  <h1>Næste uge</h1>
                </div>

              </div>
              <div className="user-profile-social-calendar-section-component-con">

                <PEpreview />

                <PEpreview />

                <PEpreview />

              </div>

            </div>



          </div>


        </div>

        <div className="footer-section"></div>
      </main>
    </div>
  );
}