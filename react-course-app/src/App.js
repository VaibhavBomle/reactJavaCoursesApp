import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import  {ToastContainer, toast} from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import Course from './components/Course';

function App() {
  const btnHandle =() =>{
        //toast("This message is from toast");
        toast.success("Done",{
          position : "top-center"
        })
  };
  return (
     <div>
      <Header/>
      <ToastContainer/>
      <Home/>
      <Course course = {{title:"Django course", description :"Django is very easy to learn"}}/>
     </div>
  );
}

export default App;
