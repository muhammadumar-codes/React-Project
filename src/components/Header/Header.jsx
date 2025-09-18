import "./header.css";
// Button components 

import Button from "../Button/Button"

import { NavLink ,useNavigate } from "react-router-dom";


export default function Header() {

const navigate=useNavigate();

const user=JSON.parse(localStorage.getItem("currentUser"))


// Funtion to logout the Currrent user
const  handleLogout=()=>{
  localStorage.removeItem("currentUser")
  navigate("/login")


}


  return (
    <>
      <header className="header">
        <div className="logo-link-container">
          <div className="logo">{user.name}</div>
          <nav className="nav-links">
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/About"}><li>About</li></NavLink>
            <NavLink to={"/Contact"}><li>Contact</li></NavLink>
            <NavLink to={"/Teachers"}><li>Teachers</li></NavLink>
          </nav>
        </div>

        <div className="search-box-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <Button className="button-logout" onClick={handleLogout} >Log Out</Button>
          </div>
        </div>
      </header>
    </>
  );
}
