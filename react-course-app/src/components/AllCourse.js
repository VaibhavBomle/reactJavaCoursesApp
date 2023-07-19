import React, { useState } from 'react';
import Course from "./Course";

const AllCourse = () => {
    const[courses,setCourses] = useState([
        {title:"Java Course",description: "This is demo course"},
        {title:"React Course",description: "This is demo course"},
        {title:"Python Course",description: "This is demo course"}
    ]);

  return (
    <div>
        <h1>All courses</h1>
        <p>List of courses are as follow</p>
        {courses.length>0 ? courses.map((item)=>
                <Course course={item}/>
            ): "No Courses"
        }
    </div>
  )
}

export default AllCourse
