"use client";

import "../stylesheets/event-preview-component.css";

export default function Epreview({ event }) {
    console.log("Event modtaget i Epreview:", event);

    return (
        <div
            className="event-preview-con"
            key={event.id || event.Event_name}
        >
            <div className="event-preview-header-element">
                <h2 id="event-preview-heading">
                    {event.Event_heading}
                </h2>
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
                    <p id="event-description-heading">
                        Event beskrivelse
                    </p>
                </div>

                <div className="event-description-info-row">
                    <p id="event-description-text">
                        {event.Event_description}
                    </p>
                </div>

                <div className="event-preview-btn-row">
                    <div className="event-preview-btn">
                        <p>Deltag</p>
                    </div>

                    <div className="event-preview-btn">
                        <p>Inviter til event</p>
                    </div>
                </div>
            </div>
        </div>
    );
}