// axios
import axios from "axios";


// use  params for teaking the   id from urls
import { useParams } from "react-router-dom";


// States
import { useState, useEffect } from "react";

// css
import "./TeacherDetails.css";

// exported teacehers Detials here.

export default function TeacherDetail() {

const {id}=useParams();


  const [Teacher, SetTeacher] = useState(null);
  const [IsError, SetError] = useState(false);
  const [IsLoading, SetLoading] = useState(true);

  useEffect(() => {
    async function FetchTeacher() {
      try {
        const responce = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const Data = responce.data;
        console.log(Data);
        SetTeacher(Data);
        SetLoading(false);
        SetError(false);
      } catch (error) {
        console.log(error);
        SetError(true);
        SetLoading(false);
      }
    }

    FetchTeacher();
  }, [id]);

  if (IsError)
    return <h1>⚠️ Something Went Wrong. Please check your connection.</h1>;
  if (IsLoading) return <h1>⏳ Loading ...</h1>;

  return (
    <div className="card">
      <h2>👨‍🏫 {Teacher.name}</h2>
      <p><b>Email:</b> {Teacher.email}</p>
      <p><b>Username:</b> {Teacher.username}</p>
      <p><b>Phone:</b> {Teacher.phone}</p>
      <p><b>Website:</b> {Teacher.website}</p>
      <p><b>City:</b> {Teacher.address?.city}</p>
    </div>
  );
  
}
