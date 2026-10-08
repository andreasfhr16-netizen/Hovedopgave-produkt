"use client";
import Navbar from "../components/navbar";
import "../stylesheets/find-group.css";
import Gpreview from "../components/group-preview"
import { useState, useEffect } from "react";

type GroupItem = {
  Group_id: string;
  Group_name: string;
  Group_description: string;
  Group_participants: string[];
  Group_owner: string;
};

export default function Home() {



  const [groups, setGroups] = useState<GroupItem[]>([]);

  const group_response = async () => {
    try {
      const response = await fetch("/api/get_groups/", {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      setGroups(data);
      console.log("Grupper hentet:", data);
    } catch (err) {
      console.error("Kunne ikke hente grupper:", err);
    }
    
   
  };


  

  useEffect(() => {
    setTimeout(() => {
      group_response();
    }, 1000);
  }, []);


  return (
    <div className="find-group-page">

      <Navbar />

      <main className="find-group-con">

        <div className="find-group-field">

          <input className="find-group-search-input" placeholder="Søg efter gruppe"></input>

          <div className="find-group-search-input-btn-row">

            <div className="find-group-search-input-btn">
              <p id="find-group-search-input-btn-text">Gruppe tags</p>
            </div>

            <div className="find-group-search-input-btn">
              <p id="find-group-search-input-btn-text">Filtersøgning</p>
            </div>

          </div>
        </div>

        <div className="find-group-content">
          <div className="find-group-heading-row">
            <h1>Anbefalede grupper</h1>

          </div>
          <div className="group-component-con">
{/*groupitem er navn på prop og groups er arrayet af grupper */}
            <Gpreview groupitem={groups.slice(0, 2)} />

          </div>

          <div className="find-group-heading-row">
            <h1>Dine venner er også medlem af disse grupper</h1>

          </div>
          <div className="group-component-con">

            <Gpreview groupitem={groups.slice(0, 2)} />

          </div>



        </div>


      </main>
      <div className="find-group-footer">

      </div>

    </div>
  );
}