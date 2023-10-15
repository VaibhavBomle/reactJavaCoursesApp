import './App.css';
import  {ToastContainer, toast} from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import Course from './components/Course';
import AllCourse from './components/AllCourse';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';

import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  const btnHandle =() =>{
        //toast("This message is from toast");
        toast.success("Done",{
          position : "top-center"
        })
  };
  return (
     <div>
      <Router>
      <ToastContainer/>
      <Container>
      <Header/> 
        <Row>
          <Col md = {2}>
            <Menu/>
          </Col>
          <Col md = {10}>
            <Routes>
            <Route path = "/" Component={Home} exact/>
            <Route path = "/add-course" Component={AddCourse} exact/>
            <Route path = "/view-allCourse" Component={AllCourse} exact/>
            <Route path = "/update/:id" Component={AddCourse} exact/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
      
     </div>
  );
}

export default App;
