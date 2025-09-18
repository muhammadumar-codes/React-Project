import {Outlet,Navigate} from 'react-router-dom'
export default function PrivatesRoutes() {

    const  user=localStorage.getItem("currentUser");
    return user ?<Outlet/>:<Navigate to="/login"/>

}
