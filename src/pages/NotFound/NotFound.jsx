import "./NotFound.css"

// Navigation 
import {useNavigate} from  "react-router-dom"


export default function NotFound (){
const navigate=useNavigate();

const handleNaviage=()=>{
    navigate("/")
}





    return (
        <>
     <div className="nav-con">
           <h1 className="not-found">Page Not Found  🚫.</h1>
        <button onClick={handleNaviage} className="back-home-btn">Go Home</button>
        
     </div>
        
        </>
    )

}