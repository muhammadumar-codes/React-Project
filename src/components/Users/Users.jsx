import "./Users.css";

// States 

import { useEffect, useState } from "react";

// Axios
import  axios from "axios";

// components
import Button from "../Button/Button"


export default function Users() {
const [Users,SetUsers]=useState(null)
const [IsLoading,SetLoading]=useState(true)
const [IsError,SetError]=useState(false)


  useEffect(()=>{

    async function UserData () {
      
      try {
        const  responce=await axios.get("https://jsonplaceholder.typicode.com/users")
        const  Data=responce.data
        SetLoading(false)
        SetError(false)
        SetUsers(Data)

        console.log(Data)
      } catch (error) {
        SetError(true)
        SetLoading(false)
        console.log(error)

      }
      
    }

    UserData();
    
  },[])


  // Show Loading And  Error While Fetching the data
 if (IsError) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "red" }}>⚠️ Oops! Something went wrong.</h2>
      <p>Check your internet connection or try again later.</p>

    </div>
  );
}

 if (IsLoading) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "#0073e6" }}>⏳ Please wait...</h2>
      <p>We’re fetching your data. This won’t take long!</p>
      <Button className="button-logout">Reload</Button>
    </div>
  );
}

    
  return <>
  <div className="card-container">
    {
    Users.map(item=>{

      return (
        <>
        <div className="card" key={`ID :${item.id} : Name ${item.name}`}>

        <h1>ID   : {item.id}</h1>
        <h5>Name : {item.name}</h5>
        <p>Email : {item.email}</p>

        </div>
        </>
      )

    })
  }
  
  
  
  </div>
  
  
  
  </>;
}
