import React from 'react'
import {Card,CardBody,CardSubtitle,CardText,Button,Container} from "reactstrap";

const Course = ({course}) => {
  return (
      <Card  className='text-center'>
        <CardBody>
            <CardSubtitle style={{ fontWeight: 'bold' }}>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
               <Button color='danger'>Delete</Button>
               <Button color='warning'  style={{ marginLeft: '10px' }}>Update</Button>
            </Container>
        </CardBody>
      </Card>
  )
}

export default Course
