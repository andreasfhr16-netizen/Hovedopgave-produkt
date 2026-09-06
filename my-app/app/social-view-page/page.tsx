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





  const [friendsamount, setFriendsamount] = useState()

  type Friend = {
    id: string;
    username: string;
  };

  const [friends, setFriends] = useState<Friend[]>([]);

  //henter venner fra check_friend ruten baseret på id af loggede ind bruger
  const Get_friends = async (userId: string) => {
    const response = await fetch("/api/check_friends/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    });

    //logger listen af venner efter respons
    const friendlist = await response.json();
    console.log("brugerens liste af venner", friendlist);
    setFriends(friendlist.data)
    setFriendsamount(friendlist.data.length)


  }


  useEffect(() => {

    if (user?.id) {
      Get_friends(user.id);
    }

  }, [user])


  useEffect(() => {

    console.log("mængden af venner", friendsamount)

  }, [friendsamount])



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

              
                {/*betyder det at hver vens navn skrivers i p tag  */}
                {friends.map((friend) => (
                  <div className="friend-icon-wrapper">


                  <Felement key={friend.id} friend={friend} />

                  <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
                </div>

                ))}

                
              



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
             
             {friends.map((friend) => (
                  <div className="friend-icon-wrapper">


                  <Felement key={friend.id} friend={friend} />

                  <div className="friend-icon-row">
                  <div className="friend-icon-btn">
                    <Image src="/star-icon.png" alt="Favorit" width={20} height={20} />
                  </div>
                  <div className="friend-icon-btn">
                    <Image src="/trashcan.png" alt="Slet ven" width={20} height={20} />
                  </div>
                </div>
                </div>

                ))}

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