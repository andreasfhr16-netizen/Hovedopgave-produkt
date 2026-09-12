"use client";
import Image from "next/image";
import "../stylesheets/user-profile.css"
import BrugerNavbar from "../components/user-profile-navbar.jsx"
import PEpreview from "../components/profile-event-preview.jsx";
import { useState } from "react"
import { useEffect } from "react";
import Link from "next/link";


export default function Home() {

  type User = {
    mail: string;
    username: string;
    password: string;
    id: string;
  } | null;

  const [user, setUser] = useState<User>(null);

  const [vispanel, setVisPanel] = useState(false);

  const [newpassword, setNewpassword] = useState("")
  const [newusername, setNewusername] = useState("")
  const [newmail, setNewmail] = useState("")
  const [editpassword, setEditpassword] = useState(false)
  const [editusername, setEditusername] = useState(false)
  const [editmail, setEditmail] = useState(false)




  const handleUpdateUsername = async () => {
    const response5 = await fetch("/api/update_username/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        newusername: newusername,
        user_id: user?.id,

      }),
    });

    const updatedusername = await response5.json()
    console.log(updatedusername)
    alert("Dit brugernavn er nu opdateret")
    window.location.reload();


  }


  const handleUpdatePassword = async () => {
    const response6 = await fetch("/api/update_password/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        newpassword: newpassword,
        user_id: user?.id,

      }),
    });

    const updatedpassword = await response6.json()
    console.log(updatedpassword)
    alert("Dit password er nu opdateret")
    window.location.reload();

  }

  const handleUpdateMail = async () => {
    const response7 = await fetch("/api/update_mail/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        newmail: newmail,
        user_id: user?.id,

      }),
    });

    const updatedmail = await response7.json()
    console.log(updatedmail)
    alert("Din bruger-mail er nu opdateret")
    window.location.reload();

  }


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
            <button  onClick={() => setVisPanel(!vispanel)}><p id="sidepanel-heading">Sidepanel↓</p></button>
            {/*når venstre side er "true" fx vispanel så frmvises penallet (vispanel sættes til true med state og knappe tryk) */}
            {vispanel && (

              <div className="page-side-content">
                <div className="page-side-content-item">
                  <Link href="/social-view-page">
                                  Venner
                                </Link>
                </div>

                <div className="page-side-content-item">
                  <p>Grupper</p>
                </div>

                <div className="page-side-content-item">
                  <Link href="/find-near-events">
                                  Find events nær dig
                                </Link>
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
                        {(!editusername &&
                          <input id="username-input" className="user-settings-input" value={user?.username} disabled></input>
                        )}

                        {(editusername &&
                          <input id="username-input" className="user-settings-input" onChange={(e) => { setNewusername(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' && handleUpdateUsername()}></input>
                        )}

                        <div className="user-settings-input-edit-text">
                          <h1 onClick={(e) => { setEditusername(!editusername) }}>Rediger</h1>
                        </div>

                      </div>



                    </div>

                    <div className="user-settings-input-item-con">

                      <div className="user-settings-input-item">
                        <div className="user-settings-input-heading">
                          <h1>Kodeord</h1>
                        </div>
                        {(!editpassword &&
                          <input className="user-settings-input" value={user?.password} disabled ></input>

                        )}

                        {(editpassword &&
                          <input className="user-settings-input" onChange={(e) => { setNewpassword(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' && handleUpdatePassword()} ></input>

                        )}

                        <div className="user-settings-input-edit-text">
                          <h1 onClick={(e) => { setEditpassword(!editpassword) }}>Rediger</h1>
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

                        {(editmail &&
                          <input className="user-settings-input" onChange={(e) => { setNewmail(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' && handleUpdateMail()} ></input>


                        )}

                        {(!editmail &&
                          <input className="user-settings-input" value={user?.mail} disabled></input>


                        )}

                        <div className="user-settings-input-edit-text">
                          <h1 onClick={(e) => { setEditmail(!editmail) }}>Rediger</h1>
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