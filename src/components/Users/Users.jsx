import "./Users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button/Button";

export default function Users() {
  const [Users, SetUsers] = useState(null);
  const [IsLoading, SetLoading] = useState(true);
  const [IsError, SetError] = useState(false);

  useEffect(() => {
    async function UserData() {
      try {
        const responce = await axios.get("https://jsonplaceholder.typicode.com/users");
        const Data = responce.data;
        SetLoading(false);
        SetError(false);
        SetUsers(Data);
        console.log(Data);
      } catch (error) {
        SetError(true);
        SetLoading(false);
        console.log(error);
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
      <h1 className="page-title">👥 Teachers</h1>
      <div className="card-container">
        {Users.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>
            <p><b>ID:</b> {item.id}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Username:</b> {item.username}</p>
            <p><b>City:</b> {item.address.city}</p>
          </div>
        ))}
      </div>
    </>
  );
}
