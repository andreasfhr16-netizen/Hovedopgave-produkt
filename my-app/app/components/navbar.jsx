import "../stylesheet.css";
export default function Navbar({}) {
  return (
   <div className={"navbar-con"}>

<div className={"home-btn"}>
<a>Hjem</a>
</div>

<div className={"navbar-item"}>

<div className={"navbar-btn"}>
<a>Log ind</a>
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