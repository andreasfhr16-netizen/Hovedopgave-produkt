import "../stylesheets/event-preview-component.css";
import Link from "next/link";

export default function PEpreview() {

    return (

        <div className="event-preview-con">

            <div className="event-preview-header-element">
                <h2 id="event-preview-heading">Danse aften</h2>
            </div>

            <div className="event-preview-tag-row-con">

                <div className="tag-row-heading">

                    <h2>Tags</h2>

                </div>

                <div className="event-preview-tag-element-con">


                    <div className="event-preview-tag-element"></div>

                    <div className="event-preview-tag-element"></div>

                    <div className="event-preview-tag-element"></div>

                    <div className="event-preview-tag-element"></div>

                </div>

            </div>

            <div className="event-description-con">

                <div className="event-description-heading-row">

                    <p id="event-description-heading">Event beskrivelse</p>
                </div>


                <div className="event-description-info-row">
                    <p id="event-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea  commodo consequat.</p>

                        <p id="event-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea  commodo consequat.</p>
                </div>


                <div className="event-preview-btn-row">

                    <div className="event-preview-btn">
                        <p>Afmeld deltagelse</p>
                    </div>

                    <div className="event-preview-btn">
                        <p>Inviter til event</p>
                    </div>
                </div>


            </div>

        </div>

    )
}