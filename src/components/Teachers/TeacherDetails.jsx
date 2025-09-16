// axios
import axios from "axios";

// States
import { useState, useEffect } from "react";

// css
import "./TeacherDetail";

// TeacherDetail File
export default function TeacherDetail() {
  const [Teacher, SetTeacher] = useState(null);
  const [IsError,SetError]=useState(false)
  const [IsLoading,SetLoading]=useState(true)

  useEffect(() => {
    async function TeacherDetail() {
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const Data = responce.data;
        console.log(Data);
        SetTeacher(Data);
        SetLoading(false)
        SetError(false)
      } catch (error) {
        console.log(error);
        SetError(true)
         SetLoading(false)
     

      }
    }

    TeacherDetail();

  }, []);



  if (IsError) return <h1>something Went Wrong Check Your Connections Please </h1>
  if (IsLoading) return <h1>Loading ...</h1>


  return <></>;
}
