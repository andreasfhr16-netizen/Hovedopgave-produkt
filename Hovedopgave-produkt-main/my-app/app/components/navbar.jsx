import "../stylesheets/frontpage.css";
import Link from "next/link";
export default function Navbar({}) {
  return (
   <div className={"navbar-con"}>

<div className={"home-btn"}>
<a>Hjem</a>
</div>

<div className={"navbar-item"}>

<div className={"navbar-btn"}>
<Link href="/login-panel">
                  Log ind
                  </Link>
</div>
</div>

<div className={"navbar-item"}>

<div className={"navbar-btn"}>
<a>Opret bruger</a>
</div>
</div>


   </div>
  );
}