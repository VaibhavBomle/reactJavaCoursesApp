import React, { useEffect, useState } from 'react';
import {toast} from "react-toastify";
import Course from "./Course";
import axios from "axios";
import API_BASE_URL from '../config';

const AllCourse = () => {

  const[courses,setCourses] = useState([]);

  useEffect(()=>{
    document.title = "All Course || Learncodewith"
    getAllCourseFromsServers();
  },[]);
    
  // useEffect(()=>{
   
  // },[]);
  // // Todo   

  // function to call server
  const getAllCourseFromsServers = ()=>{
    axios.get(`${API_BASE_URL}/courses`).then(
      (response)=>{
        // Success
        console.log("Success =>",response);
        toast.success("Couses has been loaded")
        setCourses(response.data)
      },
      (error)=>{
        // Error
        console.log("error => ",error);
        toast.error("Something went wrong",{
          position : "bottom-center"
        })

      }
    )
  }

  const updatedCourses = (id)=>{
    setCourses(courses.filter((c)=> c.id != id));
  }


  return (
    <div>
        <h1>All courses</h1>
        <p>List of courses are as follow</p>
        {courses.length>0 ? courses.map((item)=>
                <Course key = {item.id} course={item} update = {updatedCourses}/>
            ): "No Courses"
        }
    </div>
  )
}

export default AllCourse
