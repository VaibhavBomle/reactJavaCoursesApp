import React from 'react'
import {Card,CardBody,CardSubtitle,CardText,Button,Container} from "reactstrap";
import  axios  from 'axios';
import {toast} from "react-toastify";
import API_BASE_URL from '../config';
import { useNavigate } from 'react-router-dom';


const Course = ({course, update}) => {
  const navigate = useNavigate();
  const deleteCourse = (id) =>{
    console.log("courseId:",id)
    axios.delete(`${API_BASE_URL}/courses/${id}`).then(
      (response)=>{
        console.log("response =>",response);
        toast.success("Course deleted successfully");
        update(id);
      },
      (error)=>{
        console.log("error =>",error);
        toast.error("Something went wrong",{
          position : "bottom-center"
        })
      }
    )
  }


  const handleUpdateClick = () =>{
    navigate(`/update/${course.id}`)
  }
  return (
      <Card  className='text-center'>
        <CardBody>
            <CardSubtitle style={{ fontWeight: 'bold' }}>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
               <Button color='danger' onClick={()=>{
                deleteCourse(course.id);
               }}>Delete</Button>
               <Button color='warning'  style={{ marginLeft: '10px' }} onClick={ handleUpdateClick}>Update</Button>
            </Container>
        </CardBody>
      </Card>
  )
}

export default Course
