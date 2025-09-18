import "./Login.css";

// axios
import axios from "axios";
//state
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Users, SetUsers] = useState([]);
  const navigate = useNavigate();

  // code for form submiting
  const handeSubmit = (e) => {
    e.preventDefault();
    const ID = e.target.ID.value;
    const userName = e.target.username.value;

    const user = Users.find(
      (item) => item.id == ID && item.name === userName
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/"); // ✅ redirect
    } else {
      alert("You Must Register First!");
    }

    e.target.reset();
  };

  // calling all Registered users
  useEffect(() => {
    async function RegisteredUsers() {
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(responce.data);
        SetUsers(responce.data);
      } catch (error) {
        console.log(error);
      }
    }

    RegisteredUsers();
  }, []);

  return (
    <>
     <div className="form-container">
       <div className="login-container">
        <form className="login-form" onSubmit={handeSubmit}>
          <h2>🔑 Login</h2>

          <div className="form-group">
            <label>ID</label>
            <input type="number" placeholder="Enter your ID" required id="ID" />
          </div>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter your UserName"
              required
              id="username"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
     </div>
    </>
  );
}
