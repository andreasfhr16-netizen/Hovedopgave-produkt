import "../stylesheets/event-statistics-component.css";
import Link from "next/link";

export default function Estatistics() {
    return (
        <div className="component-con">

            <div className="component-statistics-box">
                <h1>Deltagere:</h1>
                <h2>253</h2>

                <div className="component-statistics-underline"></div>
            </div>


            <div className="component-statistics-box">
                <h1>Ledige pladser:</h1>
                <h2>5</h2>

                <div className="component-statistics-underline">

                </div>
            </div>

            <div className="component-statistics-btn-con">

<div className="component-statistics-btn">
    <p>Deltag i chat</p>
</div>

            </div>

        </div>

    )
}