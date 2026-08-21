import Link from "next/link";
import "../stylesheets/group-statistics-component.css"

export default function Gstatistics() {
    return (

        <div className="component-con">

            <div className="statistics-component-content">

                <div className="statistics-component-item">

                    <div className="statistics-component-item-header">
                        <h2>Medlemmer</h2>
                    </div>

                    <div className="statistics-component-item-info">
                        <h2>567</h2>
                    </div>




                </div>

                <div className="statistics-component-item-divider"></div>

                <div className="statistics-component-item">

                    <div className="statistics-component-item-header">
                        <h2>Medlemmer online</h2>
                    </div>

                    <div className="statistics-component-item-info">
                        <h2>67</h2>
                    </div>




                </div>

                <div className="statistics-component-item-divider"></div>

                <div className="statistics-component-item">

                    <div className="statistics-component-item-header">
                        <h2>Venner i gruppen</h2>
                    </div>

                    <div className="statistics-component-item-info">
                        <h2>7</h2>
                    </div>




                </div>

                <div className="statistics-component-item-divider"></div>

            </div>
        </div>



    )
}