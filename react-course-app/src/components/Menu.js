import React from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <div>
      <ListGroup>
        <Link className = "list-group-item list-group-item-action" tag = 'a' to = "/">Home</Link>
        <Link className = "list-group-item list-group-item-action" tag = 'a' to = "/add-course">Add Course</Link>
        <Link className = "list-group-item list-group-item-action" tag = 'a' to = "/view-allCourse">View Course</Link>
        <Link className = "list-group-item list-group-item-action" tag = 'a' to = "#">About</Link>
        <Link className = "list-group-item list-group-item-action" tag = 'a' to = "#">Contact</Link>
      </ListGroup>
    </div>
  )
}

export default Menu
