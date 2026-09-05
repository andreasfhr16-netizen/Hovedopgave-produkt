"use client";
import Image from "next/image";
import "../stylesheets/social-view-page.css";
import Link from "next/link";
import Navbar from "../components/navbar"
import Felement from "../components/friend-element"
import GroupFriendpreview from "../components/group-friend-page-preview";
import { useState, useEffect } from "react";

export default function Home() {

  const [newFriendName, setNewFriendName] = useState("");
  const [favouriteFriends, setFavouriteFriends] = useState([]);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);


  const handleAddFriend = async () => {
    const response = await fetch("/api/add_friend/", {
      method: "POST",
      headers: {


        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user?.id,
        friend_username: newFriendName,
      }),
    });

    const data = await response.json();
    console.log("Tilføj ven:", newFriendName);

    if (!response.ok) {
      console.error("Fejl ved oprettelse:", data.error);
      return;
    }



  };


  type User = {
    mail: string;
    username: string;
    password: string;
    id: string;
  } | null;

  const [user, setUser] = useState<User>(null);


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
    <div className="social-view-page">
      <main>

        <Navbar />

        <div className="social-view-page-con">


          <div className="friend-showcase-section-row">

            <div className="friend-showcase-section-row-heading">
              <h1>Tilføjede venner</h1>

            </div>

            <div className="friend-showcase-section-row-main">

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>



            </div>

            <div className="friend-showcase-section-row-btn-row">

              <div className="friend-showcase-section-row-btn">
                <p onClick={() => setShowAddFriendForm(!showAddFriendForm)}>Tilføj ven</p>

              </div>

              {showAddFriendForm && (


                <input className="add-friend-input" placeholder="Indtast venens brugernavn" onChange={(e) => setNewFriendName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddFriend()} ></input>

              )}

            </div>



          </div>

          <div className="favourite-friend-section-row">

            <div className="favourite-friend-section-row-heading">
              <h1>Favoriserede venner</h1>
            </div>

            <div className="favourite-friend-section-row-main">
              <div className="friend-icon-wrapper">
                <Felement />
                <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
              </div>

            </div>


          </div>

          <div className="group-friend-apart-section-row">

            <div className="group-friend-apart-section-row-heading">
              <h1>Disse grupper er du medlem af</h1>
            </div>


            <div className="group-friend-apart-section-row-component-con">
              <GroupFriendpreview />
              <GroupFriendpreview />
              <GroupFriendpreview />
            </div>

            <div className="group-friend-apart-section-row-btns">

              <div className="group-friend-apart-section-row-btn"><p>Tilføj gruppe</p></div>
              <div className="group-friend-apart-section-row-btn"><p>Opret gruppe</p></div>
              <div className="group-friend-apart-section-row-btn"><p>Find gruppe</p></div>

            </div>

          </div>

          <div className="footer-section"></div>

        </div>


      </main>
    </div>
  );
}