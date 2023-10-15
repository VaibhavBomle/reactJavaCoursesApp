import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import  axios  from 'axios';
import API_BASE_URL from '../config';
import {toast} from "react-toastify";
import { useParams } from 'react-router-dom'; 


export default function AddCourse() {
  const [course,setCourse] =  useState({});
  const {id} = useParams();
  useEffect(()=>{
    document.title = "Add Course || Learncodewith Durgesh"
    if (id) {
      console.log("Get call by id:",id)
      axios.get(`${API_BASE_URL}/courses/${id}`).then(
        (response) => {
          console.log('Get call response =>', response.data);
          setCourse(response.data); // Set course data for editing
        },
        (error) => {
          console.error('Get call error =>', error);
          toast.error('Something went wrong', {
            position: 'bottom-center',
          });
        }
      );
    }
  }, [id]);

  console.log("Get Data : ",course);

  // Form handle function
  const handleForm = (e) =>{
    console.log(course)
    if(id){
      updateCourse(course);
    }else{
      addCourse(course);
    }
    e.preventDefault(); 
  }

  // Create function to Post Data

  const addCourse = (data) =>{
      axios.post(`${API_BASE_URL}/courses`,data).then(
        (response)=>{
             console.log("response =>",response.data);
             toast.success("Course added successfully");
        },(error)=>{
          console.error("error =>",error);
          toast.error("Something went wrong",{
            position : "bottom-center"
          })
        }
      )
  }

  const updateCourse = (data) =>{
    axios.put(`${API_BASE_URL}/courses`,data).then(
      (response)=>{
           console.log("response =>",response.data);
           toast.success("Course added successfully");
      },(error)=>{
        console.error("error =>",error);
        toast.error("Something went wrong",{
          position : "bottom-center"
        })
      }
    )
}

const onChange = (e) => {
  setCourse({ ...course, [e.target.name]: e.target.value });
}

  return (
    <Fragment>
    <div>
      <h1 className='text-center my-3'>Fill Course</h1>
      <Form onSubmit = {handleForm}>
        <FormGroup>
            <label htmlFor = "=id">Course Id</label>
            <Input type='text' placeholder='Enter here' id='id' name = "id"  value={course.id} onChange= {onChange}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor = "title">Course Title</label>
            <Input type='text' placeholder='Enter  title here'  id='title' name = "title" value={course.title}
              onChange= {onChange}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor = "description">Course Description</label>
            <Input type='textarea' placeholder='Enter description here' id='description' name = "description" value={course.description} style={{height: 100}}
             onChange= {onChange}/>
        </FormGroup>
        <Container>
          <Button type =  "submit" color = "success">
            Add Course
          </Button>
          <Button 
           type = "reset"
           color = "warning ml-2"
            >
            Clear
          </Button>
        </Container>
      </Form>
    </div>
    </Fragment>
  )
}
