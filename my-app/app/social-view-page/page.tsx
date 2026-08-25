import Image from "next/image";
import "../stylesheets/social-view-page.css";
import Link from "next/link";
import Navbar from "../components/navbar"
import Felement from "../components/friend-element"
import GroupFriendpreview from "../components/group-friend-page-preview";

export default function Home() {
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
                <p>Tilføj ven</p>
              </div>
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