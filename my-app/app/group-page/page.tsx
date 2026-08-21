
import "../stylesheets/group-page.css";
import Gstatistics from "../components/group-statistics";
import Navbar from "../components/navbar";



export default function Home() {
  return (
    <div className="group-overview-page">

      <Navbar />

      <main>

        <div className="group-page-con">

          <div className="group-intro-stats-row-con">

            <div className="group-statistics-profile-box-con">
              <div className="group-statistics-profile-header">
                <p>Dansesalen langhøj 50+</p>
              </div>

            </div>

            <div className="group-statistics-component-con">

              <Gstatistics />
            </div>


          </div>

          <div className="group-btns-row">

            <div className="group-btns-row-item"><p>Gruppemeddelelser</p></div>

            <div className="group-btns-row-item"><p>Diskussioner</p></div>

            <div className="group-btns-row-item"><p>Kommende events</p></div>

            <div className="group-btns-row-item"><p>Medlemsliste</p></div>

            <div className="group-btns-row-item"><p>Kommentarer</p></div>

            <div className="group-btns-row-item"><p>Mediebibliotek</p></div>


          </div>

          <div className="group-intro-section">

            <div className="group-intro-heading"><p>Gruppe beskrivelse</p></div>

            <div className="group-intro-text">

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>

            <div className="group-intro-heading"><p>Tags</p></div>


            <div className="group-intro-tag-con">

              <div className="group-intro-tag"><p>Dans</p></div>

              <div className="group-intro-tag"><p>Musik</p></div>

              <div className="group-intro-tag"><p>50+</p></div>

            </div>

          </div>


        </div>





      </main>
    </div>
  );
}