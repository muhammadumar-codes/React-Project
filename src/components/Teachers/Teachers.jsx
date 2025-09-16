import "./Teachers.css";

// icons
import { FaChalkboardTeacher } from "react-icons/fa";

// hooks
import { useEffect, useState } from "react";

// Library
import axios from "axios";

// components
import Button from "../Button/Button";

// Link
import { Link } from "react-router-dom";

export default function Teachers() {
  const [Users, SetUsers] = useState(null);
  const [IsLoading, SetLoading] = useState(true);
  const [IsError, SetError] = useState(false);
  const [Card, SetCard] = useState(null);

  useEffect(() => {
    async function UserData() {
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const Data = responce.data;
        SetLoading(false);
        SetError(false);
        SetUsers(Data);
      } catch (error) {
        console.log(error)
        SetError(true);
        SetLoading(false);
      }
    }
    UserData();
  }, []);

  // Error Message
  if (IsError) {
    return (
      <div className="status-message error">
        <h2>⚠️ Oops! Something went wrong</h2>
        <p>Unable to load user data. Please check your internet connection or try again later.</p>
        <Button onClick={() => window.location.reload()} className="reload-btn">
          🔄 Reload
        </Button>
      </div>
    );
  }

  // Loading Message
  if (IsLoading) {
    return (
      <div className="status-message loading">
        <h2>⏳ Loading Users...</h2>
        <p>Fetching data, please wait a moment.</p>
      </div>
    );
  }

  // Data UI
  return (
    <>
      <h1 className="page-title">
        <FaChalkboardTeacher size={40} /> Teachers
      </h1>

      <div className="layout">
        {/* Left Side: Cards */}
        <div className="card-container">
          {Users.map((item) => (
            <Link
              to={`${item.id}`}
              key={item.id}
              className="card"
              onClick={() => SetCard(item)} // ✅ optional: agar right-side pe bhi show karna ho
              >
              <h2>{item.name}</h2>
              <p><b>ID:</b> {item.id}</p>
              <p><b>Email:</b> {item.email}</p>
              <p><b>Username:</b> {item.username}</p>
              <p><b>City:</b> {item.address?.city}</p>
              </Link>
          ))}
        </div>

        {/* Right Side: Selected Card */}
        <div className="selected-card">
          {Card ? (
            <>
              <h2>👨‍🏫 {Card.name}</h2>
              <p><b>Email:</b> {Card.email}</p>
              <p><b>Username:</b> {Card.username}</p>
              <p><b>Phone:</b> {Card.phone}</p>
              <p><b>Website:</b> {Card.website}</p>
              <p><b>City:</b> {Card.address.city}</p>
            </>
          ) : (
            <p className="placeholder">👉 Click on a teacher card to view details</p>
          )}
        </div>
      </div>
    </>
  );
}
