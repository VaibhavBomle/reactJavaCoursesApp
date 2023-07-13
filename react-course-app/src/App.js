import './App.css';
import  {ToastContainer, toast} from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import Course from './components/Course';
import AllCourse from './components/AllCourse';

function App() {
  const btnHandle =() =>{
        //toast("This message is from toast");
        toast.success("Done",{
          position : "top-center"
        })
  };
  return (
     <div>
      {/* <Header/> */}
      <ToastContainer/>
      <Home/>
      <AllCourse/>
     </div>
  );
}

export default App;
