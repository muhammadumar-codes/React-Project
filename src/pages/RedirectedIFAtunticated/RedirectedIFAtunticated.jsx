
import {Navigate , Outlet} from "react-router-dom"

export default function RedirectIfAuthenticated() {
    
  const user=localStorage.getItem("currentUser")
  return user ? <Navigate to="/"/> : <Outlet/>

}
