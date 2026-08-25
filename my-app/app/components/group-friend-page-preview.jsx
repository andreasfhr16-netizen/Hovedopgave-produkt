import "../stylesheets/group-showcase.css";
import Link from "next/link";

export default function GroupFriendpreview({ }) {
    return (

        <div className="group-showcase-con">

            <div className="group-showcase-img-box">


            </div>

            <div className="group-showcase-part2-con">

                <div className="group-showcase-textbox">
                    <h2>Dansesalen 50+</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
                </div>

                <div className="group-showcase-member-row">

                    <div className="group-showcase-member-info">
                        <h3>Medlemmer tilmeldt</h3>
                        <h4>566</h4>
                        <hr id="group-showcase-member-line" />
                    </div>

                    <div className="group-showcase-member-info">
                        <h3>Medlemmer online</h3>
                        <h4>16</h4>
                        <hr id="group-showcase-member-line" />
                    </div>

                </div>

                <div className="group-showcase-tag-section">

                    <h3 className="group-showcase-tag-row-heading">Tags</h3>

                    <div className="group-showcase-tag-row">

                        <div className="group-showcase-tag-btn">
                            <p>Dans</p>
                        </div>

                        <div className="group-showcase-tag-btn">
                            <p>50+</p>
                        </div>

                    </div>

                </div>

                <div className="group-showcase-btn-row">
                    
                    <Link href="/gruppe" className="group-showcase-btn2">
                        <p>Gå til gruppe</p>
                    </Link>
                </div>

            </div>

        </div>

    )

}