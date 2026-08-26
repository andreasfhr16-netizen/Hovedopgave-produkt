import "../stylesheets/frontpage.css";
import Link from "next/link";
export default function BrugerNavbar({}) {
  return (
   <div className={"navbar-con"}>

<div className={"home-btn"}>
<a>Hjem</a>
</div>

<div className={"navbar-item"}>

<div className={"navbar-btn"}>
<Link href="/login-panel">
                  Brugerprofil
                  </Link>
</div>
</div>

   </div>
  );
}