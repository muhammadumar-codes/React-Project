import "./NotFound.css";

// Navigation
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleNaviage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="nav-con">
        <h1 className="not-found">404 - Page Not Found 🚫</h1>
        <p>
          Sorry, the page you are looking for doesn’t exist or may have been
          moved.
        </p>

        <button onClick={handleNaviage} className="back-home-btn">
          Go Home
        </button>
      </div>
    </>
  );
}
