

import "./header.css";
import {NavLink} from  "react-router-dom"



export default function Header() {
  return (
    <>
      <header class="header">
        <div class="logo-link-container">
          <div class="logo">MyCollege</div>

         <div>
           <nav class="nav-links">
            <NavLink  to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/About"}><li>About</li></NavLink>
            <NavLink to={"/Contact"}><li>Contact</li></NavLink>

             
            </nav>
         </div>
        </div>

        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </header>
    </>
  );
}
